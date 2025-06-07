
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  X, ZoomIn, ZoomOut, Download, Heart, Share2, 
  User, Calendar, Camera, Palette, Award, Eye
} from "lucide-react";

interface ArtworkModalProps {
  artwork: {
    id: number;
    image: string;
    title: string;
    artist: string;
    style: string;
    likes: number;
    technique?: string;
    created?: string;
    description?: string;
    dimensions?: string;
    license?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full h-full flex bg-black/40 rounded-lg overflow-hidden">
        {/* Image Viewer */}
        <div className="flex-1 flex items-center justify-center relative bg-black/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="relative overflow-hidden rounded-lg">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-w-full max-h-[80vh] object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-black/50 rounded-lg p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
              className="text-white hover:bg-white/20"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-white text-sm min-w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.25))}
              className="text-white hover:bg-white/20"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Metadata Panel */}
        <div className="w-96 glass-card p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Title and Artist */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {artwork.title}
              </h2>
              <div className="flex items-center text-gold-400 mb-4">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{artwork.artist}</span>
                <Badge variant="outline" className="ml-2 text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center space-x-2"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{artwork.likes + (isLiked ? 1 : 0)}</span>
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            {/* Metadata */}
            <Card className="glass-card p-4 space-y-3">
              <h3 className="font-medium text-gold-400 mb-3">Artwork Details</h3>
              
              <div className="flex items-center text-sm">
                <Palette className="w-4 h-4 mr-2 text-foreground/60" />
                <span className="text-foreground/60">Style:</span>
                <Badge variant="outline" className="ml-2">{artwork.style}</Badge>
              </div>

              {artwork.technique && (
                <div className="flex items-center text-sm">
                  <Camera className="w-4 h-4 mr-2 text-foreground/60" />
                  <span className="text-foreground/60">Technique:</span>
                  <span className="ml-2 text-foreground">{artwork.technique}</span>
                </div>
              )}

              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-foreground/60" />
                <span className="text-foreground/60">Created:</span>
                <span className="ml-2 text-foreground">{artwork.created || "2024"}</span>
              </div>

              <div className="flex items-center text-sm">
                <Eye className="w-4 h-4 mr-2 text-foreground/60" />
                <span className="text-foreground/60">Views:</span>
                <span className="ml-2 text-foreground">2,847</span>
              </div>
            </Card>

            {/* Description */}
            {artwork.description && (
              <Card className="glass-card p-4">
                <h3 className="font-medium text-gold-400 mb-2">Description</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {artwork.description}
                </p>
              </Card>
            )}

            {/* Licensing */}
            <Card className="glass-card p-4">
              <h3 className="font-medium text-gold-400 mb-2">Licensing & Usage</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">License Type:</span>
                  <Badge variant="outline">{artwork.license || "Creative Commons"}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Commercial Use:</span>
                  <span className="text-green-400">Allowed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Attribution:</span>
                  <span className="text-foreground">Required</span>
                </div>
              </div>
            </Card>

            {/* Related Works */}
            <Card className="glass-card p-4">
              <h3 className="font-medium text-gold-400 mb-3">More by {artwork.artist}</h3>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-black/20 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                    <img 
                      src={artwork.image} 
                      alt={`Related work ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
