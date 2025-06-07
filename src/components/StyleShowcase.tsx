
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StyleShowcase = () => {
  const styleCategories = [
    {
      title: "Fashion & Beauty",
      description: "Editorial photography and commercial beauty imagery",
      images: [
        "https://i.postimg.cc/X7jjcC7n/LINE-ALBUM-2025-5-30-250607-10.jpg",
        "https://i.postimg.cc/PrSt65PY/LINE-ALBUM-2025-5-30-250607-11.jpg",
        "https://i.postimg.cc/L87mpQks/LINE-ALBUM-2025-5-30-250607-12.jpg"
      ],
      featured: "https://i.postimg.cc/TPDfYjQJ/LINE-ALBUM-2025-5-30-250607-13.jpg"
    },
    {
      title: "Professional Portraits",
      description: "High-end portrait photography and character art",
      images: [
        "https://i.postimg.cc/yxVHPMKL/LINE-ALBUM-2025-5-30-250607-14.jpg",
        "https://i.postimg.cc/SN1h61vG/LINE-ALBUM-2025-5-30-250607-15.jpg",
        "https://i.postimg.cc/dV7K4mMc/LINE-ALBUM-2025-5-30-250607-16.jpg"
      ],
      featured: "https://i.postimg.cc/52ZWGY1Y/LINE-ALBUM-2025-5-30-250607-17.jpg"
    },
    {
      title: "Conceptual Art",
      description: "Creative conceptual artwork and artistic expressions",
      images: [
        "https://i.postimg.cc/LsLFM96y/LINE-ALBUM-2025-5-30-250607-18.jpg",
        "https://i.postimg.cc/B639SrjJ/LINE-ALBUM-2025-5-30-250607-19.jpg",
        "https://i.postimg.cc/ydTqkLRc/LINE-ALBUM-2025-5-30-250607-20.jpg"
      ],
      featured: "https://i.postimg.cc/br6KRd3v/LINE-ALBUM-2025-5-30-250607-21.jpg"
    }
  ];

  return (
    <section id="styles" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Artistic{" "}
            <span className="gradient-text">Style Mastery</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore our curated collection of professional artistic styles. 
            From fashion photography to conceptual art, create with precision and artistic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {styleCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden group premium-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={category.featured}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="artistic-frame aspect-square">
                      <img
                        src={image}
                        alt={`${category.title} example ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gold-500/30 text-gold-400 hover:bg-gold-500/10 group"
                >
                  Explore Style
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Style Statistics */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">25+</div>
              <div className="text-foreground/60">Artistic Styles</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">8K</div>
              <div className="text-foreground/60">Max Resolution</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">95%</div>
              <div className="text-foreground/60">Style Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">∞</div>
              <div className="text-foreground/60">Creative Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
