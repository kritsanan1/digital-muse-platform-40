
import { Button } from "@/components/ui/button";
import { Menu, Star } from "lucide-react";
import { useState } from "react";

export const PremiumHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-gold-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-2xl font-playfair font-bold gradient-text">
              Artisan AI
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#studio" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium">
              Studio
            </a>
            <a href="#gallery" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium">
              Gallery
            </a>
            <a href="#styles" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium">
              Styles
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium">
              Pricing
            </a>
            <a href="#artists" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium">
              Artists
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden sm:flex border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 font-semibold px-6">
              Create Art
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gold-500/20">
            <nav className="flex flex-col space-y-3">
              <a href="#studio" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium py-2">
                Studio
              </a>
              <a href="#gallery" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium py-2">
                Gallery
              </a>
              <a href="#styles" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium py-2">
                Styles
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium py-2">
                Pricing
              </a>
              <a href="#artists" className="text-foreground/80 hover:text-gold-400 transition-colors font-medium py-2">
                Artists
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
