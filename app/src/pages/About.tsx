import React from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { BookOpen, Building, Rocket } from 'lucide-react'; // Import icons

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">About the Library of Civilizations</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Welcome to the Library of Civilizations. Our mission is to build the largest library in the world, 
              designed to last 1000 years. We aim to preserve and share the knowledge of human civilizations throughout history.
            </p>
          </div>
        </div>

        {/* Why Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Why We Exist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  🌍
                </div>
                <h3 className="text-xl font-semibold mb-4">Unite Humanity</h3>
                <p className="text-gray-600">
                  To bring humanity together and serve as a source of inspiration for future generations.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  🔍
                </div>
                <h3 className="text-xl font-semibold mb-4">Preserve Truth</h3>
                <p className="text-gray-600">
                  In an age of AI where truth and history can be distorted, we provide a single source of true, undisputed history.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  🏛️
                </div>
                <h3 className="text-xl font-semibold mb-4">Safeguard Knowledge</h3>
                <p className="text-gray-600">
                  To provide a source of knowledge and history for humanity to revive civilization in case of an extinction event.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-semibold">Phase I</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Build LibraryofCivilizations.org
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Make the website open source
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Seek donations and explain master plan
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Implement blockchain for transparency
                  </li>
                </ul>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-semibold">Phase II</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Build the physical library
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Secure major financial backing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Design for 1000-year durability
                  </li>
                </ul>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center mb-6">
                  <Rocket className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-semibold">Phase III</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Create long-lasting digital memory bank
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Launch satellite storage system
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}