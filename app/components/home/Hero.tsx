import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* 1. Touristic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_388289746%20catalunha.jpg"
          alt="Scenic travel destination background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Suble overlay for text readability and sophisticated look */}
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1.5px]"></div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48 text-center">
        
        {/* Trust Badge / Pre-heading (Subtle) */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm mb-8">
          <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="text-sm font-semibold text-white uppercase tracking-widest">
            Your Trusted Global DMC Partner
          </span>
        </div>

        {/* The Text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[0.95] mb-8">
          <span className="block opacity-90">Few Countries...</span>
          <span className="block bg-gradient-to-r from-brand-orange to-brand-orange-alt bg-clip-text text-transparent">
            One World!
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-12">
          We combine cooperation, synergy and exchange of good praxis with a 
          <span className="text-brand-cyan font-semibold"> deep knowledge</span> and 
          <span className="text-brand-cyan font-semibold"> passion </span> 
          for our own destinations!
        </p>

        {/* 3. Call to Action & Trust Indicators */}
        <div className="flex flex-col items-center gap-10">
          <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-brand-blue text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-brand-blue-alt hover:scale-105 shadow-xl shadow-brand-blue/30">
            Explore Destinations
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>

          {/* Minimalist Trust Bar */}
          <div className="w-full max-w-5xl border-t border-white/20 pt-10 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/80">
              
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="font-semibold text-lg text-white">Local Experts</span>
                <p className="text-sm opacity-80">Real destination knowledge</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-brand-orange">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                  </svg>

                </div>
                <span className="font-semibold text-lg text-white">Synergized Network</span>
                <p className="text-sm opacity-80">Seamless collaboration</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <span className="font-semibold text-lg text-white">Verified Quality</span>
                <p className="text-sm opacity-80">Exceeding industry praxis</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <svg className="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span className="font-semibold text-lg text-white">24/7 Support</span>
                <p className="text-sm opacity-80">Dedicated passion & care</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;