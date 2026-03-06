import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WHY_COLORS = [
  'from-slate-50 to-slate-100 text-slate-700',
  'from-blue-50 to-slate-100 text-blue-700',
  'from-slate-50 to-indigo-50 text-indigo-700',
  'from-stone-50 to-slate-100 text-stone-700',
  'from-zinc-50 to-slate-100 text-zinc-700',
  'from-cyan-50 to-slate-100 text-cyan-700',
];

const WHY_ITEMS = [
  {
    title: 'State-of-the-Art Technology',
    desc: 'Modern processing machinery for consistent quality and efficiency.',
  },
  {
    title: 'Expert Team',
    desc: 'Experienced professionals across ginning, seed handling, and quality control.',
  },
  {
    title: 'Quality Assurance',
    desc: 'Strict checkpoints at every stage to maintain premium standards.',
  },
  {
    title: 'Customized Solutions',
    desc: 'Flexible service packages tailored to your crop and business goals.',
  },
  {
    title: 'Sustainable Practices',
    desc: 'Responsible operations focused on reducing waste and improving resource use.',
  },
  {
    title: 'Global Standards',
    desc: 'Processes aligned to market-ready specifications for local and export needs.',
  },
];

const ServiceCard = ({ title, description, image, gradient, cardBg, btnBg }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-200 ${cardBg}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[0.15em] px-3 py-1 rounded-full bg-white/85 text-slate-700 border border-white/80">
          PREMIUM SERVICE
        </span>
      </div>
      <div className="p-6 bg-white">
        <h3 className={`text-2xl md:text-3xl font-extrabold mb-4 tracking-tight ${gradient}`}>
          {title}
        </h3>
        <p className="text-slate-600 mb-4 leading-7 text-[15px]">
          {isExpanded ? description : `${description.slice(0, 150)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`font-semibold flex items-center transition-all duration-300 px-4 py-2 rounded-full text-white shadow-sm ${btnBg}`}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          <ChevronDown className={`ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/main-3.jpg"  // public folder path
          alt="Cotton Processing"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-blue-900/65"></div>
        <div className="relative z-10 max-w-6xl mx-auto p-8 text-center">
          <p className="inline-flex items-center gap-2 text-[12px] md:text-sm font-semibold tracking-[0.14em] text-slate-100 mb-4 px-4 py-2 rounded-full border border-slate-200/30 bg-slate-100/10">
            SHRESTA COTTON MILL
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto leading-8">
            At Shresta Cotton Mill, we offer a range of services designed to meet the needs of our clients and ensure the highest quality cotton products.
          </p>
          <a href="#services" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition transform hover:scale-105 shadow-lg">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-[0.16em] text-slate-600 mb-3">WHAT WE OFFER</p>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-slate-800 tracking-tight">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Cotton Ginning"
              description="Our cotton ginning process is designed to separate the cotton fibers from the seeds with precision and efficiency. Using advanced machinery and techniques, we ensure that the cotton is processed to the highest standards, maintaining its quality and integrity. We offer both conventional and organic ginning services, catering to different requirements and preferences. Our team of experts ensures that every batch of cotton meets the desired specifications and is ready for further processing or export."
              image="/cotton.jpg"  // public folder path
              gradient="text-slate-900"
              cardBg="bg-white"
              btnBg="bg-slate-800 hover:bg-slate-900"
            />
            <ServiceCard
              title="Cotton Seed Processing"
              description="We provide comprehensive cotton seed processing services, including cleaning, grading, and packaging. Our state-of-the-art equipment ensures that the seeds are processed to the highest quality standards, ready for planting or sale. Our processing facility is equipped to handle large volumes, and we offer customized solutions to meet the specific needs of our clients. Whether you need seeds for local agriculture or international export, we have the capabilities to deliver."
              image="/mill.jpg"  // public folder path
              gradient="text-slate-900"
              cardBg="bg-white"
              btnBg="bg-blue-700 hover:bg-blue-800"
            />
            <ServiceCard
              title="Cotton Seed Oil Extraction"
              description="Our oil extraction service involves extracting high-quality cottonseed oil using advanced technology. This oil is suitable for various applications, including cooking, cosmetics, and industrial uses. We prioritize quality and purity in our extraction process, ensuring that the oil retains its beneficial properties. Our facility adheres to stringent quality controls to provide oil that meets the highest standards."
              image="/mill.jpg"  // public folder path
              gradient="text-slate-900"
              cardBg="bg-white"
              btnBg="bg-cyan-700 hover:bg-cyan-800"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-[0.16em] text-slate-600 mb-3">WHY PARTNER WITH US</p>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-slate-800 tracking-tight">
            Why Choose Shresta Cotton Mill?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_ITEMS.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${WHY_COLORS[index % WHY_COLORS.length]} p-6 rounded-xl shadow-sm flex items-center space-x-4 border border-slate-200`}>
                <div className="bg-white/80 p-3 rounded-full shadow-sm">
                  <ArrowRight className="text-current" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl p-10 md:p-14 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-slate-300/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-200 mb-3">READY TO GET STARTED?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Let’s build your processing plan.</h2>
            <p className="text-slate-200/90 max-w-2xl mx-auto leading-7 mb-8">
              Contact us to discuss your cotton processing requirements, timelines, and quality targets.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition shadow-lg">
              Get in Touch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
