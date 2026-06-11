import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Trophy, CheckCircle2, TrendingUp } from 'lucide-react';

export default function LinkedInOptimizerPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white">
      <section className="pt-20 pb-24 px-4 bg-[#0A66C2] text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full border border-white/30 backdrop-blur-sm">
             Inbound Recruiting
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">Make recruiters come to you.</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
            Your resume gets you past the ATS. Your LinkedIn profile gets you headhunted. Optimize your headline, about section, and skills to rank #1 in Recruiter Lite searches.
          </p>
          <Link to="/app">
            <Button size="lg" className="bg-white text-[#0A66C2] hover:bg-gray-100 h-14 px-8 text-base">
               Scan My Profile
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-extrabold mb-6 text-black">The Algorithm Explained</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  LinkedIn Recruiter runs on a specific boolean search mechanism. If your headline and current role don't exact-match their search query, you appear on page 10 instead of page 1.
               </p>
               <ul className="space-y-4">
                  {[
                    "Headline keyword density scoring",
                    "About section sentiment analysis",
                    "Skills endorsement weighting",
                    "Experience section impact rewriting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black font-semibold">
                       <CheckCircle2 className="w-5 h-5 text-[#0A66C2]" /> {item}
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
               <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-24 bg-slate-200 relative">
                     <div className="absolute -bottom-8 left-6 w-20 h-20 bg-white border-4 border-white rounded-full overflow-hidden shadow-sm">
                        <div className="w-full h-full bg-slate-300"></div>
                     </div>
                  </div>
                  <div className="pt-12 p-6">
                     <div className="flex items-center gap-2 mb-1">
                        <div className="w-32 h-4 bg-gray-200 rounded"></div>
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                     </div>
                     <div className="w-64 h-3 bg-gray-100 rounded mb-4"></div>
                     
                     <div className="mt-6 border-t border-gray-100 pt-4">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Profile Score</span>
                           <span className="text-sm font-bold text-[#0A66C2]">94/100</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[#0A66C2] w-[94%]"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
