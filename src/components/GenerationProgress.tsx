
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Loader2, X } from 'lucide-react';

interface GenerationProgressProps {
  progress: number;
  prompt: string;
  onCancel?: () => void;
}

export const GenerationProgress = ({ progress, prompt, onCancel }: GenerationProgressProps) => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-playfair font-semibold gradient-text mb-2">
            Creating Your Artwork
          </h3>
          <p className="text-sm text-foreground/70 line-clamp-2">
            "{prompt}"
          </p>
        </div>
        {onCancel && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="text-foreground/60 hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-gold-400 animate-spin" />
          <span className="text-sm text-foreground/80">
            {progress < 30 ? 'Initializing...' : 
             progress < 70 ? 'Generating artwork...' : 
             'Finalizing details...'}
          </span>
        </div>
        
        <Progress 
          value={progress} 
          className="w-full h-2"
        />
        
        <div className="flex justify-between text-xs text-foreground/60">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="mt-4 text-xs text-foreground/50">
        This may take 30-60 seconds depending on complexity
      </div>
    </Card>
  );
};
