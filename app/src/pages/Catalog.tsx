import { useState } from 'react';
import Footer from '../components/Footer';
import { Search, Filter, BookOpen, X } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  period: string;
  civilization: string;
  imageUrl: string;
  category: string;
  
}

interface Filters {
  age: string[];
  location: string[];
  language: string[];
  format: string[];
}


export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Ancient Egypt',
    'Ancient Greece',
    'Roman Empire',
    'Chinese Dynasties',
    'Maya Civilization',
    'Persian Empire',
    'Medieval Europe'
  ];

  const books: Book[] = [
    {
      id: 1,
      title: 'The Rise of Ancient Greece',
      author: 'Dr. Helena Matthews',
      period: '800 BC - 146 BC',
      civilization: 'Ancient Greece',
      imageUrl: 'https://images.unsplash.com/photo-1697455621132-54e02163045b?q=80&w=2070&auto=format&fit=crop',
      category: 'Ancient Greece'
    },
    {
      id: 2,
      title: 'Egyptian Dynasties',
      author: 'Prof. Ahmed Hassan',
      period: '3100 BC - 30 BC',
      civilization: 'Ancient Egypt',
      imageUrl: 'https://images.unsplash.com/photo-1566288592443-0a0d6853dddc?q=80&w=1887&auto=format&fit=crop',
      category: 'Ancient Egypt'
    },
    // Add more books as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-black text-white py-4">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Book Catalog</h1>
            <p className="text-xl text-gray-300">
              Explore our curated collection of books about world civilizations
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === category.toLowerCase()
                        ? 'bg-black text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {book.period}
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full">
                    {book.civilization}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8 mb-8">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Load More Books
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}