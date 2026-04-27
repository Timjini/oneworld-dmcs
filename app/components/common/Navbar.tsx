"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const { scrollY } = useScroll();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Partners", href: "/partners" },
  ];

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 60);

    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "h-20 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "h-24 bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* --- THE LARGE LOGO --- */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="pt-4">
              <Image
                src="/img/one-world-logo.png"
                alt="One World"
                width={400} 
                height={160}
                className="h-28 w-auto object-contain drop-shadow-2xl sm:h-24 md:h-24 block"
                priority
              />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-5 py-2 text-sm font-black tracking-[0.15em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <AnimatePresence>
                {hoveredPath === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 z-0 rounded-full ${
                      isScrolled ? "bg-gray-100" : "bg-white/20"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex-1 flex justify-end">
          <Link
            href="/contact"
            className={`rounded-full px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              isScrolled 
                ? "bg-[#3b82f6] text-white hover:bg-[#f97316] shadow-lg shadow-blue-500/20" 
                : "bg-white text-gray-900 hover:bg-[#f97316] hover:text-white"
            }`}
          >
            Inquire
          </Link>
        </div>
      </div>

      {/* Subtle bottom accent line */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </motion.nav>
  );
};

export default Navbar;