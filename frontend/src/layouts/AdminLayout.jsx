import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  LogOut,
  Bell,
  Search,
  Menu,
  ShieldCheck,
  Briefcase,
  Layers,
  Truck,
  Store,
  Key,
  Settings,
  ChevronDown,
  ChevronRight,
  UserPlus,
  TruckIcon
} from 'lucide-react';

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
      ]
    },
    {
      title: 'MANAGEMENT',
      items: [
        { name: 'Sub Admins', path: '/admin/sub-admins', icon: <Users size={18} /> },
        { name: 'Business Rules', path: '/admin/rules', icon: <Briefcase size={18} /> },
        { name: 'Inventory', path: '/admin/products', icon: <Layers size={18} /> },
        { name: 'Orders', path: '/admin/orders', icon: <ShoppingCart size={18} /> },
        {
          name: 'Vendor Management',
          icon: <Store size={18} />,
          subItems: [
            { name: 'All Vendors', path: '/admin/vendors/all' },
            { name: 'Add Vendor', path: '/admin/vendors/add' },
          ]
        },
        {
          name: 'Delivery Management',
          icon: <Truck size={18} />,
          subItems: [
            { name: 'All Deliveries', path: '/admin/delivery/all' },
            { name: 'Add Delivery partner', path: '/admin/delivery/add' },
          ]
        },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Permissions', path: '/admin/permissions', icon: <Key size={18} /> },
        { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
        { name: 'Logout', path: '/admin/auth', icon: <LogOut size={18} />, isLogout: true },
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
    return 'Admin Panel';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex text-slate-700 font-sans">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col fixed inset-y-0 z-50`}
      >
        <div className="h-20 flex items-center px-6 gap-3">
          <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={24} className="text-slate-800" />
          </div>
          {isSidebarOpen && (
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="font-bold text-slate-900 leading-none">Kitchen Appliance</h1>
              <p className="text-[10px] text-slate-500 mt-1 uppercase font-semibold">Admin Panel</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-4 px-3 space-y-8 overflow-y-auto no-scrollbar">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              {isSidebarOpen && (
                <h3 className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {group.title}
                </h3>
              )}
              <div className="space-y-1">
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
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${isActive
                              ? 'bg-slate-100 text-slate-900'
                              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex-shrink-0">{item.icon}</span>
                            {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
                          </div>
                          {isSidebarOpen && (
                            <span>{isMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
                          )}
                        </button>

                        {isMenuOpen && isSidebarOpen && (
                          <div className="ml-9 space-y-1 border-l border-slate-200 pl-4">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block py-2 text-sm transition-colors ${location.pathname === sub.path
                                    ? 'text-black font-bold'
                                    : 'text-slate-500 hover:text-slate-900'
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                          ? 'bg-black text-white shadow-lg'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Menu size={20} />
            </button>

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-slate-900">{getPageTitle()}</h2>
              <p className="text-xs text-slate-500">Sticky navigation with centralized operations and partner oversight.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-100 border-none rounded-xl py-2.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-black/5 w-80 shadow-inner"
              />
            </div>

            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-black/20 cursor-pointer">
              A
            </div>
          </div>
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
