"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
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
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-50 flex h-24 w-full items-center border-b border-white/10 bg-white/80 backdrop-blur-md md:h-28 dark:bg-gray-900/80"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/one-world-logo.png"
            alt="Logo"
            width={240}
            height={100}
            className="h-16 w-auto cursor-pointer object-contain transition-transform duration-300 hover:scale-105 sm:h-20 md:h-24 dark:brightness-200"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          <Link
            href="/about"
            className="font-semibold text-gray-800 transition-colors hover:text-brand-orange dark:text-white/90"
          >
            About
          </Link>
          <Link
            href="/destinations"
            className="font-semibold text-gray-800 transition-colors hover:text-brand-orange dark:text-white/90"
          >
            Destinations
          </Link>
        </div>

        {/* Contact Button */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:bg-brand-blue-alt active:scale-95 sm:px-8 sm:py-3 sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar