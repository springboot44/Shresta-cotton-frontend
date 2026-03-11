import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { 
  Plus, Settings, LogOut, Activity, Clock, User, 
  TrendingUp, Package, Shield, Trash2, ChevronRight, LayoutDashboard 
} from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex h-screen w-screen font-inter bg-[#0f172a] overflow-hidden text-slate-200">
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col z-20">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CottonPro</span>
          </div>

          {/* User Profile Summary */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center font-bold text-white">
                {user?.username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{user?.username || 'Admin User'}</p>
                <p className="text-[10px] uppercase tracking-widest text-blue-400 font-black">{user?.role || 'User'}</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-2 mb-4">Main Menu</p>
            
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all">
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-semibold">Overview</span>
            </Link>

            {isAdmin && (
              <>
                <Link to="/addcotton" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                  <Plus className="w-5 h-5 group-hover:text-blue-400" />
                  <span>Add Inventory</span>
                </Link>
                
                <Link to="/deletecotton" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                  <Trash2 className="w-5 h-5 group-hover:text-red-400" />
                  <span>Remove Stock</span>
                </Link>
              </>
            )}

            <Link to="/settings" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
              <Settings className="w-5 h-5 group-hover:text-purple-400" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button 
            onClick={logout}
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold border border-red-500/20"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="p-8 md:p-12 max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Workspace</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[11px] font-bold text-emerald-500 uppercase">Live System</span>
                </div>
                <span className="text-slate-500 text-sm font-medium tracking-tight">
                  Updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            <div className="flex bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/5 p-2">
              <div className="px-6 py-2 border-r border-white/10 text-center">
                <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Status</p>
                <p className="text-white font-bold">Active</p>
              </div>
              <div className="px-6 py-2 text-center">
                <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Role</p>
                <p className="text-blue-400 font-bold capitalize">{user?.role || 'Guest'}</p>
              </div>
            </div>
          </header>

          {/* Quick Action Cards (Only for Admins) */}
          {isAdmin && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Add Card */}
              <Link to="/addcotton" className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02]">
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                  <Plus className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Add New Stock</h3>
                  <p className="text-blue-100/80 text-sm max-w-[240px]">Quickly update inventory with new cotton varieties and pricing.</p>
                  <div className="mt-6 flex items-center text-white text-sm font-bold">
                    Launch Form <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Delete Card */}
              <Link to="/deletecotton" className="group relative overflow-hidden bg-slate-800 p-8 rounded-[2rem] border border-white/5 transition-all hover:border-red-500/30">
                <div className="absolute right-[-20px] bottom-[-20px] text-red-500/5 transform group-hover:scale-110 transition-transform duration-500">
                  <Trash2 className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                    <Trash2 className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Remove Inventory</h3>
                  <p className="text-slate-400 text-sm max-w-[240px]">Review current marketplace stock and delete outdated entries.</p>
                  <div className="mt-6 flex items-center text-red-400 text-sm font-bold">
                    Open Manager <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Platform Health', value: 'Optimal', icon: Activity, color: 'text-emerald-400' },
              { label: 'Security Level', value: 'High', icon: Shield, color: 'text-blue-400' },
              { label: 'Market Pulse', value: '+12.5%', icon: TrendingUp, color: 'text-purple-400' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;