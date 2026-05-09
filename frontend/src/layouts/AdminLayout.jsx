import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, ShoppingCart, Users, LogOut,
  Bell, Search, Menu, ShieldCheck, Briefcase, Layers,
  Truck, Store, Key, Settings, ChevronDown, ChevronRight,
  UserPlus, DollarSign, BarChart3, HelpCircle, FileText, Image, LayoutGrid, Layout
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSubMenu = (name) => {
    setOpenMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const menuGroups = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
        { name: 'Analytics', path: '/admin/analytics', icon: <BarChart3 size={18} /> },
        { name: 'Customers', path: '/admin/users', icon: <Users size={18} /> },
      ]
    },
    {
      title: 'STOREFRONT',
      items: [
        { name: 'Banner Manager', path: '/admin/storefront/banners', icon: <Image size={18} /> },
        { name: 'Category Chips', path: '/admin/storefront/chips', icon: <LayoutGrid size={18} /> },
        { 
          name: 'Home Sections', 
          icon: <Layout size={18} />,
          subItems: [
            { name: 'Still Looking', path: '/admin/storefront/sections/still-looking' },
            { name: 'Top Selection', path: '/admin/storefront/sections/top-selection' },
            { name: 'Spotlight', path: '/admin/storefront/sections/spotlight' },
            { name: 'Best Quality', path: '/admin/storefront/sections/best-quality' },
            { name: 'Keep Shopping', path: '/admin/storefront/sections/keep-shopping' },
          ]
        },
        { name: 'Category Manager', path: '/admin/categories', icon: <Layers size={18} /> },
      ]
    },
    {
      title: 'BUSINESS OPS',
      items: [
        {
          name: 'Inventory',
          icon: <Package size={18} />,
          subItems: [
            { name: 'Stock Levels', path: '/admin/inventory/all' },
            { name: 'Add Product', path: '/admin/inventory/add' },
          ]
        },
        { name: 'Orders', path: '/admin/orders', icon: <ShoppingCart size={18} /> },
      ]
    },
    {
      title: 'PARTNERS',
      items: [
        {
          name: 'Vendors',
          icon: <Store size={18} />,
          subItems: [
            { name: 'Active Vendors', path: '/admin/vendors/all' },
            { name: 'Onboarding Requests', path: '/admin/vendors/approval' },
          ]
        },
        {
          name: 'Delivery Partners',
          icon: <Truck size={18} />,
          subItems: [
            { name: 'All Partners', path: '/admin/delivery/all' },
            { name: 'Onboarding', path: '/admin/delivery/approval' },
          ]
        },
      ]
    },
    {
      title: 'CATALOG',
      items: [
        { name: 'Moderation', path: '/admin/products/moderation', icon: <Layers size={18} /> },
        { name: 'Categories', path: '/admin/categories', icon: <Briefcase size={18} /> },
      ]
    },
    {
      title: 'FINANCE',
      items: [
        { name: 'Earnings', path: '/admin/finance/earnings', icon: <DollarSign size={18} /> },
        { name: 'Payouts', path: '/admin/payouts', icon: <FileText size={18} /> },
        { name: 'Commission Rules', path: '/admin/finance/rules', icon: <Key size={18} /> },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
        { name: 'Logout', path: '/home', icon: <LogOut size={18} /> },
      ]
    }
  ];

  const getPageTitle = () => {
    const currentPath = location.pathname;
    for (const group of menuGroups) {
      for (const item of group.items) {
        if (item.path === currentPath) return item.name;
        if (item.subItems) {
          const sub = item.subItems.find(s => s.path === currentPath);
          if (sub) return sub.name;
        }
      }
    }
    return 'Admin Console';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex text-blue-900 font-nunito">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-white border-r border-slate-200 transition-all duration-500 ease-in-out flex flex-col fixed inset-y-0 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}
      >
        <div className="h-20 flex items-center px-6 gap-3">
          {isSidebarOpen ? (
            <Link to="/market/home" className="flex items-center flex-shrink-0">
              <motion.img
                src="/Logo (4).png"
                alt="Cocia"
                className="h-10 w-auto object-contain object-left"
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          ) : (
            <div className={`w-10 h-10 bg-blue-500 shadow-blue-100 rounded-xl shadow-xl flex items-center justify-center flex-shrink-0 transition-all`}>
              <ShieldCheck size={22} className="text-white" />
            </div>
          )}
        </div>

        <nav className="flex-1 py-2 px-3 space-y-6 overflow-y-auto no-scrollbar">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              {isSidebarOpen && (
                <h3 className="px-4 text-[9px] font-bold text-blue-300 uppercase tracking-[2px]">
                  {group.title}
                </h3>
              )}
              <div className="space-y-1.5">
                {group.items.map((item) => {
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isMenuOpen = !!openMenus[item.name];
                  const isActive = location.pathname === item.path ||
                    (hasSubItems && item.subItems.some(sub => location.pathname === sub.path));

                  if (hasSubItems) {
                    return (
                      <div key={item.name} className="space-y-1">
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${isActive
                              ? 'bg-blue-50 text-blue-500'
                              : 'text-blue-900/60 hover:bg-blue-50/50 hover:text-blue-500'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`flex-shrink-0 ${isActive ? 'text-blue-500' : ''}`}>{item.icon}</span>
                            {isSidebarOpen && <span className="font-bold text-[13px] font-raleway">{item.name}</span>}
                          </div>
                          {isSidebarOpen && (
                            <span className="opacity-40">{isMenuOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}</span>
                          )}
                        </button>

                        <AnimatePresence>
                          {isMenuOpen && isSidebarOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                              className="ml-10 space-y-1.5 border-l-2 border-slate-100 pl-5 overflow-hidden"
                            >
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className={`block py-2.5 text-[13px] font-bold transition-all ${location.pathname === sub.path
                                      ? 'text-blue-500'
                                      : 'text-slate-400 hover:text-blue-500'
                                    }`}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${isActive
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-100'
                          : 'text-blue-900/60 hover:bg-blue-50/50 hover:text-blue-500'
                        }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      {isSidebarOpen && <span className="font-bold text-[13px] font-raleway">{item.name}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-50">
            <div className={`p-4 bg-blue-50 rounded-2xl flex items-center gap-3`}>
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xs text-blue-500 border border-blue-100">
                 A
              </div>
              {isSidebarOpen && (
                <div>
                   <p className="text-[11px] font-bold text-blue-500 uppercase leading-none">System Status</p>
                   <p className="text-[10px] text-green-500 font-bold mt-1 flex items-center gap-1">
                      <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Live & Secure
                   </p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ease-in-out ${isSidebarOpen ? 'ml-72' : 'ml-24'}`}>
        {/* Topbar */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 px-10 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-10 h-10 border border-blue-50 flex items-center justify-center rounded-xl hover:bg-blue-50 transition-all shadow-sm active:scale-90"
            >
              <Menu size={18} className="text-blue-500" />
            </button>

            <div className="hidden lg:block">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight font-montserrat">{getPageTitle()}</h2>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 font-raleway">
                Admin Management • Verified Session
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search global records..."
                className="bg-blue-50/50 border-none rounded-[20px] py-3.5 pl-14 pr-8 text-[14px] font-bold focus:ring-4 focus:ring-blue-100 w-96 shadow-inner transition-all text-blue-900"
              />
            </div>

            <div className="flex items-center gap-3">
               <button className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm relative transition-all">
                  <Bell size={20} />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
               </button>
               <div className={`w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all`}>
                 A
               </div>
            </div>
          </div>
        </header>

        <main className="p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
