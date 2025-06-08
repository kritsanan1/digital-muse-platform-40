
interface ReplicateModel {
  id: string;
  name: string;
  description: string;
  category: 'photorealistic' | 'artistic' | 'concept';
}

interface GenerationRequest {
  prompt: string;
  model: string;
  style?: string;
  lighting?: string;
  composition?: string;
  artisticStyle?: number;
  creativity?: number;
  mood?: number;
  width?: number;
  height?: number;
}

interface GenerationResponse {
  id: string;
  status: 'starting' | 'processing' | 'succeeded' | 'failed';
  output?: string[];
  error?: string;
  progress?: number;
}

export class ReplicateService {
  private apiToken: string | null = null;
  private baseUrl = 'https://api.replicate.com/v1';

  constructor() {
    // Check for API token in localStorage for now
    this.apiToken = localStorage.getItem('replicate_api_token');
  }

  setApiToken(token: string) {
    this.apiToken = token;
    localStorage.setItem('replicate_api_token', token);
  }

  getAvailableModels(): ReplicateModel[] {
    return [
      {
        id: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
        name: 'SDXL Photorealistic',
        description: 'High-quality photorealistic images',
        category: 'photorealistic'
      },
      {
        id: 'black-forest-labs/flux-schnell',
        name: 'Flux Schnell',
        description: 'Fast artistic generation',
        category: 'artistic'
      },
      {
        id: 'stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',
        name: 'Stable Diffusion Artistic',
        description: 'Creative artistic styles',
        category: 'artistic'
      }
    ];
  }

  async generateImage(request: GenerationRequest): Promise<GenerationResponse> {
    if (!this.apiToken) {
      throw new Error('Replicate API token not set');
    }

    const model = this.getAvailableModels().find(m => m.id === request.model);
    if (!model) {
      throw new Error('Invalid model selected');
    }

    const input = this.buildModelInput(request, model);

    try {
      const response = await fetch(`${this.baseUrl}/predictions`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          version: request.model,
          input
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        id: data.id,
        status: data.status,
        output: data.output,
        error: data.error
      };
    } catch (error) {
      console.error('Generation error:', error);
      throw error;
    }
  }

  async checkStatus(predictionId: string): Promise<GenerationResponse> {
    if (!this.apiToken) {
      throw new Error('Replicate API token not set');
    }

    try {
      const response = await fetch(`${this.baseUrl}/predictions/${predictionId}`, {
        headers: {
          'Authorization': `Token ${this.apiToken}`,
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        id: data.id,
        status: data.status,
        output: data.output,
        error: data.error,
        progress: data.progress
      };
    } catch (error) {
      console.error('Status check error:', error);
      throw error;
    }
  }

  private buildModelInput(request: GenerationRequest, model: ReplicateModel) {
    const baseInput = {
      prompt: this.enhancePrompt(request),
      width: request.width || 1024,
      height: request.height || 1024,
      num_inference_steps: 20,
      guidance_scale: 7.5,
      negative_prompt: "blurry, low quality, distorted, deformed"
    };

    // Customize input based on model type
    if (model.category === 'photorealistic') {
      return {
        ...baseInput,
        scheduler: "DPMSolverMultistep",
        num_inference_steps: 25
      };
    }

    return baseInput;
  }

  private enhancePrompt(request: GenerationRequest): string {
    let enhancedPrompt = request.prompt;

    // Add style modifiers
    if (request.style === 'photorealistic') {
      enhancedPrompt += ', photorealistic, high quality, detailed, professional photography';
    } else if (request.style === 'painterly') {
      enhancedPrompt += ', artistic painting style, painterly, expressive brushstrokes';
    } else if (request.style === 'conceptual') {
      enhancedPrompt += ', conceptual art, creative, artistic vision, unique perspective';
    }

    // Add lighting modifiers
    if (request.lighting === 'studio') {
      enhancedPrompt += ', professional studio lighting, controlled lighting';
    } else if (request.lighting === 'natural') {
      enhancedPrompt += ', natural lighting, soft daylight';
    } else if (request.lighting === 'dramatic') {
      enhancedPrompt += ', dramatic lighting, high contrast, moody';
    }

    // Add composition hints
    if (request.composition === 'rule-of-thirds') {
      enhancedPrompt += ', well composed, rule of thirds';
    } else if (request.composition === 'golden-ratio') {
      enhancedPrompt += ', golden ratio composition, perfectly balanced';
    }

    return enhancedPrompt;
  }
}

export const replicateService = new ReplicateService();
