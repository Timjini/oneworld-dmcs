import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* --- Section 1: The Dramatic Intro --- */}
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 items-center bg-gray-50">

        {/* Cinematic Image Panel (Left/Background on mobile) */}
        <div className="absolute md:relative inset-0 md:col-span-7 h-full w-full overflow-hidden">
          <Image
            src="https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_111640076%20madrid.jpg"
            alt="One World Horizon"
            fill
            className="object-cover opacity-70 md:opacity-100"
            priority
          />
          {/* Subtle blue/orange gradient overlay integrated into the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/10 to-[#f97316]/10 mix-blend-multiply"></div>
          {/* Dark overlay for mobile readability */}
          <div className="absolute inset-0 bg-gray-950/40 md:bg-transparent"></div>
        </div>

        {/* Cinematic Typography Panel (Right) */}
        <div className="relative z-10 md:col-span-5 px-6 py-24 md:px-16 md:py-0 text-center md:text-left">
          <div className="mb-16 md:mb-24 flex justify-center md:justify-start">
            <Image 
              src="/img/one-world-logo.png"
              alt="One World Network" 
              width={160} 
              height={50} 
              className="object-contain"
            />
          </div>

          <h1 className="leading-none tracking-tighter">
            <span className="block text-5xl md:text-7xl font-extralight text-white md:text-gray-950">Few countries...</span>
            <span className="block text-7xl md:text-9xl font-extrabold italic text-[#f97316] mt-2">One World!</span>
          </h1>
        </div>
      </section>

      {/* --- Section 2: The Manifesto (Asymmetrical) --- */}
      <section className="py-32 md:py-48 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Massive Quote Decor */}
            <div className="hidden lg:block lg:col-span-1 text-[12rem] font-serif font-black text-[#3b82f6]/10 leading-none -mt-10">
              “
            </div>

            {/* Core copy */}
            <div className="md:col-span-8 lg:col-span-7">
              <p className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-950">
                <span className="font-semibold text-[#3b82f6]">“One World”</span> is a network of <span className="font-medium">independent</span> Incoming T.O. (DMC) based on common views in tourism and human values:
              </p>
            </div>

            {/* Values (Offset) */}
            <div className="md:col-span-4 lg:col-span-4 md:mt-24 space-y-4">
               <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 block mb-6">Our Foundation</span>

               {['friendship', 'respect', 'trust'].map(value => (
                  <div key={value} className="flex items-center gap-6 group">
                     {/* The animated underline */}
                     <div className="h-0.5 w-12 bg-gray-100 group-hover:w-20 group-hover:bg-[#f97316] transition-all duration-500"></div>
                     <span className="text-2xl md:text-3xl font-extrabold italic text-gray-900 group-hover:text-[#f97316] transition-colors">{value}</span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Philosophy (The "Passion" Image) --- */}
      <section className="relative py-32 md:py-48 bg-gray-950 text-white overflow-hidden">

        {/* Background Text Decor */}
        <div className="absolute inset-0 flex items-center justify-center -rotate-12 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter whitespace-nowrap">Passion Synergy Praxis</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Passion Copy */}
            <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
              <span className="inline-block border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Our Edge</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                Deep knowledge <span className="text-[#3b82f6]">meets</span> unmatched passion.
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                We combine cooperation, synergy and exchange of good praxis with a deep 
                knowledge and passion for <span className="font-semibold text-white">our own destinations!</span>
              </p>
            </div>

            {/* Immersive Image (Tactile Detail) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.15)] group">
                <Image
                  src="https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_86309014.jpg"
                  alt="Authentic Local Knowledge"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* The Blur Corner, integrated subtly */}
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#3b82f6]/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: The Minimalist Exit --- */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-sm mx-auto">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#f97316] to-transparent mx-auto mb-16"></div>
            <p className="text-lg text-gray-600 font-medium mb-10">United by standard, driven by passion.</p>
            <a 
              href="/destinations" 
              className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.5em] text-gray-400 hover:text-[#3b82f6] transition-colors group"
            >
              The Network <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
         </div>
      </section>
    </main>
  );
}