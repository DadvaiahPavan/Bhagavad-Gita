import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Info } from 'lucide-react';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <Info className={`w-8 h-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
            About Bhagavad Gita
          </h1>
        </div>

        {/* Image Section */}
        <div className="mb-8 overflow-hidden rounded-xl shadow-lg h-[500px]">
          <img
            src="https://i.ibb.co/QdQj2my/2010640.jpg"
            alt="Krishna and Arjuna in the battlefield of Kurukshetra"
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          <p className="text-lg mb-6">
            The Bhagavad Gita, a 700-verse scripture from the Mahabharata, is a timeless spiritual text that delves into profound life lessons through a dialogue between Prince Arjuna and Lord Krishna, his divine charioteer. Arjuna faces a moral crisis on the battlefield, and Krishna offers wisdom on navigating life&apos;s complexities. This sacred dialogue covers key philosophical concepts like dharma (duty), karma (action), bhakti (devotion), jnana (knowledge), and yoga (union with the Divine), providing guidance on how to live with purpose and spiritual awareness.
          </p>
          <p className="text-lg mb-6">
            Our website aims to make the teachings of the Gita accessible to everyone, regardless of background or experience. We offer an intuitive platform that includes verse-by-verse explanations, translations, and commentaries, allowing users to engage deeply with the text. Whether you are exploring the Gita for the first time or looking to deepen your understanding, our resources provide valuable insights into the timeless wisdom it contains.
          </p>
          <p className="text-lg">
            We believe the teachings of the Bhagavad Gita can be applied to all aspects of life, offering clarity, peace, and direction. Our mission is to help individuals live purposeful lives by embracing its spiritual lessons, while integrating them into modern-day challenges. Through a user-friendly interface and a comprehensive range of resources, we invite you to embark on a transformative journey, discovering how the Gita can guide you towards personal growth and fulfillment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
