
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Camera, Palette, Lightbulb, Settings, Layers, 
  Download, Share2, Save, Timer, Zap, Crown 
} from "lucide-react";

export const ProfessionalWorkspace = () => {
  const [activeProject, setActiveProject] = useState("fashion-shoot");
  const [renderQuality, setRenderQuality] = useState([85]);
  const [creativityLevel, setCreativityLevel] = useState([75]);
  const [lightingIntensity, setLightingIntensity] = useState([60]);

  const projectTemplates = [
    {
      id: "fashion-shoot",
      name: "Fashion Editorial",
      category: "Commercial Photography",
      preset: "High-fashion editorial photography with dramatic lighting",
      thumbnail: "https://i.postimg.cc/MGvX0j5n/LINE-ALBUM-2025-5-30-250607-1.jpg",
      settings: { quality: 95, creativity: 85, lighting: 70 }
    },
    {
      id: "portrait-art",
      name: "Fine Art Portrait",
      category: "Artistic Photography",
      preset: "Elegant portrait with artistic composition and soft lighting",
      thumbnail: "https://i.postimg.cc/SNksTPVF/LINE-ALBUM-2025-5-30-250607-3.jpg",
      settings: { quality: 90, creativity: 80, lighting: 65 }
    },
    {
      id: "concept-art",
      name: "Conceptual Vision",
      category: "Digital Art",
      preset: "Creative conceptual artwork with unique artistic interpretation",
      thumbnail: "https://i.postimg.cc/28G5PxXq/LINE-ALBUM-2025-5-30-250607-5.jpg",
      settings: { quality: 88, creativity: 95, lighting: 55 }
    }
  ];

  const professionalTools = [
    { name: "Batch Processing", icon: Layers, description: "Process multiple images simultaneously" },
    { name: "8K Resolution", icon: Crown, description: "Ultra-high definition outputs" },
    { name: "Fast Rendering", icon: Zap, description: "Professional-grade speed optimization" },
    { name: "Brand Safety", icon: Settings, description: "Enterprise-level content controls" }
  ];

  const currentProject = projectTemplates.find(p => p.id === activeProject) || projectTemplates[0];

  return (
    <section className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Settings className="w-6 h-6 text-gold-400" />
            <Badge variant="outline" className="border-gold-500/30 text-gold-400">
              Professional Workspace
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Studio-Grade{" "}
            <span className="gradient-text">Creative Control</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Professional tools designed for creative professionals. 
            Precise control, consistent results, commercial-grade output quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Templates */}
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-semibold gradient-text">
              Project Templates
            </h3>
            <div className="space-y-4">
              {projectTemplates.map((project) => (
                <Card 
                  key={project.id}
                  className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === project.id 
                      ? 'border-gold-500/50 bg-gold-500/10' 
                      : 'hover:border-gold-500/30'
                  }`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden artistic-frame">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{project.name}</h4>
                      <p className="text-sm text-gold-400">{project.category}</p>
                      <p className="text-xs text-foreground/60 mt-1">{project.preset}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Controls */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-playfair font-semibold gradient-text">
                Professional Controls
              </h3>
              <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                {currentProject.name}
              </Badge>
            </div>

            <Card className="glass-card p-6 space-y-6">
              <Tabs defaultValue="creative" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="creative" className="flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <span>Creative</span>
                  </TabsTrigger>
                  <TabsTrigger value="technical" className="flex items-center space-x-2">
                    <Camera className="w-4 h-4" />
                    <span>Technical</span>
                  </TabsTrigger>
                  <TabsTrigger value="lighting" className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Lighting</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="creative" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Creativity Level: {creativityLevel[0]}%
                    </label>
                    <Slider
                      value={creativityLevel}
                      onValueChange={setCreativityLevel}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Artistic Style Strength
                    </label>
                    <Slider
                      defaultValue={[65]}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Render Quality: {renderQuality[0]}%
                    </label>
                    <Slider
                      value={renderQuality}
                      onValueChange={setRenderQuality}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Detail Enhancement
                    </label>
                    <Slider
                      defaultValue={[80]}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="lighting" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Lighting Intensity: {lightingIntensity[0]}%
                    </label>
                    <Slider
                      value={lightingIntensity}
                      onValueChange={setLightingIntensity}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Shadow Depth
                    </label>
                    <Slider
                      defaultValue={[45]}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex space-x-3 pt-4 border-t border-gold-500/20">
                <Button 
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Generate
                </Button>
                <Button variant="outline" size="icon" className="border-gold-500/30 text-gold-400">
                  <Save className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Professional Tools */}
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-semibold gradient-text">
              Professional Tools
            </h3>
            <div className="space-y-4">
              {professionalTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={index} className="glass-card p-4 premium-hover">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{tool.name}</h4>
                        <p className="text-sm text-foreground/60">{tool.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="glass-card p-4 space-y-3">
              <h4 className="font-medium text-foreground mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start border-gold-500/30 text-gold-400">
                  <Download className="w-4 h-4 mr-2" />
                  Export Project
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-gold-500/30 text-gold-400">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Preview
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-gold-500/30 text-gold-400">
                  <Timer className="w-4 h-4 mr-2" />
                  Schedule Batch
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Professional Features Banner */}
        <Card className="glass-card p-8 mt-12 bg-gradient-to-r from-gold-500/10 to-rose-500/10 border-gold-500/30">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Crown className="w-6 h-6 text-gold-400" />
              <h3 className="text-2xl font-playfair font-bold gradient-text">
                Professional License
              </h3>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Unlock commercial usage rights, priority processing, and advanced features designed for creative professionals and enterprises.
            </p>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-8">
              Upgrade to Professional
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
