import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

interface Destination {
  id: string
  name: string
  slug: string
  image: string
  description: string
  operatorCount: number
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "Spain",
    slug: "spain",
    image:
      "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_111640076%20madrid.jpg",
    description:
      "From the architectural marvels of Gaudi to the sun-drenched shores of Costa del Sol.",
    operatorCount: 12,
  },
  {
    id: "2",
    name: "Portugal",
    slug: "portugal",
    image:
      "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/shutterstock_86309014.jpg",
    description:
      "Experience the soulful Fado of Lisbon and the terraced vineyards of the Douro Valley.",
    operatorCount: 8,
  },
  {
    id: "3",
    name: "Greece",
    slug: "greece",
    image:
      "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/DSC_2828.jpg",
    description:
      "Ancient history meets the turquoise serenity of the Cyclades and the Aegean Sea.",
    operatorCount: 15,
  },
  {
    id: "4",
    name: "Morocco",
    slug: "morocco",
    image: "/img/dest-morocco.jpg",
    description:
      "Vibrant souks, Atlas mountain retreats, and the golden dunes of the Sahara.",
    operatorCount: 6,
  },
  {
    id: "5",
    name: "Egypt",
    slug: "egypt",
    image:
      "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/Pafos_Tombs_of_the_kings2.jpg",
    description:
      "Timeless wonders along the Nile, from the Pyramids to the Valley of the Kings.",
    operatorCount: 9,
  },
]

export default function DestinationsPage() {
  return (
    <main className="mt-24 min-h-screen bg-white">
      {/* --- Simple Hero Section --- */}
      <section className="relative bg-gray-900 py-24 text-center">
        <div className="absolute inset-0 z-0 overflow-hidden blur-3xl">
          <div className="relative left-1/2 aspect-square w-full -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6]/20 to-[#f97316]/20 opacity-50"></div>
        </div>

        <div className="relative z-10 px-6">
          <span className="mb-4 inline-block rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/10 px-4 py-1 text-xs font-bold tracking-widest text-[#3b82f6] uppercase">
            Global Network
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Our <span className="text-[#f97316]">Destinations</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Discover our hand-picked destination management experts providing
            bespoke travel solutions across the globe.
          </p>
        </div>
      </section>

      {/* --- Destinations Grid --- */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group relative h-[450px] overflow-hidden rounded-3xl bg-gray-100 shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="mb-2 flex items-center gap-2 text-[#f97316]">
                  <MapPin size={16} />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {dest.operatorCount} Local Experts
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-[#3b82f6]">
                  {dest.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {dest.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-bold text-white">
                  <span>Explore Experience</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </div>
              </div>

              {/* Decorative Blur Corner */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#f97316]/30 blur-2xl transition-opacity group-hover:opacity-100"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Network CTA --- */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#3b82f6] p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold">Can't find your destination?</h2>
            <p className="mt-4 text-white/80">
              Our network is constantly expanding. Reach out to inquire about
              our global partners.
            </p>
            <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-[#3b82f6] transition-all hover:bg-[#f97316] hover:text-white">
              Contact Global HQ
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
