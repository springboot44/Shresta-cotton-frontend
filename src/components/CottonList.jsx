import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CottonList = () => {
  const [cottons, setCottons] = useState([]);
  const [filteredCottons, setFilteredCottons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });
  const [sortOption, setSortOption] = useState('none');

  useEffect(() => {
    const fetchCottons = async () => {
      try {
        const res = await axios.get('http://localhost:3002/api/cotton/getcotton', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCottons(res.data.cotton || []);
        setFilteredCottons(res.data.cotton || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCottons();
  }, [token]);

  useEffect(() => {
    applyFilters();
  }, [cottons, dateFilter, sortOption]);

  const applyFilters = () => {
    let result = [...cottons];

    // Apply date filter
    if (dateFilter.startDate || dateFilter.endDate) {
      result = result.filter(item => {
        const itemDate = new Date(item.createdAt);
        const startDate = dateFilter.startDate ? new Date(dateFilter.startDate) : null;
        const endDate = dateFilter.endDate ? new Date(dateFilter.endDate) : null;
        
        if (startDate && itemDate < startDate) return false;
        if (endDate && itemDate > endDate) return false;
        return true;
      });
    }

    // Apply sort
    switch (sortOption) {
      case 'priceHighToLow':
        result.sort((a, b) => (b.price / b.quantity) - (a.price / a.quantity));
        break;
      case 'priceLowToHigh':
        result.sort((a, b) => (a.price / a.quantity) - (b.price / b.quantity));
        break;
      case 'dateNewest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'dateOldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        // No sorting
        break;
    }

    setFilteredCottons(result);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setDateFilter({
      startDate: '',
      endDate: ''
    });
    setSortOption('none');
  };

  // Calculate price per kg and per quintal (100kg)
  const calculatePricePerKg = (price, quantity) => {
    return (price / quantity).toFixed(2);
  };

  const calculatePricePerQuintal = (price, quantity) => {
    return ((price / quantity) * 100).toFixed(2);
  };

  // Calculate summary statistics
  const totalQuantity = filteredCottons.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = filteredCottons.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const avgPricePerKg = totalQuantity > 0 ? (totalValue / totalQuantity).toFixed(2) : 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        <span className="ml-4 text-gray-600">Loading cotton data...</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cotton Inventory</h1>
        <p className="text-gray-600">Manage and analyze your cotton purchases</p>
      </div>

    
      {/* Filters Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">Filters & Sorting</h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Showing {filteredCottons.length} of {cottons.length} records
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="date"
                  name="startDate"
                  value={dateFilter.startDate}
                  onChange={handleDateChange}
                  className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="mt-1 text-xs text-gray-500">From</p>
              </div>
              <div>
                <input
                  type="date"
                  name="endDate"
                  value={dateFilter.endDate}
                  onChange={handleDateChange}
                  className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="mt-1 text-xs text-gray-500">To</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="none">No sorting</option>
              <option value="priceHighToLow">Price (High to Low per kg)</option>
              <option value="priceLowToHigh">Price (Low to High per kg)</option>
              <option value="dateNewest">Date (Newest first)</option>
              <option value="dateOldest">Date (Oldest first)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cotton Items - Combined View */}
      {filteredCottons.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No cotton records found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or add new cotton purchases</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredCottons.map(cotton => (
              <div key={cotton._id} className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="p-5">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 mb-2">
                      {new Date(cotton.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{cotton.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-green-600">Price/kg</p>
                      <p className="text-lg font-bold text-green-800">₹{calculatePricePerKg(cotton.price, cotton.quantity)}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-purple-600">Price/quintal</p>
                      <p className="text-lg font-bold text-purple-800">₹{calculatePricePerQuintal(cotton.price, cotton.quantity)}</p>
                    </div>
                  </div>
                  
                  {cotton.description && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">"{cotton.description}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CottonList;