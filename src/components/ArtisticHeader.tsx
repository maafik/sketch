import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const ArtisticHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип как штамп */}
          <div className="relative">
            <div className="collage-item p-3 bg-card rounded-lg border-2 border-primary/20" style={{'--rotation': '-2deg'} as any}>
              <h1 className="text-2xl font-display font-bold text-primary">
                SketchMaster
              </h1>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ink-drop"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Портфолио
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              Обо мне
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium">
              Процесс
            </a>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg ink-splatter"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать эскиз
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-6 bg-card/90 backdrop-blur-lg rounded-lg border border-border animate-sketch-appear">
            <div className="flex flex-col space-y-4">
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Портфолио
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Обо мне
              </a>
              <a 
                href="#process" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Процесс
              </a>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Заказать эскиз
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};