import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CottonListDay = () => {
  const [cottons, setCottons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCottons = async () => {
      try {
        const res = await axios.get('http://localhost:3002/api/cotton/todaycotton', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCottons(res.data.cotton || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCottons();
  }, [token]);

  const calculateTotalPrice = (pricePerKg, quantity) => (pricePerKg * quantity).toFixed(2);
  const calculatePricePerQuintal = (pricePerKg) => (pricePerKg * 100).toFixed(2);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-400 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-white">Loading Cotton Purchase Data</h2>
          <p className="text-blue-200 mt-2">Please wait while we fetch today's records</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Cotton Today Price Dashboard</h1>
              <p className="text-indigo-200 mt-2">Real-time tracking of today's cotton acquisitions</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="bg-indigo-700 px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  {cottons.length} {cottons.length === 1 ? 'record' : 'records'} today
                </span>
              </div>
              <div className="bg-amber-500 px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-opacity-80">Total Quantity</div>
            <div className="text-3xl font-bold text-white mt-2">
              {cottons.reduce((sum, item) => sum + item.quantity, 0)} kg
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-opacity-80">Avg. Price/kg</div>
            <div className="text-3xl font-bold text-white mt-2">
              ₹{cottons.length ? (cottons.reduce((sum, item) => sum + item.price, 0) / cottons.length).toFixed(2) : '0.00'}
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-opacity-80">Total Value</div>
            <div className="text-3xl font-bold text-white mt-2">
              ₹{cottons.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {cottons.length === 0 ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center border border-white/20 max-w-xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-6 text-3xl font-bold text-white">No Purchases Recorded Today</h3>
              <p className="mt-4 text-indigo-200 max-w-md mx-auto text-lg">
                No cotton purchases have been recorded for today. Check back later or add new purchases.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Purchase Cards Column */}
            <div className="space-y-6">
              {cottons.map((cotton) => (
                <div
                  key={cotton._id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xl font-bold text-white">{cotton.name}</div>
                        <div className="text-indigo-200 mt-1">
                          {new Date(cotton.createdAt).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      <div className="bg-amber-500/20 rounded-full px-3 py-1 text-amber-300 font-medium border border-amber-400/30">
                        ₹{cotton.price}/kg
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-5">
                      <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                        <div className="text-sm text-blue-200 font-medium">Quantity</div>
                        <div className="text-xl font-bold text-white">{cotton.quantity} kg</div>
                      </div>
                      <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
                        <div className="text-sm text-green-200 font-medium">Total Price</div>
                        <div className="text-xl font-bold text-white">
                          ₹{calculateTotalPrice(cotton.price, cotton.quantity)}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                        <div className="text-sm text-purple-200 font-medium">Price/quintal</div>
                        <div className="text-xl font-bold text-white">
                          ₹{calculatePricePerQuintal(cotton.price)}
                        </div>
                      </div>
                      <div className="bg-rose-600/20 rounded-xl p-4 border border-rose-500/30">
                        <div className="text-sm text-rose-200 font-medium">Value per quintal</div>
                        <div className="text-xl font-bold text-white">
                          ₹{(cotton.price * 100).toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {cotton.description?.trim() && (
                      <div className="mt-5">
                        <div className="text-sm text-indigo-200 font-medium mb-2">Notes</div>
                        <div className="text-white bg-indigo-900/30 rounded-lg p-3 border border-indigo-700/50">
                          {cotton.description}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-indigo-800/50">
          <div className="text-center text-indigo-300"></div>
        </footer>
      </div>
    </div>
  );
};

export default CottonListDay;
