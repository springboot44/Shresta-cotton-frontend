import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/img2.jpg" // from public/img2.jpg
          alt="Cotton Field"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 max-w-5xl mx-auto p-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
            Shresta Cotton Mill
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
            Premium cotton, sustainable practices
          </p>
          <Link to="/products" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition transform hover:scale-105">
            Explore Our Products
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={48} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
                About Shresta Cotton Mill
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Shresta Cotton Mill is a leading name in the cotton industry, known for producing high-quality cotton and cotton products. Our commitment to quality and sustainability sets us apart, ensuring that every product we deliver meets the highest standards.
              </p>
              {isAboutExpanded && (
                <>
                  <p className="text-lg text-gray-700 mb-6">
                    Established over two decades ago, Shresta Cotton Mill has grown from a small operation into a modern facility with cutting-edge technology. We prioritize innovation, constantly updating our processes to ensure efficiency and environmental responsibility.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our dedicated team of experts and professionals is committed to excellence. From sourcing the finest cotton to maintaining rigorous quality controls, we strive to deliver superior products that exceed expectations.
                  </p>
                  <p className="text-lg text-gray-700">
                    At Shresta Cotton Mill, we believe in sustainable practices that benefit both our customers and the environment. We are proud to be a part of a global community that values ethical production and responsible stewardship of natural resources.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="w-full py-4 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition flex items-center justify-center"
            >
              {isAboutExpanded ? 'Read Less' : 'Read More'}
              <ChevronDown className={`ml-2 transform transition-transform ${isAboutExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
              <img
                src="/Img2.jpg" // from public/Img2.jpg
                alt="Premium Cotton"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Premium Cotton
                </h3>
                <p className="text-gray-600 mb-4">
                  Our premium cotton is known for its softness and durability, making it perfect for various textile applications.
                </p>
                <Link to="/products/premium-cotton" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
              <img
                src="/Img1.jpg" // from public/Img1.jpg
                alt="Cotton Products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Diverse Cotton Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore our range of cotton products, including high-quality cotton seeds and cotton seed oil, all crafted with care.
                </p>
                <Link to="/products/diverse-products" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
              <img
                src="/cotton.jpg" // from public/cotton.jpg
                alt="Sustainable Cotton"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Sustainable Cotton
                </h3>
                <p className="text-gray-600 mb-4">
                  Our sustainably grown cotton meets the highest environmental standards without compromising on quality.
                </p>
                <Link to="/products/sustainable-cotton" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
