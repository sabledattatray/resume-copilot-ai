import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TemplateEditorPage() {
  const [searchParams] = useSearchParams();
  const templateCategory = searchParams.get('template') || 'tech';

  const [resumeData, setResumeData] = useState({
    name: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    summary: 'Experienced software engineer with a strong background in developing scalable web applications and distributed systems. Adept at leading teams and delivering high-quality software solutions.',
    experience: [
      {
        company: 'Tech Innovators Inc.',
        role: 'Senior Backend Engineer',
        duration: 'Jan 2021 - Present',
        description: 'Led the development of a microservices architecture that improved system scalability by 40%. Mentored junior developers and instituted agile best practices.'
      },
      {
        company: 'WebSolutions Corp.',
        role: 'Full Stack Developer',
        duration: 'Jun 2018 - Dec 2020',
        description: 'Developed and maintained various client-facing web applications using React and Node.js. Reduced application loading time by 30% through code optimization.'
      }
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'B.S. in Computer Science',
        year: '2014 - 2018'
      }
    ],
    skills: 'JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, Kubernetes'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, idx?: number, subfield?: string) => {
    if (idx !== undefined && subfield) {
      const updatedArray = [...(resumeData as any)[field]];
      updatedArray[idx][subfield] = e.target.value;
      setResumeData({ ...resumeData, [field]: updatedArray });
    } else {
      setResumeData({ ...resumeData, [field]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-gray-100 print:bg-white print:min-h-0">
      <div className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-4 print:hidden">
        <div className="flex items-center gap-4">
          <Link to="/templates">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
          </Link>
          <h1 className="text-xl font-bold">Resume Editor ({templateCategory})</h1>
        </div>
        <Button onClick={handlePrint} className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Download className="w-4 h-4 mr-2" /> Download PDF
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden print:overflow-visible">
        {/* Editor Sidebar */}
        <div className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto p-6 hidden md:block print:hidden">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Personal Details</h2>
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={resumeData.name} onChange={(e) => handleChange(e, 'name')} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Professional Title</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={resumeData.title} onChange={(e) => handleChange(e, 'title')} />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={resumeData.email} onChange={(e) => handleChange(e, 'email')} />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={resumeData.phone} onChange={(e) => handleChange(e, 'phone')} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Summary</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24" value={resumeData.summary} onChange={(e) => handleChange(e, 'summary')} />
            </div>
          </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Experience</h2>
          <div className="space-y-6 mb-8">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="p-4 border border-gray-100 bg-gray-50 rounded">
                <div className="mb-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Company</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={exp.company} onChange={(e) => handleChange(e, 'experience', idx, 'company')} />
                </div>
                <div className="flex gap-4 mb-2">
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Role</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={exp.role} onChange={(e) => handleChange(e, 'experience', idx, 'role')} />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Duration</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={exp.duration} onChange={(e) => handleChange(e, 'experience', idx, 'duration')} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
                  <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20" value={exp.description} onChange={(e) => handleChange(e, 'experience', idx, 'description')} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Education</h2>
          <div className="space-y-6 mb-8">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="p-4 border border-gray-100 bg-gray-50 rounded">
                <div className="mb-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Institution</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={edu.institution} onChange={(e) => handleChange(e, 'education', idx, 'institution')} />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Degree</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={edu.degree} onChange={(e) => handleChange(e, 'education', idx, 'degree')} />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Year</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={edu.year} onChange={(e) => handleChange(e, 'education', idx, 'year')} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Skills</h2>
          <div>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20" value={resumeData.skills} onChange={(e) => handleChange(e, 'skills')} />
          </div>
        </div>

        {/* Live Preview */}
        <div className="w-full md:w-2/3 bg-gray-100 overflow-y-auto p-4 md:p-10 flex justify-center print:w-full print:p-0 print:bg-white print:overflow-visible overflow-x-auto">
          <div className="bg-white shadow-xl w-full max-w-[800px] min-h-[1056px] print:shadow-none print:w-full print:max-w-none print:min-h-0">
             {templateCategory === 'modern' ? (
               <ModernTemplate data={resumeData} />
             ) : templateCategory === 'executive' ? (
               <ExecutiveTemplate data={resumeData} />
             ) : (
               <TechTemplate data={resumeData} />
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechTemplate({ data }: { data: any }) {
  return (
    <div className="p-12 font-sans text-gray-900 bg-white">
      <div className="border-b-2 border-indigo-900 pb-6 mb-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 uppercase text-indigo-950">{data.name}</h1>
        <p className="text-lg text-indigo-700 font-medium mb-3">{data.title}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
           <span>{data.email}</span>
           <span>•</span>
           <span>{data.phone}</span>
        </div>
      </div>
      
      <div className="mb-6">
         <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4 text-indigo-900 uppercase tracking-widest">Experience</h2>
        <div className="space-y-6">
          {data.experience.map((exp: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between items-end mb-1">
                 <h3 className="font-bold text-gray-900">{exp.company}</h3>
                 <span className="text-xs font-bold text-gray-500 uppercase">{exp.duration}</span>
              </div>
              <p className="text-sm font-medium text-indigo-600 mb-2">{exp.role}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4 text-indigo-900 uppercase tracking-widest">Education</h2>
        <div className="space-y-4">
          {data.education.map((edu: any, i: number) => (
            <div key={i} className="flex justify-between items-end">
              <div>
                 <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                 <p className="text-sm text-gray-700">{edu.degree}</p>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4 text-indigo-900 uppercase tracking-widest">Skills</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.skills}</p>
      </div>
    </div>
  );
}

function ExecutiveTemplate({ data }: { data: any }) {
  return (
    <div className="p-12 font-serif text-slate-900 bg-white">
      <div className="text-center mb-8 border-b border-slate-300 pb-6">
        <h1 className="text-3xl font-bold mb-2 text-slate-800 tracking-wide">{data.name}</h1>
        <div className="text-sm text-slate-500 flex justify-center gap-4">
           <span>{data.email}</span>
           <span>|</span>
           <span>{data.phone}</span>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-3 border-b border-slate-200 pb-1">Professional Summary</h2>
         <p className="text-sm leading-relaxed text-slate-700 italic">{data.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-4 border-b border-slate-200 pb-1">Experience</h2>
        <div className="space-y-6">
          {data.experience.map((exp: any, i: number) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                 <h3 className="font-bold text-slate-900">{exp.company} <span className="font-normal text-slate-500">— {exp.role}</span></h3>
                 <span className="text-xs text-slate-500">{exp.duration}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-4 border-b border-slate-200 pb-1">Education</h2>
        <div className="space-y-4">
          {data.education.map((edu: any, i: number) => (
            <div key={i} className="flex justify-between items-center">
              <h3 className="font-bold text-slate-900">{edu.institution} <span className="font-normal text-slate-500">— {edu.degree}</span></h3>
              <span className="text-xs text-slate-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-3 border-b border-slate-200 pb-1">Core Competencies</h2>
        <p className="text-sm text-slate-700 leading-relaxed">{data.skills}</p>
      </div>
    </div>
  );
}

function ModernTemplate({ data }: { data: any }) {
  return (
    <div className="flex min-h-full font-sans bg-white">
      {/* Sidebar */}
      <div className="w-[30%] bg-zinc-900 text-zinc-300 p-8">
         <h1 className="text-3xl font-light text-white mb-2">{data.name.split(' ')[0]} <br /><span className="font-bold">{data.name.split(' ').slice(1).join(' ')}</span></h1>
         <p className="text-zinc-400 text-sm mb-8">{data.title}</p>
         
         <div className="mb-8 space-y-4 text-xs">
            <h2 className="text-white font-bold tracking-widest uppercase mb-4 border-b border-zinc-700 pb-2">Contact</h2>
            <p>{data.email}</p>
            <p>{data.phone}</p>
         </div>

         <div className="mb-8 text-xs">
            <h2 className="text-white font-bold tracking-widest uppercase mb-4 border-b border-zinc-700 pb-2">Education</h2>
            {data.education.map((edu: any, i: number) => (
              <div key={i} className="mb-4">
                 <p className="font-bold text-white">{edu.degree}</p>
                 <p className="text-zinc-400">{edu.institution}</p>
                 <p className="text-zinc-500">{edu.year}</p>
              </div>
            ))}
         </div>

         <div className="text-xs">
            <h2 className="text-white font-bold tracking-widest uppercase mb-4 border-b border-zinc-700 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
               {data.skills.split(',').map((s: string, i: number) => (
                 <span key={i} className="bg-zinc-800 px-2 py-1 rounded text-zinc-300">{s.trim()}</span>
               ))}
            </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="w-[70%] p-8">
         <div className="mb-8">
           <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 flex items-center gap-2">
             <div className="w-6 h-px bg-zinc-900"></div> Profile
           </h2>
           <p className="text-sm text-zinc-600 leading-relaxed">{data.summary}</p>
         </div>

         <div>
           <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-6 flex items-center gap-2">
             <div className="w-6 h-px bg-zinc-900"></div> Experience
           </h2>
           <div className="space-y-8">
             {data.experience.map((exp: any, i: number) => (
               <div key={i} className="relative">
                 <div className="absolute left-[-2rem] top-1.5 w-2 h-2 bg-zinc-900 rounded-full hidden md:block"></div>
                 <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-md font-bold text-zinc-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-zinc-400">{exp.duration}</span>
                 </div>
                 <p className="text-sm font-medium text-zinc-500 mb-3">{exp.company}</p>
                 <p className="text-sm text-zinc-600 leading-relaxed">{exp.description}</p>
               </div>
             ))}
           </div>
         </div>
      </div>
    </div>
  );
}
