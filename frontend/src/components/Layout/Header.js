import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Search
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import toast from 'react-hot-toast';

const Header = () => {
  const { state, actions } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    actions.logout();
    toast.success('Logged out successfully');
    navigate('/');
    setIsProfileOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
      // Implement search functionality
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Dashboard';
      case '/projects': return 'Projects';
      case '/analytics': return 'Analytics';
      case '/settings': return 'Settings';
      case '/profile': return 'Profile';
      default: return 'Qalany';
    }
  };

  return (
    <header className="bg-white dark:bg-qalany-navy shadow-lg border-b border-qalany-light-gray dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Q</span>
              </div>
              <span className="text-xl font-bold text-qalany-navy dark:text-white">Qalany</span>
            </Link>

            {/* Desktop Navigation */}
            {state.user.isAuthenticated && (
              <nav className="hidden md:flex space-x-6">
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/dashboard' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-qalany-orange'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/projects" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/projects' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-qalany-orange'
                  }`}
                >
                  Projects
                </Link>
                <Link 
                  to="/analytics" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/analytics' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-qalany-orange'
                  }`}
                >
                  Analytics
                </Link>
              </nav>
            )}
          </div>

          {/* Page Title for Mobile */}
          <div className="md:hidden">
            <h1 className="text-lg font-semibold text-qalany-navy dark:text-white">
              {getPageTitle()}
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            {state.user.isAuthenticated && (
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                  />
                </div>
              </form>
            )}

            {/* Theme Toggle */}
            <button
              onClick={actions.toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {state.settings.darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {state.user.isAuthenticated ? (
              <>
                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Bell className="w-5 h-5" />
                    {state.notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {state.notifications.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-full flex items-center justify-center">
                      {state.user.avatar ? (
                        <img src={state.user.avatar} alt="Profile" className="w-8 h-8 rounded-full" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-900 dark:text-white">
                      {state.user.name || 'User'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
                      >
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="my-1 border-gray-200 dark:border-gray-700" />
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-qalany-orange transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-qalany-orange hover:bg-yellow-400 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && state.user.isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4"
            >
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === '/dashboard' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === '/projects' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === '/analytics' 
                      ? 'text-qalany-orange bg-qalany-orange bg-opacity-10' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Analytics
                </Link>
                
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="px-3 py-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                    />
                  </div>
                </form>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;