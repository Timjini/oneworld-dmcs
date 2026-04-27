import React from 'react';
import Image from 'next/image';

interface Brand {
  id: number;
  name: string;
  image: string;
}

const brands: Brand[] = [
  { id: 1, name: 'Brand One', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Brand Two', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Brand Three', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Brand Four', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Brand Five', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Brand Six', image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const BrandCloud: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold leading-8 tracking-widest text-brand-orange uppercase">
          Our Partners
        </h2>

        {/* The Grid Container */}
        <div className="mt-10 grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-6 border-t border-l border-gray-200">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-8 sm:p-10 border-r border-b border-gray-200 bg-white group hover:bg-gray-50 transition-colors duration-300"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={200}
                height={48}
                className="max-h-12 w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCloud;