import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>
          <div className='hidden md:flex space-x-8'>
            <Link to='/' className='text-gray-700 hover:text-blue-500'>Home</Link>
            <Link to='/services' className='text-gray-700 hover:text-blue-500'>Services</Link>
            <Link to='/about' className='text-gray-700 hover:text-blue-500'>About Us</Link>
            <Link to='/products' className='text-gray-700 hover:text-blue-500'>Our Products</Link>
            <Link to='/contact' className='text-gray-700 hover:text-blue-500'>Contact Us</Link>
            <Link to='/certificates' className='text-gray-700 hover:text-blue-500'>Certificates</Link>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-700 hover:text-blue-500'>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <ul className='px-4 pt-2 pb-4 space-y-1'>
            <Link to='/' onClick={toggleMenu} className='block text-gray-700 hover:bg-gray-200 rounded-md p-2'>Home</Link>
            <Link to='/services' onClick={toggleMenu} className='block text-gray-700 hover:bg-gray-200 rounded-md p-2'>Services</Link>
            <Link to='/about' onClick={toggleMenu} className='block text-gray-700 hover:bg-gray-200 rounded-md p-2'>About Us</Link>
            <Link to='/contact' onClick={toggleMenu} className='block text-gray-700 hover:bg-gray-200 rounded-md p-2'>Contact Us</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
