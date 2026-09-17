import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/home/Hero';
import PartnersTicker from '@/components/home/PartnersTicker';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsEvidenceSection from '@/components/home/ProjectsEvidenceSection';
import RfqSection from '@/components/home/RfqSection';
import CompanyLocationSection from '@/components/home/CompanyLocationSection';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#8bc34a] selection:text-black">
      {/* 1. Institutional Navbar */}
      <Navbar />

      {/* 2. Flagship Hero Section */}
      <Hero />

      {/* 3. Client & Partner Trust Ticker */}
      <PartnersTicker />

      {/* 4. The 7 Core Engineering Pillars */}
      <ServicesSection />

      {/* 5. Documented Technical Projects Evidence */}
      <ProjectsEvidenceSection />

      {/* 6. Interactive RFQ & Engineering Consultation Configurator */}
      <RfqSection />

      {/* 8. Headquarters Location & Custom Map Box */}
      <CompanyLocationSection />

      {/* 9. Architectural Shapes Footer with Accreditations & Direct Contact */}
      <Footer />
    </main>
  );
}
