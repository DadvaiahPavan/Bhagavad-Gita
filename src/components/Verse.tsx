import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ArrowRight, Volume2 } from 'lucide-react';
import { ThreeDots } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Verse {
  verse_number: number;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: Array<{
    author_name: string;
    description: string;
  }>;
}

const Verse = () => {
  const { chapterNum, verseNum } = useParams();
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNum}/verses/${verseNum}/`,
          {
            headers: {
              'X-RapidAPI-Key': 'cd4e31604emsh7ed111fe92eb991p144247jsn974f92dca7e8',
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
            }
          }
        );
        setVerse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching verse:', error);
        setLoading(false);
      }
    };

    fetchVerse();
  }, [chapterNum, verseNum]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <ThreeDots color="#EA580C" height={80} width={80} />
      </div>
    );
  }

  if (!verse) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">Verse not found</h2>
        <Link to="/chapters" className="text-orange-600 hover:text-orange-700 mt-4 inline-block">
          Return to Chapters
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto pt-20 px-4"
    >
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8 mb-8`}>
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-2`}>
            Chapter {chapterNum}, Verse {verse.verse_number}
          </h1>
          <div className="flex justify-center space-x-4 mt-4">
            {verse.verse_number > 1 && (
              <Link
                to={`/chapter/${chapterNum}/verse/${Number(verseNum) - 1}`}
                className={`flex items-center ${darkMode ? 'text-orange-400' : 'text-orange-600'} hover:text-orange-700`}
              >
                <ArrowLeft className="mr-1" /> Previous Verse
              </Link>
            )}
            <Link
              to={`/chapter/${chapterNum}/verse/${Number(verseNum) + 1}`}
              className={`flex items-center ${darkMode ? 'text-orange-400' : 'text-orange-600'} hover:text-orange-700`}
            >
              Next Verse <ArrowRight className="ml-1" />
            </Link>
            {Number(chapterNum) < 18 && (
              <Link
                to={`/chapter/${Number(chapterNum) + 1}/verse/1`}
                className={`flex items-center ${darkMode ? 'text-orange-400' : 'text-orange-600'} hover:text-orange-700`}
              >
                Next Chapter <ArrowRight className="ml-1" />
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${darkMode ? 'bg-gray-900' : 'bg-orange-50'} p-6 rounded-lg`}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                Sanskrit
              </h2>
              <button className={`${darkMode ? 'text-orange-400' : 'text-orange-600'} hover:text-orange-700`}>
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{verse.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${darkMode ? 'bg-gray-900' : 'bg-orange-50'} p-6 rounded-lg`}
          >
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-3`}>
              Transliteration
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{verse.transliteration}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-900' : 'bg-orange-50'} p-6 rounded-lg`}
          >
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-3`}>
              Word Meanings
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{verse.word_meanings}</p>
          </motion.div>

          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
              Translations
            </h2>
            {verse.translations.map((translation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-orange-100'} p-6 rounded-lg`}
              >
                <h3 className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-700'} mb-2`}>
                  {translation.author_name}
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{translation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Verse;