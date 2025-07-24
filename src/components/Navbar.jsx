import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Settings, Info, Package, Award, Phone, LogIn, TrendingUp, List } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Settings },
    { 
      name: 'About', 
      icon: Info,
      dropdown: [
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Our Products', path: '/products', icon: Package }
      ]
    },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { 
      name: 'Cotton Prices', 
      icon: TrendingUp,
      dropdown: [
        { name: 'Price List', path: '/cottonlist', icon: List },
        { name: 'Today\'s Price', path: '/cottonday', icon: TrendingUp }
      ]
    },
    { name: 'Contact Us', path: '/contact', icon: Phone }
  ];

  const authItems = [
    { name: 'Login', path: '/login', icon: LogIn }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🌾</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShrestaCotton
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                        {item.dropdown.map((dropdownItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href={dropdownItem.path}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.path}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {authItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  item.name === 'Login' 
                    ? 'text-blue-600 hover:bg-blue-50 border border-blue-200 hover:border-blue-300' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-100">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 font-medium">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                  <div className="ml-8 space-y-1">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropdownItem.path}
                        onClick={toggleMenu}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        <dropdownItem.icon className="w-4 h-4" />
                        <span>{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.path}
                  onClick={toggleMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              )}
            </div>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
            {authItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={toggleMenu}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  item.name === 'Login' 
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;