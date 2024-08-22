import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Install react-icons if not already

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Stresta Cotton Mill</h3>
            <p className="text-lg mb-4">
              Leading the industry with innovative cotton processing techniques and a commitment to sustainability.
            </p>
         
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/products" className="hover:text-gray-400">Products</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-lg mb-2">
              <strong>Address:</strong> 123 Cotton Lane, Ginning Town, GT 56789
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> 8555953368
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong>shreshtacotton@gmail.com
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center">
        <p className="text-lg">
              &copy; {new Date().getFullYear()} Stresta Cotton Mill. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
