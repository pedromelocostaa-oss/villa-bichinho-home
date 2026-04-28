import { PageLayout } from "@/components/PageLayout";
import { IconLeaf } from "@/components/Icons";

const values = [
  { word: "Desaceleração", desc: "O tempo aqui tem outro ritmo. Permita-se descansar." },
  { word: "Natureza", desc: "Cada detalhe foi construído em diálogo com a paisagem ao redor." },
  { word: "Artesania", desc: "Móveis, objetos e texturas com história e mãos por trás." },
  { word: "Acolhimento", desc: "Uma hospitalidade simples, genuína e sem protocolo." },
  { word: "Contemplação", desc: "Espaços pensados para observar, sentir e estar presente." },
];

const BemVindo = () => (
  <PageLayout
    title="Bem-vindo"
    subtitle="Manifesto da Villa"
    icon={<IconLeaf className="h-full w-full" />}
  >
    <div className="px-5 py-8 space-y-8">

      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-8">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-terracotta mb-4">
          Uma carta para você
        </p>
        <h2 className="font-display text-3xl font-medium text-primary leading-snug mb-5">
          Bem-vindo à Villa Bichinho.
        </h2>
        <p className="font-body text-sm leading-relaxed text-earth mb-4">
          Um lugar para desacelerar, respirar fundo e se reconectar com o tempo das coisas simples.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth mb-4">
          Entre a natureza, o silêncio e a beleza dos detalhes, cada espaço foi pensado para ser
          vivido com calma — os jardins que pedem passeio sem pressa, as manhãs que chegam com
          o canto dos pássaros, as noites que revelam estrelas que a cidade escondeu.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Este guia reúne tudo para que sua estadia seja leve, intuitiva e ainda mais especial.
          Mas não sinta pressa para lê-lo — aqui, o tempo é outro.
        </p>
      </div>

      <div className="animate-fade-up delay-100">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-4 px-1">
          O que nos move
        </p>
        <div className="space-y-2">
          {values.map(({ word, desc }) => (
            <div
              key={word}
              className="flex gap-4 rounded-lg border border-border/50 bg-card/40 px-5 py-4"
            >
              <div className="mt-0.5 h-5 w-5 shrink-0 text-primary/40">
                <IconLeaf className="h-full w-full" />
              </div>
              <div>
                <p className="font-display text-base font-medium text-primary leading-none mb-1">
                  {word}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up delay-400 rounded-lg border border-primary/15 bg-primary/5 px-6 py-6">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3">
          Sobre Bichinho
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Bichinho é um distrito de Prados, em Minas Gerais, conhecido por seus ateliês de arte,
          artesanato em pedra-sabão e uma tranquilidade que o mundo moderno esqueceu de alcançar.
          Cada esquina guarda uma história. Cada janela, uma alma.
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-earth">
          A Villa nasceu aqui exatamente por isso — para ser parte desse lugar, não apenas estar nele.
        </p>
      </div>

      <div className="animate-fade-up delay-500 text-center py-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-border" />
          <IconLeaf className="h-5 w-5 text-primary/30" />
          <div className="h-px w-12 bg-border" />
        </div>
        <p className="font-display text-lg italic text-primary/50">
          "Que sua estadia seja boa."
        </p>
      </div>

    </div>
  </PageLayout>
);

export default BemVindo;
