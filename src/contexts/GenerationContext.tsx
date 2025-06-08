
import React, { createContext, useContext, useState, useCallback } from 'react';
import { replicateService } from '@/services/replicate';

interface GenerationState {
  isGenerating: boolean;
  progress: number;
  currentImage: string | null;
  error: string | null;
  history: GeneratedImage[];
}

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
  settings: any;
}

interface GenerationContextType {
  state: GenerationState;
  generateImage: (params: any) => Promise<void>;
  clearError: () => void;
  setApiToken: (token: string) => void;
  hasApiToken: boolean;
}

const GenerationContext = createContext<GenerationContextType | undefined>(undefined);

export const GenerationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GenerationState>({
    isGenerating: false,
    progress: 0,
    currentImage: null,
    error: null,
    history: []
  });

  const [hasApiToken, setHasApiToken] = useState(() => {
    return !!localStorage.getItem('replicate_api_token');
  });

  const generateImage = useCallback(async (params: any) => {
    setState(prev => ({
      ...prev,
      isGenerating: true,
      progress: 0,
      error: null
    }));

    try {
      const response = await replicateService.generateImage(params);
      
      // Poll for completion
      const pollStatus = async (predictionId: string) => {
        const statusResponse = await replicateService.checkStatus(predictionId);
        
        if (statusResponse.status === 'succeeded' && statusResponse.output) {
          const newImage: GeneratedImage = {
            id: predictionId,
            url: statusResponse.output[0],
            prompt: params.prompt,
            timestamp: new Date(),
            settings: params
          };

          setState(prev => ({
            ...prev,
            isGenerating: false,
            currentImage: statusResponse.output![0],
            history: [newImage, ...prev.history],
            progress: 100
          }));
        } else if (statusResponse.status === 'failed') {
          setState(prev => ({
            ...prev,
            isGenerating: false,
            error: statusResponse.error || 'Generation failed'
          }));
        } else {
          // Continue polling
          setState(prev => ({
            ...prev,
            progress: statusResponse.progress || prev.progress + 10
          }));
          setTimeout(() => pollStatus(predictionId), 1000);
        }
      };

      await pollStatus(response.id);
    } catch (error) {
      setState(prev => ({
        ...prev,
        isGenerating: false,
        error: error instanceof Error ? error.message : 'Generation failed'
      }));
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const setApiToken = useCallback((token: string) => {
    replicateService.setApiToken(token);
    setHasApiToken(true);
  }, []);

  return (
    <GenerationContext.Provider value={{
      state,
      generateImage,
      clearError,
      setApiToken,
      hasApiToken
    }}>
      {children}
    </GenerationContext.Provider>
  );
};

export const useGeneration = () => {
  const context = useContext(GenerationContext);
  if (!context) {
    throw new Error('useGeneration must be used within a GenerationProvider');
  }
  return context;
};
