import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import HeroSlider from './HeroSlider';
import Features from './Features';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="w-full">
        <HeroSlider />
      </div>
      
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-6`}>
              श्रीमद्भगवद्गीता
            </h1>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-orange-300' : 'text-gray-700'} mb-8`}>
              The Song of God
            </p>
            <Link
              to="/chapters"
              className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-lg"
            >
              Start Reading <ArrowRight className="ml-2" />
            </Link>
          </motion.div>

          <Features />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8`}
            >
              <img 
                src="https://i.ibb.co/HBx3dBN/Save-Clip-App-465938369-1123693555778986-5056213768741715337-n.jpg" 
                alt="Krishna and Arjuna"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-4`}>
                What is Bhagavad Gita?
              </h2>
              <p className={`${darkMode ? 'text-orange-300' : 'text-gray-700'} leading-relaxed`}>
                The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata. 
                It is a sacred text that contains the direct message of God. The Gita is set in a narrative 
                framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Lord Krishna.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8`}
            >
              <img 
                src="https://i.ibb.co/HqTdnPJ/Save-Clip-App-466377927-1284059662609300-5430442516650426626-n.jpg" 
                alt="Meditation"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-4`}>
                Why Read Bhagavad Gita?
              </h2>
              <p className={`${darkMode ? 'text-orange-300' : 'text-gray-700'} leading-relaxed`}>
                The Bhagavad Gita provides practical guidance for modern life. It teaches us about duty, 
                righteousness, karma yoga, and the path to self-realization. Its timeless wisdom helps us 
                understand our purpose and achieve peace in our daily lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} text-center mb-12`}>
            Daily Wisdom
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Karma Yoga', 'Bhakti Yoga', 'Jnana Yoga'].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl p-6`}
              >
                <h3 className={`text-xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-4`}>
                  {topic}
                </h3>
                <p className={`${darkMode ? 'text-orange-300' : 'text-gray-700'}`}>
                  Discover the path of {topic.toLowerCase()} and its significance in daily life through the teachings of the Bhagavad Gita.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;