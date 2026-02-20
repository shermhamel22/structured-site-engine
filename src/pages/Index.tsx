import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServiceGrid from "@/components/ServiceGrid";
import FixedPriceBanner from "@/components/FixedPriceBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServiceGrid />
        <FixedPriceBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
