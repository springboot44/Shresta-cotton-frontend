import React, { useState } from 'react';
import axios from 'axios';
import { Package, DollarSign, Scale, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from './AuthContext'; // Adjust the path as necessary

const AddCotton = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [addedCotton, setAddedCotton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Get token from props or context
  // You can also use: const { token } = useAuth(); if using auth context

  const { token } = useAuth(); // Assuming you have a context for auth

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Cotton name is required';
    if (!formData.quantity || parseFloat(formData.quantity) <= 0) newErrors.quantity = 'Valid quantity is required';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/cotton/addcotton`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setMessage(response.data.message || 'Cotton added successfully!');
      setAddedCotton(response.data.cotton);
      setFormData({ name: '', quantity: '', price: '', description: '' });
    } catch (error) {
      console.error('Error adding cotton:', error);
      
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data.message || 
                           error.response.data.error || 
                           `Server error: ${error.response.status}`;
        setMessage(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        setMessage('Network error: Unable to connect to server');
      } else {
        // Something else happened
        setMessage('Failed to add cotton. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Add Cotton Inventory
          </h1>
          <p className="text-gray-600 text-lg">Manage your cotton stock with ease</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              {/* Cotton Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cotton Name
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g., Premium Cotton Grade A"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      errors.name 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-400 group-hover:border-gray-300'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Quantity and Price Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity (kg)
                  </label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="quantity"
                      placeholder="1000"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.quantity 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-400 group-hover:border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.quantity && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price per kg (₹)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="price"
                      placeholder="2500"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        errors.price 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 focus:border-blue-400 group-hover:border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.price}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="description"
                    placeholder="Describe the cotton quality, origin, and any special characteristics..."
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                      errors.description 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-400 group-hover:border-gray-300'
                    }`}
                  />
                </div>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 w-5 h-5" />
                    Adding Cotton...
                  </>
                ) : (
                  <>
                    <Package className="mr-2 w-5 h-5" />
                    Add Cotton to Inventory
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {message && (
              <div className={`mt-6 p-4 rounded-xl flex items-center ${
                message.includes('success') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.includes('success') ? (
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                )}
                <span className="font-medium">{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCotton;