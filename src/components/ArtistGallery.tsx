
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Star } from "lucide-react";

export const ArtistGallery = () => {
  const featuredArtworks = [
    {
      id: 1,
      image: "https://i.postimg.cc/3rn5hbYH/LINE-ALBUM-2025-5-30-250607-22.jpg",
      title: "Ethereal Portrait",
      artist: "Sarah Chen",
      style: "Fashion Photography",
      likes: 2840
    },
    {
      id: 2,
      image: "https://i.postimg.cc/ZKnk5F5v/LINE-ALBUM-2025-5-30-250607-23.jpg",
      title: "Urban Elegance",
      artist: "Marcus Rodriguez",
      style: "Street Portrait",
      likes: 1920
    },
    {
      id: 3,
      image: "https://i.postimg.cc/0NghnTd7/LINE-ALBUM-2025-5-30-250607-24.jpg",
      title: "Golden Hour",
      artist: "Elena Kozlov",
      style: "Conceptual Art",
      likes: 3150
    },
    {
      id: 4,
      image: "https://i.postimg.cc/nLvgP30g/LINE-ALBUM-2025-5-30-250607-25.jpg",
      title: "Artistic Vision",
      artist: "James Park",
      style: "Fine Art",
      likes: 2670
    },
    {
      id: 5,
      image: "https://i.postimg.cc/769cxfvN/LINE-ALBUM-2025-5-30-250607-26.jpg",
      title: "Modern Beauty",
      artist: "Aria Thompson",
      style: "Beauty Photography",
      likes: 4200
    },
    {
      id: 6,
      image: "https://i.postimg.cc/yxrbZt8g/LINE-ALBUM-2025-5-30-250607-27.jpg",
      title: "Creative Expression",
      artist: "David Kim",
      style: "Abstract Art",
      likes: 1580
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Art Gallery</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover exceptional artwork created by our community of professional artists. 
            Each piece showcases the pinnacle of AI-assisted artistic creation.
          </p>
        </div>

        {/* Featured Artists Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-playfair font-semibold mb-6 gradient-text">
            Featured Artists This Month
          </h3>
          <div className="flex items-center space-x-6 overflow-x-auto pb-4">
            {['Sarah Chen', 'Marcus Rodriguez', 'Elena Kozlov', 'James Park'].map((artist, index) => (
              <div key={artist} className="flex-shrink-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-2">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div className="text-sm font-medium text-foreground">{artist}</div>
                <div className="text-xs text-foreground/60">Pro Artist</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtworks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              className="glass-card overflow-hidden group premium-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold-400" />
                  <span className="text-sm text-white font-medium">{artwork.likes}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-playfair font-semibold mb-2 text-foreground">
                  {artwork.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-gold-400 font-medium">by {artwork.artist}</div>
                    <div className="text-foreground/60">{artwork.style}</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gold-400 hover:bg-gold-500/10">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Actions */}
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-8"
            >
              Explore Full Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 px-8"
            >
              Submit Your Art
            </Button>
          </div>
          
          <div className="text-sm text-foreground/60">
            Join our community of 12,000+ professional artists and showcase your creative vision
          </div>
        </div>
      </div>
    </section>
  );
};
