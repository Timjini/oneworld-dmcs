import BrandCloud from "./components/home/Brand";
import ContactSection from "./components/home/ContactForm";
import DestinationGrid from "./components/home/DestinationGrid";
import Hero from "./components/home/Hero";
import OperatorGrid from "./components/home/OperatorGrid";

export default function Page() {
  return (
    <>
    <Hero />
    <BrandCloud />
    <DestinationGrid />
    <OperatorGrid />
    <ContactSection />
    </>
  )
}
