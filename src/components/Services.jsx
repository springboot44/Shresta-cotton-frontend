import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers, 
  Leaf 
} from 'lucide-react';

const ServiceCard = ({ title, description, image, themeColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
        <div className={`absolute bottom-6 left-6 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest`}>
          Premium Service
        </div>
      </div>

      <div className="p-8">
        <h3 className={`text-3xl font-black mb-4 text-slate-800 tracking-tight`}>
          {title}
        </h3>
        
        <div className="relative">
          <p className="text-slate-500 leading-relaxed font-medium">
            {isExpanded ? description : `${description.slice(0, 120)}...`}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-tighter ${themeColor} hover:gap-3 transition-all`}
          >
            {isExpanded ? 'Collapse Details' : 'View Full Process'}
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const features = [
    { icon: Settings, title: '2025 Tech Stack', desc: 'Fully automated ginning lines.' },
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Multi-stage fiber testing.' },
    { icon: Leaf, title: 'Sustainable', desc: 'Zero-waste byproduct management.' },
    { icon: Zap, title: 'Rapid Turnaround', desc: 'Efficient high-volume processing.' },
    { icon: Globe, title: 'Export Ready', desc: 'Standards compliant for global markets.' },
    { icon: Layers, title: 'Custom Solutions', desc: 'Tailored to specific micronaire needs.' },
  ];

  return (
    <div className="bg-[#fcfdff] min-h-screen">
      {/* --- MODERN HERO --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img
          src="/main-3.jpg"
          alt="Cotton Processing"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-[#fcfdff]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-indigo-500/30"
          >
            Operational Excellence
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            Our <span className="text-indigo-400">Capabilities</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            From the first pull to the final bale, Shresta Cotton Mill utilizes the latest 2025 processing technologies to ensure fiber perfection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#offer" className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
              EXPLORE SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="offer" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">What We Do.</h2>
              <p className="text-slate-500 font-bold">Precision processing for seeds, oil, and fiber.</p>
            </div>
            <div className="h-px flex-1 bg-slate-100 hidden md:block mb-4 mx-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Cotton Ginning"
              description="Our cotton ginning process is designed to separate the cotton fibers from the seeds with precision and efficiency. Using advanced 2025 machinery, we ensure that the cotton is processed to the highest standards, maintaining its quality and integrity. We offer both conventional and organic ginning services."
              image="/cotton.jpg"
              themeColor="text-indigo-600"
            />
            <ServiceCard
              title="Seed Processing"
              description="Comprehensive cotton seed processing services, including cleaning, grading, and packaging. Our state-of-the-art equipment ensures that seeds are processed to the highest germination standards, ready for planting or industrial sale. We handle high volumes with customized grading."
              image="/mill.jpg"
              themeColor="text-amber-600"
            />
            <ServiceCard
              title="Oil Extraction"
              description="Extracting high-purity cottonseed oil using advanced mechanical techniques. Our oil is suitable for cooking, cosmetics, and industrial use. We prioritize cold-press methods to ensure the oil retains its beneficial properties and natural purity levels."
              image="/mill1.jpg"
              themeColor="text-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (BENTO STYLE) --- */}
      <section className="py-24 bg-slate-900 rounded-[4rem] mx-4 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">The Shresta Edge</h2>
            <p className="text-slate-400 font-medium">Why industry leaders choose our mill.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <div className="text-center pb-24">
        <h3 className="text-2xl font-black text-slate-800 mb-8">Ready for a Quote?</h3>
        <button className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
          CONTACT OUR SALES TEAM
        </button>
      </div>
    </div>
  );
};

export default Services;