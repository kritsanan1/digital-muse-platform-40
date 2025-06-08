import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Image, Star, Settings, Palette, Grid3X3, Sun, Moon, Lightbulb, Save, History, Share2, Download, Play, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useGeneration } from "@/contexts/GenerationContext";
import { replicateService } from "@/services/replicate";
import { ApiTokenSetup } from "./ApiTokenSetup";
import { GenerationProgress } from "./GenerationProgress";

export const CreativeStudio = () => {
  const { state, generateImage, clearError, hasApiToken } = useGeneration();
  const [selectedModel, setSelectedModel] = useState("stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b");
  const [selectedStyle, setSelectedStyle] = useState("photorealistic");
  const [prompt, setPrompt] = useState("Professional fashion portrait with dramatic studio lighting");
  const [artisticStyle, setArtisticStyle] = useState([75]);
  const [creativity, setCreativity] = useState([80]);
  const [mood, setMood] = useState([60]);
  const [lighting, setLighting] = useState("studio");
  const [composition, setComposition] = useState("rule-of-thirds");

  const styleCategories = {
    artistic: [
      { id: "photorealistic", name: "Photorealistic", description: "Ultra-realistic photography style" },
      { id: "painterly", name: "Painterly", description: "Artistic painting techniques" },
      { id: "conceptual", name: "Conceptual", description: "Abstract and conceptual art" }
    ],
    photography: [
      { id: "fashion", name: "Fashion Photography", icon: Camera, preview: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg" },
      { id: "portrait", name: "Portrait Art", icon: Image, preview: "https://i.postimg.cc/Y0fS2Nrs/LINE-ALBUM-2025-5-30-250607-2.jpg" },
      { id: "concept", name: "Concept Art", icon: Star, preview: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg" }
    ]
  };

  const lightingPresets = [
    { id: "studio", name: "Studio", icon: Lightbulb, description: "Professional studio lighting" },
    { id: "natural", name: "Natural", icon: Sun, description: "Soft natural daylight" },
    { id: "dramatic", name: "Dramatic", icon: Moon, description: "High contrast dramatic lighting" }
  ];

  const compositionGuides = [
    { id: "rule-of-thirds", name: "Rule of Thirds", icon: Grid3X3 },
    { id: "golden-ratio", name: "Golden Ratio", icon: Grid3X3 },
    { id: "centered", name: "Centered", icon: Grid3X3 }
  ];

  const colorPalettes = [
    { id: "warm", name: "Warm", colors: ["#FF6B35", "#F7931E", "#FFD23F"] },
    { id: "cool", name: "Cool", colors: ["#4ECDC4", "#45B7D1", "#96CEB4"] },
    { id: "monochrome", name: "Monochrome", colors: ["#2C3E50", "#7F8C8D", "#BDC3C7"] },
    { id: "vibrant", name: "Vibrant", colors: ["#E74C3C", "#9B59B6", "#3498DB"] }
  ];

  const promptLibrary = [
    "Elegant fashion portrait with dramatic rim lighting and minimalist background",
    "Conceptual art piece featuring surreal geometric forms in ethereal atmosphere",
    "Professional headshot with soft studio lighting and natural expression",
    "Abstract artistic composition with flowing organic shapes and vibrant colors"
  ];

  const availableModels = replicateService.getAvailableModels();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    const generationParams = {
      prompt,
      model: selectedModel,
      style: selectedStyle,
      lighting,
      composition,
      artisticStyle: artisticStyle[0],
      creativity: creativity[0],
      mood: mood[0],
      width: 1024,
      height: 1024
    };

    await generateImage(generationParams);
  };

  if (!hasApiToken) {
    return (
      <section id="studio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Professional Creative{" "}
              <span className="gradient-text">Studio</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Connect your Replicate API to start creating professional artwork
            </p>
          </div>
          <ApiTokenSetup />
        </div>
      </section>
    );
  }

  return (
    <section id="studio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Professional Creative{" "}
            <span className="gradient-text">Studio</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Advanced creative workspace with professional-grade tools for artistic image generation
          </p>
        </div>

        {/* Error Alert */}
        {state.error && (
          <Alert className="mb-6 border-red-500/20 bg-red-500/5">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>{state.error}</span>
              <Button variant="ghost" size="sm" onClick={clearError}>
                <X className="w-4 h-4" />
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Split-screen Layout */}
        <div className="grid lg:grid-cols-5 gap-6 min-h-[800px]">
          
          {/* Left Panel - Controls */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Model Selection */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">AI Model</h3>
              <div className="space-y-2">
                {availableModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedModel === model.id
                        ? 'border-gold-500 bg-gold-500/10'
                        : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="font-semibold text-sm">{model.name}</div>
                    <div className="text-xs text-foreground/60">{model.description}</div>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {model.category}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            {/* Project Management */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-playfair font-semibold gradient-text">Project Workspace</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="border-gold-500/30">
                    <History className="w-4 h-4 mr-2" />
                    History
                  </Button>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                <p>Generated Images: {state.history.length}</p>
                <p>Last generated: {state.history[0] ? new Date(state.history[0].timestamp).toLocaleTimeString() : 'None'}</p>
              </div>
            </Card>

            {/* Creative Controls Tabs */}
            <Card className="glass-card p-6">
              <Tabs defaultValue="style" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-black/20">
                  <TabsTrigger value="style" className="text-xs">Style</TabsTrigger>
                  <TabsTrigger value="lighting" className="text-xs">Light</TabsTrigger>
                  <TabsTrigger value="composition" className="text-xs">Comp</TabsTrigger>
                  <TabsTrigger value="mood" className="text-xs">Mood</TabsTrigger>
                </TabsList>

                <TabsContent value="style" className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">Artistic Style</label>
                    <div className="grid gap-2">
                      {styleCategories.artistic.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => setSelectedStyle(style.id)}
                          className={`text-left p-3 rounded-lg border transition-all ${
                            selectedStyle === style.id
                              ? 'border-gold-500 bg-gold-500/10'
                              : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                          }`}
                        >
                          <div className="font-semibold text-sm">{style.name}</div>
                          <div className="text-xs text-foreground/60">{style.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="lighting" className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">Lighting Preset</label>
                    <div className="grid gap-2">
                      {lightingPresets.map((preset) => {
                        const IconComponent = preset.icon;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => setLighting(preset.id)}
                            className={`text-left p-3 rounded-lg border transition-all flex items-center ${
                              lighting === preset.id
                                ? 'border-gold-500 bg-gold-500/10'
                                : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-3 text-gold-400" />
                            <div>
                              <div className="font-semibold text-sm">{preset.name}</div>
                              <div className="text-xs text-foreground/60">{preset.description}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="composition" className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">Composition Guide</label>
                    <div className="grid gap-2">
                      {compositionGuides.map((guide) => {
                        const IconComponent = guide.icon;
                        return (
                          <button
                            key={guide.id}
                            onClick={() => setComposition(guide.id)}
                            className={`text-left p-3 rounded-lg border transition-all flex items-center ${
                              composition === guide.id
                                ? 'border-gold-500 bg-gold-500/10'
                                : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-3 text-gold-400" />
                            <span className="font-semibold text-sm">{guide.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="mood" className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold-400">Color Palette</label>
                    <div className="grid grid-cols-2 gap-2">
                      {colorPalettes.map((palette) => (
                        <button
                          key={palette.id}
                          className="p-3 rounded-lg border border-gold-500/20 bg-black/20 hover:border-gold-500/40 transition-all"
                        >
                          <div className="flex space-x-1 mb-2">
                            {palette.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="text-xs font-semibold">{palette.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Parameter Controls */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Fine-tune Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gold-400">
                    Artistic Style: {artisticStyle[0]}%
                  </label>
                  <Slider
                    value={artisticStyle}
                    onValueChange={setArtisticStyle}
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
                <div>
                  <label className="block text-sm font-medium mb-2 text-gold-400">
                    Mood Intensity: {mood[0]}%
                  </label>
                  <Slider
                    value={mood}
                    onValueChange={setMood}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Prompt Library */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Inspiration Library</h3>
              <div className="space-y-2">
                {promptLibrary.map((promptText, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(promptText)}
                    className="w-full text-left p-3 rounded-lg border border-gold-500/20 bg-black/20 hover:border-gold-500/40 transition-all text-sm"
                  >
                    {promptText}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex space-x-2">
                <Badge variant="outline" className="border-gold-500/30 text-gold-400">Trending</Badge>
                <Badge variant="outline" className="border-gold-500/30 text-gold-400">Daily Challenge</Badge>
              </div>
            </Card>
          </div>

          {/* Right Panel - Canvas & Preview */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Generation Progress or Main Canvas */}
            {state.isGenerating ? (
              <GenerationProgress 
                progress={state.progress}
                prompt={prompt}
              />
            ) : (
              <Card className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-playfair font-semibold gradient-text">Creative Canvas</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-gold-500/30">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="border-gold-500/30">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
                
                {/* Prompt Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gold-400">Creative Vision</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full bg-black/30 border border-gold-500/20 rounded-lg p-4 text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                    rows={3}
                    placeholder="Describe your artistic vision..."
                  />
                </div>

                {/* Canvas Area */}
                <div className="relative aspect-square bg-black/30 rounded-lg border border-gold-500/20 overflow-hidden">
                  {state.currentImage ? (
                    <img
                      src={state.currentImage}
                      alt="Generated artwork"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/40">
                      <div className="text-center">
                        <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Your generated artwork will appear here</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Composition Grid Overlay */}
                  {composition === "rule-of-thirds" && (
                    <div className="absolute inset-0 pointer-events-none opacity-30">
                      <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="border border-gold-500/20" />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Generation Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-md rounded-lg p-3 flex items-center justify-between">
                      <div className="text-sm text-foreground/80">
                        Model: {availableModels.find(m => m.id === selectedModel)?.name} • {lighting} lighting
                      </div>
                      <Button 
                        size="sm" 
                        onClick={handleGenerate}
                        disabled={state.isGenerating || !prompt.trim()}
                        className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Generation History */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Generation History</h3>
              {state.history.length > 0 ? (
                <div className="grid grid-cols-4 gap-3">
                  {state.history.slice(0, 8).map((image, index) => (
                    <div key={image.id} className="relative artistic-frame premium-hover aspect-square group">
                      <img
                        src={image.url}
                        alt={`Generated ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => {/* Set as current image */}}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Badge className="bg-gold-500 text-black text-xs">
                          {new Date(image.timestamp).toLocaleTimeString()}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-foreground/50 py-8">
                  <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No generated images yet</p>
                  <p className="text-sm">Create your first artwork above</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
