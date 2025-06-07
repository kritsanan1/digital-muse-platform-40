
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Camera, Image, Star, Settings } from "lucide-react";
import { useState } from "react";

export const CreativeStudio = () => {
  const [selectedStyle, setSelectedStyle] = useState("fashion");
  const [prompt, setPrompt] = useState("Elegant fashion portrait with dramatic lighting");
  const [artStyle, setArtStyle] = useState([70]);
  const [creativity, setCreativity] = useState([85]);

  const stylePresets = [
    {
      id: "fashion",
      name: "Fashion Photography",
      icon: Camera,
      description: "Editorial and commercial fashion imagery",
      preview: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg"
    },
    {
      id: "portrait",
      name: "Portrait Art",
      icon: Image,
      description: "Professional portrait photography",
      preview: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg"
    },
    {
      id: "concept",
      name: "Concept Art",
      icon: Star,
      description: "Creative conceptual artwork",
      preview: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg"
    }
  ];

  return (
    <section id="studio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional Creative{" "}
            <span className="gradient-text">Studio</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Experience the future of artistic creation with our sophisticated AI studio. 
            Craft professional-grade artwork with precision and artistic vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Studio Interface */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 gradient-text">
                Artistic Prompt Studio
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gold-400">
                    Creative Vision
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full bg-black/30 border border-gold-500/20 rounded-lg p-4 text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                    rows={3}
                    placeholder="Describe your artistic vision..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">
                      Artistic Style: {artStyle[0]}%
                    </label>
                    <Slider
                      value={artStyle}
                      onValueChange={setArtStyle}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">
                      Creativity: {creativity[0]}%
                    </label>
                    <Slider
                      value={creativity}
                      onValueChange={setCreativity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold py-6">
                  Generate Masterpiece
                </Button>
              </div>
            </Card>

            {/* Style Presets */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 gradient-text">
                Professional Presets
              </h3>
              
              <div className="grid gap-3">
                {stylePresets.map((style) => {
                  const IconComponent = style.icon;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`text-left p-4 rounded-lg border transition-all ${
                        selectedStyle === style.id
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-gold-400" />
                        <div>
                          <div className="font-semibold text-foreground">{style.name}</div>
                          <div className="text-sm text-foreground/60">{style.description}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Preview Canvas */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 gradient-text">
                Artistic Preview
              </h3>
              
              <div className="aspect-square bg-black/30 rounded-lg border border-gold-500/20 overflow-hidden">
                {selectedStyle && (
                  <img
                    src={stylePresets.find(s => s.id === selectedStyle)?.preview}
                    alt="Style preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-foreground/60">
                  Resolution: 1024×1024 • Style: {stylePresets.find(s => s.id === selectedStyle)?.name}
                </div>
                <Button variant="outline" size="sm" className="border-gold-500/30 text-gold-400">
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced
                </Button>
              </div>
            </Card>

            {/* Recent Generations */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 gradient-text">
                Recent Creations
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  "https://i.postimg.cc/PfmJMHWQ/LINE-ALBUM-2025-5-30-250607-4.jpg",
                  "https://i.postimg.cc/28G5PxXq/LINE-ALBUM-2025-5-30-250607-5.jpg",
                  "https://i.postimg.cc/pVYVFZv0/LINE-ALBUM-2025-5-30-250607-6.jpg"
                ].map((image, index) => (
                  <div key={index} className="artistic-frame premium-hover aspect-square">
                    <img
                      src={image}
                      alt={`Recent creation ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
