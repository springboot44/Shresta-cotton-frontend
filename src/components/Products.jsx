import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sprout, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ProductCard = ({ title, description, benefits, img, gradient, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
        
        {/* Floating Icon Badge */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg text-slate-800">
          <Icon size={24} />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <button className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <ArrowUpRight size={18} />
          </button>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>

        {/* Benefits Grid */}
        <div className="space-y-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Advantages</p>
          <div className="grid grid-cols-1 gap-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                <span className="text-xs font-bold text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const productData = [
    {
      title: "Premium Fiber",
      description: "Harvested at peak maturity to ensure maximum staple length and exceptional softness for high-end textiles.",
      benefits: ["High Softness & Comfort", "Durable Tensile Strength", "Zero-Impurity Processing"],
      img: "/cotton.jpg",
      gradient: "from-purple-600 to-pink-500",
      icon: Leaf,
      delay: 0.1
    },
    {
      title: "Elite Seeds",
      description: "Scientificially selected seeds with accelerated germination rates, designed for robust yields in 2026 conditions.",
      benefits: ["High Germination Rate", "Enhanced Crop Yield", "Soil-Adaptable Genetics"],
      img: "/designer.jpeg",
      gradient: "from-teal-600 to-cyan-500",
      icon: Sprout,
      delay: 0.2
    },
    {
      title: "Refined Oil",
      description: "Cold-pressed through advanced multi-stage filtration to retain natural fatty acids and high smoke points.",
      benefits: ["Rich in Essential Fatty Acids", "Multi-Stage Cold Press", "Cosmetic & Culinary Grade"],
      img: "/mill1.jpg",
      gradient: "from-amber-500 to-orange-600",
      icon: Droplets,
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            Product Catalog 2026
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6"
          >
            Superior Quality <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Sustainable Solutions
            </span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl font-black mb-4">Bulk Orders & Custom Specs?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Our 2025-established facility is equipped for high-volume custom ginning requirements.
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-indigo-500 hover:text-white transition-all">
            DOWNLOAD SPEC SHEET
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Products;