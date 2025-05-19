import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const featuredCivs = [
    {
      title: 'The Rise of Ancient Greece',
      imageUrl: 'https://images.unsplash.com/photo-1697455621132-54e02163045b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Dr. Helena Matthews',
      period: '800 BC - 146 BC'
    },
    {
      title: 'Egyptian Dynasties',
      imageUrl: 'https://images.unsplash.com/photo-1566288592443-0a0d6853dddc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Prof. Ahmed Hassan',
      period: '3100 BC - 30 BC'
    },
    {
      title: 'The Roman Empire',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80',
      author: 'Dr. Marcus Aurelius',
      period: '27 BC - 476 AD'
    },
    {
      title: 'Ming Dynasty China',
      imageUrl: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80',
      author: 'Dr. Li Wei',
      period: '1368 - 1644'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-2 top-20 z-20 p-3 bg-white hover:bg-gray-100 rounded-full shadow-md"
        aria-label="Open categories"
      >
        ☰
      </button>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Explore the World's Civilizations</h1>
          <p className="text-xl text-gray-600 mb-8">
            Dive into the rich history and culture of human civilizations from around the globe.
          </p>
          <SearchBar />
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Civilizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCivs.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </section>

        <section className="mt-24 text-center pb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey Through History</h2>
          <p className="text-xl text-gray-600 mb-8">
            Access thousands of books, articles, and multimedia content about world civilizations.
          </p>
          <Link 
            to="/catalog" 
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="mr-2">📚</span>
            Browse Catalog
          </Link>
        </section>
      </main>
      
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <Footer />
    </div>
  );
} 