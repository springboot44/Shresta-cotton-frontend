import React from 'react';
import CottonImage from '../assets/cotton.jpg';
import CottonSeedsImage from '../assets/designer.jpeg';
import CottonSeedOilImage from '../assets/mill1.jpg';

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
        Discover Our Premium Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cotton */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img 
            src={CottonImage}
            alt="Cotton"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Premium Cotton
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our premium cotton is harvested from the finest fields and is known for its softness and durability. Perfect for various textile applications, including clothing and home textiles.
            </p>
            <p className="text-md text-gray-600">
              Key Benefits:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>High softness and comfort</li>
              <li>Durable and long-lasting</li>
              <li>Ideal for all types of textiles</li>
            </ul>
          </div>
        </div>

        {/* Cotton Seeds */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img 
            src={CottonSeedsImage}
            alt="Cotton Seeds"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              High-Quality Cotton Seeds
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our cotton seeds are selected for their superior quality and high germination rates, ensuring robust crop yields and excellent performance in various soil conditions.
            </p>
            <p className="text-md text-gray-600">
              Key Benefits:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>High germination rates</li>
              <li>Enhanced crop yield</li>
              <li>Adaptable to diverse soil conditions</li>
            </ul>
          </div>
        </div>

        {/* Cotton Seed Oil */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img 
            src={CottonSeedOilImage}
            alt="Cotton Seed Oil"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
              Pure Cotton Seed Oil
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our cotton seed oil is extracted with advanced techniques to maintain its natural benefits. It’s ideal for cooking, cosmetic use, and various industrial applications.
            </p>
            <p className="text-md text-gray-600">
              Key Benefits:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Rich in essential fatty acids</li>
              <li>Versatile usage in cooking and cosmetics</li>
              <li>Processed to retain natural benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
