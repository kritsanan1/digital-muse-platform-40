
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Download, Image, Play } from "lucide-react";

interface GenerationCanvasProps {
  prompt: string;
  currentImage: string | null;
  composition: string;
  isGenerating: boolean;
  modelName: string;
  lighting: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
}

/**
 * Canvas component responsible only for image display and generation controls
 * Implements Single Responsibility Principle
 */
export const GenerationCanvas = ({
  prompt,
  currentImage,
  composition,
  isGenerating,
  modelName,
  lighting,
  onPromptChange,
  onGenerate,
}: GenerationCanvasProps) => {
  
  /**
   * Renders composition grid overlay based on selected composition type
   */
  const renderCompositionOverlay = () => {
    if (composition === "rule-of-thirds") {
      return (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-gold-500/20" />
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-playfair font-semibold gradient-text">Creative Canvas</h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold-500/30"
            disabled={!currentImage}
            aria-label="Share generated image"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold-500/30"
            disabled={!currentImage}
            aria-label="Download generated image"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      {/* Prompt Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-gold-400">
          Creative Vision
        </label>
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          className="w-full bg-black/30 border border-gold-500/20 rounded-lg p-4 text-foreground focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
          rows={3}
          placeholder="Describe your artistic vision..."
          aria-label="Image generation prompt"
        />
      </div>

      {/* Canvas Area */}
      <div className="relative aspect-square bg-black/30 rounded-lg border border-gold-500/20 overflow-hidden">
        {currentImage ? (
          <img
            src={currentImage}
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
        {renderCompositionOverlay()}
        
        {/* Generation Controls */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 backdrop-blur-md rounded-lg p-3 flex items-center justify-between">
            <div className="text-sm text-foreground/80">
              Model: {modelName} • {lighting} lighting
            </div>
            <Button 
              size="sm" 
              onClick={onGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
              aria-label="Generate image"
            >
              <Play className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
