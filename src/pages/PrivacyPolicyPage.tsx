import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white text-black py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
           <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Last Updated: October 2024</p>
        </div>
        
        <div className="prose max-w-none text-gray-600 space-y-8">
           <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Data Collection</h2>
              <p>We collect only the essential information needed to provide our resume analysis service. This includes your uploaded resume documents (PDF, DOCX) and the text of job descriptions you provide.</p>
           </section>
           
           <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. AI Processing Protocol</h2>
              <p>Your resume data is processed securely using enterprise AI APIs (such as Google Gemini). We explicitly configure our API integrations with zero-data-retention policies where available to ensure your personal career history is not used to train global foundation models.</p>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Data Retention</h2>
              <p>We store your uploaded files and generated reports temporarily to allow you to download and review them. If you register an account, reports are persisted to your dashboard. You may delete your account and all associated data at any time via your account settings.</p>
           </section>

           <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Third-Party Sharing</h2>
              <p>We do not sell, rent, or lease your personal information or employment history to third parties, recruiters, or data brokers under any circumstances.</p>
           </section>
        </div>
      </div>
    </div>
  );
}
