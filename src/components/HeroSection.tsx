
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const HeroSection = () => {
  // Sample images representing the artistic styles
  const showcaseImages = [
    "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
    "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg",
    "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
    "https://i.postimg.cc/PfmJMHWQ/LINE-ALBUM-2025-5-30-250607-4.jpg",
    "https://i.postimg.cc/28G5PxXq/LINE-ALBUM-2025-5-30-250607-5.jpg",
    "https://i.postimg.cc/pVYVFZv0/LINE-ALBUM-2025-5-30-250607-6.jpg"
  ];

  return (
    <section className="pt-24 pb-16 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-400 text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Professional-Grade AI Art Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
                Elevate Your{" "}
                <span className="gradient-text">Artistic Vision</span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Professional-grade image generation for creative minds. Transform your artistic concepts into stunning visual masterpieces with our premium AI studio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-8 py-6 text-lg group"
              >
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 px-8 py-6 text-lg"
              >
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gold-500/20">
              <div>
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-foreground/60">Artworks Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">12K+</div>
                <div className="text-sm text-foreground/60">Professional Artists</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-sm text-foreground/60">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Artistic Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {showcaseImages.map((image, index) => (
                <div
                  key={index}
                  className={`artistic-frame premium-hover ${
                    index % 3 === 0 ? 'row-span-2' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <img
                    src={image}
                    alt={`Artistic showcase ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full opacity-30 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
