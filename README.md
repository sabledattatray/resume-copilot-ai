# Resume Copilot AI

![Screenshot](./public/screenshot.png)

Resume Copilot AI is an advanced, automated Resume Parsing and ATS (Applicant Tracking System) Simulation tool. Upload your resume and map it directly against your target Job Description. The integrated AI core will evaluate keyword alignment, missing skill gaps, section viability, and finally output robust rewritten resume achievements, designed to significantly bypass modern ATS algorithms. 

**Live Demo**: [resumecopilotai.vercel.app](https://resumecopilotai.vercel.app)

## What You Get
* **ATS Simulation Engine**: Emulates how major HR platforms parse your documents.
* **Match & Score Breakdown**: Provides visual meters mapping your existing resume density vs the Job Description.
* **Missing Keywords Triage**: Surfaces missing "Critical" and "Important" keywords explicitly desired by the role.
* **Intelligent Auto-Rewrite**: Rewrites weak bullet points using the STAR method based on your original achievements, while sprinkling in omitted JD keywords perfectly.
* **Real-time Editor & Download**: Provides pre-built layouts (Creative, Executive, Minimal etc). Fill your parsed data naturally and download a crisp, printer-ready PDF.

## How To Use
1. **Navigate** to your Analysis Dashboard.
2. **Upload** your target resume(s). (Premium users can upload multiple variations for comparison).
3. **Paste** the Job Description or target role requirements.
4. Let the platform **analyze** and yield the breakdown dashboard. 
5. Select **Download PDF** from the Results/Templates panel to export a clean, beautiful layout.

## Technologies Used
* **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
* **Routing**: React Router
* **Visuals & Icons**: Lucide React, Framer Motion
* **AI Integration**: Google Gemini 2.5 Flash SDK (`@google/genai`) for secure, blazing-fast NLP parsing and document simulation
* **Backend Runtime**: Node.js, Express (serving API & SPA fallbacks)
* **File Parsing**: `pdf-parse`

## Author

**Built by Datta Sable**  
*AI Systems Architect • SaaS Builder • Web & Automation Developer*

* [GitHub: @sabledattatray](https://github.com/sabledattatray)
* [Website: dattasable.com](https://dattasable.com)

---

> *"Stop guessing what the ATS wants. Let the AI build it."*
