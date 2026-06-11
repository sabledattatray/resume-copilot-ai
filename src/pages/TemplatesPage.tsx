import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function TemplatesPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] py-20 px-4 bg-[#F8F9FA]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">ATS-Tested Templates</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Beautiful, minimalist templates rigorously tested against Workday, Taleo, and Greenhouse parsers. 100% machine-readable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TemplateCard 
            title="The Tech Standard"
            desc="Clean, single-column design perfect for Software Engineers, PMs, and Data Scientists."
            tags={['Tech', 'Google recommended']}
            category="tech"
          />
          <TemplateCard 
            title="Executive Brief"
            desc="Conservative formatting for Directors, VPs, and seasoned mid-level management."
            tags={['Management', 'Traditional']}
            category="executive"
          />
          <TemplateCard 
            title="Modern Minimalist"
            desc="A slightly more stylized but strictly single-column layout for creative tech roles."
            tags={['Design', 'Marketing']}
            category="modern"
          />
        </div>
        
        <div className="mt-16 bg-indigo-50 border border-indigo-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between text-indigo-900 gap-6">
           <div>
              <h3 className="text-xl font-bold mb-2">Want to score your current template?</h3>
              <p className="text-indigo-700 max-w-lg">Before you migrate all your data to a new template, see how your current one holds up against our ATS parser simulation.</p>
           </div>
           <Link to="/app" className="shrink-0">
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">Test My Resume</Button>
           </Link>
        </div>
      </div>
    </div>
  );
}

function TemplateSvgPreview({ category }: { category: string }) {
  if (category === 'tech') {
    return (
      <svg viewBox="0 0 200 280" className="w-full h-full text-indigo-900/10" fill="currentColor">
        <rect x="20" y="20" width="160" height="12" rx="2" className="text-indigo-900" />
        <rect x="20" y="40" width="100" height="4" rx="2" />
        
        <rect x="20" y="70" width="60" height="6" rx="2" className="text-indigo-900/40" />
        <rect x="20" y="85" width="160" height="2" rx="1" />
        <rect x="20" y="95" width="140" height="2" rx="1" />
        <rect x="20" y="105" width="150" height="2" rx="1" />

        <rect x="20" y="130" width="60" height="6" rx="2" className="text-indigo-900/40" />
        <rect x="20" y="145" width="160" height="2" rx="1" />
        <rect x="20" y="155" width="150" height="2" rx="1" />
        <rect x="20" y="165" width="140" height="2" rx="1" />
        <rect x="20" y="175" width="155" height="2" rx="1" />

        <rect x="20" y="200" width="60" height="6" rx="2" className="text-indigo-900/40" />
        <rect x="20" y="215" width="150" height="2" rx="1" />
        <rect x="20" y="225" width="160" height="2" rx="1" />
      </svg>
    );
  }
  
  if (category === 'executive') {
    return (
      <svg viewBox="0 0 200 280" className="w-full h-full text-slate-800/10" fill="currentColor">
        <rect x="60" y="20" width="80" height="10" rx="1" className="text-slate-800" />
        <rect x="50" y="40" width="100" height="2" rx="0.5" />
        <rect x="70" y="46" width="60" height="2" rx="0.5" />

        <rect x="20" y="70" width="160" height="1" className="text-slate-800/20" />
        <rect x="100" y="80" width="80" height="4" rx="1" className="text-slate-800/40" />
        <rect x="20" y="80" width="40" height="4" rx="1" />
        <rect x="20" y="90" width="160" height="2" rx="1" />
        <rect x="20" y="98" width="150" height="2" rx="1" />
        <rect x="20" y="106" width="160" height="2" rx="1" />

        <rect x="20" y="126" width="160" height="1" className="text-slate-800/20" />
        <rect x="100" y="136" width="80" height="4" rx="1" className="text-slate-800/40" />
        <rect x="20" y="136" width="40" height="4" rx="1" />
        <rect x="20" y="146" width="160" height="2" rx="1" />
        <rect x="20" y="154" width="140" height="2" rx="1" />
        <rect x="20" y="162" width="155" height="2" rx="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 280" className="w-full h-full text-zinc-900/10" fill="currentColor">
      <rect x="20" y="20" width="40" height="40" rx="20" className="text-zinc-900/30" />
      <rect x="70" y="30" width="80" height="8" rx="2" className="text-zinc-900" />
      <rect x="70" y="45" width="50" height="3" rx="1" />
      
      <rect x="20" y="80" width="60" height="4" rx="1" className="text-zinc-900/50" />
      <rect x="20" y="95" width="160" height="3" rx="1" />
      <rect x="20" y="105" width="140" height="3" rx="1" />

      <rect x="20" y="130" width="60" height="4" rx="1" className="text-zinc-900/50" />
      <rect x="20" y="145" width="150" height="3" rx="1" />
      <rect x="20" y="155" width="155" height="3" rx="1" />
      
      <rect x="20" y="180" width="60" height="4" rx="1" className="text-zinc-900/50" />
      <div className="grid grid-cols-2 gap-4">
        <rect x="20" y="195" width="70" height="2" rx="1" />
        <rect x="100" y="195" width="70" height="2" rx="1" />
        <rect x="20" y="205" width="60" height="2" rx="1" />
        <rect x="100" y="205" width="80" height="2" rx="1" />
      </div>
    </svg>
  );
}

function TemplateCard({ title, desc, tags, category }: { title: string, desc: string, tags: string[], category: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
      <div className="h-64 bg-gray-50 overflow-hidden relative border-b border-gray-100 p-8 flex items-center justify-center">
         <div className="w-[180px] h-[240px] bg-white shadow-md rounded border border-gray-200 p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
           <TemplateSvgPreview category={category} />
         </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
         <div className="flex gap-2 mb-4">
             {tags.map(t => (
                 <span key={t} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">{t}</span>
             ))}
         </div>
         <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
         <p className="text-gray-500 text-sm mb-6 flex-1">{desc}</p>
         <Link to={`/editor?template=${category}`}>
           <Button variant="outline" className="w-full flex items-center gap-2"><Download className="w-4 h-4" /> Use Template</Button>
         </Link>
      </div>
    </div>
  );
}
