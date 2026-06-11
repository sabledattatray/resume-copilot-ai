import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TechTemplate, ExecutiveTemplate, ModernTemplate, BusinessTemplate, CreativeTemplate, MinimalistTemplate, BoldTemplate, AcademicTemplate, StartupTemplate, InfographicTemplate } from './TemplateEditorPage';
import { dummyResumes } from '@/lib/dummyResumes';

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const categories = ['All', 'Data Scientist', 'Product Manager', 'Software Engineer', 'Sales', 'Teacher', 'Engineer', 'Accounting', 'Designer', 'Marketing', 'Freshers'];
  
  const allTemplates = [
    { title: "Data Scientist Standard", desc: "Clean layout emphasizing tools and methodologies.", tags: ['Data', 'Analytical'], category: 'Data Scientist', id: 'tech', roleKey: 'Data Scientist' },
    { title: "The PM Executive", desc: "Structured formatting focusing on outcomes and leadership.", tags: ['Management', 'Strategy'], category: 'Product Manager', id: 'executive', roleKey: 'Product Manager' },
    { title: "Software Engineer Minimalist", desc: "Clean, single-column design perfect for tech roles.", tags: ['Code', 'Engineering'], category: 'Software Engineer', id: 'tech', roleKey: 'Software Engineer' },
    { title: "Sales Professional", desc: "Highlights metrics, quotas, and business achievements.", tags: ['Sales', 'Business'], category: 'Sales', id: 'business', roleKey: 'Sales' },
    { title: "Educator Template", desc: "Traditional formatting suitable for academic roles.", tags: ['Academic', 'Teaching'], category: 'Teacher', id: 'executive', roleKey: 'Teacher' },
    { title: "Engineering Pro", desc: "Technical layout for mechanical and civil engineers.", tags: ['Technical', 'CAD'], category: 'Engineer', id: 'modern', roleKey: 'Engineer' },
    { title: "Accounting Corporate", desc: "Conservative layout for finance professionals.", tags: ['Finance', 'Corporate'], category: 'Accounting', id: 'executive', roleKey: 'Accounting' },
    { title: "Creative Designer", desc: "Stylized layout for showcasing design expertise.", tags: ['Creative', 'UX/UI'], category: 'Designer', id: 'modern', roleKey: 'Designer' },
    { title: "Marketing Strategist", desc: "Modern structured layout for campaigns and KPIs.", tags: ['Strategy', 'Marketing'], category: 'Marketing', id: 'business', roleKey: 'Marketing' },
    { title: "Creative Vibrant", desc: "Vibrant, bold and highly visual.", tags: ['Visual', 'Creative'], category: 'Designer', id: 'creative', roleKey: 'Designer' },
    { title: "Ultra Minimal", desc: "Space and typography first.", tags: ['Clean', 'Minimal'], category: 'Software Engineer', id: 'minimalist', roleKey: 'Software Engineer' },
    { title: "Bold Leadership", desc: "Strong contrast and decisive layout.", tags: ['Bold', 'Leadership'], category: 'Product Manager', id: 'bold', roleKey: 'Product Manager' },
    { title: "Academic Serif", desc: "Traditional, scholarly structure.", tags: ['Academic', 'Classic'], category: 'Teacher', id: 'academic', roleKey: 'Teacher' },
    { title: "Startup Pitch", desc: "Edgy, vibrant, metrics-driven.", tags: ['Startup', 'Edgy'], category: 'Software Engineer', id: 'startup', roleKey: 'Software Engineer' },
    { title: "Infographic Timeline", desc: "Visual progression and stats focus.", tags: ['Visual', 'Stats'], category: 'Marketing', id: 'infographic', roleKey: 'Marketing' },
    { title: "Fresher Minimal", desc: "Clean layout, focuses on education and projects.", tags: ['Entry-Level', 'Clean'], category: 'Freshers', id: 'minimalist', roleKey: 'Fresher' },
    { title: "Fresher Modern", desc: "Two column design highlighting skills.", tags: ['Entry-Level', 'Modern'], category: 'Freshers', id: 'modern', roleKey: 'Fresher' },
    { title: "Fresher Clean", desc: "Structured formatting focusing on academics.", tags: ['Entry-Level', 'Classic'], category: 'Freshers', id: 'executive', roleKey: 'Fresher' },
  ];

  const filteredTemplates = activeCategory === 'All' 
    ? allTemplates 
    : allTemplates.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-[#F8F9FA]">
      <div className="bg-white border-b border-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">ATS-Tested Resume Templates</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Beautiful, minimalist templates rigorously tested against Workday, Taleo, and Greenhouse parsers. 100% machine-readable.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Categories */}
        <div className="md:w-64 shrink-0">
          <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Categories</h3>
          <div className="flex flex-col space-y-1">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="mt-12 bg-indigo-50 border border-indigo-100 p-6 rounded-2xl text-indigo-900">
             <h3 className="text-sm font-bold mb-2">Score your current template</h3>
             <p className="text-indigo-700 text-xs mb-4">See how your current one holds up against our parser.</p>
             <Link to="/app">
               <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs">Test My Resume</Button>
             </Link>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map(template => (
               <TemplateCard 
                 key={template.title}
                 title={template.title}
                 desc={template.desc}
                 tags={template.tags}
                 category={template.id}
                 roleKey={template.roleKey}
               />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RealisticPreview({ category, roleKey }: { category: string, roleKey: string }) {
  const scale = 180 / 794;
  const data = dummyResumes[roleKey] || dummyResumes['Software Engineer'];
  const renderTemplate = () => {
    switch (category) {
      case 'tech': return <TechTemplate data={data} color="indigo" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'executive': return <ExecutiveTemplate data={data} color="slate" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'modern': return <ModernTemplate data={data} color="teal" spacingClass="space-y-4" paddingClass="p-6" />;
      case 'business': return <BusinessTemplate data={data} color="blue" spacingClass="space-y-4" paddingClass="p-8" />;
      case 'creative': return <CreativeTemplate data={data} color="pink" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'minimalist': return <MinimalistTemplate data={data} color="zinc" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'bold': return <BoldTemplate data={data} color="rose" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'academic': return <AcademicTemplate data={data} color="stone" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'startup': return <StartupTemplate data={data} color="emerald" spacingClass="space-y-4" paddingClass="p-10" />;
      case 'infographic': return <InfographicTemplate data={data} color="orange" spacingClass="space-y-4" paddingClass="p-10" />;
      default: return <TechTemplate data={data} color="indigo" spacingClass="space-y-4" paddingClass="p-10" />;
    }
  };

  return (
    <div className="w-[794px] h-[1123px] origin-top-left bg-white text-left overflow-hidden pointer-events-none" style={{ transform: `scale(${scale})` }}>
      {renderTemplate()}
    </div>
  );
}

const TemplateCard: React.FC<{ title: string, desc: string, tags: string[], category: string, roleKey: string }> = ({ title, desc, tags, category, roleKey }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
      <div className="h-64 bg-gray-50 overflow-hidden relative border-b border-gray-100 flex items-center justify-center p-4">
         <div className="w-[180px] h-[254px] bg-white shadow-md rounded border border-gray-200 overflow-hidden opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
           <RealisticPreview category={category} roleKey={roleKey} />
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
         <Link to={`/editor?template=${category}&role=${encodeURIComponent(roleKey)}`}>
           <Button variant="outline" className="w-full flex items-center gap-2"><Download className="w-4 h-4" /> Use Template</Button>
         </Link>
      </div>
    </div>
  );
}
