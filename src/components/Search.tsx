import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Chapter {
  chapter_number: number;
  name: string;
  name_meaning: string;
  verses_count: number;
  chapter_summary: string;
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Actual chapter data
    const chapterData: Chapter[] = [
      {
        chapter_number: 1,
        name: "Arjuna Visada Yoga",
        name_meaning: "Arjuna's Dilemma",
        verses_count: 47,
        chapter_summary: "Observing the Armies on the Battlefield of Kurukshetra"
      },
      {
        chapter_number: 2,
        name: "Sankhya Yoga",
        name_meaning: "The Yoga of Knowledge",
        verses_count: 72,
        chapter_summary: "The Immortal Soul and the Nature of the Self"
      },
      {
        chapter_number: 3,
        name: "Karma Yoga",
        name_meaning: "The Yoga of Action",
        verses_count: 43,
        chapter_summary: "The Path of Selfless Service"
      },
      {
        chapter_number: 4,
        name: "Jnana Karma Sanyasa Yoga",
        name_meaning: "The Yoga of Knowledge and Renunciation of Action",
        verses_count: 42,
        chapter_summary: "The Path of Knowledge and Self-Realization"
      },
      {
        chapter_number: 5,
        name: "Karma Sanyasa Yoga",
        name_meaning: "The Yoga of Renunciation",
        verses_count: 29,
        chapter_summary: "True Renunciation and the Path to Freedom"
      },
      {
        chapter_number: 6,
        name: "Dhyana Yoga",
        name_meaning: "The Yoga of Meditation",
        verses_count: 47,
        chapter_summary: "The Science of Self-Realization through Meditation"
      },
      {
        chapter_number: 7,
        name: "Jnana Vijnana Yoga",
        name_meaning: "The Yoga of Knowledge and Wisdom",
        verses_count: 30,
        chapter_summary: "Knowledge of the Ultimate Truth"
      },
      {
        chapter_number: 8,
        name: "Aksara Brahma Yoga",
        name_meaning: "The Yoga of the Imperishable Brahman",
        verses_count: 28,
        chapter_summary: "Attaining the Supreme"
      },
      {
        chapter_number: 9,
        name: "Raja Vidya Raja Guhya Yoga",
        name_meaning: "The Yoga of Royal Knowledge and Royal Mystery",
        verses_count: 34,
        chapter_summary: "The Most Confidential Knowledge"
      },
      {
        chapter_number: 10,
        name: "Vibhuti Yoga",
        name_meaning: "The Yoga of Divine Manifestations",
        verses_count: 42,
        chapter_summary: "The Divine Glories of the Lord"
      },
      {
        chapter_number: 11,
        name: "Visvarupa Darsana Yoga",
        name_meaning: "The Yoga of the Universal Form",
        verses_count: 55,
        chapter_summary: "The Vision of the Universal Form"
      },
      {
        chapter_number: 12,
        name: "Bhakti Yoga",
        name_meaning: "The Yoga of Devotion",
        verses_count: 20,
        chapter_summary: "The Path of Loving Devotion"
      },
      {
        chapter_number: 13,
        name: "Ksetra Ksetrajna Vibhaga Yoga",
        name_meaning: "The Yoga of the Field and its Knower",
        verses_count: 35,
        chapter_summary: "The Individual Soul and Ultimate Consciousness"
      },
      {
        chapter_number: 14,
        name: "Gunatraya Vibhaga Yoga",
        name_meaning: "The Yoga of the Three Modes of Material Nature",
        verses_count: 27,
        chapter_summary: "The Three Qualities of Material Nature"
      },
      {
        chapter_number: 15,
        name: "Purusottama Yoga",
        name_meaning: "The Yoga of the Supreme Person",
        verses_count: 20,
        chapter_summary: "The Ultimate Person"
      },
      {
        chapter_number: 16,
        name: "Daivasura Sampad Vibhaga Yoga",
        name_meaning: "The Yoga of the Divine and Demoniac Natures",
        verses_count: 24,
        chapter_summary: "The Divine and Demoniac Natures"
      },
      {
        chapter_number: 17,
        name: "Sraddhatraya Vibhaga Yoga",
        name_meaning: "The Yoga of the Three Divisions of Faith",
        verses_count: 28,
        chapter_summary: "The Three Types of Faith"
      },
      {
        chapter_number: 18,
        name: "Moksa Sanyasa Yoga",
        name_meaning: "The Yoga of Liberation through Renunciation",
        verses_count: 78,
        chapter_summary: "The Path to Liberation"
      }
    ];
    setChapters(chapterData);
  }, []);

  useEffect(() => {
    const filtered = chapters.filter(chapter => 
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.name_meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.chapter_number.toString().includes(searchQuery) ||
      `chapter ${chapter.chapter_number}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredChapters(filtered);
  }, [searchQuery, chapters]);

  const handleChapterClick = (chapterNumber: number) => {
    navigate(`/chapter/${chapterNumber}`);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, verses, or keywords..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
            />
            <FiSearch 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={24}
            />
          </div>
        </div>

        <div className="space-y-6">
          {searchQuery && filteredChapters.map((chapter) => (
            <motion.div
              key={chapter.chapter_number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6"
              onClick={() => handleChapterClick(chapter.chapter_number)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Chapter {chapter.chapter_number}: {chapter.name}
                </h3>
                <span className="text-orange-500 font-semibold">
                  {chapter.verses_count} verses
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-2">
                {chapter.name_meaning}
              </p>
              <p className="text-gray-700">
                {chapter.chapter_summary}
              </p>
            </motion.div>
          ))}
          {searchQuery && filteredChapters.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
