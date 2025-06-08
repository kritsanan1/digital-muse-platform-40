
import { PremiumHeader } from "@/components/PremiumHeader";
import { HeroSection } from "@/components/HeroSection";
import { CreativeStudio } from "@/components/CreativeStudio";
import { StyleShowcase } from "@/components/StyleShowcase";
import { ArtistGallery } from "@/components/ArtistGallery";
import { LearningCenter } from "@/components/LearningCenter";
import { ProfessionalFeatures } from "@/components/ProfessionalFeatures";
import { QualityEthics } from "@/components/QualityEthics";
import { PremiumFooter } from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PremiumHeader />
      <main>
        <HeroSection />
        <CreativeStudio />
        <StyleShowcase />
        <ArtistGallery />
        <LearningCenter />
        <ProfessionalFeatures />
        <QualityEthics />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;
