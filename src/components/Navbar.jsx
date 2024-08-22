import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Shresta Cotton Mill
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-500">Our Products</Link>
            <Link to="/certificates" className="text-gray-700 hover:text-blue-500">Certificates</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg rounded-lg">
            <li>
              <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">Home</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">Services</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">About Us</Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">Our Products</Link>
            </li>
            <li>
              <Link to="/certificates" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">Certificates</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:bg-gray-200 rounded-md p-2">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
