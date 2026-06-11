import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] py-20 px-4 bg-[#F8F9FA]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-black mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Start for free, upgrade when you're ready to unlock advanced AI capabilities and unlimited scans.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 border border-gray-200 rounded-2xl flex flex-col relative"
          >
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="text-4xl font-extrabold mb-6">$0</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> 3 Semantic ATS Scans</li>
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> Basic Missing Skills Detection</li>
              <li className="flex gap-2 text-sm text-gray-600"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" /> PDF Report Export</li>
            </ul>
            <Link to="/app">
              <Button variant="outline" className="w-full">Get Started</Button>
            </Link>
          </motion.div>

          {/* Pay-as-you-go */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 border-2 border-indigo-600 rounded-2xl flex flex-col relative shadow-xl shadow-indigo-100"
          >
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-indigo-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded shadow-sm">Popular</div>
            <h3 className="text-xl font-bold mb-2 text-indigo-700">Credit Pack</h3>
            <div className="text-4xl font-extrabold mb-6">$5<span className="text-lg text-gray-400 font-medium tracking-normal">/10 scans</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-black font-semibold"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> 10 Premium ATS Scans</li>
              <li className="flex gap-2 text-sm text-black font-semibold"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Advanced Skill Graph Matching</li>
              <li className="flex gap-2 text-sm text-black font-semibold"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> AI Bullet Rewrites</li>
              <li className="flex gap-2 text-sm text-black font-semibold"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> Explainability Feedback</li>
            </ul>
            <Link to="/app?checkout=basic">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20">Buy Credits</Button>
            </Link>
          </motion.div>

          {/* Pro Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-gray-900 to-black p-8 border border-gray-800 rounded-2xl flex flex-col relative py-12"
          >
            <Zap className="w-6 h-6 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Pro Unlimited</h3>
            <div className="text-4xl font-extrabold mb-6 text-white">$19<span className="text-lg text-gray-400 font-medium tracking-normal">/month</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" /> Unlimited ATS Scans</li>
              <li className="flex gap-2 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" /> Unlimited AI Rewrites</li>
              <li className="flex gap-2 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" /> Priority Support</li>
              <li className="flex gap-2 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" /> Multi-Resume Comparison</li>
            </ul>
            <Link to="/app?checkout=pro">
              <Button className="w-full bg-white text-black hover:bg-gray-100">Upgrade to Pro</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
