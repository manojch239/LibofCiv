import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, UserCircle,LibraryBig } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-400' : 'hover:text-gray-300';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-lg">
      <div className="max-w-1xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <LibraryBig className="w-6 h-6" />
          <span className="text-xl font-semibold">Library of Civilizations</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/catalog" className={`transition-colors ${isActive('/catalog')}`}>
            Catalog
          </Link>
          <Link to="/about" className={`transition-colors ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>
            Contact
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="transition-colors hover:text-gray-300"
            >
              <UserCircle className="w-6 h-6 flex items-center" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 text-gray-800 z-50">
                <Link 
                  to="/login" 
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
        <button className="md:hidden">
          <LibraryBig className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}