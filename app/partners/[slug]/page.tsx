// app/partners/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Globe, Mail, MapPin, ArrowLeft } from 'lucide-react';

// This would ideally be in a shared /data folder
const operators = [
  {
    slug: "mediterranean-spirit",
    title: "Mediterranean Spirit",
    expertise: "Spain & Portugal",
    description: "Specializing in high-end cultural immersions across the Iberian Peninsula, focusing on heritage and luxury gastronomy.",
    longDescription: "With over 20 years of experience, Mediterranean Spirit provides unparalleled access to the hidden gems of Spain and Portugal. From private tours of the Alhambra to exclusive wine tastings in the Douro Valley, we ensure every itinerary is a masterpiece of local culture.",
    image: "/img/dest-spain.jpg",
    stats: { tours: "500+", guides: "45", years: "22" }
  },
  // ... other operators
];

async function getOperator(slug: string) {
  const operator = operators.find((op) => op.slug === slug);
  if (!operator) return null;
  return operator;
}

export default async function OperatorPage({ params }: { params: { slug: string } }) {
  const operator = await getOperator(params.slug);

  if (!operator) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/#operators" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue mb-12 transition-colors">
          <ArrowLeft size={20} />
          <span className="font-bold">Back to Network</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Content (8 cols) */}
          <div className="lg:col-span-8">
            <span className="bg-brand-orange/10 text-brand-orange text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest">
              {operator.expertise} Specialist
            </span>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 mb-8 tracking-tight">
              {operator.title}
            </h1>

            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image 
                src={operator.image} 
                alt={operator.title} 
                fill 
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Partner</h3>
              <p className="text-xl leading-relaxed mb-6">
                {operator.description}
              </p>
              <p className="leading-relaxed">
                {operator.longDescription}
              </p>
            </div>

            {/* Expertise Checklist */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Private Guided Tours", "Luxury Logistics", "Corporate Events", "Bespoke Itineraries"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                  <CheckCircle2 className="text-brand-cyan" size={24} />
                  <span className="font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sidebar / Quick Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-brand-blue rounded-3xl p-8 text-white shadow-xl shadow-brand-blue/20">
              <h4 className="text-2xl font-bold mb-6">Partner Stats</h4>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <span className="opacity-80">Annual Tours</span>
                  <span className="font-bold text-xl">{operator.stats.tours}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <span className="opacity-80">Local Guides</span>
                  <span className="font-bold text-xl">{operator.stats.guides}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <span className="opacity-80">Industry Experience</span>
                  <span className="font-bold text-xl">{operator.stats.years} Years</span>
                </div>
              </div>
              
              <Link 
                href="/#contact"
                className="mt-8 block w-full bg-white text-brand-blue text-center py-4 rounded-xl font-extrabold hover:bg-brand-orange hover:text-white transition-all shadow-lg"
              >
                Inquire via One World
              </Link>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Certifications</h4>
              <div className="flex flex-wrap gap-4">
                <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-300">ISO</div>
                <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-300">ASTA</div>
                <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-300">IATA</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}