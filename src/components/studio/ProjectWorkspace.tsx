
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save, History } from "lucide-react";

interface ProjectWorkspaceProps {
  historyCount: number;
  lastGenerated?: Date;
}

/**
 * Project management component following Single Responsibility Principle
 * Handles only project-related actions and display
 */
export const ProjectWorkspace = ({ historyCount, lastGenerated }: ProjectWorkspaceProps) => {
  
  /**
   * Formats the last generated timestamp for display
   */
  const formatLastGenerated = (date?: Date): string => {
    if (!date) return 'None';
    return date.toLocaleTimeString();
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-playfair font-semibold gradient-text">Project Workspace</h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold-500/30"
            aria-label="Save current project"
          >
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold-500/30"
            aria-label="View generation history"
          >
            <History className="w-4 h-4 mr-2" />
            History
          </Button>
        </div>
      </div>
      <div className="text-sm text-foreground/60 space-y-1">
        <p>Generated Images: {historyCount}</p>
        <p>Last generated: {formatLastGenerated(lastGenerated)}</p>
      </div>
    </Card>
  );
};
