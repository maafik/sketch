import { useEffect, useState } from "react";
import { Grid } from "lucide-react";

// Подключаем картинки из public, чтобы отсутствие файла не ломало сборку
// Положите файлы в public/assets с этими именами
const img1 = "/src/assets/harry.jpg";
const img2 = "/src/assets/snake-flowers.jpg";
const img3 = "/src/assets/koi.jpg";
const img4 = "/src/assets/wolf.jpg";
const img5 = "/src/assets/owl.jpg";
const img6 = "/src/assets/raven.jpg";
const img7 = "/src/assets/wolf-dual.jpg";

type GalleryItem = { id: number; image: string; style: string };

// Только ваши работы + подпись со стилем под каждой
const galleryItems: GalleryItem[] = [
  { id: 1, image: img1, style: "Фэнтези / Цвет + графика" },
  { id: 2, image: img2, style: "Змей и лилии / Лайн‑арт" },
  { id: 3, image: img3, style: "Карп кои / Традишнл цвет" },
  { id: 4, image: img4, style: "Волк / Black&Grey" },
  { id: 5, image: img5, style: "Сова / Нео‑традишнл цвет" },
  { id: 6, image: img6, style: "Ворон / Нордический Blackwork" },
  { id: 7, image: img7, style: "Волк дуал / Black&Grey + графика" },
];

export const PortfolioGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Каталога/фильтров больше нет — показываем только прикреплённые изображения

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background artistic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
            <Grid size={16} />
            Портфолио работ
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Мои <span className="text-primary">творения</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждый эскиз — это уникальная история, рассказанная через искусство татуировки
          </p>
        </div>

        {/* Без фильтров/переключателей макета */}

        {/* Gallery — вертикальный masonry как раньше */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <figure key={item.id} className="break-inside-avoid bg-card/90 p-4 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="relative overflow-hidden rounded-xl">
                <img src={item.image} alt={item.style} className="w-full h-auto object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                {item.style}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Без кнопки загрузки дополнительных работ */}
      </div>
    </section>
  );
};