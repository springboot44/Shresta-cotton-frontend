import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#F9F9F6]">
      {/* Main Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#DAA520] shadow-xl p-6 rounded-lg bg-white">
        About Stresta Cotton Mill
      </h2>
      
      {/* Introduction Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#DAA520]">
        <p className="text-lg text-[#2F4F4F] p-6">
          Welcome to Stresta Cotton Mill, a premier ginning mill dedicated to producing high-quality cotton products. With decades of experience, we take pride in delivering excellence in every fiber. Our commitment to sustainability, quality, and innovation has made us a trusted name in the cotton industry.
        </p>
      </div>

      {/* History Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#DAA520]">
        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#DAA520] p-4">
          Our History
        </h3>
        <p className="text-lg text-[#2F4F4F] p-6">
          Established in the heart of Ginning Town, Stresta Cotton Mill has been a cornerstone of the community for over  years. From humble beginnings as a small mill, we have grown into a state-of-the-art facility, maintaining the traditional values that have guided us from the start. Our journey is one of perseverance, dedication, and an unwavering focus on quality.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#DAA520]">
        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#DAA520] p-4">
          Our Mission
        </h3>
        <p className="text-lg text-[#2F4F4F] p-6">
          At Stresta Cotton Mill, our mission is to provide the finest cotton products to our customers while fostering sustainable practices. We believe in responsible sourcing, ethical labor practices, and innovation in manufacturing to create a positive impact on the environment and our community.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#DAA520]">
        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#DAA520] p-4">
          Our Values
        </h3>
        <ul className="list-disc list-inside space-y-4 text-lg text-[#2F4F4F] p-6">
          <li><strong>Quality:</strong> We are committed to producing cotton of the highest quality.</li>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental footprint and promote eco-friendly practices.</li>
          <li><strong>Community:</strong> We value the people who make Stresta Cotton Mill a success, from our workers to our customers.</li>
          <li><strong>Innovation:</strong> We continuously invest in technology and innovation to enhance our products and processes.</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#DAA520]">
        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] to-[#DAA520] p-4">
          Why Choose Us?
        </h3>
        <p className="text-lg text-[#2F4F4F] p-6">
          Choosing Stresta Cotton Mill means choosing quality, reliability, and a commitment to sustainability. We go the extra mile to ensure our cotton is not only top-notch but also produced with respect for the environment and the people involved in the process. Our long-standing relationships with our clients are a testament to our dedication and trustworthiness.
        </p>
      </div>
    </div>
  );
}

export default About;
