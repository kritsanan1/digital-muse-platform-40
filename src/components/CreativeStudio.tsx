
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Brush, BarChart3, Settings, AlertCircle, X } from "lucide-react";
import { useGeneration } from "@/contexts/GenerationContext";
import { replicateService } from "@/services/replicate";
import { ApiTokenSetup } from "./ApiTokenSetup";
import { GenerationProgress } from "./GenerationProgress";
import { StyleSystem } from "./StyleSystem";
import { ProfessionalDashboard } from "./ProfessionalDashboard";
import { GenerationHistory } from "./GenerationHistory";

// Import refactored components
import { ModelSelector } from "./studio/ModelSelector";
import { CreativeControls } from "./studio/CreativeControls";
import { GenerationCanvas } from "./studio/GenerationCanvas";
import { ProjectWorkspace } from "./studio/ProjectWorkspace";
import { PromptLibrary } from "./studio/PromptLibrary";
import { useStudioState } from "../hooks/useStudioState";

/**
 * Main Creative Studio component - refactored following SOLID principles
 * - Single Responsibility: Orchestrates child components
 * - Open/Closed: Easy to extend with new tabs/features
 * - Dependency Inversion: Depends on abstractions (hooks, services)
 */
export const CreativeStudio = () => {
  const { state, generateImage, clearError, hasApiToken } = useGeneration();
  const studioState = useStudioState();

  // Get available models for display purposes
  const availableModels = replicateService.getAvailableModels();
  const currentModel = availableModels.find(m => m.id === studioState.selectedModel);

  /**
   * Handles image generation with comprehensive error handling
   * Implements proper error boundaries and validation
   */
  const handleGenerate = async () => {
    try {
      if (!studioState.prompt.trim()) {
        throw new Error('Please enter a prompt before generating');
      }

      const generationParams = studioState.getGenerationParams();
      await generateImage(generationParams);
    } catch (error) {
      console.error('Generation failed:', error);
      // Error is handled by the generation context
    }
  };

  // Early return for unauthenticated state
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

        {/* Error Alert with improved accessibility */}
        {state.error && (
          <Alert className="mb-6 border-red-500/20 bg-red-500/5" role="alert">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>{state.error}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearError}
                aria-label="Dismiss error message"
              >
                <X className="w-4 h-4" />
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Main Studio Tabs */}
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 mb-6">
            <TabsTrigger value="create" className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Create</span>
            </TabsTrigger>
            <TabsTrigger value="styles" className="flex items-center space-x-2">
              <Brush className="w-4 h-4" />
              <span>Style System</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            {/* Split-screen Layout with improved responsive design */}
            <div className="grid lg:grid-cols-5 gap-6 min-h-[800px]">
              
              {/* Left Panel - Controls */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Model Selection */}
                <ModelSelector
                  selectedModel={studioState.selectedModel}
                  onModelChange={studioState.updateModel}
                />

                {/* Project Management */}
                <ProjectWorkspace
                  historyCount={state.history.length}
                  lastGenerated={state.history[0]?.timestamp}
                />

                {/* Creative Controls */}
                <CreativeControls
                  selectedStyle={studioState.selectedStyle}
                  lighting={studioState.lighting}
                  composition={studioState.composition}
                  artisticStyle={studioState.artisticStyle}
                  creativity={studioState.creativity}
                  mood={studioState.mood}
                  onStyleChange={studioState.updateStyle}
                  onLightingChange={studioState.updateLighting}
                  onCompositionChange={studioState.updateComposition}
                  onArtisticStyleChange={studioState.updateArtisticStyle}
                  onCreativityChange={studioState.updateCreativity}
                  onMoodChange={studioState.updateMood}
                />

                {/* Prompt Library */}
                <PromptLibrary onPromptSelect={studioState.updatePrompt} />
              </div>

              {/* Right Panel - Canvas & Preview */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Generation Progress or Main Canvas */}
                {state.isGenerating ? (
                  <GenerationProgress 
                    progress={state.progress}
                    prompt={studioState.prompt}
                  />
                ) : (
                  <GenerationCanvas
                    prompt={studioState.prompt}
                    currentImage={state.currentImage}
                    composition={studioState.composition}
                    isGenerating={state.isGenerating}
                    modelName={currentModel?.name || 'Unknown'}
                    lighting={studioState.lighting}
                    onPromptChange={studioState.updatePrompt}
                    onGenerate={handleGenerate}
                  />
                )}

                {/* Generation History */}
                <GenerationHistory history={state.history} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="styles">
            <StyleSystem />
          </TabsContent>

          <TabsContent value="dashboard">
            <ProfessionalDashboard />
          </TabsContent>

          <TabsContent value="analytics">
            <div className="text-center py-20">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gold-400/50" />
              <h3 className="text-xl font-playfair font-semibold gradient-text mb-2">
                Advanced Analytics Coming Soon
              </h3>
              <p className="text-foreground/60">
                Detailed performance analytics and optimization insights will be available here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
