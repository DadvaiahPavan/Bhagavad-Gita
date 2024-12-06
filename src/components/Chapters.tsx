import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface Chapter {
  chapter_number: number;
  name: string;
  name_meaning: string;
  name_translation: string;
  name_transliterated: string;
  verses_count: number;
  chapter_summary: string;
  chapter_summary_hindi: string;
}

const chapterColors = [
  'bg-red-100 hover:bg-red-200',
  'bg-blue-100 hover:bg-blue-200',
  'bg-green-100 hover:bg-green-200',
  'bg-yellow-100 hover:bg-yellow-200',
  'bg-purple-100 hover:bg-purple-200',
  'bg-pink-100 hover:bg-pink-200',
  'bg-indigo-100 hover:bg-indigo-200',
  'bg-orange-100 hover:bg-orange-200',
  'bg-teal-100 hover:bg-teal-200',
  'bg-cyan-100 hover:bg-cyan-200',
  'bg-lime-100 hover:bg-lime-200',
  'bg-emerald-100 hover:bg-emerald-200',
  'bg-sky-100 hover:bg-sky-200',
  'bg-violet-100 hover:bg-violet-200',
  'bg-fuchsia-100 hover:bg-fuchsia-200',
  'bg-rose-100 hover:bg-rose-200',
  'bg-amber-100 hover:bg-amber-200',
  'bg-slate-100 hover:bg-slate-200',
];

const chapterImages = [
  'https://i.ibb.co/MyTX35j/DALL-E-2024-11-16-23-58-28-A-serene-and-balanced-landscape-representing-Sankhya-Yoga-The-image-shows.webp', // Arjuna's Dilemma
  'https://i.ibb.co/HDsXXPY/DALL-E-2024-11-16-23-58-27-A-battlefield-scene-with-a-warrior-Arjuna-visibly-conflicted-as-Lord-Kris.webp', // Sankhya Yoga
  'https://images.pexels.com/photos/6591166/pexels-photo-6591166.jpeg', // Karma Yoga
  'https://images.pexels.com/photos/6591401/pexels-photo-6591401.jpeg', // Jnana Yoga
  'https://images.pexels.com/photos/6591451/pexels-photo-6591451.jpeg', // Karma Sanyasa Yoga
  'https://images.pexels.com/photos/6591469/pexels-photo-6591469.jpeg', // Dhyana Yoga
  'https://images.pexels.com/photos/6591478/pexels-photo-6591478.jpeg', // Jnana Vijnana Yoga
  'https://images.pexels.com/photos/6591486/pexels-photo-6591486.jpeg', // Aksara Brahma Yoga
  'https://images.pexels.com/photos/6591494/pexels-photo-6591494.jpeg', // Raja Vidya Yoga
  'https://images.pexels.com/photos/6591503/pexels-photo-6591503.jpeg', // Vibhuti Yoga
  'https://images.pexels.com/photos/6591511/pexels-photo-6591511.jpeg', // Viswarupa Darsana Yoga
  'https://images.pexels.com/photos/6591520/pexels-photo-6591520.jpeg', // Bhakti Yoga
  'https://images.pexels.com/photos/6591528/pexels-photo-6591528.jpeg', // Ksetra Ksetrajna Yoga
  'https://images.pexels.com/photos/6591537/pexels-photo-6591537.jpeg', // Gunatraya Vibhaga Yoga
  'https://images.pexels.com/photos/6591545/pexels-photo-6591545.jpeg', // Purusottama Yoga
  'https://images.pexels.com/photos/6591554/pexels-photo-6591554.jpeg', // Daivasura Sampad Vibhaga Yoga
  'https://images.pexels.com/photos/6591562/pexels-photo-6591562.jpeg', // Sraddhatraya Vibhaga Yoga
  'https://images.pexels.com/photos/6591571/pexels-photo-6591571.jpeg', // Moksha Sanyasa Yoga
];

const Chapters = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/', {
          headers: {
            'X-RapidAPI-Key': 'cd4e31604emsh7ed111fe92eb991p144247jsn974f92dca7e8',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
          }
        });
        setChapters(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chapters:', error);
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <ThreeDots color="#EA580C" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-orange-400' : 'text-orange-800'
          }`}
        >
          {language === 'en' ? 'Chapters of Bhagavad Gita' : 'भगवद्गीता के अध्याय'}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.chapter_number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/chapter/${chapter.chapter_number}`}>
                <div className={`${chapterColors[index]} ${
                  darkMode ? 'bg-opacity-20 hover:bg-opacity-30' : ''
                } rounded-2xl p-8 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-orange-400' : 'bg-orange-500'
                    } text-white`}>
                      <span className="text-2xl font-bold">{chapter.chapter_number}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        darkMode ? 'bg-gray-800 text-orange-400' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {chapter.verses_count} {language === 'en' ? 'verses' : 'श्लोक'}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`space-y-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    <h2 className="text-2xl font-bold">
                      {language === 'en' ? chapter.name_translation : chapter.name}
                    </h2>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {chapter.name_transliterated}
                    </p>
                    <p className={`text-sm line-clamp-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {language === 'en' ? chapter.chapter_summary : chapter.chapter_summary_hindi}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;