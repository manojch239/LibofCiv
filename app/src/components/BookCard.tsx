import React from 'react';

interface BookCardProps {
  title: string;
  imageUrl: string;
  author: string;
  period: string;
}

export default function BookCard({ title, imageUrl, author, period }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{author}</p>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{period}</span>
      </div>
    </div>
  );
}