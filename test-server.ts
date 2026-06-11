import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import multer from 'multer';

let ai: GoogleGenAI | null = null;
const getAi = () => {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
};

const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3001;

  app.use(express.json());

  // API Route for Analyzing Resume
  app.get('/api/test', (req, res) => res.json({ test: 'ok' }));
  
  app.post('/api/analyze', upload.single('resume'), async (req, res) => {
    try {
      let aiClient;
      try {
        aiClient = getAi();
      } catch (err) {
        return res.status(500).json({ error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your secrets to use AI analysis.' });
      }

      const file = req.file;
      const jobDescription = req.body.jobDescription;

      if (!file) {
        return res.status(400).json({ error: 'Resume file is required.' });
      }

      if (!jobDescription) {
        return res.status(400).json({ error: 'Job description is required.' });
      }

      // Prepare Prompt for Gemini
      const promptText = `You are an expert ATS (Applicant Tracking System) algorithm, strict recruiter, and AI career coach.
Analyze the attached resume against the provided job description.
If the attached resume is unreadable, empty, or not a valid resume, score it very poorly and add a suggestion to use a proper text-based PDF.
Return a valid JSON object matching the exact structure requested, with no markdown code blocks around it (just the JSON). do NOT include \`\`\`json or \`\`\`.

Job Description:
${jobDescription}

Output strictly in the following JSON format:
{
  "atsScore": Number (0-100),
  "matchPercentage": Number (0-100),
  "formattingScore": Number (0-100),
  "experienceScore": Number (0-100),
  "achievementScore": Number (0-100),
  "readabilityScore": Number (0-100),
  "interviewProbability": Number (0-100),
  "matchedKeywords": [String],
  "missingSkills": [String],
  "suggestions": [String] (Top 3-5 actionable improvements),
  "enhancedSummary": "A rewritten, highly tailored executive summary for this specific job."
}
`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash', // fast model for this
        contents: [
          promptText,
          {
            inlineData: {
              data: file.buffer.toString("base64"),
              mimeType: file.mimetype || "application/pdf"
            }
          }
        ],
        config: {
          responseMimeType: 'application/json',
        }
      });

      const responseText = response.text || "{}";
      console.log('Gemini raw response:', responseText);
      
      // Attempt to clean JSON
      const cleanJsonStr = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const result = JSON.parse(cleanJsonStr);

      res.json(result);

    } catch (error) {
      console.error('Error analyzing resume:', error);
      res.status(500).json({ error: 'An error occurred during analysis. Please check server logs.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
