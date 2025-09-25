import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Heart, 
  Star, 
  Award,
  Brush,
  Coffee
} from "lucide-react";

const achievements = [
  {
    icon: Star,
    number: "505+",
    text: "Созданных эскизов",
    color: "text-primary"
  },
  {
    icon: Heart,
    number: "500+",
    text: "Довольных клиентов",
    color: "text-secondary"
  },
  {
    icon: Award,
    number: "3",
    text: "Года опыта",
    color: "text-accent"
  },
];

const skills = [
  { name: "Реализм", level: 95 },
  { name: "Геометрия", level: 90 },
  { name: "Готика", level: 85 },
  { name: "Минимализм", level: 92 },
  { name: "Восточный стиль", level: 88 },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background artistic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-secondary/20 rounded-full text-sm font-medium text-secondary backdrop-blur-sm">
                <Brush size={16} />
                Обо мне
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                Художник <span className="text-secondary">по призванию</span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Уже более 3 лет создаю уникальные тату-эскизы для людей, которые хотят выразить свою индивидуальность через искусство.
              </p>
              <p>
                Моя страсть к рисованию началась еще в детстве, а любовь к татуировкам 
                привела меня к созданию эскизов. Каждая работа для меня — это возможность 
                рассказать чью-то уникальную историю.
              </p>
              <p>
                Я специализируюсь на различных стилях: от реалистичных портретов до 
                минималистичной геометрии. Главное для меня — понять вашу идею и воплотить 
                ее в жизнь.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">
                Мои навыки
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-8 py-4 rounded-xl ink-splatter"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Coffee className="mr-2 h-5 w-5" />
                Связаться со мной
              </Button>
              <a href="https://instagram.com/sketchs.master" target="_blank" rel="noreferrer" className="inline-flex">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/20 text-foreground hover:border-primary/40 hover:text-primary font-medium px-8 py-4 rounded-xl"
                >
                  Мои работы в Instagram
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            {/* Main card */}
            <div className="collage-item bg-card/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-secondary/20" style={{'--rotation': '-2deg'} as any}>
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl mb-6 relative overflow-hidden">
                <img 
                  src="/assets/profile-img.png" 
                  alt="Ирина - художник тату-эскизов" 
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-primary/20 rounded-lg"></div>
              </div>

              {/* Quote */}
              <blockquote className="text-center space-y-4">
                <p className="text-lg font-display italic text-foreground">
                  "Каждый эскиз — это не просто рисунок, это часть души, которую я вкладываю в работу"
                </p>
                <footer className="text-sm text-muted-foreground">— Ирина</footer>
              </blockquote>
            </div>

            {/* Floating achievements */}
            <div className="absolute -top-4 -right-4 space-y-[7px] sm:space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="collage-item bg-card/90 backdrop-blur-sm px-[11px] py-[9px] sm:p-4 rounded-xl border border-border/50 text-center min-w-[99px] sm:min-w-[120px]"
                    style={{'--rotation': `${(index - 1) * 3}deg`} as any}
                  >
                    <Icon className={`w-[19px] h-[19px] sm:w-6 sm:h-6 mx-auto mb-[5px] sm:mb-2 ${achievement.color}`} />
                    <div className={`text-[19px] sm:text-2xl font-bold ${achievement.color}`}>
                      {achievement.number}
                    </div>
                    <div className="text-[9px] sm:text-xs text-muted-foreground">
                      {achievement.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating palette */}
            <div className="absolute -bottom-6 -left-6 collage-item bg-primary/20 p-6 rounded-xl border border-primary/30" style={{'--rotation': '5deg'} as any}>
              <Palette className="w-8 h-8 text-primary" />
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};