import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background artistic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-sketch-appear">
            {/* Artistic badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles size={16} />
              Художник тату-эскизов
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">Привет! Меня зовут </span>
                <span className="text-primary">Ирина</span>
                <span className="text-foreground">, я </span>
                <span className="block text-secondary mt-2">художник и дизайнер</span>
                <span className="block text-accent">татуировок.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Я создаю уникальные тату-эскизы, которые подчеркивают вашу индивидуальность. 
              Моя цель — сделать дизайн, который не только красив, но и имеет для вас особое значение.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-xl ink-splatter group"
                onClick={scrollToContact}
              >
                Заказать эскиз
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8 py-4 rounded-xl"
                onClick={scrollToPortfolio}
              >
                Посмотреть работы
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-[11px] sm:gap-4 pt-8">
              <div className="collage-item text-center px-[11px] py-[9px] sm:px-4 sm:py-3 rounded-xl border border-border/40 bg-background/30 backdrop-blur-md">
                <div className="text-[19px] sm:text-3xl font-bold text-primary">505+</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground">Эскизов создано</div>
              </div>
              <div className="collage-item text-center px-[11px] py-[9px] sm:px-4 sm:py-3 rounded-xl border border-border/40 bg-background/30 backdrop-blur-md">
                <div className="text-[19px] sm:text-3xl font-bold text-secondary">500+</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="collage-item text-center px-[11px] py-[9px] sm:px-4 sm:py-3 rounded-xl border border-border/40 bg-background/30 backdrop-blur-md">
                <div className="text-[19px] sm:text-3xl font-bold text-accent">3</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground">Года опыта</div>
              </div>
            </div>
          </div>

          {/* Right side - Video showcase */}
          <div className="relative animate-sketch-appear" style={{animationDelay: '0.3s'}}>
            <div className="relative space-y-6">
              {/* Main featured video card */}
              <div className="collage-item bg-card/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/20" style={{'--rotation': '2deg'} as any}>
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">Процесс создания</h3>
                  <p className="text-sm text-muted-foreground">Каждый эскиз создается с любовью</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 collage-item bg-secondary/20 p-4 rounded-xl border border-secondary/30" style={{'--rotation': '-5deg'} as any}>
                <div className="text-2xl">✨</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 collage-item bg-accent/20 p-4 rounded-xl border border-accent/30" style={{'--rotation': '8deg'} as any}>
                <div className="text-2xl">🖋️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};