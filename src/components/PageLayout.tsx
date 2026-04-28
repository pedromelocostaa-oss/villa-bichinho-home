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

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center gap-4 px-5 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary/70 transition-all duration-200 hover:border-primary/40 hover:bg-sand hover:text-primary active:scale-95"
          >
            <IconArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 overflow-hidden">
            {icon && (
              <div className="h-8 w-8 shrink-0 text-primary/60">
                {icon}
              </div>
            )}
            <div className="overflow-hidden">
              <h1 className="truncate font-display text-xl font-medium text-primary leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xs font-body text-muted-foreground tracking-wide">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-lg">
        {children}
      </div>

      <footer className="mx-auto max-w-lg border-t border-border/40 px-5 py-8 text-center">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary/40">
          Villa Bichinho · Bichinho, MG
        </p>
      </footer>

      <a
        href={WHATSAPP_FAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o concierge via WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-botanical transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <IconWhatsApp className="h-5 w-5" />
      </a>
    </div>
  );
};
