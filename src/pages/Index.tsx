import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import MusicSection from "@/components/MusicSection";
import PodcastSection from "@/components/PodcastSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BioSection />
      <MusicSection />
      <PodcastSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
