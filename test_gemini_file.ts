import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        'Describe this file',
        {
          inlineData: {
            data: Buffer.from('hello world').toString('base64'),
            mimeType: 'text/plain'
          }
        }
      ],
    });
    console.log("Success! ", response.text);
  } catch (e) {
    console.error("SDK Error: ", e);
  }
}
test();
