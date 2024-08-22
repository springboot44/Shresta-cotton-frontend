import React from 'react';
import Certificate1 from '../assets/certificate.jpg';

const Certificate = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
        Certificates of Stresta Cotton Mill
      </h2>

      {/* Certificate 1 */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Quality Assurance Certificate
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            This certificate is awarded to Stresta Cotton Mill for maintaining the highest standards of quality in cotton ginning processes. Our quality management system ensures that every product meets rigorous quality benchmarks.
          </p>
          <img 
            src={Certificate1}
            alt="Quality Assurance Certificate"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Certificate 2 */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
            Sustainability Award
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            Stresta Cotton Mill is recognized for its commitment to sustainable practices in cotton production. This award highlights our efforts in reducing environmental impact and promoting eco-friendly operations.
          </p>
          <img 
            src={Certificate1}
            alt="Sustainability Award"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Certificate 3 */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
            Industry Excellence Certification
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            Awarded to Stresta Cotton Mill for excellence in industry standards. This certification acknowledges our leadership and innovation in the cotton milling industry.
          </p>
          <img 
            src={Certificate1}
            alt="Industry Excellence Certification"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Certificate 4 */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
            Health and Safety Compliance
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            This certificate is presented to Stresta Cotton Mill for adhering to health and safety regulations in the workplace. Our priority is ensuring a safe and healthy environment for all employees.
          </p>
          <img 
            src={Certificate1}
            alt="Health and Safety Compliance"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
