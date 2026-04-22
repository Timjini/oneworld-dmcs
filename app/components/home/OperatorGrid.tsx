import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react'; // Optional: icon library

const operators = [
  {
    id: 1,
    title: "Mediterranean Spirit",
    expertise: "Spain & Portugal",
    description: "Specializing in high-end cultural immersions across the Iberian Peninsula, focusing on heritage and luxury gastronomy.",
    link: "/partners/mediterranean-spirit"
  },
  {
    id: 2,
    title: "Atlas Journeys",
    expertise: "Morocco Experts",
    description: "Leading the way in authentic Saharan expeditions and boutique riad experiences with deep local roots.",
    link: "/partners/atlas-journeys"
  },
  {
    id: 3,
    title: "Nile Heritage",
    expertise: "Egypt Specialist",
    description: "Unparalleled access to Egypt’s ancient wonders, combining archaeological expertise with premium Nile cruises.",
    link: "/partners/nile-heritage"
  },
  {
    id: 4,
    title: "Iberian Pulse",
    expertise: "MICE & Events",
    description: "Our dedicated partner for large-scale corporate events and incentive travel across Southern Europe.",
    link: "/partners/iberian-pulse"
  },
  {
    id: 5,
    title: "Sahara Synergy",
    expertise: "Logistics & Transport",
    description: "Ensuring the highest safety standards and premium transport logistics for cross-border North African tours.",
    link: "/partners/sahara-synergy"
  },
  {
    id: 6,
    title: "EcoWorld Travels",
    expertise: "Sustainable Tourism",
    description: "Focusing on low-impact, high-value travel experiences that give back to the local communities we visit.",
    link: "/partners/ecoworld-travels"
  }
];

const OperatorGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
              Our Synergy Network
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              6 Expert Operators. <span className="text-brand-blue">One Vision.</span>
            </h3>
          </div>
          <p className="text-gray-600 text-lg max-w-sm border-l-4 border-brand-cyan pl-6">
            Meet the driving forces behind our global destinations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operators.map((operator) => (
            <div 
              key={operator.id} 
              className="group flex flex-col justify-between p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-blue/20"
            >
              <div>
                {/* Header: Title & Expertise Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-blue/5 rounded-2xl group-hover:bg-brand-blue group-transition duration-300">
                    <Globe className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {operator.expertise}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                  {operator.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {operator.description}
                </p>
              </div>

              {/* Button with Arrow Animation */}
              <Link 
                href={operator.link}
                className="inline-flex items-center gap-2 font-bold text-brand-blue group-hover:text-brand-orange transition-colors duration-300"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-full text-white text-sm">
            <ShieldCheck className="w-5 h-5 text-brand-cyan" />
            <span>All operators follow our <strong>Unified Quality Protocol</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperatorGrid;