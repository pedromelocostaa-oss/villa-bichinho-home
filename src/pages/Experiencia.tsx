import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { IconCup, IconChevronDown, IconExternal, IconWave } from "@/components/Icons";

const MENU_BASE_URL = "https://villa-menu-magic.lovable.app";

const experiences = [
  {
    title: "Café da manhã",
    tag: "Manhãs na Villa",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          O café da manhã é servido entre <strong className="text-primary">8h30 e 11h00</strong>, na
          varanda ou na sala de jantar, conforme a preferência e o clima.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Cada manhã começa com produtos frescos e regionais: pão artesanal, queijo mineiro,
          frutas da estação, bolos caseiros, geleias e café coado na hora.
        </p>
        <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3">
          <p className="font-body text-xs text-muted-foreground">
            <span className="font-semibold text-primary/70">Pontualidade: </span>
            pedimos que respeite o horário para garantir a melhor experiência e organização do serviço. Solicitações fora do horário padrão estão sujeitas à disponibilidade.
          </p>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          Restrições alimentares? Nos avise com antecedência pelo WhatsApp — adoramos adaptar.
        </p>
      </div>
    ),
  },
  {
    title: "Bar da Piscina",
    tag: "Sabores à beira d'água",
    content: (
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-lg font-medium text-primary">12h às 16h</span>
          <span className="font-body text-xs text-muted-foreground">sexta a domingo</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          Para uma pausa gostosa entre um mergulho e outro, consulte as opções servidas no Bar da Piscina.
        </p>
        <Button asChild variant="outline" size="lg" className="h-auto min-h-11 w-full whitespace-normal px-4 py-3 text-center font-body text-sm">
          <a href={`${MENU_BASE_URL}/piscina`} target="_blank" rel="noopener noreferrer">
            Ver cardápio do Bar da Piscina
            <IconExternal aria-hidden="true" />
          </a>
        </Button>
      </div>
    ),
  },
  {
    title: "Caverna Gastronômica",
    tag: "Noites na Villa",
    content: (
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-lg font-medium text-primary">A partir das 19h</span>
          <span className="font-body text-xs text-muted-foreground">sexta a domingo</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          À noite, a Caverna Gastronômica recebe você com sabores preparados para serem apreciados sem pressa.
        </p>
        <Button asChild variant="outline" size="lg" className="h-auto min-h-11 w-full whitespace-normal px-4 py-3 text-center font-body text-sm">
          <a href={`${MENU_BASE_URL}/caverna`} target="_blank" rel="noopener noreferrer">
            Ver menu da Caverna Gastronômica
            <IconExternal aria-hidden="true" />
          </a>
        </Button>
      </div>
    ),
  },
  {
    title: "Banheira de imersão",
    tag: "Ritual de descanso",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          Nossa banheira de imersão foi pensada como um ritual à parte. Um espaço para silenciar,
          aquecer e deixar o tempo passar sem culpa.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Disponível mediante agendamento. Entre em contato pelo WhatsApp para reservar seu horário.
        </p>
        <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3">
          <p className="font-body text-xs text-muted-foreground">
            <span className="font-semibold text-primary/70">Disponível em: </span>
            exclusivamente nos quartos <strong className="text-primary/80">Lavanda</strong> e <strong className="text-primary/80">Florestal</strong>.
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3">
          <p className="font-body text-xs text-muted-foreground">
            <span className="font-semibold text-primary/70">Inclusos: </span>
            toalhas, iluminação ambiente e aromaterapia com óleos essenciais da região.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Jardins & áreas externas",
    tag: "Ao ar livre",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          Os jardins da Villa foram cultivados com atenção às plantas nativas e ervas aromáticas.
          Caminhe, respire, sente-se à sombra ou simplesmente olhe o horizonte.
        </p>
        <div className="space-y-2">
          {["Varanda com redes e cadeiras de bambu", "Jardim de ervas medicinais", "Área de leitura com vista para o vale", "Mesa externa para refeições ao ar livre"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              <p className="font-body text-sm text-earth">{item}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Piscina",
    tag: "Lazer",
    content: (
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-lg font-medium text-primary">10h às 18h</span>
          <span className="font-body text-xs text-muted-foreground">diariamente</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          A piscina da Villa é um convite ao descanso sem hora marcada. Um mergulho, uma leitura
          à beira d'água, o sol de Minas no rosto — cada hora ali passa de um jeito diferente.
        </p>
        <div className="rounded-lg border border-border/50 bg-background/40 px-4 py-3">
          <p className="font-body text-xs text-muted-foreground">
            <span className="font-semibold text-primary/70">Toalhas: </span>
            disponíveis mediante solicitação à equipe da Villa.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Academia",
    tag: "Bem-estar",
    content: (
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-lg font-medium text-primary">7h às 22h</span>
          <span className="font-body text-xs text-muted-foreground">diariamente</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          Para quem não abre mão do movimento mesmo em viagem. A academia da Villa está disponível
          com horário amplo — da manhã cedo até a noite.
        </p>
      </div>
    ),
  },
  {
    title: "Experiências especiais",
    tag: "Sob consulta",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          Para tornar a estadia ainda mais memorável, oferecemos experiências com agendamento:
        </p>
        <div className="space-y-2">
          {["Visita guiada aos ateliês de Bichinho", "Café especial com degustação de queijos mineiros", "Pôr do sol com mesa posta nos jardins", "Trilha guiada pela natureza ao redor"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-terracotta/60" />
              <p className="font-body text-sm text-earth">{item}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground">Consulte disponibilidade e valores pelo WhatsApp.</p>
      </div>
    ),
  },
];

const Experiencia = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageLayout title="Experiência na Villa" subtitle="Café, lazer & gastronomia" icon={<IconCup className="h-full w-full" />}>
      <div className="px-5 py-8 space-y-6">
        <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-6">
          <div className="mb-4 flex justify-center">
            <IconWave className="h-10 w-10 text-primary/30" />
          </div>
          <p className="text-center font-body text-sm leading-relaxed text-earth">
            A Villa foi projetada para ser vivida devagar. Cada espaço carrega uma intenção —
            de descanso, encontro ou contemplação. Explore sem pressa.
          </p>
        </div>
        <div className="animate-fade-up delay-100 divide-y divide-border/50 rounded-lg border border-border/60 overflow-hidden">
          {experiences.map(({ title, tag, content }, i) => {
            const isOpen = open === i;
            const panelId = `exp-panel-${i}`;
            return (
              <div key={title}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-4 bg-card/40 px-5 py-4 text-left transition-colors hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40 min-h-[3.5rem]"
                >
                  <div>
                    <p className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-terracotta/80 mb-0.5">{tag}</p>
                    <p className="font-body text-sm font-semibold text-primary">{title}</p>
                  </div>
                  <IconChevronDown className={`mt-1 h-4 w-4 shrink-0 text-primary/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-background/40 px-5 py-5">{content}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experiencia;
