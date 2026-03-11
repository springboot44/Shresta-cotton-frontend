import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Gem, 
  Award, 
  Users, 
  Leaf, 
  ChevronRight,
  Cpu
} from 'lucide-react';

const StatCard = ({ label, value, sub }) => (
  <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-indigo-100 text-center shadow-sm">
    <h4 className="text-3xl font-black text-indigo-600">{value}</h4>
    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{label}</p>
    <p className="text-[9px] text-indigo-400 font-bold uppercase mt-1">{sub}</p>
  </div>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#fcfdff] pb-20 px-4 pt-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center mb-16 p-10 md:p-20 rounded-[4rem] bg-slate-900 text-white overflow-hidden shadow-2xl"
        >
          {/* Animated Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent pointer-events-none" />
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block px-5 py-2 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-lg shadow-indigo-500/40"
          >
            ESTABLISHED 2025
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            STRESTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">COTTON</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            The next generation of ginning. Founded in 2025, we are redefining cotton processing with AI-driven quality control and eco-conscious engineering.
          </p>
        </motion.div>

        {/* --- 2025 INNOVATION STATS --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <StatCard label="Tech Stack" value="V 2.0" sub="Fully Automated" />
          <StatCard label="Daily Capacity" value="500+" sub="Bales Per Day" />
          <StatCard label="Purity Rate" value="99.9%" sub="Lab Certified" />
          <StatCard label="Energy Source" value="Solar" sub="100% Green" />
        </motion.div>

        {/* --- MAIN CONTENT BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Origin Card */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="md:col-span-7 bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-600 text-white">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-3xl font-black text-slate-800 tracking-tight">The 2025 Vision</h3>
            </div>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
              Stresta Cotton Mill was born out of a necessity for <span className="text-indigo-600">cleaner, stronger, and more ethical fiber.</span> Starting in 2025 allowed us to bypass legacy limitations and build a facility that prioritizes the planet as much as the product.
            </p>
          </motion.div>

          {/* Mission - Dynamic Card */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="md:col-span-5 bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-end"
          >
            <Target className="mb-6 opacity-30" size={48} />
            <h3 className="text-3xl font-black mb-2">Our Goal</h3>
            <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">
              Precision Ginning for the modern textile era.
            </p>
          </motion.div>

          {/* Values Row */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Cpu, title: "Tech Driven", text: "Latest 2025 ginning machinery for zero fiber damage.", color: "bg-blue-50 text-blue-600" },
              { icon: Leaf, title: "Zero Waste", text: "Every byproduct is recycled or repurposed efficiently.", color: "bg-emerald-50 text-emerald-600" },
              { icon: Users, title: "Direct Farm", text: "Shortening the supply chain to empower local farmers.", color: "bg-amber-50 text-amber-600" },
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-2xl ${val.color} flex items-center justify-center mb-6`}>
                  <val.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-2">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <button className="group bg-slate-900 text-white px-10 py-5 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
            WORK WITH US <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            Future Ready • Stresta Cotton Mill 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;