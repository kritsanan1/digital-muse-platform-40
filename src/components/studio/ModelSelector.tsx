
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { replicateService } from "@/services/replicate";

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
}

/**
 * Model selection component following Single Responsibility Principle
 * Handles only model selection logic and UI
 */
export const ModelSelector = ({ selectedModel, onModelChange }: ModelSelectorProps) => {
  const availableModels = replicateService.getAvailableModels();

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-playfair font-semibold mb-4 gradient-text">AI Model</h3>
      <div className="space-y-2">
        {availableModels.map((model) => (
          <button
            key={model.id}
            onClick={() => onModelChange(model.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              selectedModel === model.id
                ? 'border-gold-500 bg-gold-500/10'
                : 'border-gold-500/20 bg-black/20 hover:border-gold-500/40'
            }`}
            aria-label={`Select ${model.name} model`}
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
  );
};
