
import { useEffect } from 'react';

interface SEOManagerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const SEOManager = ({ 
  title = "Artisan AI - Premium Creative Studio | Professional AI Art Generation",
  description = "Elevate your artistic vision with professional AI image generation. Create stunning fashion photography, portraits, and conceptual art.",
  keywords = "AI art generation, professional photography, digital art, fashion photography, portrait art, creative studio",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonical = "https://artisan-ai.lovable.app/"
}: SEOManagerProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": canonical,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Artisan AI",
        "url": "https://artisan-ai.lovable.app"
      }
    };
    
    // Remove existing structured data script if any
    const existingScript = document.getElementById('page-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data script
    const script = document.createElement('script');
    script.id = 'page-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};
