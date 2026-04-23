export interface Employee {
  name: string
  role: string
  image: string
}

export interface Company {
  id: string
  name: string
  location: string
  slug: string
  logo_path: string
  slogan: string
  tag_line: string
  description: string
  contact_person: string
  phone_1: string
  email: string
  website: string
  employees: Employee[]
}

export const companies: Record<string, Company> = {
  "Bendix Tours": {
    id: "1",
    name: "Bendix Tours",
    location: "Barcelona, Spain",
    slug: "bendix-tours",
    logo_path: "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/bendix-tours-logo-circle.jpg",
    slogan: "We offer our services and expertise; Madeira offers the rest...",
    tag_line: "Bendix Tours is an incoming travel Agency located in Madeira Island, since 1991.",
    description:
      "We are a family run business with a strong Know-How to our island.We represent several international tour operators, with whom we have kept excellent cooperation along these years.",
    contact_person: "Rita Bendix",
    phone_1: "+351 291 700351",
    email: "rita.bendix@bendixtours.com",
    website: "www.bendixtours.com",
    employees: [
      {
        name: "Rita Bendix",
        role: "Product Manager & Partner",
        image: "employees/alejandro.jpg",
      }
    ],
  },
  "olympic-odyssey": {
    id: "2",
    name: "Olympic Odyssey",
    location: "Athens, Greece",
    slug: "olympic-odyssey",
    logo_path: "logos/olympic-odyssey.png",
    slogan: "Where Myth Meets the Sea.",
    tag_line: "Bendix Tours is an incoming travel Agency located in Madeira Island, since 1991.",
    description:
      "Olympic Odyssey is Greece's premier destination specialist, offering bespoke access...",
    contact_person: "Nikolas Papadakis",
    phone_1: "+30 210 987 6543",
    email: "concierge@olympic-odyssey.gr",
    website: "www.olympic-odyssey.gr",
    employees: [
      {
        name: "Nikolas Papadakis",
        role: "Founder & CEO",
        image: "employees/nikolas.jpg",
      },
      {
        name: "Chloe Dimitriou",
        role: "Head of Guest Experience",
        image: "employees/chloe.jpg",
      },
    ],
  },
}
