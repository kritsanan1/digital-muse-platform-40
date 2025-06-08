
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Play, Palette, Camera, Sparkles } from "lucide-react";

export const InteractiveHero = () => {
  const [activeStyle, setActiveStyle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stylePresets = [
    {
      name: "Fashion Photography",
      description: "Editorial elegance meets commercial sophistication",
      images: [
        "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
        "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg"
      ],
      icon: Camera,
      gradient: "from-rose-500 to-pink-600"
    },
    {
      name: "Portrait Artistry",
      description: "Professional portraiture with artistic vision",
      images: [
        "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
        "https://i.postimg.cc/PfmJMHWQ/LINE-ALBUM-2025-5-30-250607-4.jpg"
      ],
      icon: Star,
      gradient: "from-gold-500 to-amber-600"
    },
    {
      name: "Conceptual Art",
      description: "Creative expression through digital mastery",
      images: [
        "https://i.postimg.cc/28G5PxXq/LINE-ALBUM-2025-5-30-250607-5.jpg",
        "https://i.postimg.cc/pVYVFZv0/LINE-ALBUM-2025-5-30-250607-6.jpg"
      ],
      icon: Palette,
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { value: "2.3M+", label: "Professional Artworks", increment: 1247 },
    { value: "45K+", label: "Creative Professionals", increment: 127 },
    { value: "99.2%", label: "Quality Score", increment: 0.1 },
    { value: "8K", label: "Max Resolution", increment: 0 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentStyle = stylePresets[activeStyle];
  const IconComponent = currentStyle.icon;

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Hero Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gold-400">
                <div className="w-8 h-8 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-black" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">Professional AI Artistry Platform</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-playfair font-bold leading-tight">
                Create{" "}
                <span className="relative">
                  <span className="gradient-text">Masterpiece</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transform scale-x-0 animate-[scale-x-100_1s_ease-out_2s_forwards]" />
                </span>{" "}
                Art with AI
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
                Elevate your creative vision with our professional-grade AI studio. 
                Transform concepts into stunning visual masterpieces that rival traditional artistry.
              </p>
            </div>

            {/* Interactive Style Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground/90">Choose Your Artistic Style:</h3>
              <div className="flex flex-wrap gap-3">
                {stylePresets.map((style, index) => {
                  const StyleIcon = style.icon;
                  return (
                    <Button
                      key={index}
                      variant={activeStyle === index ? "default" : "outline"}
                      className={`${
                        activeStyle === index 
                          ? `bg-gradient-to-r ${style.gradient} text-white border-0` 
                          : "border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                      } transition-all duration-300`}
                      onClick={() => setActiveStyle(index)}
                    >
                      <StyleIcon className="w-4 h-4 mr-2" />
                      {style.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-10 py-6 text-lg group shadow-2xl shadow-gold-500/25"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Start Creating Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 px-10 py-6 text-lg backdrop-blur-sm"
              >
                Explore Gallery
              </Button>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gold-500/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Style Preview */}
          <div className="relative">
            <Card className="glass-card p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${currentStyle.gradient} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-foreground">
                      {currentStyle.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {currentStyle.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Preview with Smooth Transitions */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden artistic-frame">
                {currentStyle.images.map((image, index) => (
                  <img
                    key={`${activeStyle}-${index}`}
                    src={image}
                    alt={`${currentStyle.name} example ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                
                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Floating Quality Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 text-gold-400 fill-current" />
                  <span className="text-xs text-white font-medium">8K Quality</span>
                </div>
              </div>

              {/* Preview Controls */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {currentStyle.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? `bg-gradient-to-r ${currentStyle.gradient}` 
                          : 'bg-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-gold-400 hover:bg-gold-500/10"
                >
                  Try This Style →
                </Button>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold-400/30 to-rose-500/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
