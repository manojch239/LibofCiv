import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome,
  FaLandmark, 
  FaDungeon,
  FaPaintBrush,
  FaGlobeAmericas,
  FaArchway,
  FaTheaterMasks
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const categories = [
    { name: 'Ancient Civilizations', icon: <FaLandmark /> },
    { name: 'Medieval Period', icon: <FaDungeon /> },
    { name: 'Renaissance', icon: <FaPaintBrush /> },
    { name: 'Modern History', icon: <FaGlobeAmericas /> },
    { name: 'Archaeological Finds', icon: <FaArchway /> },
    { name: 'Cultural Studies', icon: <FaTheaterMasks /> },
  ];

  return (
    <>
      {/* Overlay - reduced opacity */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'bg-opacity-30 visible' : 'bg-opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform 
          transition-transform duration-300 ease-in-out z-50 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header with black background */}
        <div className="bg-black text-white p-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3" onClick={onClose}>
              <FaHome />
              <span className="text-xl font-bold">Home</span>
            </Link>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close sidebar"
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <span className="mr-3 text-gray-600">{category.icon}</span>
                  <span className="text-gray-700">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar; 