
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Search, Filter, Sparkles, TrendingUp, Users, Award } from "lucide-react";

export const GalleryFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const styleCategories = [
    "Fashion Photography", "Portrait Art", "Concept Art", "Abstract",
    "Fine Art", "Digital Art", "Street Photography", "Beauty"
  ];

  const techniques = [
    "Studio Lighting", "Natural Light", "Dramatic Shadows", "Soft Focus",
    "High Contrast", "Vintage", "Minimalist", "Experimental"
  ];

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-playfair font-semibold gradient-text">
          Discover Art
        </h3>
        <div className="flex items-center space-x-2">
          <Search className="w-5 h-5 text-gold-400" />
          <input 
            type="text" 
            placeholder="Search by artist, style, or technique..."
            className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-400/50 w-80"
          />
        </div>
      </div>

      <Tabs defaultValue="curated" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="curated" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Curated</span>
          </TabsTrigger>
          <TabsTrigger value="trending" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </TabsTrigger>
          <TabsTrigger value="featured" className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curated" className="space-y-4">
          <Card className="glass-card p-4">
            <h4 className="font-medium text-gold-400 mb-3">Editorial Selections</h4>
            <div className="flex flex-wrap gap-2">
              {["Monthly Showcase", "Art Director's Choice", "Professional Picks", "Gallery Favorites"].map(collection => (
                <Badge key={collection} variant="outline" className="cursor-pointer hover:bg-gold-500/10">
                  {collection}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trending" className="space-y-4">
          <Card className="glass-card p-4">
            <h4 className="font-medium text-gold-400 mb-3">Popular This Week</h4>
            <div className="flex flex-wrap gap-2">
              {["Ethereal Portraits", "Urban Fashion", "Abstract Concepts", "Vintage Aesthetics"].map(trend => (
                <Badge key={trend} variant="outline" className="cursor-pointer hover:bg-gold-500/10">
                  {trend}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="featured" className="space-y-4">
          <Card className="glass-card p-4">
            <h4 className="font-medium text-gold-400 mb-3">Artist Spotlights</h4>
            <div className="flex flex-wrap gap-2">
              {["Emerging Artists", "Master Photographers", "Digital Innovators", "Classical Revival"].map(feature => (
                <Badge key={feature} variant="outline" className="cursor-pointer hover:bg-gold-500/10">
                  {feature}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card className="glass-card p-4">
            <h4 className="font-medium text-gold-400 mb-3">Community Collections</h4>
            <div className="flex flex-wrap gap-2">
              {["User Favorites", "Collaborative Works", "Student Showcases", "Professional Networks"].map(community => (
                <Badge key={community} variant="outline" className="cursor-pointer hover:bg-gold-500/10">
                  {community}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Filter className="w-4 h-4 mr-2 text-gold-400" />
            Artistic Styles
          </h4>
          <div className="flex flex-wrap gap-2">
            {styleCategories.map(style => (
              <Badge 
                key={style}
                variant={activeFilters.includes(style) ? "default" : "outline"}
                className="cursor-pointer hover:bg-gold-500/10"
                onClick={() => toggleFilter(style)}
              >
                {style}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3">Techniques</h4>
          <div className="flex flex-wrap gap-2">
            {techniques.map(technique => (
              <Badge 
                key={technique}
                variant={activeFilters.includes(technique) ? "default" : "outline"}
                className="cursor-pointer hover:bg-gold-500/10"
                onClick={() => toggleFilter(technique)}
              >
                {technique}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/70">
              {activeFilters.length} filter{activeFilters.length > 1 ? 's' : ''} applied
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setActiveFilters([])}
              className="text-gold-400 hover:bg-gold-500/10"
            >
              Clear All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
