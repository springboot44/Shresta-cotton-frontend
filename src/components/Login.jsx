import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path as necessary

import axios from 'axios'; // Ensure you have axios installed
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const { login } = useAuth(); // Use the login function from AuthContext
    const navigate = useNavigate(); // Use navigate for redirection

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { email, password, rememberMe });
      

          const sentData=async ()=>{

            try {

                const response=await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`,{email,password,rememberMe});

              const {user,token}= response.data;
                login({token,user});

               navigate('/dashboard');

                if(response.data.success){
                    alert("Login successful!");
                    // Redirect to dashboard or home page
                }

            } catch (error) {
                console.error('Error during login:', error);
                alert("Login failed. Please try again.");
            }
          }
          sentData();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 p-4">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/10"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-32 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
            
            {/* Main signin card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Sign in to your account</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                                required
                            />
                        </div>
                        
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                                required
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                Forgot password?
                            </a>
                        </div>
                        
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                        

                    </div>
                    
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;