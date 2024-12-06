import React from 'react';
import { Book, Heart, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: Book,
    title: 'Original Sanskrit',
    description: 'Read the original Sanskrit verses with transliteration'
  },
  {
    icon: Heart,
    title: 'Multiple Translations',
    description: 'Access various authentic translations and commentaries'
  },
  {
    icon: Sun,
    title: 'Daily Wisdom',
    description: 'Discover new insights from the Gita every day'
  }
];

const Features = () => {
  const { darkMode } = useTheme();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-lg shadow-xl p-6 text-center`}
        >
          <feature.icon className={`w-12 h-12 mx-auto mb-4 ${
            darkMode ? 'text-orange-400' : 'text-orange-600'
          }`} />
          <h3 className={`text-xl font-bold mb-2 ${
            darkMode ? 'text-orange-400' : 'text-orange-800'
          }`}>
            {feature.title}
          </h3>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;