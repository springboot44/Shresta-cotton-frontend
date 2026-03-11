import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Added this import
import { useAuth } from './AuthContext';
import { 
  TrendingUp, 
  BadgeCheck, 
  Calendar, 
  RefreshCw, 
  AlertCircle, 
  Coins,
  MapPin,
  Clock
} from 'lucide-react';

const CottonListDay = () => {
  const [cottons, setCottons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { token } = useAuth();

  const fetchCottons = async () => {
    setIsRefreshing(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cotton/todaycotton`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCottons(res.data.cotton || []);
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

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a]">
        <div className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-400 mt-4 font-bold tracking-widest uppercase text-xs">Fetching Market Rates...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 pb-12">
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-black uppercase tracking-tighter mb-4 animate-pulse">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Live Market Price
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Today's <span className="text-blue-500">Cotton Rates</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-500 font-bold text-sm">
             <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
             </div>
             <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Main Market
             </div>
          </div>
        </div>

        {/* Main Price List */}
        {cottons.length === 0 ? (
          <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-16 text-center">
            <AlertCircle className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400">Market rates not updated yet.</h3>
            <p className="text-slate-600 mt-1">Please check back in a few minutes.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {cottons.map((item) => (
              <PriceCard key={item._id} item={item} />
            ))}
          </div>
        )}

        {/* Support Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-black text-white">Ready to sell?</h4>
                    <p className="text-blue-100 text-sm md:text-base opacity-80 mt-1">Contact our collection center for bulk deals and instant payment.</p>
                </div>
                <Link 
                    to="/contact" 
                    className="w-full md:w-auto text-center bg-white text-blue-700 px-10 py-4 rounded-2xl font-black hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                    Contact Now
                </Link>
            </div>
        </div>

        {/* Refresh Link */}
        <button 
          onClick={fetchCottons}
          className="mt-10 mx-auto flex items-center gap-2 text-slate-600 hover:text-blue-400 transition-colors font-bold text-sm"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Check for Price Updates
        </button>
      </div>
    </div>
  );
};

/* --- PRICE CARD COMPONENT --- */

const PriceCard = ({ item }) => {
  // Ensure we are working with a number
  const price = Number(item.price) || 0;
  const quintalPrice = (price * 100).toLocaleString('en-IN');
  
  return (
    <div className="group bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/40 transition-all duration-300">
      <div className="flex items-center gap-5 w-full md:w-auto">
        <div className="h-16 w-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <Coins className="w-8 h-8 text-blue-400 group-hover:text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white">{item.name}</h3>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] uppercase tracking-widest">
                <BadgeCheck className="w-3 h-3" />
                Verified Rate
            </div>
            <div className="flex items-center gap-1 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
        <div className="text-center md:text-right">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Rate / Kg</div>
          <div className="text-3xl font-black text-white">₹{price}</div>
        </div>

        <div className="h-12 w-px bg-white/10 hidden md:block"></div>

        <div className="text-center md:text-right bg-blue-500/10 px-6 py-3 rounded-2xl border border-blue-500/20">
          <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Per Quintal</div>
          <div className="text-3xl font-black text-blue-400">₹{quintalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CottonListDay;