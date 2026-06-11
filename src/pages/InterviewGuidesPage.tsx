import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Users, Database, Layout, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const GUIDES = [
  { icon: <Terminal />, title: "Software Engineering", count: "120+ Questions", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: <Users />, title: "Product Management", count: "85+ Questions", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: <Database />, title: "Data Science", count: "95+ Questions", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: <Layout />, title: "UX/UI Design", count: "40+ Questions", color: "text-pink-600", bg: "bg-pink-50" },
  { icon: <Shield />, title: "Cybersecurity", count: "60+ Questions", color: "text-red-600", bg: "bg-red-50" },
  { icon: <Search />, title: "Technical Recruiting", count: "30+ Questions", color: "text-orange-600", bg: "bg-orange-50" },
];

export default function InterviewGuidesPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white text-black">
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Nail the Interview.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            You got past the ATS. Now beat the behavioral screen and system design rounds. Highly tactical prep guides for tech interviews.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F8F9FA]">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-10 text-center">Browse by Discipline</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {GUIDES.map((g, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-black transition-colors cursor-pointer group flex items-start gap-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${g.bg} ${g.color}`}>
                        {React.cloneElement(g.icon, { className: 'w-6 h-6' })}
                     </div>
                     <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-600 transition-colors">{g.title}</h3>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest text-[10px]">{g.count}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 px-4 text-center">
         <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold mb-6">Need resume help first?</h2>
            <Link to="/app">
               <Button className="bg-black text-white hover:bg-gray-800 h-14 px-8 text-base">Analyze Resume</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
