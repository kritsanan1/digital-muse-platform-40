
import { PremiumHeader } from "@/components/PremiumHeader";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
import { ProfessionalWorkspace } from "@/components/ProfessionalWorkspace";
import { CreativeStudio } from "@/components/CreativeStudio";
import { StyleShowcase } from "@/components/StyleShowcase";
import { ArtistGallery } from "@/components/ArtistGallery";
import { LearningCenter } from "@/components/LearningCenter";
import { ProfessionalFeatures } from "@/components/ProfessionalFeatures";
import { QualityEthics } from "@/components/QualityEthics";
import { PremiumFooter } from "@/components/PremiumFooter";
import { SEOManager } from "@/components/SEOManager";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOManager 
        title="Artisan AI - Premium Creative Studio | Professional AI Art Generation"
        description="Elevate your artistic vision with professional AI image generation. Create stunning fashion photography, portraits, and conceptual art. Professional tools for artists, photographers, and designers."
        keywords="AI art generation, professional photography, digital art, fashion photography, portrait art, creative studio, AI tools for artists, digital creativity, professional art tools"
      />
      <PremiumHeader />
      <main>
        <EnhancedHeroSection />
        <ProfessionalWorkspace />
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
