import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { Plus, Settings, LogOut, Activity, Clock, User, TrendingUp, Package, Shield } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen w-screen font-inter bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 bg-white/10 backdrop-blur-2xl border-r border-white/10 shadow-2xl flex flex-col relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Top: Logo + User Info */}
        <div className="relative p-8 border-b border-white/10">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-xl transform hover:scale-110 transition-all duration-300 hover:rotate-12">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Cotton Admin</h2>
              <p className="text-sm text-blue-200 font-medium">Management Hub</p>
            </div>
          </div>

          {/* Enhanced User Info Card */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 p-6 rounded-3xl shadow-inner border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-blue-200">Welcome back</p>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-white font-bold text-xl mb-3">{user?.username || 'Guest'}</p>
              <span className="text-xs bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 px-4 py-2 rounded-full inline-block font-medium border border-emerald-400/30 backdrop-blur-sm">
                {user?.role || 'user'}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex-1 p-8 space-y-4 overflow-y-auto">
          <Link
            to="/addcotton"
            className="group flex items-center space-x-4 px-6 py-5 rounded-2xl text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-blue-400/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300 border border-blue-400/20 group-hover:border-blue-400/40 relative z-10">
              <Plus className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
            </div>
            <span className="text-lg font-semibold relative z-10">Add Cotton</span>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 relative z-10">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
          </Link>

          <Link
            to="/settings"
            className="group flex items-center space-x-4 px-6 py-5 rounded-2xl text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-purple-400/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300 border border-purple-400/20 group-hover:border-purple-400/40 relative z-10">
              <Settings className="w-6 h-6 text-purple-300 group-hover:text-purple-200" />
            </div>
            <span className="text-lg font-semibold relative z-10">Settings</span>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 relative z-10">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
          </Link>
        </nav>

        {/* Enhanced Logout Button */}
        <div className="relative p-8 border-t border-white/10">
          <button
            onClick={logout}
            className="w-full bg-gradient-to-r from-red-500/80 via-red-600/80 to-red-700/80 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white text-sm font-semibold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-red-400/30 hover:border-red-400/50 backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="flex items-center justify-center space-x-3 relative z-10">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12 relative">
        {/* Animated background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl pointer-events-none animate-pulse delay-500"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
              Dashboard
            </h1>
            <p className="text-2xl text-blue-200 font-medium mb-8">Manage your cotton inventory with precision and style.</p>
            
            {/* Enhanced Status Bar */}
            <div className="flex items-center space-x-8 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-400 animate-ping"></div>
                </div>
                <span className="text-sm font-semibold text-green-300">System Online</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-200">Last updated:</span>
                <span className="text-sm font-semibold text-white">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="group bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Package className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cotton Entries</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">Add and view your cotton inventory records with detailed tracking and comprehensive management capabilities.</p>
                
                {/* Action indicator */}
                <div className="flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors duration-300">
                  <span className="text-base">Manage Inventory</span>
                  <TrendingUp className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Settings</h2>
                </div>
                <p className="text-purple-100 text-lg leading-relaxed mb-8">Configure your user role, preferences, and system settings for optimal workflow management and efficiency.</p>
                
                {/* Action indicator */}
                <div className="flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors duration-300">
                  <span className="text-base">Configure System</span>
                  <TrendingUp className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl p-8 border border-emerald-400/30 backdrop-blur-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-300 font-semibold text-lg">Active Status</span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-emerald-200">Online</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl p-8 border border-blue-400/30 backdrop-blur-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-300 font-semibold text-lg">Quick Access</span>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-blue-200">Ready</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30 backdrop-blur-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/30 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-300 font-semibold text-lg">User Role</span>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-purple-200 capitalize">{user?.role || 'User'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;