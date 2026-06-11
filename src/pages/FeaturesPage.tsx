import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Target, Zap, Server, Edit3, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] py-20 px-4 bg-[#F8F9FA]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-6 border border-indigo-100 rounded-full">
            Platform Capabilities
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Built for Modern Recruiting</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop guessing what Applicant Tracking Systems want. Our suite of AI tools reverse-engineers the hiring process so you can apply with absolute confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBlock 
            icon={<Server />}
            title="Enterprise ATS Simulation"
            desc="Matches exactly how Workday, Taleo, and Greenhouse parse and weigh your resume sections before any human ever sees it."
          />
          <FeatureBlock 
            icon={<Target />}
            title="Semantic Skill Graph"
            desc="Instead of dumb exact-match keyword spotting, our AI understands context (e.g., matching 'Pandas' to a 'Python' requirement)."
          />
          <FeatureBlock 
            icon={<FileSearch />}
            title="Gap Priority Engine"
            desc="Tells you exactly which missing skills are 'critical' vs 'optional' based on industry standards, ensuring you focus on what matters."
          />
          <FeatureBlock 
            icon={<Edit3 />}
            title="AI Bullet Rewriter"
            desc="Transforms weak, generic responsibilities into high-impact, quantified achievements that score high in recruiter keyword searches."
          />
          <FeatureBlock 
            icon={<ShieldCheck />}
            title="Real-time Explainability"
            desc="Never wonder 'why' you got a low score. Click any missing skill to see the AI's exact reasoning process and where you went wrong."
          />
          <FeatureBlock 
            icon={<Zap />}
            title="ATS Format Compliance"
            desc="Detects complex tables, multi-column layouts, and unreadable fonts that secretly cause your resume to be auto-rejected."
          />
        </div>

        <div className="mt-20 bg-black text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-extrabold mb-6">Ready to see it in action?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Upload your resume for a free semantic gap analysis against any job description.</p>
          <Link to="/app">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 h-14 rounded-full text-base">
              Start Free Scan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
