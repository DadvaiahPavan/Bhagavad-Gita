import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search, 
  BookOpen, 
  Home, 
  Book, 
  Info,
  BookText
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Chapters', href: '/chapters', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Search', href: '/search', icon: Search },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Book className={`w-8 h-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'} transition-colors duration-200`} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'} transition-colors duration-200`}>
                श्रीमद्भगवद्गीता
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-orange-100 text-orange-600 dark:bg-gray-800 dark:text-orange-400'
                    : 'text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5 mr-1.5" />
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-orange-100 text-orange-600 dark:bg-gray-800 dark:text-orange-400'
                    : 'text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-1.5" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;