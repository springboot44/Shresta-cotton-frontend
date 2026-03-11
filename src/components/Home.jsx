import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Star, Leaf, ShieldCheck, Factory } from 'lucide-react';

const Home = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <div className="bg-[#fcfdff] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src="/img2.jpg"
          alt="Cotton Field"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-6"
          >
            <Star size={14} className="text-yellow-400" /> Defining Quality Since 2025
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter leading-none"
          >
            SHRESTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">COTTON</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-slate-200 font-medium max-w-2xl mx-auto"
          >
            Experience the finest Grade-A cotton fibers processed with next-gen sustainable technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/products" className="group px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/40 flex items-center gap-2">
              BROWSE CATALOG <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* --- ABOUT SECTION (BENTO STYLE) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60" />
            <img src="/img1.jpg" className="relative z-10 rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" alt="Factory" />
            <div className="absolute bottom-6 right-6 z-20 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100">
               <p className="text-3xl font-black text-indigo-600">100%</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solar Powered</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
              Pioneering the <br /> <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Future of Ginning.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Shresta Cotton Mill isn't just a facility; it's a commitment to the earth. Established in 2025, we use AI-integrated sorting and eco-certified processing to deliver purity in every fiber.
            </p>
            
            <AnimatePresence>
              {isAboutExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <p className="text-slate-600 leading-relaxed">
                    Our team of experts utilizes cutting-edge 2025 technology to ensure zero fiber damage during the ginning process, resulting in longer staple lengths and superior tensile strength.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 text-slate-700 font-bold"><Leaf className="text-emerald-500" size={20}/> Organic Certified</div>
                    <div className="flex items-center gap-3 text-slate-700 font-bold"><ShieldCheck className="text-indigo-500" size={20}/> Lab Tested</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="mt-8 flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
            >
              {isAboutExpanded ? 'Show Less' : 'Learn More About Us'}
              <ChevronDown className={`transform transition-transform ${isAboutExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS PREVIEW --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Our Core Output</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Premium Grade Materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Premium Cotton", img: "/img2.jpg", desc: "Long-staple fibers for high-end fashion.", path: "premium-cotton" },
              { title: "Diverse Seeds", img: "/img1.jpg", desc: "High-germination seeds for robust crops.", path: "diverse-products" },
              { title: "Eco Fiber", img: "/cotton.jpg", desc: "Sustainably grown, carbon-neutral cotton.", path: "sustainable-cotton" }
            ].map((prod, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-800 mb-3">{prod.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">{prod.desc}</p>
                  <Link to={`/products/${prod.path}`} className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    DETAILS <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-20 bg-indigo-600 text-center text-white mx-6 rounded-[3rem] mb-20 shadow-2xl shadow-indigo-200">
        <Factory className="mx-auto mb-6 opacity-40" size={48} />
        <h2 className="text-4xl font-black mb-6">Ready to source better?</h2>
        <p className="text-indigo-100 mb-10 max-w-xl mx-auto font-medium px-6">
          Our 2025 facility is currently accepting new bulk orders for the upcoming harvest season.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-xl">
          GET A QUOTE
        </button>
      </section>
    </div>
  );
}

export default Home;