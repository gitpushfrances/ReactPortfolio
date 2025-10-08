import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-gray-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-400 text-sm">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;