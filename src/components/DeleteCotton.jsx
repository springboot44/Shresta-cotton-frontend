import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Search, AlertTriangle, Loader2, RefreshCcw, Package, Calendar } from 'lucide-react';
import { useAuth } from './AuthContext';

const DeleteCotton = () => {
  const { token, user } = useAuth();
  const [cottonList, setCottonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const isAdmin = user?.role === 'admin';

  const fetchCotton = async () => {
    setIsLoading(true);
    try {
      // URL: http://localhost:3002/api/cotton/getcotton
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cotton/getcotton`);
      setCottonList(Array.isArray(response.data) ? response.data : response.data.cotton || []);
    } catch (error) {
      setMessage({ text: 'Failed to load inventory', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCotton();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure? This action cannot be undone.")) return;

    setIsDeleting(id);
    setMessage({ text: '', type: '' });

    try {
      // IMPORTANT: Ensure this matches the Backend Route exactly
      // URL: http://localhost:3002/api/cotton/delete/ID_HERE
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/cotton/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setCottonList(prev => prev.filter(item => item._id !== id));
      setMessage({ text: 'Item removed successfully', type: 'success' });
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Server connection failed';
      setMessage({ text: errorMsg, type: 'error' });
    } finally {
      setIsDeleting(null);
      setTimeout(() => setMessage({ text: '', type: '' }), 4000);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-10 bg-white rounded-3xl shadow-xl border border-red-100 max-w-sm">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800">Access Denied</h2>
          <p className="text-slate-500 mt-2">Administrative privileges required.</p>
        </div>
      </div>
    );
  }

  const filteredItems = cottonList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Inventory</h1>
            <p className="text-slate-500 font-medium">Remove or update marketplace stock.</p>
          </div>
          <button 
            onClick={fetchCotton}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all shadow-sm font-bold"
          >
            <RefreshCcw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Sync Data
          </button>
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center animate-in slide-in-from-top-2 duration-300 border ${
            message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'
          }`}>
            <AlertTriangle className="w-5 h-5 mr-3" />
            <span className="font-bold">{message.text}</span>
          </div>
        )}

        <div className="relative mb-8 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text"
            placeholder="Search variety (e.g. Shankar-6)..."
            className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-[1.5rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none shadow-sm text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          {isLoading ? (
            <div className="p-32 text-center">
              <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Accessing Database...</p>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Variety Details</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Stock Level</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Market Price</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredItems.map((item) => (
                    <tr key={item._id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Package className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-lg">{item.name}</p>
                            <p className="text-xs text-slate-400 font-medium flex items-center mt-1">
                              <Calendar className="w-3 h-3 mr-1" />
                              Added {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg font-bold text-slate-600 text-sm">
                          {item.quantity} Kg
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="font-black text-emerald-600 text-lg">₹{item.price}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button
                          onClick={() => handleDelete(item._id)}
                          disabled={isDeleting === item._id}
                          className="p-3 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-sm hover:shadow-rose-200 active:scale-90 disabled:opacity-20"
                        >
                          {isDeleting === item._id ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                          ) : (
                            <Trash2 className="w-6 h-6" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-32 text-center">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-slate-200 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Inventory Empty</h3>
              <p className="text-slate-400 mt-2">No cotton records match your current search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteCotton;