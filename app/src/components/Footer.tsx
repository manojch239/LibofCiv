import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 w-full fixed bottom-0">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-center text-gray-600">
          © {currentYear} Library of Civilizations. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 