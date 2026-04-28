import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { IconCup, IconChevronDown, IconWave } from "@/components/Icons";

const experiences = [
  {
    title: "Café da manhã",
    tag: "Manhãs na Villa",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          O café da manhã é servido entre <strong className="text-primary">7h30 e 10h</strong>, na
          varanda ou na sala de jantar, conforme a preferência e o clima.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Cada manhã começa com produtos frescos e regionais: pão artesanal, queijo mineiro,
          frutas da estação, bolos caseiros, geleias e café coado na hora.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Restrições alimentares? Nos avise com antecedência pelo WhatsApp — adoramos adaptar.
        </p>
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
    title: "Sala de estar & biblioteca",
    tag: "Espaços internos",
    content: (
      <div className="space-y-3">
        <p className="font-body text-sm leading-relaxed text-earth">
          A sala de estar é um convite à lentidão — com livros selecionados, discos de vinil,
          jogos de mesa e uma lareira para as noites frias de Minas.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Nossa pequena biblioteca tem títulos de arte, literatura brasileira, botânica e viagem.
          Sinta-se em casa para folhear à vontade.
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
    <PageLayout title="Experiência na Villa" subtitle="Café, áreas & vivências" icon={<IconCup className="h-full w-full" />}>
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
          {experiences.map(({ title, tag, content }, i) => (
            <div key={title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 bg-card/40 px-5 py-4 text-left transition-colors hover:bg-card/70"
              >
                <div>
                  <p className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-terracotta/80 mb-0.5">{tag}</p>
                  <p className="font-body text-sm font-semibold text-primary">{title}</p>
                </div>
                <IconChevronDown className={`mt-1 h-4 w-4 shrink-0 text-primary/50 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-background/40 px-5 py-5">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experiencia;
