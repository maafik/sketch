import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  MessageCircle, 
  Instagram, 
  Mail,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "Посмотрите мои работы",
    action: "@sketchs.master",
    url: "https://instagram.com/sketchs.master",
    color: "text-pink-500"
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    description: "Быстрая связь",
    action: "@IrisArts1",
    url: "https://t.me/IrisArts1",
    color: "text-blue-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Подробное обсуждение",
    action: "+7 951 762-34-67",
    url: "https://api.whatsapp.com/send?phone=79517623467",
    color: "text-green-500"
  },
];

const pricingInfo = [
  { type: "Простой эскиз", price: "3000₽", time: "1-2 дня" },
  { type: "Средняя сложность", price: "5000₽", time: "2-3 дня" },
  { type: "Сложный эскиз", price: "8000₽", time: "3-5 дней" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    style: "",
    description: "",
    attachment: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStepPopup, setShowStepPopup] = useState<"none" | "choices" | "final">("none");
  const [lastSubmission, setLastSubmission] = useState<{ name: string; phone: string; style: string; description: string; attachment: File | null } | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({ title: "Заявка отправлена! ✨", description: "Выберите способ связи" });
    setLastSubmission(formData);
    setShowStepPopup("choices");
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const buildMessage = () => {
    const data = lastSubmission ?? formData;
    return `Заявка на эскиз\nИмя: ${data.name}\nТелефон: ${data.phone}\nСтиль: ${data.style || "—"}\nОписание: ${data.description || "—"}`;
  };

  const openWhatsApp = () => {
    const greeting = encodeURIComponent("Здравствуйте! Интересуюсь эскизом.");
    // Отправляем детали в Telegram молча (без финального окна)
    sendToTelegram(false);
    // Используем api.whatsapp.com для более стабильного префилла, чем wa.me
    window.open(`https://api.whatsapp.com/send?phone=79517623467&text=${greeting}`, "_blank");
    // Финальный попап показываем только для Telegram
    setShowStepPopup("none");
  };

  const sendToTelegram = async (showFinal: boolean = true) => {
    try {
      const telegramToken = "8314217513:AAHhxLHdM7biYi0FEG6hzvSPivYP6CnPkQE";
      const telegramChatId = "7702221669";
      const data = lastSubmission ?? formData;
      const text = buildMessage();
      if (data.attachment) {
        const fd = new FormData();
        fd.append("chat_id", telegramChatId);
        fd.append("caption", text);
        fd.append("photo", data.attachment, data.attachment.name);
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendPhoto`, {
          method: "POST",
          body: fd
        });
      } else {
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: telegramChatId, text })
        });
      }
      if (showFinal) {
        setShowStepPopup("final");
      }
    } catch (e) {
      toast({ title: "Ошибка отправки в Telegram", description: "Попробуйте другой способ связи" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setFormData(prev => ({ ...prev, attachment: file }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles size={16} />
            Связаться со мной
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Создадим что-то <span className="text-primary">особенное</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Расскажите мне о своей идее, и я помогу воплотить ее в уникальный эскиз
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Form */}
          <div className="space-y-8">
            <div className="collage-item bg-card/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary/20" style={{'--rotation': '-1deg'} as any}>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Send className="text-primary" size={24} />
                Оставить заявку
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ваше имя</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Как к вам обращаться?"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      pattern="^\\+7\\s?\(?[0-9]{3}\)?\\s?[0-9]{3}[-\\s]?[0-9]{2}[-\\s]?[0-9]{2}$"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Стиль татуировки</label>
                  <Input
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    placeholder="Реализм, геометрия, минимализм..."
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Описание идеи</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Расскажите подробно о вашей идее: что хотите изобразить, размер, стиль, особые пожелания..."
                    rows={4}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Прикрепить фото (необязательно)</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-xl ink-splatter"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin mr-2 h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-8">
            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <div
                      className="collage-item bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                      style={{'--rotation': `${(index - 1) * 2}deg`} as any}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-background/50 ${method.color} group-hover:scale-110 transition-transform`}>
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-foreground">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                          <p className="text-sm font-medium text-primary mt-1">{method.action}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Pricing info */}
            <div className="collage-item bg-card/80 backdrop-blur-sm p-6 rounded-xl border-2 border-secondary/20" style={{'--rotation': '2deg'} as any}>
              <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="text-secondary" size={20} />
                Примерная стоимость
              </h3>
              <div className="space-y-3">
                {pricingInfo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                    <div>
                      <div className="font-medium text-foreground">{item.type}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                    <div className="font-bold text-secondary">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="collage-item bg-accent/10 backdrop-blur-sm p-6 rounded-xl border border-accent/20" style={{'--rotation': '-1.5deg'} as any}>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1" size={20} />
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Гарантия качества
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Если эскиз вам не понравится, внесу правки бесплатно или верну деньги
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup: choices */}
      {showStepPopup === "choices" && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60">
          <div className="bg-card p-6 rounded-2xl border border-border w-[90%] max-w-md space-y-4 text-center">
            <h4 className="text-xl font-display font-semibold text-foreground">Как удобнее связаться?</h4>
            <p className="text-sm text-muted-foreground">Выберите мессенджер — мы подставим текст заявки автоматически</p>
            <div className="flex gap-3 justify-center pt-2">
              <a href="https://wa.me/79517623467" target="_blank" rel="noreferrer" className="inline-flex">
                <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white px-5">WhatsApp</Button>
              </a>
              <Button onClick={sendToTelegram} className="bg-sky-500 hover:bg-sky-600 text-white px-5">Telegram</Button>
            </div>
          </div>
        </div>
      )}
      {/* Popup: final */}
      {showStepPopup === "final" && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60" onClick={() => setShowStepPopup("none")}> 
          <div className="bg-card p-6 rounded-2xl border border-border w-[90%] max-w-md space-y-4 text-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" onClick={() => setShowStepPopup("none")}>✕</button>
            <h4 className="text-xl font-display font-semibold text-foreground">Последний шаг</h4>
            <p className="text-sm text-muted-foreground">Напишите мне в Telegram, чтобы мы быстрее связались ❤️</p>
            <div className="flex gap-3 justify-center pt-2">
              <a href="https://t.me/IrisArts1" target="_blank" rel="noreferrer" className="inline-flex">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white px-5">Написать</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};