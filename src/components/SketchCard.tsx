import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Share2 } from "lucide-react";

interface SketchCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  rotation?: number;
  delay?: number;
}

export const SketchCard = ({ 
  image, 
  title, 
  description, 
  category, 
  rotation = 0,
  delay = 0 
}: SketchCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`collage-item bg-card/90 p-4 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 ${
        isLoaded ? 'animate-sketch-appear' : 'opacity-0'
      }`}
      style={{
        '--rotation': `${rotation}deg`,
        animationDelay: `${delay}ms`
      } as any}
    >
      {/* Category tag */}
      <div className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
        {category}
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            <Eye size={16} className="mr-1" />
            Просмотр
          </Button>
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            <Share2 size={16} />
          </Button>
        </div>

        {/* Torn paper effect */}
        <div className="absolute -bottom-1 left-0 right-0 h-3 bg-card" style={{
          clipPath: 'polygon(0 0, 10% 100%, 20% 0, 30% 100%, 40% 0, 50% 100%, 60% 0, 70% 100%, 80% 0, 90% 100%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3">
        <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 transition-colors ${
              isLiked 
                ? 'text-destructive hover:text-destructive/80' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Heart 
              size={16} 
              className={isLiked ? 'fill-current' : ''} 
            />
          </Button>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать похожий
          </Button>
        </div>
      </div>

      {/* Artistic elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-60"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full opacity-40"></div>
    </div>
  );
};