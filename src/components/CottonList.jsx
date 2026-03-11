import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { 
  RefreshCcw, 
  Search, 
  ArrowUpDown,
  Package,
  TrendingUp,
  Scale,
  CalendarDays
} from 'lucide-react';

const CottonList = () => {
  const [cottons, setCottons] = useState([]);
  const [filteredCottons, setFilteredCottons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { token } = useAuth();
  
  const [dateFilter, setDateFilter] = useState({ startDate: '', endDate: '' });
  const [sortOption, setSortOption] = useState('dateNewest');

  const fetchCottons = async () => {
    setIsRefreshing(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cotton/getcotton`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = res.data.cotton || [];
      setCottons(data);
      setFilteredCottons(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCottons();
  }, [token]);

  useEffect(() => {
    let result = [...cottons];

    if (dateFilter.startDate || dateFilter.endDate) {
      result = result.filter(item => {
        const itemDate = new Date(item.createdAt).setHours(0,0,0,0);
        const start = dateFilter.startDate ? new Date(dateFilter.startDate).setHours(0,0,0,0) : null;
        const end = dateFilter.endDate ? new Date(dateFilter.endDate).setHours(23,59,59,999) : null;
        if (start && itemDate < start) return false;
        if (end && itemDate > end) return false;
        return true;
      });
    }

    switch (sortOption) {
      case 'priceHighToLow': result.sort((a, b) => b.price - a.price); break;
      case 'priceLowToHigh': result.sort((a, b) => a.price - b.price); break;
      case 'dateNewest': result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
      case 'dateOldest': result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); break;
      default: break;
    }

    setFilteredCottons(result);
  }, [cottons, dateFilter, sortOption]);

  // Vibrant Theme Config
  const cardThemes = [
    { 
      bg: 'bg-indigo-50', 
      text: 'text-indigo-600', 
      accent: 'bg-indigo-600',
      dateGradient: 'from-blue-600 to-indigo-600'
    },
    { 
      bg: 'bg-rose-50', 
      text: 'text-rose-600', 
      accent: 'bg-rose-600',
      dateGradient: 'from-pink-600 to-rose-600'
    },
    { 
      bg: 'bg-amber-50', 
      text: 'text-amber-600', 
      accent: 'bg-amber-600',
      dateGradient: 'from-orange-500 to-amber-600'
    },
    { 
      bg: 'bg-emerald-50', 
      text: 'text-emerald-600', 
      accent: 'bg-emerald-600',
      dateGradient: 'from-teal-500 to-emerald-600'
    }
  ];

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50">
        <div className="h-12 w-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-black uppercase text-xs tracking-[0.2em]">Authenticating Ledger...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 px-4 pt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-10 bg-indigo-600 rounded-full"></div>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Inventory Management</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Cotton <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Rates</span></h1>
          </div>
         
        </header>

        {/* --- FILTERS --- */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">From Date</label>
              <input type="date" value={dateFilter.startDate} onChange={(e) => setDateFilter(p => ({...p, startDate: e.target.value}))}
                className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">To Date</label>
              <input type="date" value={dateFilter.endDate} onChange={(e) => setDateFilter(p => ({...p, endDate: e.target.value}))}
                className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Market Sort</label>
              <div className="relative">
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 appearance-none font-bold"
                >
                  <option value="dateNewest">Newest First</option>
                  <option value="dateOldest">Oldest First</option>
                  <option value="priceHighToLow">High Price</option>
                  <option value="priceLowToHigh">Low Price</option>
                </select>
                <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* --- LIST --- */}
        {filteredCottons.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black text-slate-300">NO RECORDS FOUND</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCottons.map((item, index) => {
              const theme = cardThemes[index % cardThemes.length];
              const dateObj = new Date(item.createdAt);
              const day = dateObj.toLocaleDateString('en-IN', { day: '2-digit' });
              const month = dateObj.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase();
              const year = dateObj.getFullYear();

              return (
                <div key={item._id} className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:scale-[1.02] transition-all duration-500">
                  
                  {/* VIBRANT DATE BOX */}
                  <div className="absolute -top-5 left-8 flex shadow-2xl shadow-indigo-200">
                    <div className={`bg-gradient-to-br ${theme.dateGradient} text-white px-4 py-2 rounded-2xl flex flex-col items-center justify-center min-w-[70px] border-4 border-white`}>
                      <span className="text-[10px] font-black opacity-80 leading-none mb-1">{month}</span>
                      <span className="text-2xl font-black leading-none">{day}</span>
                      <span className="text-[10px] font-black mt-1 opacity-80">{year}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">{item.name}</h4>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Scale className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold uppercase tracking-widest">{item.quantity} KG STOCK</span>
                      </div>
                    </div>
                    <div className={`h-12 w-12 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.text}`}>
                      <Package className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Rate per KG */}
                    <div className="bg-slate-50 p-5 rounded-[2rem] flex justify-between items-center border border-slate-100">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Rate / Kg</p>
                        <p className="text-2xl font-black text-slate-900">₹{item.price}</p>
                      </div>
                      <TrendingUp className={`w-5 h-5 ${theme.text}`} />
                    </div>

                    {/* Rate per Quintal */}
                    <div className={`${theme.accent} p-6 rounded-[2rem] text-white shadow-xl transform group-hover:rotate-1 transition-transform`}>
                      <div className="flex items-center gap-2 mb-1">
                        <CalendarDays className="w-3 h-3 opacity-60" />
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Quintal Price (100kg)</p>
                      </div>
                      <p className="text-3xl font-black tracking-tighter">₹{(item.price * 100).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CottonList;