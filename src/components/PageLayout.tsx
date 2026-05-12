import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft, IconWhatsApp } from "./Icons";

const WHATSAPP_FAB_URL = `https://wa.me/5532999364977?text=${encodeURIComponent("Olá, equipe da Vila Bichinho! Gostaria de uma orientação durante a minha estadia.")}`;

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const PageLayout = ({ children, title, subtitle, icon }: PageLayoutProps) => {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Skip link para teclado/leitores de tela */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>

      <header
        className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto flex max-w-lg items-center gap-4 px-5 py-4">
          <button
            onClick={() => navigate("/")}
            aria-label="Voltar para o início"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary/70 transition-all duration-200 hover:border-primary/40 hover:bg-sand hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <IconArrowLeft className="h-4 w-4" />
          </button>
          {/* Tocar no título rola ao topo — padrão iOS familiar em mobile */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex flex-1 items-center gap-3 overflow-hidden text-left active:opacity-70"
            aria-label="Rolar para o topo"
          >
            {icon && (
              <div className="h-8 w-8 shrink-0 text-primary/60" aria-hidden="true">
                {icon}
              </div>
            )}
            <div className="overflow-hidden">
              <h1 className="truncate font-display text-xl font-medium text-primary leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="truncate text-xs font-body text-muted-foreground tracking-wide">{subtitle}</p>
              )}
            </div>
          </button>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-lg pb-24">
        {children}
      </main>

      <footer
        className="mx-auto max-w-lg border-t border-border/40 px-5 py-8 text-center"
        style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
      >
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary/40">
          Villa Bichinho · Bichinho, MG
        </p>
      </footer>

      {/* Botão "voltar ao topo" — aparece em páginas longas, fica acima do FAB */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo da página"
        className={`fixed right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-primary/70 shadow-card backdrop-blur transition-all duration-300 hover:bg-sand hover:text-primary active:scale-95 ${
          showTopBtn ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
        style={{ bottom: "calc(5.25rem + env(safe-area-inset-bottom))" }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>

      <a
        href={WHATSAPP_FAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o concierge da Villa pelo WhatsApp"
        className="fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-botanical transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
      >
        <IconWhatsApp className="h-6 w-6" />
      </a>
    </div>
  );
};
