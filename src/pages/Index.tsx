import { useNavigate } from "react-router-dom";
import villaBichinhoLogo from "@/assets/villa-bichinho-logo.svg";
import {
  IconLeaf, IconKey, IconMap, IconWifi,
  IconHands, IconCup, IconCompass, IconPhone, IconWhatsApp,
} from "@/components/Icons";

const navItems = [
  { label: "Bem-vindo", sub: "Manifesto e nossa história", path: "/bemvindo", Icon: IconLeaf },
  { label: "Check-in", sub: "Chegada e partida", path: "/checkin", Icon: IconKey },
  { label: "Localização", sub: "Como nos encontrar", path: "/localizacao", Icon: IconMap },
  { label: "Wi-Fi", sub: "Rede e senha", path: "/wifi", Icon: IconWifi },
  { label: "Convivência", sub: "Nossa casa, seu lar", path: "/convivencia", Icon: IconHands },
  { label: "Na Villa", sub: "Café, áreas e banheira", path: "/experiencia", Icon: IconCup },
  { label: "Favoritos", sub: "Curadoria dos anfitriões", path: "/guia-local", Icon: IconCompass },
  { label: "Contatos", sub: "Apoios para sua estadia", path: "/contato", Icon: IconPhone },
];

const WHATSAPP_URL = `https://wa.me/5532999364977?text=${encodeURIComponent("Olá, equipe da Vila Bichinho! Gostaria de uma orientação durante a minha estadia.")}`;

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-6">

        {/* Hero — luxo minimalista, muito respiro */}
        <header className="animate-fade-up pt-16 pb-14 text-center">
          <div className="mx-auto mb-10 flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
            <img
              src={villaBichinhoLogo}
              alt="Villa Bichinho"
              className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <p className="mb-5 font-body text-[10px] font-medium uppercase tracking-[0.4em] text-primary/45">
            Caderno do Hóspede
          </p>

          <h1 className="font-display text-5xl font-light leading-[1.05] text-primary sm:text-[3.25rem]">
            Villa Bichinho
          </h1>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/25" />
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary/45">
              Bichinho · MG
            </span>
            <span className="h-px w-8 bg-primary/25" />
          </div>
        </header>

        {/* Mensagem de boas-vindas — sem caixa, apenas tipografia */}
        <section className="animate-fade-up delay-100 mb-16 text-center">
          <p className="font-display text-2xl font-light italic leading-relaxed text-primary/80 text-balance">
            Um refúgio preparado com cuidado, para que o tempo aqui seja seu.
          </p>
        </section>

        {/* Navegação — lista editorial com numeração */}
        <nav className="mb-14">
          <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-primary/40">
            Sumário
          </p>

          <ul className="border-t border-border/50">
            {navItems.map(({ label, sub, path, Icon }, i) => (
              <li key={path} className={`animate-fade-up`} style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
                <button
                  onClick={() => navigate(path)}
                  className="group relative flex w-full items-center gap-5 border-b border-border/50 py-5 text-left transition-colors duration-300 hover:bg-sand/30"
                >
                  <span className="font-body text-[10px] font-medium tabular-nums tracking-widest text-primary/30 transition-colors duration-300 group-hover:text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Icon className="h-5 w-5 shrink-0 text-primary/40 transition-all duration-300 group-hover:text-primary group-hover:scale-105" />

                  <div className="flex-1 min-w-0">
                    <p className="font-display text-xl font-medium leading-tight text-primary transition-transform duration-300 group-hover:translate-x-1">
                      {label}
                    </p>
                    <p className="mt-0.5 font-body text-xs text-muted-foreground leading-tight">
                      {sub}
                    </p>
                  </div>

                  <span className="font-body text-lg text-primary/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Concierge — bloco discreto e elegante */}
        <section className="animate-fade-up delay-700 mb-16">
          <div className="rounded-sm border border-primary/15 bg-primary/[0.03] px-7 py-8 text-center transition-all duration-500 hover:border-primary/25 hover:bg-primary/[0.05]">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary/60">
              <IconWhatsApp className="h-4 w-4" />
            </div>
            <p className="mb-2 font-body text-[10px] font-medium uppercase tracking-[0.3em] text-primary/45">
              Concierge da Villa
            </p>
            <p className="mb-6 font-display text-xl font-light leading-snug text-primary text-balance">
              À sua disposição, com discrição, sempre que precisar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-primary/40 pb-1 font-body text-xs font-medium uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:border-primary hover:gap-4"
            >
              Iniciar conversa
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        {/* Assinatura */}
        <footer className="pb-12 text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-primary/20" />
          <p className="font-body text-[9px] font-medium uppercase tracking-[0.4em] text-primary/35">
            Estadia com alma mineira
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
