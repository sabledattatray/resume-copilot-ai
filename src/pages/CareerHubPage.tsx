import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    title: "How to Beat the ATS: The Ultimate 2024 Guide",
    category: "Resume Strategy",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60",
    readTime: "8 min read",
    desc: "Discover the exact parsing logic used by Workday and Greenhouse, and how to format your experience to ensure maximum visibility."
  },
  {
    title: "The Art of the quantifiable bullet point",
    category: "Writing Tips",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    readTime: "5 min read",
    desc: "Learn why saying 'managed a team' is failing you, and how to use the XYZ formula developed at Google to transform your impact."
  },
  {
    title: "Why Soft Skills are Failing Your Keyword Scans",
    category: "Technical Parsing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    readTime: "6 min read",
    desc: "Stop using words like 'Hardworking' and 'Motivated'. Here is the exact vocabulary tech recruiters are actually querying for."
  },
  {
    title: "Navigating Career Gaps on a Modern Resume",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    readTime: "4 min read",
    desc: "How to cleanly format sabbaticals, parental leave, or layoffs without triggering automatic rejection filters in enterprise ATS systems."
  },
  {
    title: "The Death of the Objective Statement",
    category: "Resume Strategy",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
    readTime: "3 min read",
    desc: "What to write instead in your critical top 20% of the page to hook a recruiter's attention in exactly 6.4 seconds."
  },
  {
    title: "Optimizing for the Human After the Robot",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    readTime: "10 min read",
    desc: "Passing the ATS is step one. How to use typography, whitespace, and visual hierarchy to ensure the hiring manager actually reads it."
  }
];

export default function CareerHubPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-white text-black">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F8F9FA] border-b border-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full">
             <BookOpen className="w-3 h-3" /> Learning Center
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Career Hub</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Data-backed strategies, insider ATS knowledge, and tactical advice to engineer your transition into top-tier tech roles.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 hidden md:block">
        <div className="container mx-auto max-w-6xl">
           <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80" alt="Featured" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-12 z-20 flex flex-col items-start gap-4">
                 <span className="bg-white text-black text-xs font-bold uppercase px-3 py-1 rounded tracking-widest mt-4">Featured</span>
                 <h2 className="text-4xl font-bold text-white max-w-3xl leading-tight">Mastering the Tech Interview: From Initial Screen to Final Offer</h2>
                 <p className="text-gray-200 max-w-2xl text-lg mb-4">A comprehensive 40-page definitive guide detailing exact negotiation tactics, system design framing, and behavioral structuring.</p>
                 <Button className="bg-white text-black hover:bg-gray-100 uppercase tracking-widest text-xs font-bold h-12 px-8">Read Full Guide</Button>
              </div>
           </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
           <div className="flex justify-between items-end mb-10">
              <h3 className="text-2xl font-bold">Latest Articles</h3>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article, idx) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="group cursor-pointer flex flex-col"
                 >
                    <div className="relative h-60 bg-gray-100 rounded-xl overflow-hidden mb-6">
                       <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                             {article.category}
                          </span>
                       </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                       <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-semibold uppercase tracking-widest">
                          <Clock className="w-3 h-3" /> {article.readTime}
                       </div>
                       <h4 className="text-xl font-extrabold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">{article.title}</h4>
                       <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{article.desc}</p>
                       <div className="flex items-center text-sm font-bold text-black group-hover:text-indigo-600 cursor-pointer uppercase tracking-widest transition-colors mt-auto">
                          Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 px-4 bg-black text-white text-center mt-12">
         <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold mb-6">Stop guessing. Start optimizing.</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Upload your resume to our AI analyzer and see exactly what recruiters see. Get actionable fixes in under 30 seconds.</p>
            <Link to="/app">
               <Button className="bg-white text-black hover:bg-gray-200 h-14 px-8 text-base">Analyze My Resume Now</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
