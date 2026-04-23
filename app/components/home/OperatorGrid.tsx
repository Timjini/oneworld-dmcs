import React from "react"
import Link from "next/link"
import { ArrowRight, Globe, ShieldCheck } from "lucide-react"
import { companies, Company } from "@/app/data/companies"

const OperatorGrid: React.FC = () => {
  const companyList = Object.values(companies)
  return (
    <section className="bg-white px-6 py-24 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-sm font-bold tracking-widest text-brand-orange uppercase">
              Our Synergy Network
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Six Experts.{" "}
              <span className="text-brand-blue">One Vision.</span>
            </h3>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companyList.map((operator: Company) => (
            <div
              key={operator.id}
              className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-brand-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/10"
            >
              <div>
                <div className="mb-6 flex items-start justify-between">
                      <img
                        src={operator.logo_path}
                        alt={operator.name}
                        className="h-24 w-24 object-contain transition-all rounded-full duration-300"
                      />
                </div>

                <h4 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-brand-blue">
                  {operator.name}
                </h4>

                <p className="mb-8 leading-relaxed text-gray-600">
                  {operator.slogan}
                </p>
              </div>

              {/* Button with Arrow Animation */}
              <Link
                href={`/partners/${operator.slug}`}
                className="inline-flex items-center gap-2 font-bold text-brand-blue transition-colors duration-300 group-hover:text-brand-orange"
              >
                <span>View Full Profile</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-sm text-white">
            <ShieldCheck className="h-5 w-5 text-brand-cyan" />
            <span>
              All operators follow our <strong>Unified Quality Protocol</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OperatorGrid
