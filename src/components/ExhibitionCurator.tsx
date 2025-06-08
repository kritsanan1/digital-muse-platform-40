import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, Star, Users, Eye, Award, Clock, 
  MapPin, Share2, Heart, Bookmark, Play, Image
} from "lucide-react";

export const ExhibitionCurator = () => {
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);

  const currentExhibitions = [
    {
      id: "1",
      title: "Portraits of Tomorrow",
      curator: "Sarah Chen",
      theme: "Future of Portrait Photography",
      startDate: "2024-01-15",
      endDate: "2024-02-28",
      artworks: 24,
      visitors: 12400,
      featured: true,
      description: "Exploring the evolution of portrait photography through AI-assisted artistry and innovative techniques.",
      coverImage: "https://i.postimg.cc/3rn5hbYH/LINE-ALBUM-2025-5-30-250607-22.jpg",
      status: "active"
    },
    {
      id: "2",
      title: "Abstract Visions",
      curator: "Marcus Rodriguez",
      theme: "Contemporary Abstract Art",
      startDate: "2024-02-01",
      endDate: "2024-03-15",
      artworks: 18,
      visitors: 8900,
      featured: false,
      description: "A journey through modern abstract expression and digital art innovation.",
      coverImage: "https://i.postimg.cc/0NghnTd7/LINE-ALBUM-2025-5-30-250607-24.jpg",
      status: "active"
    }
  ];

  const upcomingExhibitions = [
    {
      id: "3",
      title: "Urban Stories",
      curator: "Elena Kozlov",
      theme: "Street Photography Renaissance",
      startDate: "2024-03-01",
      endDate: "2024-04-15",
      artworks: 32,
      description: "Capturing the soul of urban life through contemporary street photography.",
      coverImage: "https://i.postimg.cc/ZKnk5F5v/LINE-ALBUM-2025-5-30-250607-23.jpg",
      status: "upcoming"
    }
  ];

  const pastExhibitions = [
    {
      id: "4",
      title: "Digital Renaissance",
      curator: "James Park",
      theme: "Classical Meets Digital",
      startDate: "2023-11-01",
      endDate: "2023-12-31",
      artworks: 45,
      visitors: 18600,
      description: "Bridging classical art traditions with modern digital techniques.",
      coverImage: "https://i.postimg.cc/nLvgP30g/LINE-ALBUM-2025-5-30-250607-25.jpg",
      status: "past"
    }
  ];

  const featuredArtists = [
    { name: "Sarah Chen", works: 8, specialty: "Portrait Photography" },
    { name: "Marcus Rodriguez", works: 6, specialty: "Abstract Art" },
    { name: "Elena Kozlov", works: 10, specialty: "Conceptual Photography" }
  ];

  return (
    <div className="space-y-8">
      {/* Exhibition Header */}
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
          Curated{" "}
          <span className="gradient-text">Exhibitions</span>
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Professional curation meets artistic excellence. Discover themed collections 
          curated by art professionals and industry experts.
        </p>
      </div>

      {/* Exhibition Tabs */}
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Archive</TabsTrigger>
          <TabsTrigger value="submit">Submit</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          {/* Featured Exhibition */}
          <Card className="glass-card overflow-hidden bg-gradient-to-r from-gold-500/10 to-gold-600/10 border-gold-500/20">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={currentExhibitions[0].coverImage} 
                  alt={currentExhibitions[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Exhibition
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    <Play className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>

                <h3 className="text-3xl font-playfair font-bold gradient-text mb-2">
                  {currentExhibitions[0].title}
                </h3>
                <p className="text-gold-400 mb-4">Curated by {currentExhibitions[0].curator}</p>
                
                <p className="text-foreground/80 mb-6">{currentExhibitions[0].description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span className="text-foreground/70">
                      {currentExhibitions[0].startDate} - {currentExhibitions[0].endDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Image className="w-4 h-4 text-gold-400" />
                    <span className="text-foreground/70">{currentExhibitions[0].artworks} artworks</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Eye className="w-4 h-4 text-gold-400" />
                    <span className="text-foreground/70">{currentExhibitions[0].visitors.toLocaleString()} visitors</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-gold-400" />
                    <span className="text-foreground/70">12 artists featured</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                    View Exhibition
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Other Current Exhibitions */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentExhibitions.slice(1).map(exhibition => (
              <Card key={exhibition.id} className="glass-card overflow-hidden premium-hover">
                <div className="relative">
                  <img 
                    src={exhibition.coverImage} 
                    alt={exhibition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-green-500/20 border-green-500/30 text-green-400">
                      <Clock className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-gold-400 text-sm mb-3">Curated by {exhibition.curator}</p>
                  <p className="text-foreground/70 text-sm mb-4">{exhibition.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                    <span>{exhibition.artworks} artworks</span>
                    <span>{exhibition.visitors?.toLocaleString()} visitors</span>
                  </div>

                  <Button size="sm" className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black">
                    Explore Exhibition
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingExhibitions.map(exhibition => (
              <Card key={exhibition.id} className="glass-card overflow-hidden premium-hover">
                <div className="relative">
                  <img 
                    src={exhibition.coverImage} 
                    alt={exhibition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-blue-500/20 border-blue-500/30 text-blue-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-gold-400 text-sm mb-3">Curated by {exhibition.curator}</p>
                  <p className="text-foreground/70 text-sm mb-4">{exhibition.description}</p>
                  
                  <div className="text-xs text-foreground/60 mb-4">
                    Opens: {exhibition.startDate}
                  </div>

                  <Button size="sm" variant="outline" className="w-full border-gold-500/30 text-gold-400">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastExhibitions.map(exhibition => (
              <Card key={exhibition.id} className="glass-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={exhibition.coverImage} 
                    alt={exhibition.title}
                    className="w-full h-48 object-cover opacity-75"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-gray-500/20 border-gray-500/30 text-gray-400">
                      <Award className="w-3 h-3 mr-1" />
                      Archived
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-gold-400 text-sm mb-3">Curated by {exhibition.curator}</p>
                  <p className="text-foreground/70 text-sm mb-4">{exhibition.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                    <span>{exhibition.artworks} artworks</span>
                    <span>{exhibition.visitors?.toLocaleString()} total visitors</span>
                  </div>

                  <Button size="sm" variant="outline" className="w-full border-gold-500/30 text-gold-400">
                    View Archive
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submit">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <CardHeader className="text-center pb-6">
              <h3 className="text-2xl font-playfair font-bold gradient-text">Submit Exhibition Proposal</h3>
              <p className="text-foreground/70">
                Propose your curated exhibition to our professional review board
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gold-400 mb-2">Exhibition Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold-400/50"
                  placeholder="Enter your exhibition title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gold-400 mb-2">Theme & Concept</label>
                <textarea
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold-400/50 h-32"
                  placeholder="Describe your exhibition concept, theme, and artistic vision"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gold-400 mb-2">Proposed Duration</label>
                  <select className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold-400/50">
                    <option>2 weeks</option>
                    <option>1 month</option>
                    <option>2 months</option>
                    <option>3 months</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gold-400 mb-2">Expected Artworks</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold-400/50"
                    placeholder="20-50 recommended"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gold-400 mb-2">Curator Experience</label>
                <textarea
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold-400/50"
                  placeholder="Brief description of your curatorial background and experience"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                Submit Proposal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Featured Curators */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-playfair font-bold gradient-text mb-6">Featured Curators</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredArtists.map(curator => (
            <div key={curator.name} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h4 className="font-medium text-foreground mb-1">{curator.name}</h4>
              <p className="text-sm text-gold-400 mb-2">{curator.specialty}</p>
              <p className="text-xs text-foreground/60">{curator.works} curated exhibitions</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
