
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Award, MapPin, Calendar, Eye, Heart, Share2, 
  Follow, MessageCircle, Star, Grid, List, Filter
} from "lucide-react";

interface ArtistProfileProps {
  artist: {
    id: string;
    name: string;
    bio: string;
    location: string;
    joinDate: string;
    verified: boolean;
    specialties: string[];
    followers: number;
    following: number;
    artworks: number;
    totalViews: number;
    totalLikes: number;
    avatar?: string;
    coverImage?: string;
  };
  artworks: Array<{
    id: string;
    title: string;
    image: string;
    style: string;
    likes: number;
    views: number;
    created: string;
  }>;
}

export const ArtistProfile = ({ artist, artworks }: ArtistProfileProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Cover Image */}
      <div className="h-64 bg-gradient-to-br from-gold-500/20 to-gold-600/30 rounded-lg mb-6 relative overflow-hidden">
        {artist.coverImage && (
          <img src={artist.coverImage} alt="Cover" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Profile Header */}
      <Card className="glass-card -mt-16 relative z-10 mb-8">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center border-4 border-white/20">
                {artist.avatar ? (
                  <img src={artist.avatar} alt={artist.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-black" />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-playfair font-bold text-foreground">{artist.name}</h1>
                  {artist.verified && (
                    <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                      <Award className="w-3 h-3 mr-1" />
                      Verified Artist
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-foreground/60 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {artist.joinDate}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map(specialty => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant={isFollowing ? "outline" : "default"}
                onClick={() => setIsFollowing(!isFollowing)}
                className={isFollowing ? "border-gold-500/30 text-gold-400" : "bg-gradient-to-r from-gold-500 to-gold-600 text-black"}
              >
                <Follow className="w-4 h-4 mr-2" />
                {isFollowing ? "Following" : "Follow"}
              </Button>
              
              <Button variant="outline" className="border-gold-500/30 text-gold-400">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
              
              <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">{artist.followers.toLocaleString()}</div>
              <div className="text-sm text-foreground/60">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">{artist.following.toLocaleString()}</div>
              <div className="text-sm text-foreground/60">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">{artist.artworks.toLocaleString()}</div>
              <div className="text-sm text-foreground/60">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400">{artist.totalViews.toLocaleString()}</div>
              <div className="text-sm text-foreground/60">Total Views</div>
            </div>
          </div>

          <p className="text-foreground/80 leading-relaxed">{artist.bio}</p>
        </CardContent>
      </Card>

      {/* Portfolio Tabs */}
      <Tabs defaultValue="portfolio" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="grid w-auto grid-cols-4">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="exhibitions">Exhibitions</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="border-gold-500/30 text-gold-400"
            >
              {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="portfolio">
          <div className={viewMode === 'grid' ? 
            "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6" : 
            "space-y-4"
          }>
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="glass-card overflow-hidden premium-hover break-inside-avoid">
                <div className="relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Heart className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">{artwork.likes}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-1">{artwork.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline">{artwork.style}</Badge>
                    <div className="flex items-center space-x-3 text-foreground/60">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{artwork.views}</span>
                      </div>
                      <span>{artwork.created}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collections">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Portrait Series", "Abstract Concepts", "Commercial Work"].map(collection => (
              <Card key={collection} className="glass-card p-6 premium-hover">
                <div className="aspect-video bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                  <Grid className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{collection}</h3>
                <p className="text-sm text-foreground/60 mb-4">24 artworks</p>
                <Button size="sm" variant="outline" className="border-gold-500/30 text-gold-400">
                  View Collection
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="exhibitions">
          <div className="space-y-4">
            {["Digital Renaissance - 2024", "Portraits of Tomorrow - 2023", "Abstract Visions - 2023"].map(exhibition => (
              <Card key={exhibition} className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{exhibition}</h3>
                    <p className="text-sm text-foreground/60">Featured in gallery showcase</p>
                  </div>
                  <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="about">
          <Card className="glass-card p-6">
            <h3 className="font-medium text-gold-400 mb-4">Professional Background</h3>
            <div className="space-y-4 text-foreground/80">
              <p>Professional digital artist with over 8 years of experience in commercial and fine art photography. Specializing in portrait photography and conceptual art creation.</p>
              <p>Featured in numerous exhibitions and publications, with work displayed in galleries across North America and Europe.</p>
              
              <h4 className="font-medium text-foreground mt-6 mb-2">Awards & Recognition</h4>
              <ul className="space-y-2 text-sm">
                <li>• Digital Art Excellence Award 2023</li>
                <li>• Portrait Photography of the Year 2022</li>
                <li>• Featured Artist at Contemporary Art Fair 2022</li>
              </ul>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
