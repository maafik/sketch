import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Palette, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Award
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Обсуждение идеи",
    description: "Рассказываете мне о своей идее, стиле, размере и месте размещения татуировки",
    duration: "30 мин",
    rotation: -2,
  },
  {
    id: 2,
    icon: Palette,
    title: "Создание эскиза",
    description: "Прорабатываю детали и создаю уникальный эскиз специально для вас",
    duration: "1-3 дня",
    rotation: 1,
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Финальная версия",
    description: "Вносим правки и доводим эскиз до совершенства",
    duration: "1 день",
    rotation: -1,
  },
];

const features = [
  {
    icon: Clock,
    title: "Быстрая работа",
    description: "Большинство эскизов готовы в течение 1-3 дней"
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Каждый эскиз создается с учетом ваших пожеланий"
  },
  {
    icon: Award,
    title: "Высокое качество",
    description: "Детализированная проработка каждого элемента"
  },
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-accent/20 rounded-full text-sm font-medium text-accent backdrop-blur-sm">
            <Sparkles size={16} />
            Как это работает
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Процесс <span className="text-accent">создания</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От идеи до готового эскиза — простой и понятный процесс работы
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            
            return (
              <div
                key={step.id}
                className={`collage-item bg-card/80 backdrop-blur-sm p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                  isActive 
                    ? 'border-accent/50 bg-accent/10' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
                style={{'--rotation': `${step.rotation}deg`} as any}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    isActive 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {step.id}
                  </div>
                  <div className={`p-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                    <Clock size={14} />
                    {step.duration}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary/40">
                    <ArrowRight size={24} />
                  </div>
                )}

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full opacity-60"></div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="collage-item bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center"
                style={{'--rotation': `${(index - 1) * 1.5}deg`} as any}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="collage-item bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto" style={{'--rotation': '1deg'} as any}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Готовы создать свой уникальный эскиз?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь со мной, и мы обсудим вашу идею
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-xl ink-splatter group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать работу
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};