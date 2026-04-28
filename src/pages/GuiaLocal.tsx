import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { IconCompass } from "@/components/Icons";

type Category = "todos" | "comer" | "atelies" | "passeios";

const places: { name: string; category: Category; tag: string; desc: string; tip: string }[] = [
  { name: "Bistrô do Vale", category: "comer", tag: "Restaurante", desc: "Culinária mineira contemporânea com ingredientes da região. Ambiente charmoso no centro histórico de Bichinho.", tip: "Reserve mesa para o jantar — costuma lotar nos fins de semana." },
  { name: "Café das Pedras", category: "comer", tag: "Café", desc: "Café especial, bolos artesanais e brunch. O lugar perfeito para começar a manhã sem pressa.", tip: "O cappuccino com canela e o pão de queijo recém-saído do forno são imperdíveis." },
  { name: "Doceria da Marta", category: "comer", tag: "Doceria", desc: "Doces mineiros tradicionais feitos à mão: goiabada, doce de leite, cocadas e muito mais.", tip: "Leve algo de presente. Funciona também como bela lembrança de viagem." },
  { name: "Ateliê das Formas", category: "atelies", tag: "Cerâmica", desc: "Peças únicas em pedra-sabão e cerâmica. Um dos ateliês mais bonitos de Bichinho, com trabalhos que dialogam com a paisagem.", tip: "Pergunte se há aula ou demonstração disponível durante sua visita." },
  { name: "Galeria do Campo", category: "atelies", tag: "Arte & Escultura", desc: "Esculturas, gravuras e pinturas de artistas locais e convidados. Uma galeria pequena, curada com cuidado.", tip: "As peças têm certificado de autenticidade. Boa escolha para colecionadores." },
  { name: "Ateliê Linhas Vivas", category: "atelies", tag: "Têxtil & Bordado", desc: "Bordados, tapeçarias e tecidos artesanais produzidos por artesãs locais. Um patrimônio vivo da cultura mineira.", tip: "Aberto somente nas manhãs. Chegue cedo para conversar com as bordadeiras." },
  { name: "Trilha da Serra Verde", category: "passeios", tag: "Natureza", desc: "Trilha moderada com vista privilegiada do vale. Cerca de 2h de caminhada. Imperdível ao entardecer.", tip: "Leve água, protetor solar e calçado fechado. A vista lá de cima compensa tudo." },
  { name: "Cachoeira do Ribeirão", category: "passeios", tag: "Passeio", desc: "Cachoeira de beleza natural a 15 min de carro da Villa. Perfeita para um banho de rio refrescante.", tip: "Consulte a equipe da Villa sobre as condições do trajeto antes de ir." },
  { name: "Prados & Tiradentes", category: "passeios", tag: "Cidades históricas", desc: "A 20 min de carro, Tiradentes é patrimônio histórico com arquitetura colonial, museus e gastronomia refinada.", tip: "Reserve um dia inteiro para Tiradentes — há muito para explorar com calma." },
];

const categories: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "comer", label: "Comer & Beber" },
  { key: "atelies", label: "Ateliês" },
  { key: "passeios", label: "Passeios" },
];

const GuiaLocal = () => {
  const [active, setActive] = useState<Category>("todos");
  const filtered = active === "todos" ? places : places.filter((p) => p.category === active);

  return (
    <PageLayout title="Guia Local" subtitle="O melhor de Bichinho" icon={<IconCompass className="h-full w-full" />}>
      <div className="px-5 py-8 space-y-6">
        <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-5">
          <p className="font-body text-sm leading-relaxed text-earth">
            Bichinho é pequeno, mas intenso. Cada estabelecimento aqui foi escolhido pela equipe
            da Villa — lugares que honram a identidade do lugar e que valem muito a visita.
          </p>
        </div>
        <div className="animate-fade-up delay-100 flex gap-2 overflow-x-auto pb-1">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`shrink-0 rounded-full border px-4 py-2 font-body text-xs font-semibold transition-all duration-200 ${
                active === key
                  ? "border-primary/30 bg-primary text-primary-foreground"
                  : "border-border/60 bg-card/40 text-muted-foreground hover:border-primary/20 hover:bg-card hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="animate-fade-up delay-200 space-y-3">
          {filtered.map(({ name, tag, desc, tip }) => (
            <div key={name} className="rounded-lg border border-border/50 bg-card/40 px-5 py-4 transition-all duration-200 hover:border-primary/20 hover:bg-card/60">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-base font-medium text-primary leading-tight">{name}</h3>
                <span className="shrink-0 rounded-full border border-border/50 bg-background/60 px-2.5 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{tag}</span>
              </div>
              <p className="font-body text-xs leading-relaxed text-earth mb-3">{desc}</p>
              <div className="rounded border border-border/40 bg-background/30 px-3 py-2">
                <p className="font-body text-[11px] leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary/60">Dica: </span>{tip}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-fade-up delay-300 rounded-lg border border-primary/10 bg-primary/5 px-5 py-4">
          <p className="font-body text-xs leading-relaxed text-earth">
            <span className="font-semibold text-primary/70">Quer uma indicação personalizada? </span>
            A equipe da Villa conhece cada canto de Bichinho e adora ajudar com sugestões
            de acordo com o seu estilo. Nos chame no WhatsApp.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default GuiaLocal;
