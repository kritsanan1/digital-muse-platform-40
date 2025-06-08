
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Camera, Palette, Lightbulb, Grid3X3, Save, Share2, 
  Star, Download, Upload, Sparkles, Eye, Heart,
  Brush, Image, Layers, Wand2
} from "lucide-react";

interface StylePreset {
  id: string;
  name: string;
  category: string;
  intensity: number;
  description: string;
  preview?: string;
}

interface CustomStyle {
  id: string;
  name: string;
  photography: StylePreset[];
  artistic: StylePreset[];
  technical: StylePreset[];
  likes: number;
  author: string;
}

export const StyleSystem = () => {
  const [selectedStyles, setSelectedStyles] = useState<StylePreset[]>([]);
  const [mixingMode, setMixingMode] = useState(false);
  const [customStyleName, setCustomStyleName] = useState("");
  const [savedStyles, setSavedStyles] = useState<CustomStyle[]>([]);

  const photographyStyles = {
    fashion: [
      { id: "editorial", name: "Editorial", description: "High-fashion magazine style", intensity: 80 },
      { id: "commercial", name: "Commercial", description: "Clean commercial appeal", intensity: 70 },
      { id: "avant-garde", name: "Avant-garde", description: "Experimental fashion art", intensity: 90 }
    ],
    portrait: [
      { id: "headshots", name: "Professional Headshots", description: "Corporate portrait style", intensity: 75 },
      { id: "environmental", name: "Environmental", description: "Subject in natural setting", intensity: 65 },
      { id: "artistic-portrait", name: "Artistic Portrait", description: "Creative character studies", intensity: 85 }
    ],
    commercial: [
      { id: "product", name: "Product Photography", description: "Clean product showcase", intensity: 80 },
      { id: "lifestyle", name: "Lifestyle", description: "Real-life scenarios", intensity: 70 },
      { id: "advertising", name: "Advertising", description: "Marketing-focused imagery", intensity: 75 }
    ],
    fineArt: [
      { id: "conceptual", name: "Conceptual", description: "Idea-driven photography", intensity: 90 },
      { id: "abstract-photo", name: "Abstract", description: "Non-representational forms", intensity: 85 },
      { id: "artistic-vision", name: "Artistic Vision", description: "Personal artistic expression", intensity: 95 }
    ]
  };

  const artisticStyles = {
    classical: [
      { id: "renaissance", name: "Renaissance", description: "14th-17th century classical art", intensity: 85 },
      { id: "baroque", name: "Baroque", description: "Dramatic light and movement", intensity: 90 },
      { id: "romantic", name: "Romantic", description: "Emotion and individualism", intensity: 80 }
    ],
    modern: [
      { id: "impressionism", name: "Impressionism", description: "Light and color focus", intensity: 75 },
      { id: "cubism", name: "Cubism", description: "Geometric fragmentation", intensity: 85 },
      { id: "abstract-expressionism", name: "Abstract Expressionism", description: "Spontaneous expression", intensity: 90 }
    ],
    contemporary: [
      { id: "digital-art", name: "Digital Art", description: "Modern digital techniques", intensity: 80 },
      { id: "mixed-media", name: "Mixed Media", description: "Combined materials", intensity: 75 },
      { id: "conceptual-art", name: "Conceptual", description: "Idea over form", intensity: 85 }
    ],
    illustration: [
      { id: "editorial-illustration", name: "Editorial", description: "Magazine and book art", intensity: 70 },
      { id: "commercial-illustration", name: "Commercial", description: "Marketing illustrations", intensity: 75 },
      { id: "concept-art", name: "Concept Art", description: "Design and entertainment", intensity: 90 }
    ]
  };

  const technicalCategories = {
    lighting: [
      { id: "studio-light", name: "Studio", description: "Controlled studio lighting", intensity: 80 },
      { id: "natural-light", name: "Natural", description: "Daylight and ambient", intensity: 70 },
      { id: "dramatic-light", name: "Dramatic", description: "High contrast lighting", intensity: 90 },
      { id: "soft-light", name: "Soft", description: "Diffused gentle lighting", intensity: 60 }
    ],
    composition: [
      { id: "minimalist-comp", name: "Minimalist", description: "Clean, simple composition", intensity: 70 },
      { id: "dynamic-comp", name: "Dynamic", description: "Movement and energy", intensity: 85 },
      { id: "classical-comp", name: "Classical", description: "Traditional balance", intensity: 75 },
      { id: "experimental-comp", name: "Experimental", description: "Unconventional framing", intensity: 90 }
    ],
    color: [
      { id: "monochromatic", name: "Monochromatic", description: "Single color variations", intensity: 80 },
      { id: "complementary", name: "Complementary", description: "Opposite color harmony", intensity: 85 },
      { id: "analogous", name: "Analogous", description: "Adjacent color scheme", intensity: 75 },
      { id: "vibrant", name: "Vibrant", description: "Bold, saturated colors", intensity: 90 }
    ],
    texture: [
      { id: "smooth", name: "Smooth", description: "Clean, polished surfaces", intensity: 70 },
      { id: "textured", name: "Textured", description: "Tactile surface quality", intensity: 80 },
      { id: "organic", name: "Organic", description: "Natural, flowing forms", intensity: 75 },
      { id: "geometric", name: "Geometric", description: "Structured, angular forms", intensity: 85 }
    ]
  };

  const toggleStyle = (style: StylePreset, category: string) => {
    const styleWithCategory = { ...style, category };
    const isSelected = selectedStyles.some(s => s.id === style.id);
    
    if (isSelected) {
      setSelectedStyles(prev => prev.filter(s => s.id !== style.id));
    } else {
      setSelectedStyles(prev => [...prev, styleWithCategory]);
    }
  };

  const updateStyleIntensity = (styleId: string, intensity: number) => {
    setSelectedStyles(prev => prev.map(style => 
      style.id === styleId ? { ...style, intensity } : style
    ));
  };

  const saveCustomStyle = () => {
    if (!customStyleName.trim() || selectedStyles.length === 0) return;

    const newStyle: CustomStyle = {
      id: Date.now().toString(),
      name: customStyleName,
      photography: selectedStyles.filter(s => s.category === 'photography'),
      artistic: selectedStyles.filter(s => s.category === 'artistic'),
      technical: selectedStyles.filter(s => s.category === 'technical'),
      likes: 0,
      author: "You"
    };

    setSavedStyles(prev => [...prev, newStyle]);
    setCustomStyleName("");
  };

  const loadCustomStyle = (customStyle: CustomStyle) => {
    const allStyles = [...customStyle.photography, ...customStyle.artistic, ...customStyle.technical];
    setSelectedStyles(allStyles);
  };

  const renderStyleCategory = (styles: any, categoryName: string, icon: any) => {
    const IconComponent = icon;
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <IconComponent className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-playfair font-semibold gradient-text">{categoryName}</h3>
        </div>
        
        {Object.entries(styles).map(([subcategory, styleList]: [string, any]) => (
          <div key={subcategory} className="space-y-3">
            <h4 className="text-sm font-medium text-gold-400 capitalize">
              {subcategory.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {styleList.map((style: any) => {
                const isSelected = selectedStyles.some(s => s.id === style.id);
                return (
                  <Card 
                    key={style.id}
                    className={`glass-card p-4 cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-gold-500 bg-gold-500/10' 
                        : 'border-gold-500/20 hover:border-gold-500/40'
                    }`}
                    onClick={() => toggleStyle(style, 'photography')}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-foreground">{style.name}</h5>
                        <p className="text-xs text-foreground/60 mt-1">{style.description}</p>
                      </div>
                      {isSelected && (
                        <Badge className="bg-gold-500 text-black text-xs">
                          {selectedStyles.find(s => s.id === style.id)?.intensity || style.intensity}%
                        </Badge>
                      )}
                    </div>
                    
                    {isSelected && (
                      <div className="mt-3 space-y-2">
                        <Label className="text-xs text-gold-400">Intensity</Label>
                        <Slider
                          value={[selectedStyles.find(s => s.id === style.id)?.intensity || style.intensity]}
                          onValueChange={([value]) => updateStyleIntensity(style.id, value)}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header with Mixing Controls */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-playfair font-bold gradient-text">Style System</h2>
            <p className="text-foreground/70 mt-1">Create and customize professional artistic styles</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="mixing-mode" className="text-sm text-gold-400">Style Mixing</Label>
              <Switch
                id="mixing-mode"
                checked={mixingMode}
                onCheckedChange={setMixingMode}
              />
            </div>
            <Badge variant="outline" className="border-gold-500/30 text-gold-400">
              {selectedStyles.length} Active Styles
            </Badge>
          </div>
        </div>

        {/* Active Styles Preview */}
        {selectedStyles.length > 0 && (
          <div className="border-t border-gold-500/20 pt-4">
            <h3 className="text-sm font-medium text-gold-400 mb-3">Active Style Combination</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedStyles.map((style) => (
                <Badge
                  key={style.id}
                  className="bg-gold-500/20 text-gold-400 border border-gold-500/30"
                >
                  {style.name} ({style.intensity}%)
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <Input
                placeholder="Name your custom style..."
                value={customStyleName}
                onChange={(e) => setCustomStyleName(e.target.value)}
                className="flex-1 bg-black/20 border-gold-500/20"
              />
              <Button
                onClick={saveCustomStyle}
                disabled={!customStyleName.trim() || selectedStyles.length === 0}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Style
              </Button>
              <Button variant="outline" className="border-gold-500/30 text-gold-400">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Style Categories */}
      <Tabs defaultValue="photography" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/20">
          <TabsTrigger value="photography" className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span>Photography</span>
          </TabsTrigger>
          <TabsTrigger value="artistic" className="flex items-center space-x-2">
            <Brush className="w-4 h-4" />
            <span>Artistic</span>
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>Technical</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Saved</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photography" className="space-y-6 mt-6">
          <Card className="glass-card p-6">
            {renderStyleCategory(photographyStyles, "Photography Styles", Camera)}
          </Card>
        </TabsContent>

        <TabsContent value="artistic" className="space-y-6 mt-6">
          <Card className="glass-card p-6">
            {renderStyleCategory(artisticStyles, "Artistic Styles", Brush)}
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6 mt-6">
          <Card className="glass-card p-6">
            {renderStyleCategory(technicalCategories, "Technical Categories", Layers)}
          </Card>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6 mt-6">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-playfair font-semibold gradient-text">Saved Style Presets</h3>
              </div>
              <Button variant="outline" className="border-gold-500/30 text-gold-400">
                <Upload className="w-4 h-4 mr-2" />
                Import Preset
              </Button>
            </div>

            {savedStyles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedStyles.map((style) => (
                  <Card key={style.id} className="glass-card p-4 premium-hover">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{style.name}</h4>
                        <p className="text-xs text-foreground/60">by {style.author}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-gold-400" />
                        <span className="text-xs text-gold-400">{style.likes}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-foreground/60">
                        {style.photography.length + style.artistic.length + style.technical.length} styles combined
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {[...style.photography, ...style.artistic, ...style.technical]
                          .slice(0, 3)
                          .map((s) => (
                            <Badge key={s.id} variant="outline" className="text-xs border-gold-500/30">
                              {s.name}
                            </Badge>
                          ))}
                        {style.photography.length + style.artistic.length + style.technical.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gold-500/30">
                            +{style.photography.length + style.artistic.length + style.technical.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        onClick={() => loadCustomStyle(style)}
                        className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
                      >
                        <Wand2 className="w-4 h-4 mr-2" />
                        Load
                      </Button>
                      <Button variant="outline" size="sm" className="border-gold-500/30 text-gold-400">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-gold-400/50" />
                <h4 className="text-lg font-medium text-foreground mb-2">No Saved Styles Yet</h4>
                <p className="text-foreground/60 mb-4">Create your first custom style combination</p>
                <Button variant="outline" className="border-gold-500/30 text-gold-400">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Explore Styles
                </Button>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>

      {/* Professional Style Validation */}
      {selectedStyles.length > 0 && (
        <Card className="glass-card p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5 text-gold-400" />
            <h3 className="text-lg font-playfair font-semibold gradient-text">Style Analysis</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400 mb-1">
                {Math.round(selectedStyles.reduce((acc, style) => acc + style.intensity, 0) / selectedStyles.length)}%
              </div>
              <div className="text-sm text-foreground/60">Average Intensity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400 mb-1">
                {selectedStyles.length > 1 && mixingMode ? 'Mixed' : 'Single'}
              </div>
              <div className="text-sm text-foreground/60">Style Mode</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-400 mb-1">Pro</div>
              <div className="text-sm text-foreground/60">Quality Level</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
