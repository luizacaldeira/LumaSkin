'use client'

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login data:', formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex min-h-screen justify-center items-center p-4 animated-gradient ">
            <Link 
                href="/" 
                className="absolute top-6 left-6 flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
            >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Home</span>
            </Link>

            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl px-8 pb-8">
                    <div className="text-center mb-8">
                        <img src="/login-top.png"/>
                        <h1 className="text-4xl font-radley italic text-[#493a64] mb-2">
                            LumaSkin
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Sign in to your LumaSkin account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#493a64] focus:border-transparent transition-all duration-200 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#493a64] focus:border-transparent transition-all duration-200 outline-none"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#493a64] focus:ring-[#493a64] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#493a64] hover:text-[#312742] transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#493a64] hover:bg-[#312742] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#493a64] focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}