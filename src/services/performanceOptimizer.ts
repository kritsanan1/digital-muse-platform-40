
interface CacheConfig {
  maxSize: number;
  ttl: number;
  compressionEnabled: boolean;
}

interface ImageOptimizationConfig {
  quality: number;
  format: 'webp' | 'jpeg' | 'png';
  progressive: boolean;
  maxWidth: number;
  maxHeight: number;
}

export class PerformanceOptimizer {
  private cache: Map<string, { data: any; timestamp: number; size: number }> = new Map();
  private cacheConfig: CacheConfig;
  private imageConfig: ImageOptimizationConfig;
  private preloadQueue: Set<string> = new Set();

  constructor() {
    this.cacheConfig = {
      maxSize: 100 * 1024 * 1024, // 100MB
      ttl: 3600000, // 1 hour
      compressionEnabled: true
    };

    this.imageConfig = {
      quality: 85,
      format: 'webp',
      progressive: true,
      maxWidth: 2048,
      maxHeight: 2048
    };

    this.initializeCache();
  }

  // Intelligent Image Optimization
  async optimizeImage(imageUrl: string, options?: Partial<ImageOptimizationConfig>): Promise<string> {
    const config = { ...this.imageConfig, ...options };
    
    try {
      // Check if already optimized
      const cacheKey = `optimized_${imageUrl}_${JSON.stringify(config)}`;
      const cached = this.getFromCache(cacheKey);
      if (cached) return cached;

      // Create canvas for optimization
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const img = new Image();
      
      return new Promise((resolve, reject) => {
        img.onload = () => {
          // Calculate optimal dimensions
          const { width, height } = this.calculateOptimalDimensions(
            img.width, 
            img.height, 
            config.maxWidth, 
            config.maxHeight
          );
          
          canvas.width = width;
          canvas.height = height;
          
          // Draw and optimize
          ctx.drawImage(img, 0, 0, width, height);
          
          const optimizedUrl = canvas.toDataURL(
            `image/${config.format}`, 
            config.quality / 100
          );
          
          // Cache the result
          this.addToCache(cacheKey, optimizedUrl);
          resolve(optimizedUrl);
        };
        
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.src = imageUrl;
      });
    } catch (error) {
      console.warn('Image optimization failed, returning original:', error);
      return imageUrl;
    }
  }

  // Progressive Image Loading
  async progressiveLoad(imageUrl: string, placeholder?: string): Promise<{
    placeholder: string;
    lowQuality: string;
    highQuality: string;
  }> {
    const results = {
      placeholder: placeholder || this.generatePlaceholder(imageUrl),
      lowQuality: '',
      highQuality: ''
    };

    try {
      // Generate low quality version first
      results.lowQuality = await this.optimizeImage(imageUrl, {
        quality: 30,
        maxWidth: 512,
        maxHeight: 512
      });

      // Then high quality version
      results.highQuality = await this.optimizeImage(imageUrl, {
        quality: 90
      });

      return results;
    } catch (error) {
      console.error('Progressive loading failed:', error);
      return {
        ...results,
        lowQuality: imageUrl,
        highQuality: imageUrl
      };
    }
  }

  // Intelligent Preloading
  preloadImages(urls: string[], priority: 'low' | 'high' = 'low') {
    urls.forEach(url => {
      if (!this.preloadQueue.has(url)) {
        this.preloadQueue.add(url);
        
        if (priority === 'high') {
          this.immediatePreload(url);
        } else {
          this.schedulePreload(url);
        }
      }
    });
  }

  private immediatePreload(url: string) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  }

  private schedulePreload(url: string) {
    // Use requestIdleCallback for low-priority preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => this.loadImage(url));
    } else {
      setTimeout(() => this.loadImage(url), 100);
    }
  }

  private loadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadQueue.delete(url);
        resolve();
      };
      img.onerror = () => {
        this.preloadQueue.delete(url);
        reject();
      };
      img.src = url;
    });
  }

  // CDN Integration
  getCDNUrl(imageUrl: string, transformations?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  }): string {
    // This would integrate with a CDN like Cloudinary or ImageKit
    // For now, return the original URL with query parameters
    if (!transformations) return imageUrl;

    const params = new URLSearchParams();
    Object.entries(transformations).forEach(([key, value]) => {
      if (value !== undefined) params.append(key, value.toString());
    });

    return `${imageUrl}${imageUrl.includes('?') ? '&' : '?'}${params.toString()}`;
  }

  // Background Processing Queue
  private backgroundQueue: Array<() => Promise<void>> = [];
  private isProcessingBackground = false;

  addBackgroundTask(task: () => Promise<void>) {
    this.backgroundQueue.push(task);
    this.processBackgroundQueue();
  }

  private async processBackgroundQueue() {
    if (this.isProcessingBackground || this.backgroundQueue.length === 0) return;
    
    this.isProcessingBackground = true;
    
    while (this.backgroundQueue.length > 0) {
      const task = this.backgroundQueue.shift()!;
      try {
        await task();
      } catch (error) {
        console.error('Background task failed:', error);
      }
      
      // Yield control to main thread
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    this.isProcessingBackground = false;
  }

  // Memory Management
  private initializeCache() {
    // Monitor cache size and clean up when needed
    setInterval(() => {
      this.cleanupCache();
    }, 300000); // Every 5 minutes
  }

  private cleanupCache() {
    const now = Date.now();
    let totalSize = 0;
    const entries = Array.from(this.cache.entries());
    
    // Remove expired entries
    entries.forEach(([key, value]) => {
      if (now - value.timestamp > this.cacheConfig.ttl) {
        this.cache.delete(key);
      } else {
        totalSize += value.size;
      }
    });
    
    // Remove oldest entries if cache is too large
    if (totalSize > this.cacheConfig.maxSize) {
      const sortedEntries = entries
        .filter(([key]) => this.cache.has(key))
        .sort(([, a], [, b]) => a.timestamp - b.timestamp);
      
      for (const [key] of sortedEntries) {
        this.cache.delete(key);
        totalSize -= this.cache.get(key)?.size || 0;
        if (totalSize <= this.cacheConfig.maxSize * 0.8) break;
      }
    }
  }

  private addToCache(key: string, data: any) {
    const size = new Blob([JSON.stringify(data)]).size;
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      size
    });
  }

  private getFromCache(key: string): any | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheConfig.ttl) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  private calculateOptimalDimensions(
    originalWidth: number, 
    originalHeight: number, 
    maxWidth: number, 
    maxHeight: number
  ): { width: number; height: number } {
    if (originalWidth <= maxWidth && originalHeight <= maxHeight) {
      return { width: originalWidth, height: originalHeight };
    }
    
    const aspectRatio = originalWidth / originalHeight;
    
    if (originalWidth > originalHeight) {
      return {
        width: Math.min(maxWidth, originalWidth),
        height: Math.min(maxWidth / aspectRatio, maxHeight)
      };
    } else {
      return {
        width: Math.min(maxHeight * aspectRatio, maxWidth),
        height: Math.min(maxHeight, originalHeight)
      };
    }
  }

  private generatePlaceholder(imageUrl: string): string {
    // Generate a simple colored placeholder based on the URL hash
    const hash = imageUrl.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const hue = Math.abs(hash) % 360;
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = `hsl(${hue}, 30%, 80%)`;
    ctx.fillRect(0, 0, 40, 40);
    
    return canvas.toDataURL();
  }

  // Performance Monitoring
  getPerformanceMetrics(): {
    cacheSize: number;
    cacheHitRate: number;
    averageOptimizationTime: number;
    backgroundQueueLength: number;
  } {
    return {
      cacheSize: this.cache.size,
      cacheHitRate: 0.85, // This would be calculated from actual metrics
      averageOptimizationTime: 150, // ms
      backgroundQueueLength: this.backgroundQueue.length
    };
  }
}

export const performanceOptimizer = new PerformanceOptimizer();
