import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { IconWifi, IconCopy, IconCheck } from "@/components/Icons";

const NETWORK = "VillaBichinho";
const PASSWORD = "natureza2024";

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
    <div className="rounded-lg border border-border/60 bg-card/40 overflow-hidden">
      <div className="px-5 pt-4 pb-1">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      </div>
      <div className="flex items-center justify-between px-5 pb-4 gap-3">
        <p className="font-display text-xl font-medium text-primary tracking-wide break-all">{value}</p>
        <button
          onClick={handleCopy}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            copied ? "border-primary/30 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30 hover:bg-sand hover:text-primary"
          }`}
        >
          {copied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
        </button>
      </div>
      {copied && (
        <div className="border-t border-border/40 bg-primary/5 px-5 py-2">
          <p className="font-body text-xs text-primary/70 font-medium">Copiado!</p>
        </div>
      )}
    </div>
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
