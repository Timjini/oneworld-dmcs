import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-900 border-t border-white/10 backdrop-blur-md">
      <div 
        aria-hidden="true" 
        className="absolute -top-24 left-1/2 -z-10 h-64 w-full -translate-x-1/2 blur-3xl opacity-20 pointer-events-none"
      >
        <div 
          className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-brand-blue to-brand-orange" 
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-1 md:justify-start">
          <Image 
            className="h-36 w-auto object-contain" 
            src="/img/one-world-logo.png" 
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Navigation Links */}
        <div className="mt-8 md:order-3 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/70">
            <li>
              <Link href="/about" className="transition-colors duration-300 hover:text-brand-orange">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors duration-300 hover:text-brand-orange">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/licensing" className="transition-colors duration-300 hover:text-brand-orange">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors duration-300 hover:text-brand-orange">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 md:order-2 md:mt-0">
          <p className="text-center text-xs leading-5 text-white/50">
            &copy; {currentYear} One World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;