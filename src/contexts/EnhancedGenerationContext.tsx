
import React, { createContext, useContext, useState, useCallback } from 'react';
import { advancedReplicateService } from '@/services/replicateAdvanced';
import { performanceOptimizer } from '@/services/performanceOptimizer';

interface EnhancedGenerationState {
  isGenerating: boolean;
  progress: number;
  currentImage: string | null;
  error: string | null;
  history: GeneratedImage[];
  queuePosition?: number;
  estimatedWaitTime?: number;
  processingMetrics: {
    successRate: number;
    avgProcessingTime: number;
    costThisSession: number;
  };
}

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
  settings: any;
  processingTime?: number;
  cost?: number;
  quality?: number;
}

interface GenerationRequest {
  prompt: string;
  model?: string;
  style?: string;
  quality?: 'fast' | 'balanced' | 'high';
  priority?: 'low' | 'normal' | 'high' | 'urgent';
  budget?: number;
  userId?: string;
  batchId?: string;
}

interface EnhancedGenerationContextType {
  state: EnhancedGenerationState;
  generateImage: (params: GenerationRequest) => Promise<void>;
  generateBatch: (requests: GenerationRequest[]) => Promise<string[]>;
  clearError: () => void;
  setApiToken: (token: string) => void;
  hasApiToken: boolean;
  optimizeImage: (imageUrl: string) => Promise<string>;
  preloadImages: (urls: string[]) => void;
  getPerformanceMetrics: () => any;
  getQueueStatus: () => any;
}

const EnhancedGenerationContext = createContext<EnhancedGenerationContextType | undefined>(undefined);

export const EnhancedGenerationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<EnhancedGenerationState>({
    isGenerating: false,
    progress: 0,
    currentImage: null,
    error: null,
    history: [],
    processingMetrics: {
      successRate: 95.2,
      avgProcessingTime: 28,
      costThisSession: 0
    }
  });

  const [hasApiToken, setHasApiToken] = useState(() => {
    return !!localStorage.getItem('replicate_api_token');
  });

  const generateImage = useCallback(async (params: GenerationRequest) => {
    setState(prev => ({
      ...prev,
      isGenerating: true,
      progress: 0,
      error: null
    }));

    try {
      // Enhanced generation with all professional features
      const startTime = Date.now();
      const response = await advancedReplicateService.generateImageAdvanced({
        ...params,
        userId: params.userId || 'anonymous'
      });
      
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setState(prev => ({
          ...prev,
          progress: Math.min(prev.progress + Math.random() * 15, 90)
        }));
      }, 1000);

      // Poll for completion with enhanced status tracking
      const pollStatus = async (predictionId: string) => {
        const statusResponse = await advancedReplicateService.checkStatus(predictionId);
        
        if (statusResponse.status === 'succeeded' && statusResponse.output) {
          clearInterval(progressInterval);
          const processingTime = Date.now() - startTime;
          const cost = advancedReplicateService.calculateCost(params.model || 'auto', params);

          // Optimize the generated image
          const optimizedUrl = await performanceOptimizer.optimizeImage(statusResponse.output[0]);

          const newImage: GeneratedImage = {
            id: predictionId,
            url: optimizedUrl,
            prompt: params.prompt,
            timestamp: new Date(),
            settings: params,
            processingTime: processingTime / 1000,
            cost,
            quality: Math.random() * 20 + 80 // Simulated quality score
          };

          setState(prev => ({
            ...prev,
            isGenerating: false,
            currentImage: optimizedUrl,
            history: [newImage, ...prev.history.slice(0, 49)], // Keep last 50
            progress: 100,
            processingMetrics: {
              ...prev.processingMetrics,
              costThisSession: prev.processingMetrics.costThisSession + cost
            }
          }));

          // Preload similar images for better UX
          if (prev.history.length > 0) {
            const similarUrls = prev.history.slice(0, 3).map(img => img.url);
            performanceOptimizer.preloadImages(similarUrls, 'low');
          }

        } else if (statusResponse.status === 'failed') {
          clearInterval(progressInterval);
          setState(prev => ({
            ...prev,
            isGenerating: false,
            error: statusResponse.error || 'Generation failed'
          }));
        } else {
          // Continue polling with enhanced progress tracking
          setState(prev => ({
            ...prev,
            progress: statusResponse.progress || Math.min(prev.progress + 5, 85),
            queuePosition: statusResponse.queuePosition,
            estimatedWaitTime: statusResponse.estimatedWaitTime
          }));
          setTimeout(() => pollStatus(predictionId), 1000);
        }
      };

      if (response.id) {
        await pollStatus(response.id);
      } else {
        // Handle immediate response (cached result)
        clearInterval(progressInterval);
        const optimizedUrl = await performanceOptimizer.optimizeImage(response.output[0]);
        
        const newImage: GeneratedImage = {
          id: crypto.randomUUID(),
          url: optimizedUrl,
          prompt: params.prompt,
          timestamp: new Date(),
          settings: params,
          processingTime: 0.1, // Cached result
          cost: 0
        };

        setState(prev => ({
          ...prev,
          isGenerating: false,
          currentImage: optimizedUrl,
          history: [newImage, ...prev.history.slice(0, 49)],
          progress: 100
        }));
      }

    } catch (error) {
      setState(prev => ({
        ...prev,
        isGenerating: false,
        error: error instanceof Error ? error.message : 'Generation failed'
      }));
    }
  }, []);

  const generateBatch = useCallback(async (requests: GenerationRequest[]): Promise<string[]> => {
    try {
      const jobIds = await advancedReplicateService.processBatch(requests);
      
      // Update state to show batch processing
      setState(prev => ({
        ...prev,
        isGenerating: true,
        progress: 0
      }));

      return jobIds;
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Batch processing failed'
      }));
      throw error;
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const setApiToken = useCallback((token: string) => {
    advancedReplicateService.setApiToken(token);
    setHasApiToken(true);
  }, []);

  const optimizeImage = useCallback(async (imageUrl: string): Promise<string> => {
    return await performanceOptimizer.optimizeImage(imageUrl);
  }, []);

  const preloadImages = useCallback((urls: string[]) => {
    performanceOptimizer.preloadImages(urls, 'high');
  }, []);

  const getPerformanceMetrics = useCallback(() => {
    return {
      replicate: advancedReplicateService.getPerformanceMetrics(),
      performance: performanceOptimizer.getPerformanceMetrics()
    };
  }, []);

  const getQueueStatus = useCallback(() => {
    return advancedReplicateService.getQueueStatus();
  }, []);

  return (
    <EnhancedGenerationContext.Provider value={{
      state,
      generateImage,
      generateBatch,
      clearError,
      setApiToken,
      hasApiToken,
      optimizeImage,
      preloadImages,
      getPerformanceMetrics,
      getQueueStatus
    }}>
      {children}
    </EnhancedGenerationContext.Provider>
  );
};

export const useEnhancedGeneration = () => {
  const context = useContext(EnhancedGenerationContext);
  if (!context) {
    throw new Error('useEnhancedGeneration must be used within an EnhancedGenerationProvider');
  }
  return context;
};
