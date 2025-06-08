import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star, Eye, Download, Heart, Award, Calendar, Users, Network, MessageCircle } from "lucide-react";
import { GalleryFilters } from "./GalleryFilters";
import { ArtworkModal } from "./ArtworkModal";
import { VisualSearch } from "./VisualSearch";
import { ExhibitionCurator } from "./ExhibitionCurator";
import { CommunityHub } from "./CommunityHub";
import { ArtCritique } from "./ArtCritique";
import { ArtistProfile } from "./ArtistProfile";

export const ArtistGallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState("gallery");

  const featuredArtworks = [
    {
      id: "1",
      image: "https://i.postimg.cc/3rn5hbYH/LINE-ALBUM-2025-5-30-250607-22.jpg",
      title: "Ethereal Portrait",
      artist: "Sarah Chen",
      style: "Fashion Photography",
      likes: 2840,
      views: 15400,
      technique: "Studio Lighting",
      created: "2024-01-15",
      description: "A captivating portrait that explores the interplay between light and shadow, creating an ethereal quality that transcends traditional fashion photography.",
      dimensions: "3840 x 5760px",
      license: "Creative Commons"
    },
    {
      id: "2",
      image: "https://i.postimg.cc/ZKnk5F5v/LINE-ALBUM-2025-5-30-250607-23.jpg",
      title: "Urban Elegance",
      artist: "Marcus Rodriguez",
      style: "Street Portrait",
      likes: 1920,
      views: 8900,
      technique: "Natural Light",
      created: "2024-02-03",
      description: "Street photography meets high fashion in this compelling urban portrait series.",
      dimensions: "4096 x 6144px",
      license: "Commercial"
    },
    {
      id: "3",
      image: "https://i.postimg.cc/0NghnTd7/LINE-ALBUM-2025-5-30-250607-24.jpg",
      title: "Golden Hour",
      artist: "Elena Kozlov",
      style: "Conceptual Art",
      likes: 3150,
      views: 12200,
      technique: "Natural Light",
      created: "2024-01-28",
      description: "Captured during the magic hour, this piece explores themes of time and transformation.",
      dimensions: "5120 x 3840px",
      license: "Attribution"
    },
    {
      id: "4",
      image: "https://i.postimg.cc/nLvgP30g/LINE-ALBUM-2025-5-30-250607-25.jpg",
      title: "Artistic Vision",
      artist: "James Park",
      style: "Fine Art",
      likes: 2670,
      views: 9800,
      technique: "Studio Lighting",
      created: "2024-02-12",
      description: "A bold exploration of contemporary portraiture that challenges conventional beauty standards.",
      dimensions: "4800 x 7200px",
      license: "Creative Commons"
    },
    {
      id: "5",
      image: "https://i.postimg.cc/769cxfvN/LINE-ALBUM-2025-5-30-250607-26.jpg",
      title: "Modern Beauty",
      artist: "Aria Thompson",
      style: "Beauty Photography",
      likes: 4200,
      views: 18600,
      technique: "Soft Focus",
      created: "2024-01-22",
      description: "Redefining beauty through innovative lighting techniques and artistic composition.",
      dimensions: "3600 x 5400px",
      license: "Commercial"
    },
    {
      id: "6",
      image: "https://i.postimg.cc/yxrbZt8g/LINE-ALBUM-2025-5-30-250607-27.jpg",
      title: "Creative Expression",
      artist: "David Kim",
      style: "Abstract Art",
      likes: 1580,
      views: 6700,
      technique: "Experimental",
      created: "2024-02-18",
      description: "An abstract interpretation of human emotion expressed through color and form.",
      dimensions: "4000 x 6000px",
      license: "Attribution"
    }
  ];

  const featuredArtists = [
    { name: 'Sarah Chen', specialty: 'Fashion Photography', verified: true, followers: 12400 },
    { name: 'Marcus Rodriguez', specialty: 'Street Portrait', verified: true, followers: 8900 },
    { name: 'Elena Kozlov', specialty: 'Conceptual Art', verified: true, followers: 15600 },
    { name: 'James Park', specialty: 'Fine Art', verified: false, followers: 6700 }
  ];

  const sampleArtist = {
    id: "sarah-chen",
    name: "Sarah Chen",
    bio: "Professional photographer specializing in portrait and fashion photography with over 8 years of experience. Passionate about exploring the intersection of traditional techniques and modern AI-assisted artistry.",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    verified: true,
    specialties: ["Portrait Photography", "Fashion Photography", "Studio Lighting", "Digital Art"],
    followers: 12400,
    following: 890,
    artworks: 156,
    totalViews: 450000,
    totalLikes: 89000,
    avatar: "",
    coverImage: ""
  };

  const handleArtworkClick = (artwork: any) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  if (activeView === "artist-profile") {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setActiveView("gallery")}
              className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
            >
              ← Back to Gallery
            </Button>
          </div>
          <ArtistProfile artist={sampleArtist} artworks={featuredArtworks} />
        </div>
      </section>
    );
  }

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

        {/* Enhanced Navigation */}
        <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="gallery" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Discover</span>
            </TabsTrigger>
            <TabsTrigger value="exhibitions" className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Exhibitions</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>Community</span>
            </TabsTrigger>
            <TabsTrigger value="critique" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Critique</span>
            </TabsTrigger>
            <TabsTrigger value="artists" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Artists</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            {/* Featured Artists Carousel */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-playfair font-semibold gradient-text">
                  Featured Artists This Month
                </h3>
                <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
                  View All Artists
                </Button>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {featuredArtists.map((artist, index) => (
                  <Card 
                    key={artist.name} 
                    className="glass-card p-6 text-center premium-hover cursor-pointer"
                    onClick={() => setActiveView("artist-profile")}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <User className="w-8 h-8 text-black" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="font-medium text-foreground">{artist.name}</h4>
                        {artist.verified && (
                          <Award className="w-4 h-4 text-gold-400" />
                        )}
                      </div>
                      <p className="text-sm text-gold-400">{artist.specialty}</p>
                      <p className="text-xs text-foreground/60">{artist.followers.toLocaleString()} followers</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gallery Filters */}
            <GalleryFilters />

            {/* Current Exhibition Banner */}
            <Card className="glass-card p-8 mb-12 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border-gold-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-gold-400" />
                    <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                      Current Exhibition
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold gradient-text mb-2">
                    "Portraits of Tomorrow" - January 2024
                  </h3>
                  <p className="text-foreground/70">
                    A curated collection exploring the future of portrait photography through AI-assisted artistry
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
                  onClick={() => setActiveView("exhibitions")}
                >
                  View Exhibition
                </Button>
              </div>
            </Card>

            {/* Masonry Gallery Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {featuredArtworks.map((artwork, index) => (
                <Card 
                  key={artwork.id} 
                  className="glass-card overflow-hidden group premium-hover break-inside-avoid cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleArtworkClick(artwork)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-3">
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{artwork.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-black/50 border-white/20 text-white">
                        {artwork.style}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-gold-400" />
                      <span className="text-sm text-white font-medium">{artwork.likes}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-playfair font-semibold mb-2 text-foreground group-hover:text-gold-400 transition-colors">
                      {artwork.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gold-400 font-medium text-sm">by {artwork.artist}</div>
                        <div className="text-foreground/60 text-sm">{artwork.technique}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        HD Quality
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Gallery Actions */}
            <div className="text-center space-y-6 mt-16">
              <div className="flex justify-center space-x-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-8"
                >
                  Load More Artworks
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
                Showcasing 24,000+ professional artworks from 12,000+ verified artists worldwide
              </div>
            </div>
          </TabsContent>

          <TabsContent value="search">
            <VisualSearch />
          </TabsContent>

          <TabsContent value="exhibitions">
            <ExhibitionCurator />
          </TabsContent>

          <TabsContent value="community">
            <CommunityHub />
          </TabsContent>

          <TabsContent value="critique">
            <ArtCritique />
          </TabsContent>

          <TabsContent value="artists">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold gradient-text mb-8">Professional Artist Directory</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArtists.map((artist) => (
                  <Card 
                    key={artist.name} 
                    className="glass-card p-6 premium-hover cursor-pointer"
                    onClick={() => setActiveView("artist-profile")}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <User className="w-10 h-10 text-black" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <h4 className="font-medium text-foreground">{artist.name}</h4>
                          {artist.verified && (
                            <Award className="w-4 h-4 text-gold-400" />
                          )}
                        </div>
                        <p className="text-sm text-gold-400">{artist.specialty}</p>
                        <p className="text-xs text-foreground/60">{artist.followers.toLocaleString()} followers</p>
                        <Button size="sm" className="mt-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedArtwork(null);
          }}
        />
      )}
    </section>
  );
};
