import { ArtisticHeader } from "@/components/ArtisticHeader";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArtisticHeader />
      <main>
        <HeroSection />
        <PortfolioGallery />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">SketchMaster</h3>
              <p className="text-sm text-muted-foreground">Уникальные тату-эскизы на заказ</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/sketchs.master" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://t.me/IrisArts1" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Telegram
              </a>
              <a href="https://wa.me/79517623467" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SketchMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;