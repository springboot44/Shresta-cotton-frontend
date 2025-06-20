import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import Certificate1 from '../assets/certificate.jpg';

const CertificateCard = ({ title, description, image, gradient, textColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`p-6 ${gradient}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-2xl font-semibold ${textColor}`}>
            {title}
          </h3>
          <Award className={textColor} size={32} />
        </div>
        <motion.div layout>
          {isExpanded && (
            <p className={`text-lg ${textColor} mb-4 opacity-90`}>
              {description}
            </p>
          )}
        </motion.div>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg"
          layoutId={`image-${title}`}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 flex items-center ${textColor} hover:underline focus:outline-none`}
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Show less</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span className="mr-2">Learn more</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const Certificate = () => {
  const certificates = [
    {
      title: "Quality Assurance Certificate",
      description: "This certificate is awarded to Stresta Cotton Mill for maintaining the highest standards of quality in cotton ginning processes. Our quality management system ensures that every product meets rigorous quality benchmarks.",
      image: Certificate1,
      gradient: "bg-gradient-to-r from-blue-100 to-blue-200",
      textColor: "text-blue-800"
    },
    {
      title: "Sustainability Award",
      description: "Stresta Cotton Mill is recognized for its commitment to sustainable practices in cotton production. This award highlights our efforts in reducing environmental impact and promoting eco-friendly operations.",
      image: Certificate1,
      gradient: "bg-gradient-to-r from-green-100 to-green-200",
      textColor: "text-green-800"
    },
    {
      title: "Industry Excellence Certification",
      description: "Awarded to Stresta Cotton Mill for excellence in industry standards. This certification acknowledges our leadership and innovation in the cotton milling industry.",
      image: Certificate1,
      gradient: "bg-gradient-to-r from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800"
    },
    {
      title: "Health and Safety Compliance",
      description: "This certificate is presented to Stresta Cotton Mill for adhering to health and safety regulations in the workplace. Our priority is ensuring a safe and healthy environment for all employees.",
      image: Certificate1,
      gradient: "bg-gradient-to-r from-red-100 to-red-200",
      textColor: "text-red-800"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates of Stresta Cotton Mill
      </motion.h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certificate;