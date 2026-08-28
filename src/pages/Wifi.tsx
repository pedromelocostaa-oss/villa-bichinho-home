import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { IconWifi, IconCopy, IconCheck } from "@/components/Icons";

const NETWORK = "Villa Bichinho";
const PASSWORD = "villabichinho26";

const CopyField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copiar ${label}: ${value}`}
      className="group block w-full rounded-lg border border-border/60 bg-card/40 text-left overflow-hidden transition-all duration-200 hover:border-primary/30 hover:bg-card/60 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="px-5 pt-4 pb-1 flex items-center justify-between">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary/70">
          {copied ? "Copiado" : "Tocar para copiar"}
        </span>
      </div>
      <div className="flex items-center justify-between px-5 pb-4 gap-3">
        <p className="font-display text-xl font-medium text-primary tracking-wide break-all">{value}</p>
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            copied ? "border-primary/30 bg-primary/10 text-primary" : "border-border text-muted-foreground group-hover:border-primary/30 group-hover:bg-sand group-hover:text-primary"
          }`}
          aria-hidden="true"
        >
          {copied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ${copied ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-live="polite"
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/40 bg-primary/5 px-5 py-2">
            <p className="font-body text-xs text-primary/70 font-medium">Copiado para a área de transferência!</p>
          </div>
        </div>
      </div>
    </button>
  );
};

const Wifi = () => (
  <PageLayout title="Wi-Fi" subtitle="Conexão sem fio" icon={<IconWifi className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">
      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-6">
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/80 text-primary/50">
            <IconWifi className="h-8 w-8" />
          </div>
        </div>
        <p className="text-center font-body text-sm leading-relaxed text-earth">
          O Wi-Fi cobre os principais espaços da Villa. Toque nos campos abaixo para copiar
          a senha rapidamente.
        </p>
      </div>
      <div className="animate-fade-up delay-100 space-y-3">
        <CopyField label="Nome da rede" value={NETWORK} />
        <CopyField label="Senha" value={PASSWORD} />
      </div>
      <div className="animate-fade-up delay-200 rounded-lg border border-border/40 bg-card/30 px-5 py-4">
        <p className="font-body text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-primary/70">Dica: </span>
          Se você preferir desconectar durante a estadia — e muitos hóspedes preferem —
          aproveite para vivenciar Bichinho de outro jeito. A qualidade do silêncio aqui é rara.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Wifi;
