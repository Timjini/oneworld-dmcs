const MAIN_URL = "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/oneworld/"
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
  "bendix-tours": {
    id: "1",
    name: "Bendix Tours",
    location: "Madeira Portugal",
    slug: "bendix-tours",
    logo_path: `${MAIN_URL}bendix-tours-logo-circle.jpg`,
    slogan: "We offer our services and expertise; Madeira offers the rest...",
    tag_line:
      "Bendix Tours is an incoming travel Agency located in Madeira Island, since 1991.",
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
        image: `${MAIN_URL}rita-bendix.png`,
      },
    ],
  },
  nexus: {
    id: "2",
    name: "Nexus",
    location: "Portugal",
    slug: "nexus",
    logo_path: `${MAIN_URL}nexus.png`,
    slogan:
      "Give us a motto or general idea, and we’ll start from there to build you an original program!",
    tag_line:
      "Nexus arises as a link to connect people to experiences in Portugal and Spain!",
    description:
      "As an Incoming agency specialized in the group segment, we’re able to organize and manage all services associated to a group, regardless of its motivation: culture & leisure, religious or pilgrimages, city breaks, corporate & incentives, nature and much more!",
    contact_person: "Iris Lebre",
    phone_1: "+ 351 913 767 448",
    email: "iris@nexus-incoming.com",
    website: "www.nexus-incoming.com",
    employees: [
      {
        name: "Iris Lebre",
        role: "Managing Partner & Commercial Director",
        image: `${MAIN_URL}Iris.jpg`,
      },
    ],
  },
  "ouest-destinations-italie": {
    id: "3",
    name: "Ovest Viaggi",
    location: "Viale Nizza 16, 80067 - Sorrento, Napoli - Italy",
    slug: "ouest-destinations-italie",
    logo_path: `${MAIN_URL}logo-marchio.png`,
    slogan: "Discover the wonders of Italy and Croatia!",
    tag_line: "Ovest’s expertise lies in providing the most original and stimulating itineraries through flexible contract terms and service packages, transparent pricing and an exceptional value for money.",
    description: "Ovest begins in 1953 with two people and an ambitious project: to turn every trip in Italy and Croatia into a unforgettable chapter into its customers’ lives. During time Ovest has grown into a successful company and today is counting more than 80 employees whose main strength is their passion and continuous search for innovation.",
    contact_person: "",
    phone_1: "+39 081.5329611",
    email: "ovest@ovest.com",
    website: "https://www.ovest.com/",
    employees: [
      {
        name: "",
        role: "",
        image: `${MAIN_URL}`,
      },
    ],
  },
  "style-tours": {
    id: "4",
    name: "Style Tours",
    location: "6 Paphos Road, Episcopi 4620, Limassol, Cyprus",
    slug: "style-tours",
    logo_path: `${MAIN_URL}style-tours.svg`,
    slogan: "Style Tours is an incoming travel agency in Cyprus.",
    tag_line: "Style Tours is an incoming travel agency in Cyprus.",
    description: "Style Tours is mainly working with groups of various interests wishing to get to know our island. Our long experience in tourism, our knowledge about the product and our passion for what we are doing give us the grounds for a successful operation.",
    contact_person: "",
    phone_1: "+357 25 873806",
    email: "info@styletours.com",
    website: "www.styletours.com",
    employees: [
      {
        name: "",
        role: "",
        image: `${MAIN_URL}`,
      },
    ],
  },
  "travel-tales": {
    id: "5",
    name: "Travel Tales",
    location: "Eslin 3, GR 11523 Athens, Greece",
    slug: "style-tours",
    logo_path: `${MAIN_URL}logo_traveltales.png`,
    slogan: "We are committed to offering high quality destination management services and programs tailored to the individual needs of your company.",
    tag_line: "Style Tours is an incoming travel agency in Cyprus.",
    description: "We are committed to offering high quality destination management services and programs tailored to the individual needs of your company. Our goal is to create the most demanding, innovative programs, comprehend, support and attend our customers’ needs and turn trips into an experience. Our team consists of experienced professionals that are multilingual, pro-active and have travelled extensively to gain a deep knowledge of the destinations.",
    contact_person: "",
    phone_1: "+30 210 2207623",
    email: "ath@traveltales.com",
    website: "https://traveltales.gr/",
    employees: [
      {
        name: "",
        role: "",
        image: `${MAIN_URL}`,
      },
    ],
  },
  "emotions-morocco": {
    id: "6",
    name: "Emotions Morocco",
    location: "Bd Abderrahim Bouabid, Inflass 24, office 15 Agadir 80000, Morocco",
    slug: "emotions-morocco",
    logo_path: `${MAIN_URL}emotions-morocco-logo.webp`,
    slogan: "Experience the best of Morocco, Portugal, and Spain with our expertly crafted tours.",
    tag_line: "Style Tours is an incoming travel agency in Cyprus.",
    description: "To craft unforgettable travel experiences that connect people with the rich cultures, stunning landscapes, and authentic moments that make Morocco, Portugal, and Spain so extraordinary.",
    contact_person: "",
    phone_1: "+212 669 035 305",
    email: "info@emotions-morocco.com",
    website: "https://emotions-morocco.com/",
    employees: [
      {
        name: "Elouafi ENNASSIRI",
        role: "Managing Director",
        image: 'https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/elOuafi.png',
      },
    ],
  },
}
