import React from 'react';
import CottonFieldImage from '../assets/trees.jpg'; // Replace with your actual image path
import QualityCottonImage from '../assets/trees.jpg'; // Replace with your actual image path
import CottonProductsImage from '../assets/trees.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <img
          src={CottonFieldImage}
          alt="Cotton Field"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10 max-w-5xl mx-auto p-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Shresta Cotton Mill
          </h1>
          <p className="text-lg mb-6">
            Leading the way in high-quality cotton production. Discover our premium products and sustainable practices.
          </p>
          <a href="/products" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Explore Our Products
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            About Shresta Cotton Mill
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Shresta Cotton Mill, we are dedicated to producing high-quality cotton and cotton products. Our state-of-the-art facilities and commitment to sustainable practices ensure that we deliver the finest products to our customers.
          </p>
          <p className="text-lg text-gray-700">
            With decades of experience in the cotton industry, we pride ourselves on our innovative approach and dedication to excellence. Learn more about our history and mission below.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={QualityCottonImage}
                alt="Premium Cotton"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Premium Cotton
                </h3>
                <p className="text-lg text-gray-700">
                  Our premium cotton is known for its softness and durability, making it perfect for various textile applications.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={CottonProductsImage}
                alt="Cotton Products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Diverse Cotton Products
                </h3>
                <p className="text-lg text-gray-700">
                  Explore our range of cotton products, including high-quality cotton seeds and cotton seed oil, all crafted with care.
                </p>
              </div>
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
            Have questions or want to learn more about our products? Contact us today!
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
