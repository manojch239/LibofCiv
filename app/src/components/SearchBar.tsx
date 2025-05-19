import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl w-full mx-auto flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books, civilizations, or time periods..."
        className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
      />
      <button 
        type="submit"
        className="px-4 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}