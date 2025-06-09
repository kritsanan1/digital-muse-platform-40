
import { useState, useCallback } from 'react';

interface StudioState {
  selectedModel: string;
  selectedStyle: string;
  prompt: string;
  artisticStyle: number[];
  creativity: number[];
  mood: number[];
  lighting: string;
  composition: string;
}

interface UseStudioStateReturn extends StudioState {
  updateModel: (model: string) => void;
  updateStyle: (style: string) => void;
  updatePrompt: (prompt: string) => void;
  updateArtisticStyle: (value: number[]) => void;
  updateCreativity: (value: number[]) => void;
  updateMood: (value: number[]) => void;
  updateLighting: (lighting: string) => void;
  updateComposition: (composition: string) => void;
  getGenerationParams: () => any;
}

/**
 * Custom hook for managing studio state
 * Implements Dependency Inversion Principle - depends on abstractions, not concretions
 * Provides better testability by extracting state management logic
 */
export const useStudioState = (): UseStudioStateReturn => {
  const [state, setState] = useState<StudioState>({
    selectedModel: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    selectedStyle: "photorealistic",
    prompt: "Professional fashion portrait with dramatic studio lighting",
    artisticStyle: [75],
    creativity: [80],
    mood: [60],
    lighting: "studio",
    composition: "rule-of-thirds"
  });

  // Memoized update functions to prevent unnecessary re-renders
  const updateModel = useCallback((model: string) => {
    setState(prev => ({ ...prev, selectedModel: model }));
  }, []);

  const updateStyle = useCallback((style: string) => {
    setState(prev => ({ ...prev, selectedStyle: style }));
  }, []);

  const updatePrompt = useCallback((prompt: string) => {
    setState(prev => ({ ...prev, prompt }));
  }, []);

  const updateArtisticStyle = useCallback((artisticStyle: number[]) => {
    setState(prev => ({ ...prev, artisticStyle }));
  }, []);

  const updateCreativity = useCallback((creativity: number[]) => {
    setState(prev => ({ ...prev, creativity }));
  }, []);

  const updateMood = useCallback((mood: number[]) => {
    setState(prev => ({ ...prev, mood }));
  }, []);

  const updateLighting = useCallback((lighting: string) => {
    setState(prev => ({ ...prev, lighting }));
  }, []);

  const updateComposition = useCallback((composition: string) => {
    setState(prev => ({ ...prev, composition }));
  }, []);

  /**
   * Builds generation parameters object
   * Centralizes parameter construction logic
   */
  const getGenerationParams = useCallback(() => {
    return {
      prompt: state.prompt,
      model: state.selectedModel,
      style: state.selectedStyle,
      lighting: state.lighting,
      composition: state.composition,
      artisticStyle: state.artisticStyle[0],
      creativity: state.creativity[0],
      mood: state.mood[0],
      width: 1024,
      height: 1024
    };
  }, [state]);

  return {
    ...state,
    updateModel,
    updateStyle,
    updatePrompt,
    updateArtisticStyle,
    updateCreativity,
    updateMood,
    updateLighting,
    updateComposition,
    getGenerationParams
  };
};
