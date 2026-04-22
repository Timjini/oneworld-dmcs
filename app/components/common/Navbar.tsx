import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav 
      id="nav-bar" 
      className="fixed top-0 left-0 w-full h-24 md:h-28 flex items-center z-50 transition-all duration-500 backdrop-blur-md border-b border-white/10 bg-white/80 dark:bg-gray-900/80"
    >
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo - Large on both mobile and desktop */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/img/one-world-logo.png" 
            alt="Logo" 
            width={240} // Increased base width
            height={100} 
            className="h-16 w-auto sm:h-20 md:h-24 object-contain cursor-pointer transition-transform duration-300 hover:scale-105 dark:brightness-200"
            priority
          />
        </Link>

        {/* Desktop Navigation - Hidden but can be toggled via code if you add links later */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/about" className="font-semibold text-gray-800 dark:text-white/90 hover:text-brand-orange transition-colors">
            About
          </Link>
          <Link href="/destinations" className="font-semibold text-gray-800 dark:text-white/90 hover:text-brand-orange transition-colors">
            Destinations
          </Link>
        </div>

        {/* Contact Button - Always Visible */}
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="bg-brand-blue hover:bg-brand-blue-alt text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-full transition-all duration-300 font-bold text-sm sm:text-base shadow-lg shadow-brand-blue/20 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;