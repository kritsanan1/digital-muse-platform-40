
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PromptLibraryProps {
  onPromptSelect: (prompt: string) => void;
}

/**
 * Prompt library component implementing Open/Closed Principle
 * Easy to extend with new prompt categories without modifying existing code
 */
export const PromptLibrary = ({ onPromptSelect }: PromptLibraryProps) => {
  
  // Configuration data - could be loaded from external source
  const promptLibrary = [
    "Elegant fashion portrait with dramatic rim lighting and minimalist background",
    "Conceptual art piece featuring surreal geometric forms in ethereal atmosphere",
    "Professional headshot with soft studio lighting and natural expression",
    "Abstract artistic composition with flowing organic shapes and vibrant colors"
  ];

  const promptCategories = [
    { name: "Trending", variant: "outline" as const },
    { name: "Daily Challenge", variant: "outline" as const }
  ];

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">Inspiration Library</h3>
      <div className="space-y-2">
        {promptLibrary.map((promptText, index) => (
          <button
            key={index}
            onClick={() => onPromptSelect(promptText)}
            className="w-full text-left p-3 rounded-lg border border-gold-500/20 bg-black/20 hover:border-gold-500/40 transition-all text-sm"
            aria-label={`Select prompt: ${promptText.substring(0, 50)}...`}
          >
            {promptText}
          </button>
        ))}
      </div>
      <div className="mt-4 flex space-x-2">
        {promptCategories.map((category, index) => (
          <Badge 
            key={index}
            variant={category.variant} 
            className="border-gold-500/30 text-gold-400"
          >
            {category.name}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
