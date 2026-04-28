import { PageLayout } from "@/components/PageLayout";
import { IconHands } from "@/components/Icons";

const orientations = [
  { title: "Silêncio é parte da experiência", desc: "Pedimos atenção ao volume de músicas e conversas após as 22h, especialmente nas áreas externas. O silêncio noturno de Bichinho é um dos maiores presentes da Villa." },
  { title: "Animais de estimação", desc: "Amamos animais, e recebemos pets mediante consulta prévia. Entre em contato antes da chegada para combinarmos os detalhes." },
  { title: "Áreas comuns com cuidado", desc: "A cozinha compartilhada, a sala de estar e os jardins são espaços de todos. Cuidamos juntos para que cada hóspede tenha uma experiência agradável." },
  { title: "Fumo", desc: "Fumantes são bem-vindos nas áreas externas designadas. No interior dos ambientes, pedimos que não se fume." },
  { title: "Crianças", desc: "A Villa é um espaço familiar e acolhedor. Crianças são bem-vindas — pedimos apenas atenção próxima nas áreas com desnível e jardins." },
  { title: "Pertences e responsabilidades", desc: "A Villa não se responsabiliza por objetos deixados em áreas comuns. Guarde seus pertences de valor no quarto." },
  { title: "Economia de recursos", desc: "Vivemos em harmonia com a natureza. Agradecemos o uso consciente de água e energia — desligue luzes e ar-condicionado ao sair dos ambientes." },
];

const Convivencia = () => (
  <PageLayout title="Convivência" subtitle="Nossa casa, seu lar" icon={<IconHands className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">
      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-6">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-terracotta mb-3">Nosso jeito de ser</p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Mais do que regras, a Villa Bichinho tem uma forma de estar no mundo. Estas orientações
          são um convite para que sua presença aqui seja leve para você e para todos ao redor.
        </p>
      </div>
      <div className="animate-fade-up delay-100 space-y-2">
        {orientations.map(({ title, desc }) => (
          <div key={title} className="flex gap-4 rounded-lg border border-border/50 bg-card/35 px-5 py-4">
            <div className="mt-1 h-4 w-4 shrink-0">
              <div className="h-4 w-4 rounded-full border border-primary/25 bg-primary/8" />
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-primary mb-1">{title}</p>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="animate-fade-up delay-400 rounded-lg border border-primary/15 bg-primary/5 px-6 py-5">
        <p className="font-body text-sm leading-relaxed text-earth italic">
          "A convivência harmoniosa é o que transforma um espaço em comunidade.
          Obrigado por cuidar deste lugar com a gente."
        </p>
        <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">— Equipe Villa Bichinho</p>
      </div>
    </div>
  </PageLayout>
);

export default Convivencia;
