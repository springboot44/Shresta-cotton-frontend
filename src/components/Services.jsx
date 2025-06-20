import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Main from '../assets/main-3.jpg';
import Cotton from '../assets/cotton.jpg';
import Mill from '../assets/mill.jpg';


const ServiceCard = ({ title, description, image, gradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="p-6">
        <h3 className={`text-3xl font-bold mb-4 ${gradient}`}>
          {title}
        </h3>
        <p className="text-gray-700 mb-4">
          {isExpanded ? description : `${description.slice(0, 150)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300"
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={Main}
          alt="Cotton Processing"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>
        <div className="relative z-10 max-w-6xl mx-auto p-8 text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Our Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            At Shresta Cotton Mill, we offer a range of services designed to meet the needs of our clients and ensure the highest quality cotton products.
          </p>
          <a href="#services" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Cotton Ginning"
              description="Our cotton ginning process is designed to separate the cotton fibers from the seeds with precision and efficiency. Using advanced machinery and techniques, we ensure that the cotton is processed to the highest standards, maintaining its quality and integrity. We offer both conventional and organic ginning services, catering to different requirements and preferences. Our team of experts ensures that every batch of cotton meets the desired specifications and is ready for further processing or export."
              image={Cotton}
              gradient="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
            />
            <ServiceCard
              title="Cotton Seed Processing"
              description="We provide comprehensive cotton seed processing services, including cleaning, grading, and packaging. Our state-of-the-art equipment ensures that the seeds are processed to the highest quality standards, ready for planting or sale. Our processing facility is equipped to handle large volumes, and we offer customized solutions to meet the specific needs of our clients. Whether you need seeds for local agriculture or international export, we have the capabilities to deliver."
              image={Mill}
              gradient="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"
            />
            <ServiceCard
              title="Cotton Seed Oil Extraction"
              description="Our oil extraction service involves extracting high-quality cottonseed oil using advanced technology. This oil is suitable for various applications, including cooking, cosmetics, and industrial uses. We prioritize quality and purity in our extraction process, ensuring that the oil retains its beneficial properties. Our facility adheres to stringent quality controls to provide oil that meets the highest standards."
              image={Mill}
              gradient="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
            Why Choose Shresta Cotton Mill?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['State-of-the-Art Technology', 'Expert Team', 'Quality Assurance', 'Customized Solutions', 'Sustainable Practices', 'Global Standards'].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ArrowRight className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our services and how we can meet your cotton processing needs.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
            Get in Touch
          </a>
        </div>
      </section> */}
    </div>
  );
}

export default Services;