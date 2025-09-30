import { ArtisticHeader } from "@/components/ArtisticHeader";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ContactSection } from "@/components/ContactSection";

const Sketches = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArtisticHeader />
      <main>
        <PortfolioGallery />
        <ContactSection />
      </main>
      <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mt-2 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SketchMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sketches;


