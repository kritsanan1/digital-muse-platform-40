
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Palette, Lightbulb, Grid3X3, Sun, Moon } from "lucide-react";

interface CreativeControlsProps {
  selectedStyle: string;
  lighting: string;
  composition: string;
  artisticStyle: number[];
  creativity: number[];
  mood: number[];
  onStyleChange: (style: string) => void;
  onLightingChange: (lighting: string) => void;
  onCompositionChange: (composition: string) => void;
  onArtisticStyleChange: (value: number[]) => void;
  onCreativityChange: (value: number[]) => void;
  onMoodChange: (value: number[]) => void;
}

interface StyleCategory {
  id: string;
  name: string;
  description: string;
}

interface LightingPreset {
  id: string;
  name: string;
  icon: typeof Lightbulb;
  description: string;
}

interface CompositionGuide {
  id: string;
  name: string;
  icon: typeof Grid3X3;
}

interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
}

/**
 * Creative controls component implementing Open/Closed Principle
 * Easy to extend with new control types without modifying existing code
 */
export const CreativeControls = ({
  selectedStyle,
  lighting,
  composition,
  artisticStyle,
  creativity,
  mood,
  onStyleChange,
  onLightingChange,
  onCompositionChange,
  onArtisticStyleChange,
  onCreativityChange,
  onMoodChange,
}: CreativeControlsProps) => {
  
  // Configuration data - could be moved to a config file for better maintainability
  const styleCategories: StyleCategory[] = [
    { id: "photorealistic", name: "Photorealistic", description: "Ultra-realistic photography style" },
    { id: "painterly", name: "Painterly", description: "Artistic painting techniques" },
    { id: "conceptual", name: "Conceptual", description: "Abstract and conceptual art" }
  ];

  const lightingPresets: LightingPreset[] = [
    { id: "studio", name: "Studio", icon: Lightbulb, description: "Professional studio lighting" },
    { id: "natural", name: "Natural", icon: Sun, description: "Soft natural daylight" },
    { id: "dramatic", name: "Dramatic", icon: Moon, description: "High contrast dramatic lighting" }
  ];

  const compositionGuides: CompositionGuide[] = [
    { id: "rule-of-thirds", name: "Rule of Thirds", icon: Grid3X3 },
    { id: "golden-ratio", name: "Golden Ratio", icon: Grid3X3 },
    { id: "centered", name: "Centered", icon: Grid3X3 }
  ];

  const colorPalettes: ColorPalette[] = [
    { id: "warm", name: "Warm", colors: ["#FF6B35", "#F7931E", "#FFD23F"] },
    { id: "cool", name: "Cool", colors: ["#4ECDC4", "#45B7D1", "#96CEB4"] },
    { id: "monochrome", name: "Monochrome", colors: ["#2C3E50", "#7F8C8D", "#BDC3C7"] },
    { id: "vibrant", name: "Vibrant", colors: ["#E74C3C", "#9B59B6", "#3498DB"] }
  ];

  return (
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
              {styleCategories.map((style) => (
                <button
                  key={style.id}
                  onClick={() => onStyleChange(style.id)}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    selectedStyle === style.id
                      ? 'border-gold-500 bg-gold-500/10'
                      : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                  }`}
                  aria-label={`Select ${style.name} style`}
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
                    onClick={() => onLightingChange(preset.id)}
                    className={`text-left p-3 rounded-lg border transition-all flex items-center ${
                      lighting === preset.id
                        ? 'border-gold-500 bg-gold-500/10'
                        : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                    }`}
                    aria-label={`Select ${preset.name} lighting`}
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
                    onClick={() => onCompositionChange(guide.id)}
                    className={`text-left p-3 rounded-lg border transition-all flex items-center ${
                      composition === guide.id
                        ? 'border-gold-500 bg-gold-500/10'
                        : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
                    }`}
                    aria-label={`Select ${guide.name} composition`}
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
                  aria-label={`Select ${palette.name} color palette`}
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

      {/* Parameter Controls */}
      <div className="mt-6 space-y-4">
        <h4 className="text-md font-playfair font-semibold gradient-text">Fine-tune Parameters</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gold-400">
              Artistic Style: {artisticStyle[0]}%
            </label>
            <Slider
              value={artisticStyle}
              onValueChange={onArtisticStyleChange}
              max={100}
              step={1}
              className="w-full"
              aria-label="Artistic style intensity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gold-400">
              Creativity: {creativity[0]}%
            </label>
            <Slider
              value={creativity}
              onValueChange={onCreativityChange}
              max={100}
              step={1}
              className="w-full"
              aria-label="Creativity level"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gold-400">
              Mood Intensity: {mood[0]}%
            </label>
            <Slider
              value={mood}
              onValueChange={onMoodChange}
              max={100}
              step={1}
              className="w-full"
              aria-label="Mood intensity"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
