import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Phone, Mail, Globe, ArrowRight, MapPin } from "lucide-react"
import { companies, Company } from "@/app/data/companies"

async function getCompanyData(slug: string): Promise<Company | null> {
  const company = companies[slug]
  console.log("company", company)
  if (!company) return null

  return companies[slug] || null
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const company = await getCompanyData(slug)

  if (!company) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative flex h-[70vh] min-h-[400px] items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src={company.logo_path}
          alt={company.name}
          fill
          className="absolute inset-0 object-cover opacity-50"
          priority
        />

        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>

        {/* Hero Blob - Animated/Decorative */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#f97316] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          ></div>
        </div>

        <div className="relative z-10 px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md">
            Destination Expert
          </span>
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl md:text-7xl">
            {company.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {company.slogan}
          </p>
        </div>
      </section>

      {/* --- Content Section --- */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Decorative Background Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 -z-10 h-96 w-96 -translate-y-1/2 opacity-20 blur-3xl"
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-[#3b82f6] to-[#f97316]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <div className="mb-8">
                <Link href="/">
                  <Image
                    className="h-16 w-auto object-contain"
                    src={company.logo_path}
                    alt="Logo"
                    width={200}
                    height={64}
                  />
                </Link>
              </div>
             
              <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
                <p className="font-medium text-gray-900 italic">
                  {company.slogan}
                </p>
                <p>{company.description}</p>
              </div>
              <div className="mt-10">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#f97316]"
                >
                  Contact Our Team <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Employee Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {company.employees.map((member, index) => (
                <div
                  key={index}
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 ${
                    index !== 0 && index % 2 !== 0 ? "mt-8" : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900/80 via-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-bold text-white">{member.name}</p>
                    <p className="text-sm text-white/70">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="relative overflow-hidden bg-gray-50 py-24">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-1/2 w-full -translate-x-1/2 bg-[#3b82f6] opacity-5 blur-[120px]"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[400px] md:h-full min-h-[350px] w-full overflow-hidden">
                {/* Google Map Iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                    company.location + " " + company.name
                  )}&zoom=14`}
                  className="absolute inset-0 grayscale contrast-125 opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                ></iframe>

                {/* Overlay Label - Floating aesthetic */}
                <div className="absolute bottom-6 left-6 z-10 max-w-xs rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md border border-white">
                  <div className="flex items-center gap-2 text-[#3b82f6] font-bold uppercase tracking-widest text-[10px] mb-2">
                    <MapPin size={12} />
                    Local Headquarters
                  </div>
                  <h2 className="text-xl font-black tracking-tight text-gray-950">
                    {company.location}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 font-medium">
                    Visit us at {company.name}
                  </p>
                </div>
              </div>

              <div className="bg-white p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {company.contact_person}
                    </h3>
                    <p className="text-sm font-semibold tracking-wider text-[#f97316] uppercase">
                      Primary Contact
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="group flex items-center gap-4">
                      <div className="rounded-xl bg-gray-50 p-3 text-[#3b82f6] transition-colors duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                        <Phone size={20} />
                      </div>
                      <div className="text-gray-600">
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Office / Mobile
                        </p>
                        <p className="font-medium">
                          {company.phone_1}{" "}
                          <span className="mx-2 text-gray-300">|</span>{" "}
                          {company.phone_1}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group flex items-center gap-4">
                      <div className="rounded-xl bg-gray-50 p-3 text-[#3b82f6] transition-colors duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                        <Mail size={20} />
                      </div>
                      <div className="text-gray-600">
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Email Address
                        </p>
                        <a
                          href={`mailto:${company.email}`}
                          className="font-medium transition-colors hover:text-[#f97316]"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="group flex items-center gap-4">
                      <div className="rounded-xl bg-gray-50 p-3 text-[#3b82f6] transition-colors duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                        <Globe size={20} />
                      </div>
                      <div className="text-gray-600">
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Website
                        </p>
                        <a
                          href={`https://${company.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium transition-colors hover:text-[#f97316]"
                        >
                          {company.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
