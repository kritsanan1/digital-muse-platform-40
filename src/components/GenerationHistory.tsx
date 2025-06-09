
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from "lucide-react";

interface GeneratedImage {
  id: string;
  url: string;
  timestamp: Date;
}

interface GenerationHistoryProps {
  history: GeneratedImage[];
  onImageSelect?: (image: GeneratedImage) => void;
}

/**
 * Generation history component following Single Responsibility Principle
 * Handles only the display and interaction with generation history
 */
export const GenerationHistory = ({ history, onImageSelect }: GenerationHistoryProps) => {
  
  /**
   * Handles image selection with proper error handling
   */
  const handleImageClick = (image: GeneratedImage) => {
    try {
      onImageSelect?.(image);
    } catch (error) {
      console.error('Failed to select image:', error);
    }
  };

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Generation History</h3>
      {history.length > 0 ? (
        <div className="grid grid-cols-4 gap-3">
          {history.slice(0, 8).map((image, index) => (
            <div 
              key={image.id} 
              className="relative artistic-frame premium-hover aspect-square group cursor-pointer"
              onClick={() => handleImageClick(image)}
              role="button"
              tabIndex={0}
              aria-label={`View generated image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick(image);
                }
              }}
            >
              <img
                src={image.url}
                alt={`Generated artwork ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
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
  );
};
