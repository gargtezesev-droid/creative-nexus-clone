import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      <MainSection />

      <ClientsSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />

      <ContactSection />
    </main>
  );
}
