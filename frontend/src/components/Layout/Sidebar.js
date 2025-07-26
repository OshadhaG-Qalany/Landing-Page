import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderKanban, 
  BarChart3, 
  Settings, 
  User,
  Bell,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { state, actions } = useApp();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const bottomMenuItems = [
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: HelpCircle, label: 'Help', path: '/help' }
  ];

  const handleLogout = () => {
    actions.logout();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -300,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-qalany-navy shadow-xl z-50 lg:relative lg:translate-x-0 lg:opacity-100 lg:shadow-none border-r border-qalany-light-gray dark:border-gray-700"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-qalany-light-gray dark:border-gray-700">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-qalany-navy dark:text-white">Qalany</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Digital Control</p>
              </div>
            </Link>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-qalany-light-gray dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-full flex items-center justify-center">
                {state.user.avatar ? (
                  <img src={state.user.avatar} alt="Profile" className="w-12 h-12 rounded-full" />
                ) : (
                  <User className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-qalany-navy dark:text-white truncate">
                  {state.user.name || 'Welcome User'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {state.user.email || 'user@example.com'}
                </p>
                <span className="inline-block px-2 py-1 text-xs bg-qalany-orange bg-opacity-20 text-qalany-orange rounded-full mt-1">
                  {state.user.plan || 'Free'} Plan
                </span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-4">
              Main Menu
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-qalany-orange text-white shadow-glow-orange'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-qalany-orange'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-qalany-orange'}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* Bottom Menu Items */}
            <div className="pt-6">
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-4">
                Support
              </div>
              {bottomMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-qalany-orange text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-qalany-orange'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-qalany-orange'}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-qalany-light-gray dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 p-3 w-full rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900 dark:hover:bg-opacity-20 transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>

            {/* Upgrade Card */}
            <div className="mt-4 p-4 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-xl text-white">
              <h4 className="font-semibold text-sm mb-2">Upgrade to Pro</h4>
              <p className="text-xs opacity-90 mb-3">Unlock advanced features and unlimited projects</p>
              <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-200">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;