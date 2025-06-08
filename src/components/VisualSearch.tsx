
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Search, Filter, Image, Palette, Camera, TrendingUp, 
  Star, Eye, Heart, Upload, Wand2, Grid3X3, Sparkles
} from "lucide-react";

export const VisualSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState("");
  const [qualityRange, setQualityRange] = useState([50]);

  const colorPalettes = [
    { name: "Warm", colors: ["#ff6b35", "#f7931e", "#ffd23f"], value: "warm" },
    { name: "Cool", colors: ["#3d5a80", "#98c1d9", "#e0fbfc"], value: "cool" },
    { name: "Monochrome", colors: ["#2d3436", "#636e72", "#ddd"], value: "mono" },
    { name: "Vibrant", colors: ["#e17055", "#fdcb6e", "#6c5ce7"], value: "vibrant" }
  ];

  const styleCategories = [
    "Portrait", "Landscape", "Abstract", "Fashion", "Architecture", 
    "Street", "Nature", "Conceptual", "Commercial", "Fine Art"
  ];

  const techniques = [
    "HDR", "Long Exposure", "Macro", "Wide Angle", "Telephoto",
    "Natural Light", "Studio Light", "Golden Hour", "Blue Hour"
  ];

  const trendingSearches = [
    "minimalist portraits", "urban landscapes", "abstract concepts",
    "fashion photography", "nature macro", "architectural details"
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="space-y-6">
      {/* Visual Search Header */}
      <Card className="glass-card p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold-400" />
            <input
              type="text"
              placeholder="Search by style, mood, technique, or artist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
            />
          </div>
          
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
            <Upload className="w-4 h-4 mr-2" />
            Search by Image
          </Button>
        </div>

        {/* Trending Searches */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-gold-400">Trending Searches</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map(search => (
              <Button
                key={search}
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery(search)}
                className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Advanced Filters */}
      <Tabs defaultValue="style" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="color">Color</TabsTrigger>
          <TabsTrigger value="technique">Technique</TabsTrigger>
          <TabsTrigger value="quality">Quality</TabsTrigger>
          <TabsTrigger value="ai">AI Discovery</TabsTrigger>
        </TabsList>

        <TabsContent value="style">
          <Card className="glass-card p-6">
            <h3 className="font-medium text-gold-400 mb-4">Artistic Styles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {styleCategories.map(style => (
                <Button
                  key={style}
                  variant={selectedFilters.includes(style) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(style)}
                  className={selectedFilters.includes(style) 
                    ? "bg-gold-500 text-black" 
                    : "border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                  }
                >
                  {style}
                </Button>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="color">
          <Card className="glass-card p-6">
            <h3 className="font-medium text-gold-400 mb-4">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colorPalettes.map(palette => (
                <div
                  key={palette.name}
                  className={`cursor-pointer p-4 rounded-lg border transition-all ${
                    colorFilter === palette.value
                      ? "border-gold-400 bg-gold-500/10"
                      : "border-white/10 hover:border-gold-400/50"
                  }`}
                  onClick={() => setColorFilter(palette.value)}
                >
                  <div className="flex space-x-1 mb-2">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground">{palette.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="technique">
          <Card className="glass-card p-6">
            <h3 className="font-medium text-gold-400 mb-4">Photography Techniques</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {techniques.map(technique => (
                <Button
                  key={technique}
                  variant={selectedFilters.includes(technique) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(technique)}
                  className={selectedFilters.includes(technique)
                    ? "bg-gold-500 text-black"
                    : "border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                  }
                >
                  {technique}
                </Button>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="quality">
          <Card className="glass-card p-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gold-400">Minimum Quality Score</span>
                  <span className="text-foreground">{qualityRange[0]}%</span>
                </div>
                <Slider
                  value={qualityRange}
                  onValueChange={setQualityRange}
                  max={100}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["4K+", "8K+", "Professional", "Award Winning"].map(quality => (
                  <Button
                    key={quality}
                    variant={selectedFilters.includes(quality) ? "default" : "outline"}
                    onClick={() => toggleFilter(quality)}
                    className={selectedFilters.includes(quality)
                      ? "bg-gold-500 text-black"
                      : "border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                    }
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {quality}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card className="glass-card p-6">
            <h3 className="font-medium text-gold-400 mb-4">AI-Powered Discovery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Find Similar Artworks
                </Button>
                <Button variant="outline" className="w-full border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Style Transfer Search
                </Button>
                <Button variant="outline" className="w-full border-gold-500/30 text-gold-400 hover:bg-gold-500/10">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Composition Analysis
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Quick Discovery</h4>
                {["Trending this week", "Editor's recommendations", "Similar to your likes"].map(option => (
                  <Button
                    key={option}
                    variant="ghost"
                    className="w-full justify-start text-foreground/70 hover:text-gold-400 hover:bg-gold-500/10"
                  >
                    <TrendingUp className="w-4 h-4 mr-3" />
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Applied Filters */}
      {selectedFilters.length > 0 && (
        <Card className="glass-card p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-gold-400">Active Filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map(filter => (
                  <Badge
                    key={filter}
                    variant="outline"
                    className="border-gold-500/30 text-gold-400 cursor-pointer hover:bg-gold-500/10"
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter} ×
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFilters([])}
              className="text-gold-400 hover:bg-gold-500/10"
            >
              Clear All
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
