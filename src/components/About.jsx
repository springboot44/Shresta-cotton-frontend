import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Section = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-indigo-600"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-2xl font-bold text-indigo-900 flex items-center">
          {Icon && <Icon className="mr-2" size={24} />}
          {title}
        </h3>
        {isOpen ? <ChevronUp size={24} className="text-indigo-600" /> : <ChevronDown size={24} className="text-indigo-600" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500 p-6"
      >
        About Stresta Cotton Mill
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-indigo-600 p-6"
      >
        <p className="text-lg text-indigo-900 leading-relaxed">
          Welcome to Stresta Cotton Mill, a premier ginning mill dedicated to producing high-quality cotton products. With decades of experience, we take pride in delivering excellence in every fiber. Our commitment to sustainability, quality, and innovation has made us a trusted name in the cotton industry.
        </p>
      </motion.div>

      <Section title="Our History" icon={() => <span className="text-2xl mr-2">🏭</span>}>
        <p className="text-lg text-indigo-900 leading-relaxed">
          Established in the heart of Ginning Town, Stresta Cotton Mill has been a cornerstone of the community for over 50 years. From humble beginnings as a small mill, we have grown into a state-of-the-art facility, maintaining the traditional values that have guided us from the start. Our journey is one of perseverance, dedication, and an unwavering focus on quality.
        </p>
      </Section>

      <Section title="Our Mission" icon={() => <span className="text-2xl mr-2">🎯</span>}>
        <p className="text-lg text-indigo-900 leading-relaxed">
          At Stresta Cotton Mill, our mission is to provide the finest cotton products to our customers while fostering sustainable practices. We believe in responsible sourcing, ethical labor practices, and innovation in manufacturing to create a positive impact on the environment and our community.
        </p>
      </Section>

      <Section title="Our Values" icon={() => <span className="text-2xl mr-2">💎</span>}>
        <ul className="list-disc list-inside space-y-4 text-lg text-indigo-900">
          <li><strong className="text-indigo-600">Quality:</strong> We are committed to producing cotton of the highest quality.</li>
          <li><strong className="text-indigo-600">Sustainability:</strong> We strive to minimize our environmental footprint and promote eco-friendly practices.</li>
          <li><strong className="text-indigo-600">Community:</strong> We value the people who make Stresta Cotton Mill a success, from our workers to our customers.</li>
          <li><strong className="text-indigo-600">Innovation:</strong> We continuously invest in technology and innovation to enhance our products and processes.</li>
        </ul>
      </Section>

      <Section title="Why Choose Us?" icon={() => <span className="text-2xl mr-2">🌟</span>}>
        <p className="text-lg text-indigo-900 leading-relaxed">
          Choosing Stresta Cotton Mill means choosing quality, reliability, and a commitment to sustainability. We go the extra mile to ensure our cotton is not only top-notch but also produced with respect for the environment and the people involved in the process. Our long-standing relationships with our clients are a testament to our dedication and trustworthiness.
        </p>
      </Section>
    </div>
  );
}

export default About;