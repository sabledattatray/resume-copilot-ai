import React from 'react';
import { Button } from '@/components/ui/button';
import { Target, Search, PenTool, CheckCircle, FileText, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CoverLetterBuilderPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-indigo-50/50">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full">
                 Powered by Gemini 1.5 Pro
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight tracking-tight">Write cover letters that actually get read.</h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                 Our AI analyzes the exact job description and your resume simultaneously, generating a highly-tailored, professional cover letter that bypasses corporate jargon and focuses on mapped value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/app">
                    <Button size="lg" className="h-14 px-8 text-base bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto shadow-lg shadow-indigo-200">
                       Start Building Free
                    </Button>
                 </Link>
              </div>
           </div>
           <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4">
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-2 w-1/4 bg-gray-100 rounded mb-4"></div>
              
              <div className="space-y-3">
                 <div className="h-2 w-full bg-indigo-50 rounded"></div>
                 <div className="h-2 w-11/12 bg-indigo-50 rounded"></div>
                 <div className="h-2 w-full bg-indigo-50 rounded"></div>
                 <div className="h-2 w-4/5 bg-indigo-50 rounded"></div>
              </div>

              <div className="h-px w-full bg-gray-50 my-2"></div>

              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 flex gap-4">
                 <div className="w-8 h-8 rounded bg-indigo-200 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-indigo-700" />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-indigo-900">Highly Contextual</h4>
                    <p className="text-xs text-indigo-700 mt-1">Found 4 direct matches between your system design background and their senior requirements.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold mb-4">How it works</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Three simple steps to a perfectly tailored application.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden md:block -z-10 translate-y-[-50%]"></div>
             
             {[
               { icon: <Upload />, title: "1. Upload Resume", desc: "Start with your ATS-optimized resume. We extract your core competencies." },
               { icon: <Target />, title: "2. Paste Job URL", desc: "Provide the job description. Our AI maps the exact requirements." },
               { icon: <PenTool />, title: "3. Generate & Refine", desc: "Get a draft instantly. Tweak the tone from conservative to confident." }
             ].map((step, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm text-center flex flex-col items-center">
                   <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      {step.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
