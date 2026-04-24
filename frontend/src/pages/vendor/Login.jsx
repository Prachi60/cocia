import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/vendor/home');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center pt-8 bg-white md:bg-gray-50">
      {/* Amazon Logo */}
      <Link to="/vendor/home" className="mb-6">
        <h1 className="text-3xl font-bold italic text-black">
          Shop<span className="text-accent">Hub</span>
        </h1>
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-[350px] bg-white border border-gray-300 rounded-lg p-6 shadow-sm md:shadow-none">
        <h2 className="text-2xl font-medium mb-4">Sign in</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold mb-1">Email or mobile phone number</label>
            <input 
              type="text" 
              required
              className="w-full p-2 border border-gray-400 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold">Password</label>
              <a href="#" className="text-xs text-blue-600 hover:text-accent hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full p-2 border border-gray-400 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-1.5 bg-primary hover:bg-primary-hover border border-gray-400 rounded shadow-sm text-sm font-medium transition-colors"
          >
            Continue
          </button>
        </form>

        <p className="text-xs mt-4 text-gray-700 leading-tight">
          By continuing, you agree to ShopHub's <a href="#" className="text-blue-600 hover:underline">Conditions of Use</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>.
        </p>

        <div className="mt-6 flex items-center space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">New to ShopHub?</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Link 
          to="/vendor/signup"
          className="mt-4 block w-full py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded shadow-sm text-sm text-center font-medium transition-colors"
        >
          Create your ShopHub account
        </Link>
      </div>

      {/* Footer Links */}
      <div className="mt-10 py-6 border-t border-gray-200 w-full flex flex-col items-center bg-gray-50 md:bg-transparent">
        <div className="flex space-x-6 mb-2">
          <a href="#" className="text-xs text-blue-600 hover:underline">Conditions of Use</a>
          <a href="#" className="text-xs text-blue-600 hover:underline">Privacy Notice</a>
          <a href="#" className="text-xs text-blue-600 hover:underline">Help</a>
        </div>
        <p className="text-[10px] text-gray-500">© 2026-2027, ShopHub.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;
