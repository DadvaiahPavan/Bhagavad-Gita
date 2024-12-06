import React from 'react';
import { Github, Heart } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-orange-800'} text-white py-12`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">श्रीमद्भगवद्गीता</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-orange-200'}>
              Ancient wisdom for modern life
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a
                href="https://github.com/DadvaiahPavan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'hover:text-orange-400' : 'hover:text-orange-200'} transition-colors`}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dadvaiah-pavan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'hover:text-orange-400' : 'hover:text-orange-200'} transition-colors`}
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-orange-700 text-center">
          <p className={`flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-orange-200'} text-sm`}>
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Pavan Dadvaiah
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-orange-200'} text-sm`}>
            {new Date().getFullYear()} Bhagavad Gita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;