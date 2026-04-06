import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import MusicSection from "@/components/MusicSection";
import PodcastSection from "@/components/PodcastSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BioSection />
      <MusicSection />
      <PodcastSection />
      <ContactSection />
      <FooterSection />
      <FloatingWhatsApp />
      <BottomNav />
    </div>
  );
};

export default Index;
