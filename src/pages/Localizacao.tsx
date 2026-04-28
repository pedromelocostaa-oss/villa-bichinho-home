import { PageLayout } from "@/components/PageLayout";
import { IconMap, IconExternal } from "@/components/Icons";

const COORDS = { lat: -20.9631, lng: -44.1894 };
const ADDRESS = "Bichinho, Prados – MG, 36305-000";
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COORDS.lat},${COORDS.lng}`;
const EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${COORDS.lng - 0.01},${COORDS.lat - 0.01},${COORDS.lng + 0.01},${COORDS.lat + 0.01}&layer=mapnik&marker=${COORDS.lat},${COORDS.lng}`;

const tips = [
  { title: "De carro via BR-265", desc: "Saindo de São João del-Rei, siga pela BR-265 até Prados. Em Prados, siga as placas para Bichinho por aproximadamente 7 km." },
  { title: "De Belo Horizonte", desc: "Aproximadamente 2h30 de viagem. Pegue a BR-040 sentido Barbacena, depois acesse a BR-265 em direção a São João del-Rei e siga até Prados/Bichinho." },
  { title: "Estrada de acesso", desc: "O último trecho é por estrada de terra em boas condições. Veículos comuns chegam sem dificuldade." },
  { title: "GPS pode variar", desc: "Se o GPS não encontrar o endereço exato, use as coordenadas: -20.9631, -44.1894 — elas levam direto." },
];

const Localizacao = () => (
  <PageLayout title="Localização" subtitle="Como nos encontrar" icon={<IconMap className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">
      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-5 py-5">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3">Endereço</p>
        <p className="font-display text-xl font-medium text-primary mb-1">Villa Bichinho</p>
        <p className="font-body text-sm text-earth mb-4">{ADDRESS}</p>
        <div className="rounded border border-border/50 bg-background/50 px-3 py-2">
          <p className="font-body text-[10px] text-muted-foreground mb-0.5">Coordenadas GPS</p>
          <p className="font-body text-xs font-medium text-primary tracking-wide">{COORDS.lat}, {COORDS.lng}</p>
        </div>
      </div>

      <div className="animate-fade-up delay-100 overflow-hidden rounded-lg border border-border/60">
        <iframe title="Localização Villa Bichinho" src={EMBED_URL} className="h-52 w-full" loading="lazy" />
        <div className="border-t border-border/60 bg-card/50 px-5 py-3">
          <p className="font-body text-xs text-muted-foreground">Bichinho, Prados — Minas Gerais</p>
        </div>
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-up delay-200 flex items-center justify-center gap-3 rounded-lg border border-primary/25 bg-primary px-6 py-4 font-body text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
      >
        <IconMap className="h-5 w-5" />
        Abrir rota no Maps
        <IconExternal className="h-4 w-4 opacity-70" />
      </a>

      <div className="animate-fade-up delay-300">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">Dicas de acesso</p>
        <div className="space-y-2">
          {tips.map(({ title, desc }) => (
            <div key={title} className="rounded-lg border border-border/50 bg-card/40 px-5 py-4">
              <p className="font-body text-sm font-semibold text-primary mb-1">{title}</p>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Localizacao;
