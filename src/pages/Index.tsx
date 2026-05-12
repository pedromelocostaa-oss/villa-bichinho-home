import { useNavigate } from "react-router-dom";
import villaBichinhoLogo from "@/assets/villa-bichinho-logo.svg";
import {
  IconLeaf, IconKey, IconMap, IconWifi,
  IconHands, IconCup, IconCompass, IconPhone, IconWhatsApp,
} from "@/components/Icons";

const navItems = [
  { label: "Bem-vindo", sub: "Nossa história", path: "/bemvindo", Icon: IconLeaf, delay: "delay-200" },
  { label: "Check-in", sub: "Chegada & saída", path: "/checkin", Icon: IconKey, delay: "delay-300" },
  { label: "Localização", sub: "Como nos encontrar", path: "/localizacao", Icon: IconMap, delay: "delay-400" },
  { label: "Wi-Fi", sub: "Rede & senha", path: "/wifi", Icon: IconWifi, delay: "delay-500" },
  { label: "Convivência", sub: "Nossa casa, seu lar", path: "/convivencia", Icon: IconHands, delay: "delay-500" },
  { label: "Na Villa", sub: "Café, áreas & banheira", path: "/experiencia", Icon: IconCup, delay: "delay-600" },
  { label: "Favoritos", sub: "Curadoria dos anfitriões", path: "/guia-local", Icon: IconCompass, delay: "delay-700" },
  { label: "Contatos", sub: "Apoios para sua estadia", path: "/contato", Icon: IconPhone, delay: "delay-800" },
];

const WHATSAPP_URL = `https://wa.me/5532999364977?text=${encodeURIComponent("Olá, equipe da Vila Bichinho! Gostaria de uma orientação durante a minha estadia.")}`;

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-5">

        <header className="animate-fade-up pt-10 pb-8 text-center">
          <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-lg border border-border bg-card p-2 shadow-card sm:h-48 sm:w-48">
            <img
              src={villaBichinhoLogo}
              alt="Villa Bichinho"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-terracotta">
            Caderno do Hóspede
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-primary">
            Villa Bichinho
          </h1>
        </header>

        <div className="animate-fade-up delay-100 mb-8 rounded-lg border border-border/60 bg-card/60 px-6 py-6">
          <p className="font-display text-xl font-medium leading-snug text-primary mb-3">
            Bem-vindo ao seu refúgio.
          </p>
          <p className="font-body text-sm leading-relaxed text-earth">
            Este caderno foi preparado com cuidado para que sua estadia seja tão leve quanto
            o ar de Bichinho. Aqui você encontra tudo que precisa — com calma e sem esforço.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <div className="h-px flex-1 bg-border/60" />
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Bichinho · MG
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>
        </div>

        <nav aria-label="Seções do guia do hóspede" className="mb-10 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map(({ label, sub, path, Icon, delay }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                aria-label={`${label} — ${sub}`}
                className={`animate-fade-up ${delay} group relative flex flex-col items-start gap-4 rounded-lg border border-border/70 bg-card/50 p-5 text-left transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-card active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[7.5rem]`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-primary/60 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-sand group-hover:text-primary" aria-hidden="true">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-primary leading-tight">
                    {label}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground leading-tight">
                    {sub}
                  </p>
                </div>
                <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-primary/15 transition-colors duration-300 group-hover:bg-primary/30" aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* Card Concierge: dois alvos de toque distintos lado a lado (sem botão dentro de botão) */}
          <div className="animate-fade-up delay-900 flex w-full items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-2 shadow-none">
            <button
              type="button"
              onClick={() => navigate("/concierge")}
              aria-label="Abrir página do Concierge da Villa"
              className="group flex flex-1 items-center gap-4 rounded-md px-3 py-3 text-left transition-all duration-200 hover:bg-primary/5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary/60 transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary" aria-hidden="true">
                <IconWhatsApp className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-semibold text-primary leading-tight">
                  Concierge da Vila
                </p>
                <p className="mt-0.5 font-body text-xs text-muted-foreground leading-tight">
                  Atendimento personalizado pelo WhatsApp
                </p>
              </div>
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar agora no WhatsApp"
              className="shrink-0 rounded-lg border border-primary/25 bg-primary px-4 py-3 font-body text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              Conversar
            </a>
          </div>
        </nav>

        <div className="mb-10 text-center">
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-primary/35">
            Villa Bichinho · Estadia com alma mineira
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
