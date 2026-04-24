import React from 'react';
import { ArrowUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: 'Rs 45,231', change: '+12.5%', color: 'text-slate-900' },
    { title: 'Total Orders', value: '451', change: '+5.2%', color: 'text-slate-900' },
    { title: 'Customers', value: '2,543', change: '+8.1%', color: 'text-slate-900' },
    { title: 'Avg Revenue', value: 'Rs 1,240', change: '+3.8%', color: 'text-slate-900' },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-2">A clean view of sales, orders, and operational activity.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-40">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium text-sm">{stat.title}</span>
              <span className="text-slate-900 text-xs font-bold flex items-center gap-1">
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col">
          <h3 className="font-bold text-slate-900 text-lg mb-8">Revenue Trend</h3>
          <div className="flex-1 flex items-end justify-between gap-4 h-64 border-l border-b border-slate-100 pb-2 pl-2 relative">
            {/* Mock Line Chart with SVG */}
            <svg className="absolute inset-0 w-full h-full pr-4 pb-4" preserveAspectRatio="none">
              <path 
                d="M 0 180 Q 50 150 100 120 T 200 140 T 300 100 T 400 80 T 500 70 T 600 65" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              <path 
                d="M 0 180 Q 50 150 100 120 T 200 140 T 300 100 T 400 80 T 500 70 T 600 65 V 200 H 0 Z" 
                fill="url(#gradient)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {/* Points */}
              {[0, 100, 200, 300, 400, 500, 600].map((x, i) => (
                <circle key={i} cx={x} cy={180 - (i * 20)} r="4" fill="#3b82f6" stroke="white" strokeWidth="2" />
              ))}
            </svg>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-400 font-bold px-4 py-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
            <div className="absolute left-[-30px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 font-bold py-4">
              <span>10000</span><span>7500</span><span>5000</span><span>2500</span><span>0</span>
            </div>
          </div>
        </div>

        {/* Product Category Chart */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col">
          <h3 className="font-bold text-slate-900 text-lg mb-8">Product Category</h3>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Mock Pie Chart with SVG */}
            <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="180 251" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#60a5fa" strokeWidth="20" strokeDasharray="70 251" strokeDashoffset="-180" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#93c5fd" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-250" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1d4ed8" strokeWidth="20" strokeDasharray="25 251" strokeDashoffset="-300" />
            </svg>
            {/* Overlay for inner white space to make it a donut if desired, but screenshot shows pie */}
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full"></div>Electronics</div>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400 rounded-full"></div>Furniture</div>
              <span className="font-bold">25%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-200 rounded-full"></div>Kitchen</div>
              <span className="font-bold">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
