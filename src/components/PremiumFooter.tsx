
import { Button } from "@/components/ui/button";
import { Star, Camera, Image, Settings, User } from "lucide-react";

export const PremiumFooter = () => {
  return (
    <footer className="bg-black/40 border-t border-gold-500/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-playfair font-bold gradient-text">
                Artisan AI
              </h3>
            </div>
            <p className="text-foreground/70 max-w-xs">
              Elevating artistic vision through professional-grade AI image generation. 
              Join thousands of creative professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gold-500/30 text-gold-400">
                Follow Us
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#studio" className="text-foreground/70 hover:text-gold-400 transition-colors">Creative Studio</a></li>
              <li><a href="#gallery" className="text-foreground/70 hover:text-gold-400 transition-colors">Art Gallery</a></li>
              <li><a href="#styles" className="text-foreground/70 hover:text-gold-400 transition-colors">Style Library</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#artists" className="text-foreground/70 hover:text-gold-400 transition-colors">Featured Artists</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Challenges</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Workshops</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Discord</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Status</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-gold-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © 2024 Artisan AI. All rights reserved. Professional-grade creative tools.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-gold-400 transition-colors">Privacy</a>
              <a href="#" className="text-foreground/60 hover:text-gold-400 transition-colors">Terms</a>
              <a href="#" className="text-foreground/60 hover:text-gold-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
