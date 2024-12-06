import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chapters from './components/Chapters';
import ChapterDetail from './components/ChapterDetail';
import Verse from './components/Verse';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Search from './components/Search';
import About from './components/About';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900 bg-gradient-to-b from-orange-50 to-orange-100">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/about" element={<About />} />
                <Route path="/chapter/:chapterNumber" element={<ChapterDetail />} />
                <Route path="/chapter/:chapterNum/verse/:verseNum" element={<Verse />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </main>
            <MusicPlayer />
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
