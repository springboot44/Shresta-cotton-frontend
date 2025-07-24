import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Leaf, Zap, Eye, Users } from 'lucide-react';

// Certificate Card Component
const CertificateCard = ({ title, description, gradient, textColor, icon: Icon, accentColor, certNumber, issueDate }) => {
  return (
    <motion.div
      className="relative bg-white shadow-2xl rounded-2xl overflow-hidden border-2 border-gray-100"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Decorative Border */}
      <div className={`h-2 ${gradient}`}></div>
      
      {/* Certificate Header */}
      <div className="relative p-8">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
        </div>

        {/* Certificate Number */}
        <div className="flex justify-between items-start mb-6">
          <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            CERT-{certNumber}
          </span>
          <div className={`p-3 rounded-full ${accentColor} shadow-lg`}>
            <Icon className="text-white" size={24} />
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h3>

        {/* Divider */}
        <div className={`w-16 h-1 ${gradient} rounded-full mb-4`}></div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Award Section */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-700">Issued to:</p>
            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stresta Cotton Mill
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Issue Date</p>
            <p className="text-sm font-semibold text-gray-700">{issueDate}</p>
          </div>
        </div>

        {/* Verification Badge */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <Shield size={16} className="text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700">Verified Certificate</span>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className={`h-1 ${gradient}`}></div>
    </motion.div>
  );
};

// Main Certificate Component
const Certificate = () => {
  const certificates = [
    {
      title: "Ginning Process Excellence",
      description: "Awarded for demonstrating outstanding practices and innovation in cotton ginning technology with minimal waste and high-quality output. This certification validates superior technical expertise and operational efficiency.",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      textColor: "text-blue-800",
      accentColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      icon: Award,
      certNumber: "2024-GPE-001",
      issueDate: "March 15, 2024"
    },
    {
      title: "Eco-Friendly Cotton Certification",
      description: "Recognizes exceptional efforts in sustainable cotton production by reducing carbon footprint, conserving water resources, and implementing biodegradable chemical processes for environmental protection.",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      textColor: "text-green-800",
      accentColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: Leaf,
      certNumber: "2024-ECO-002",
      issueDate: "April 22, 2024"
    },
    {
      title: "Worker Safety & Hygiene Compliance",
      description: "This certificate confirms that the cotton mill exceeds national safety standards and maintains the highest hygiene environment for all staff members, ensuring workplace wellbeing and productivity.",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-orange-800",
      accentColor: "bg-gradient-to-r from-orange-500 to-red-500",
      icon: Users,
      certNumber: "2024-WSH-003",
      issueDate: "February 10, 2024"
    },
    {
      title: "Cotton Quality Grading Mastery",
      description: "Acknowledges expert handling and classification of raw cotton grades with precision, ensuring superior market readiness and maintaining exceptional client satisfaction standards.",
      gradient: "bg-gradient-to-r from-yellow-500 to-amber-500",
      textColor: "text-yellow-800",
      accentColor: "bg-gradient-to-r from-yellow-500 to-amber-500",
      icon: Award,
      certNumber: "2024-CQG-004",
      issueDate: "January 28, 2024"
    },
    {
      title: "Energy Efficient Mill Certification",
      description: "Presented for successfully optimizing machinery and production processes to significantly reduce energy consumption while maintaining exceptional production output and quality standards.",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
      textColor: "text-indigo-800",
      accentColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
      icon: Zap,
      certNumber: "2024-EEM-005",
      issueDate: "May 18, 2024"
    },
    {
      title: "Traceability & Transparency Award",
      description: "Honors the cotton mill's comprehensive traceability system from farm to fabric, ensuring complete ethical sourcing, responsible practices, and full supply chain transparency.",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
      textColor: "text-purple-800",
      accentColor: "bg-gradient-to-r from-pink-500 to-rose-500",
      icon: Eye,
      certNumber: "2024-TTA-006",
      issueDate: "June 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Award size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Certifications
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-blue-100 mb-6">
              Stresta Cotton Mill
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Recognized excellence in cotton processing, sustainability, and industry leadership
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            All certifications are verified and issued by recognized industry authorities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;