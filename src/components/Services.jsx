import React from 'react';
import CottonProcessingImage from '../assets/mill.jpg'; // Replace with your actual image path
import SeedProcessingImage from '../assets/mill1.jpg'; // Replace with your actual image path
import OilExtractionImage from '../assets/mill1.jpg'; // Replace with your actual image path

const Services = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white overflow-hidden">
        <img
          src={CottonProcessingImage}
          alt="Cotton Processing"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10 max-w-6xl mx-auto p-8 text-center bg-gradient-to-t from-gray-800 to-transparent">
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Our Services
          </h1>
          <p className="text-lg mb-6">
            At Stresta Cotton Mill, we offer a range of services designed to meet the needs of our clients and ensure the highest quality cotton products.
          </p>
        </div>
      </section>

      {/* Service 1: Cotton Ginning */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1">
              <img
                src={CottonProcessingImage}
                alt="Cotton Ginning"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Cotton Ginning
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our cotton ginning process is designed to separate the cotton fibers from the seeds with precision and efficiency. Using advanced machinery and techniques, we ensure that the cotton is processed to the highest standards, maintaining its quality and integrity.
              </p>
              <p className="text-lg text-gray-700">
                We offer both conventional and organic ginning services, catering to different requirements and preferences. Our team of experts ensures that every batch of cotton meets the desired specifications and is ready for further processing or export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Cotton Seed Processing */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
            <div className="flex-1">
              <img
                src={SeedProcessingImage}
                alt="Cotton Seed Processing"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Cotton Seed Processing
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We provide comprehensive cotton seed processing services, including cleaning, grading, and packaging. Our state-of-the-art equipment ensures that the seeds are processed to the highest quality standards, ready for planting or sale.
              </p>
              <p className="text-lg text-gray-700">
                Our processing facility is equipped to handle large volumes, and we offer customized solutions to meet the specific needs of our clients. Whether you need seeds for local agriculture or international export, we have the capabilities to deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Cotton Seed Oil Extraction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1">
              <img
                src={OilExtractionImage}
                alt="Cotton Seed Oil Extraction"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                Cotton Seed Oil Extraction
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our oil extraction service involves extracting high-quality cottonseed oil using advanced technology. This oil is suitable for various applications, including cooking, cosmetics, and industrial uses.
              </p>
              <p className="text-lg text-gray-700">
                We prioritize quality and purity in our extraction process, ensuring that the oil retains its beneficial properties. Our facility adheres to stringent quality controls to provide oil that meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg mb-6">
            Interested in our services or have any questions? Contact us today to learn more about how we can meet your needs.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
