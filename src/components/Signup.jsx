import React, { useState } from 'react';
import axios from 'axios'; // Ensure you have axios installed

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { username, email, password });
        // Add your form submission logic here



        const sentData=async ()=>{

             try {
                const response=await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`,{username,email,password});

                console.log(response.data);
                if(response.data.success){
                    alert("Signup successful!");
                    // Redirect to login or home page
                }

             } catch (error) {
                console.error('Error during signup:', error);
                alert("Signup failed. Please try again.");
             }
        }
        sentData();
    };

  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Main signup card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                        <p className="text-gray-600">Join us and start your journey</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                                required
                            />
                        </div>
                        
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                                required
                            />
                        </div>
                        
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                                required
                            />
                        </div>
                        
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Create Account
                        </button>
                    </div>
                    
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;