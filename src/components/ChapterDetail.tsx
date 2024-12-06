import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface Verse {
  verse_number: number;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: {
    author_name: string;
    description: string;
  }[];
  commentary: {
    author_name: string;
    description: string;
  }[];
}

interface Chapter {
  chapter_number: number;
  name: string;
  name_meaning: string;
  name_translation: string;
  name_transliterated: string;
  verses_count: number;
  chapter_summary: string;
  chapter_summary_hindi: string;
  verses: Verse[];
}

const chapterImages = [
  'https://i.ibb.co/jHsSnG6/Arjuna-doing-yoga.jpg',
  'https://i.ibb.co/HDsXXPY/DALL-E-2024-11-16-23-58-27-A-battlefield-scene-with-a-warrior-Arjuna-visibly-conflicted-as-Lord-Kris.webp',
  'https://i.ibb.co/CHrPB5N/karma-yoga.webp',
  'https://i.ibb.co/LhPRMGH/Krishna-Getha-upadesh.jpg',
  'https://i.ibb.co/4WRf6mD/DALL-E-2024-11-17-13-52-17-A-divine-scene-from-Indian-philosophy-depicting-Lord-Krishna-teaching-the.webp',
  'https://i.ibb.co/yWjvXk7/DALL-E-2024-11-17-13-00-34-A-divine-depiction-of-Lord-Krishna-from-the-Bhagavad-Gita-sitting-serenel.webp',
  'https://i.ibb.co/3hj9qvS/DALL-E-2024-11-17-13-54-29-A-divine-and-majestic-scene-depicting-Lord-Krishna-revealing-himself-as-t.webp',
  'https://i.ibb.co/yyr0T4G/DALL-E-2024-11-17-13-57-48-A-spiritual-and-serene-scene-depicting-Lord-Krishna-radiant-in-divine-lig.webp',
  'https://i.ibb.co/fFX5FqZ/DALL-E-2024-11-17-13-59-44-A-majestic-depiction-of-Lord-Krishna-in-a-divine-form-surrounded-by-an-au.webp',
  'https://i.ibb.co/Nr9MQw3/Krishna-revealing-Himself-as-the-cause-of-all-causes-describing-His-various-manifestations-and-opule.jpg',
  'https://i.ibb.co/HqTdnPJ/Save-Clip-App-466377927-1284059662609300-5430442516650426626-n.jpg',
  'https://i.ibb.co/JdbZ8jQ/DALL-E-2024-11-17-17-13-35-A-realistic-and-spiritual-depiction-of-Chapter-12-of-the-Bhagavad-Gita-ti.webp',
  'https://i.ibb.co/xD1s14K/64741fcf-a23e-48a2-8888-9bf1ba9cbd73.webp',
  'https://i.ibb.co/9yZMkHS/d74429c8-880b-457e-aaf9-ae5550c11f49.webp',
  'https://i.ibb.co/NrZkdgn/ff1ce342-b24d-4329-8578-de5d249dc68a.webp',
  'https://i.ibb.co/9wb6fmT/file-Am-XVtw-S90i-Ft-Ye-RC6yx-LXnp-L.webp',
  'https://i.ibb.co/0yQvCNh/file-x-Cm-Jigsf-LIE1jx1-Yf-E7j-N27p-1.webp',
  'https://i.ibb.co/f4VcnY6/file-u9gat743-Tbkc6stc-POSm-WGYE.webp',
];

const ChapterDetail = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeVerse, setActiveVerse] = useState<number>(1);
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchChapterDetails = async () => {
      try {
        const response = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`, {
          headers: {
            'X-RapidAPI-Key': 'cd4e31604emsh7ed111fe92eb991p144247jsn974f92dca7e8',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
          }
        });
        setChapter(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chapter details:', error);
        setLoading(false);
      }
    };

    fetchChapterDetails();
  }, [chapterNumber]);

  if (loading || !chapter) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <ThreeDots color="#EA580C" height={80} width={80} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Chapter Header */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-8 shadow-md`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-lg font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                    Chapter {chapter.chapter_number}
                  </span>
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                </div>
                <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} mb-2`}>
                  {language === 'en' ? chapter.name_translation : chapter.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {chapter.name_transliterated}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to={`/chapter/${parseInt(chapterNumber) - 1}`}
                  className={`px-4 py-2 rounded-lg ${
                    parseInt(chapterNumber) === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  } ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-800'}`}
                  onClick={(e) => parseInt(chapterNumber) === 1 && e.preventDefault()}
                >
                  Previous Chapter
                </Link>
                <Link
                  to={`/chapter/${parseInt(chapterNumber) + 1}`}
                  className={`px-4 py-2 rounded-lg ${
                    parseInt(chapterNumber) === 18 ? 'opacity-50 cursor-not-allowed' : ''
                  } ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-800'}`}
                  onClick={(e) => parseInt(chapterNumber) === 18 && e.preventDefault()}
                >
                  Next Chapter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Chapter Summary */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="border-b-2 border-orange-500 pb-4 mb-6">
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                  Chapter Summary
                </h2>
              </div>
              <div className="prose max-w-none dark:prose-invert">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {language === 'en' ? chapter.chapter_summary : chapter.chapter_summary_hindi}
                </p>
              </div>

              {/* Current Verse */}
              {chapter.verses && chapter.verses[activeVerse - 1] && (
                <div className="mt-8 space-y-6">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                    Current Verse
                  </h3>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
                    <p className="text-xl font-sanskrit mb-2">
                      {chapter.verses[activeVerse - 1].text}
                    </p>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {chapter.verses[activeVerse - 1].transliteration}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                      Word Meanings
                    </h4>
                    <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {chapter.verses[activeVerse - 1].word_meanings}
                    </p>
                  </div>

                  {/* Verse Navigation Controls */}
                  <div className={`mt-4 flex justify-between items-center gap-4`}>
                    <button
                      onClick={() => setActiveVerse(prev => Math.max(1, prev - 1))}
                      disabled={activeVerse === 1}
                      className={`px-4 py-2 rounded-lg ${
                        activeVerse === 1 ? 'opacity-50 cursor-not-allowed' : ''
                      } ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-800'}`}
                    >
                      Previous Verse
                    </button>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setActiveVerse(prev => Math.min(chapter.verses_count, prev + 1))}
                        disabled={activeVerse === chapter.verses_count}
                        className={`px-4 py-2 rounded-lg ${
                          activeVerse === chapter.verses_count ? 'opacity-50 cursor-not-allowed' : ''
                        } ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-800'}`}
                      >
                        Next Verse
                      </button>
                      <Link
                        to={`/chapter/${parseInt(chapterNumber) + 1}`}
                        className={`px-4 py-2 rounded-lg ${
                          parseInt(chapterNumber) === 18 ? 'opacity-50 cursor-not-allowed' : ''
                        } ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-800'}`}
                        onClick={(e) => parseInt(chapterNumber) === 18 && e.preventDefault()}
                      >
                        Next Chapter
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Image and Verses */}
            <div>
              {/* Chapter Image */}
              <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={chapterImages[parseInt(chapterNumber) - 1]}
                  alt={`Chapter ${chapterNumber}`}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>

              {/* Verses Count */}
              <div className={`mb-8 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center justify-between">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'} 
                    border-b-2 border-orange-500 pb-2`}>
                    Total Verses
                  </h2>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                    {chapter.verses_count}
                  </span>
                </div>
              </div>

              {/* Verse Navigation */}
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-800'}
                  border-b-2 border-orange-500 pb-2`}>
                  Verses
                </h2>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: chapter.verses_count }, (_, i) => i + 1).map((verseNum) => (
                    <Link
                      key={verseNum}
                      to={`/chapter/${chapterNumber}/verse/${verseNum}`}
                      className={`flex items-center justify-center p-3 rounded-lg transition-all ${
                        activeVerse === verseNum
                          ? darkMode
                            ? 'bg-orange-400 text-white'
                            : 'bg-orange-500 text-white'
                          : darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveVerse(verseNum)}
                    >
                      {verseNum}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterDetail;
