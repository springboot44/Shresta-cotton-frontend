import React, { useState } from 'react';
import axios from 'axios';
import { Package, DollarSign, Scale, FileText, CheckCircle, AlertCircle, Loader2, ShieldAlert } from 'lucide-react';
import { useAuth } from './AuthContext';

const AddCotton = () => {
  const { token, user } = useAuth(); // Destructure user to check role

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // 1. SHIELD: Redirect or Block non-admins immediately
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md border border-red-100">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">You do not have the administrative privileges required to manage inventory.</p>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Cotton name is required';
    if (!formData.quantity || parseFloat(formData.quantity) <= 0) newErrors.quantity = 'Enter a valid quantity';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Enter a valid price';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Auto-convert numbers to ensure clean data
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : parseFloat(value)) : value,
    }));
    
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setMessage('');
    setStatus(null);

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

      setStatus('success');
      setMessage(response.data.message || 'Inventory updated successfully!');
      setFormData({ name: '', quantity: '', price: '', description: '' });
    } catch (error) {
      setStatus('error');
      const errorMsg = error.response?.data?.message || 'Failed to connect to server';
      setMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb / Category Tag */}
        <div className="flex justify-center mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Admin Portal
          </span>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Add New Cotton Stock
          </h1>
          <p className="text-slate-500 text-lg">Update the marketplace inventory with latest arrivals.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-8">
            
            {/* Status Feedback */}
            {message && (
              <div className={`p-4 rounded-xl flex items-center animate-in fade-in slide-in-from-top-2 duration-300 ${
                status === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}>
                {status === 'success' ? <CheckCircle className="w-5 h-5 mr-3" /> : <AlertCircle className="w-5 h-5 mr-3" />}
                <p className="font-semibold">{message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
              {/* Name - Full Width */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Cotton Variety Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Package className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none ${errors.name ? 'border-rose-400 ring-4 ring-rose-50' : ''}`}
                    placeholder="e.g. Shankar-6 Super Fine"
                  />
                  {errors.name && <p className="mt-2 text-xs text-rose-500 font-medium">{errors.name}</p>}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Quantity (Kg)</label>
                <div className="relative">
                  <Scale className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="block w-full pl-11 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                    placeholder="0.00"
                  />
                </div>
                {errors.quantity && <p className="mt-2 text-xs text-rose-500 font-medium">{errors.quantity}</p>}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Price per Kg (₹)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="block w-full pl-11 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                    placeholder="0.00"
                  />
                </div>
                {errors.price && <p className="mt-2 text-xs text-rose-500 font-medium">{errors.price}</p>}
              </div>

              {/* Description - Full Width */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Inventory Details</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none resize-none"
                    placeholder="Enter fiber length, moisture content, and origin..."
                  />
                </div>
                {errors.description && <p className="mt-2 text-xs text-rose-500 font-medium">{errors.description}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-4 px-6 rounded-2xl text-white font-bold text-lg bg-slate-900 hover:bg-blue-600 active:scale-95 transition-all shadow-xl shadow-slate-200 disabled:bg-slate-300 disabled:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Updating Database...
                </>
              ) : (
                "Confirm & Add to Stock"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCotton;