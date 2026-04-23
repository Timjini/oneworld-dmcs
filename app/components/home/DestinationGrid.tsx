import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    name: 'Spain',
    tagline: 'Discover the Soul of Andalusia',
    description: 'Where every corner tells a story of passion and history.',
    image: 'https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_111640076%20madrid.jpg',
    link: '/destinations',
  },
  {
    name: 'Portugal',
    tagline: "The Ocean's Whisper in Lisbon",
    description: 'Where history meets the coast and traditional trams climb golden streets.',
    image: 'https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_86309014.jpg', 
    link: '/destinations',
  },
  {
    name: 'Greece',
    tagline: 'Cradle of Legends & Azure Horizons',
    image: "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/DSC_2828.jpg",
      description:
        "Ancient history meets the turquoise serenity of the Cyclades and the Aegean Sea.",
    link: '/destinations',
  },
  {
    name: 'Egypt',
    tagline: 'Eternal Wonders of the Nile',
    description: 'Where ancient mysteries unfold under the watch of the Great Pyramids.',
    image: 'https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/Pafos_Tombs_of_the_kings2.jpg',
    link: '/destinations',
  },
];

const DestinationGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-2">
            Explore Our World
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 leading-tight">
            Few Countries...<br className="md:hidden"/> <span className="text-brand-blue">One World!</span>
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600 leading-relaxed">
            Deep local knowledge meets global cooperation. Experience destinations curated with passion and expert synergy.
          </p>
        </div>

        {/* 2x2 Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {destinations.map((dest, index) => (
            <Link 
              key={index} 
              href={dest.link}
              className="group relative block aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl shadow-gray-200 transition-all duration-500 hover:shadow-brand-blue/20 hover:-translate-y-2"
            >
              {/* 1. The Touristic Background Image */}
              <Image
                src={dest.image}
                alt={`Picturesque view of ${dest.name}`}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-w-7xl) 50vw, 100vw"
              />

              {/* 2. Brand Blue Overlay (Crucial for inspiration and readability) */}
              {/* This overlay gets darker and more blue on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-black/20 transition-opacity duration-500 group-hover:from-brand-blue/95" />

              {/* 3. The Content (Text and Accents) */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 text-white">
                
                {/* Minimalist Top Accent (Inspired by the visualization's title bar) */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-orange via-white/20 to-brand-blue-alt opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Small Brand Accent Bar */}
                  <div className="w-12 h-1 bg-brand-orange rounded-full mb-4 transition-all duration-500 group-hover:w-20" />

                  {/* Destination Name (The "Ohhh" Factor) */}
                  <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-none mb-3 opacity-95 group-hover:opacity-100">
                    {dest.name}
                  </h3>

                  {/* Tagline & Description */}
                  <div className="space-y-2 max-w-xl transition-all duration-500 group-hover:translate-x-1">
                    <p className="text-xl md:text-2xl font-semibold text-brand-cyan leading-tight">
                      {dest.tagline}
                    </p>
                    <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed line-clamp-2 group-hover:text-white/90">
                      {dest.description}
                    </p>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute top-8 right-8 bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: Synergy/Trust section below grid (Inspired by top-right text) */}
        <div className="mt-20 border-t border-gray-200 pt-16 text-center">
            <div className="inline-grid grid-cols-3 gap-x-12 gap-y-4 text-brand-blue font-semibold text-lg tracking-tight">
                <span>SYNERGY</span>
                <span>COOPERATION</span>
                <span>EXPERTISE</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationGrid;