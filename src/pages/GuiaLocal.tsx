import { PageLayout } from "@/components/PageLayout";
import { IconCompass } from "@/components/Icons";

type MomentKey = "almoco" | "doce" | "jantar";

const favorites: {
  name: string;
  moment: MomentKey;
  desc: string;
  special: string;
  occasion: string;
}[] = [
  {
    name: "Tempero da Ângela",
    moment: "almoco",
    desc: "A cozinha da Ângela é um elogio à tradição. Frango com quiabo, tutu de feijão, lombo com molho de laranja — receitas que chegam à mesa como uma carta de amor ao interior mineiro.",
    special: "Cada prato tem história e tem afeto. O tipo de almoço que faz você desacelerar de verdade.",
    occasion: "Almoço de domingo, sem pressa",
  },
  {
    name: "Gelados da Vila",
    moment: "doce",
    desc: "Sorvetes artesanais com sabores que traduzem o lugar: cajá, jabuticaba, doce de leite com rapadura e surpresas de temporada que mudam conforme o quintal.",
    special: "Pequeno, inventivo e irresistível. O tipo de parada que vira ritual.",
    occasion: "Pausa da tarde, sempre",
  },
  {
    name: "Tragaluz",
    moment: "jantar",
    desc: "Uma das mesas mais bonitas da região. Cozinha contemporânea que dialoga com a tradição mineira, em ambiente com luz filtrada, pedra e madeira — sofisticação sem esforço.",
    special: "A carta de vinhos é cuidada e os pratos chegam com detalhes que contam histórias.",
    occasion: "Jantar especial ou almoço comemorativo",
  },
  {
    name: "Pacco & Bacco",
    moment: "jantar",
    desc: "Italiana de alma no coração de Tiradentes. Massas frescas, crostini e risotos que lembram uma trattoria do interior da Itália — com ingredientes do cerrado mineiro.",
    special: "A conversa entre os sabores italianos e o terroir local é surpreendente.",
    occasion: "Jantar romântico ou encontro entre amigos",
  },
  {
    name: "Via Destra",
    moment: "jantar",
    desc: "Ambiente refinado com culinária italiana e carta de vinhos selecionada. Um dos endereços mais queridos de Tiradentes para quem aprecia uma boa mesa.",
    special: "O serviço atencioso faz a experiência durar mais do que a refeição.",
    occasion: "Noite especial em Tiradentes",
  },
  {
    name: "Viradas do Largo",
    moment: "jantar",
    desc: "Patrimônio gastronômico de Tiradentes. Numa das esquinas mais bonitas da cidade colonial, celebra a cozinha mineira com apuro contemporâneo e vista para a praça.",
    special: "Arquitetura colonial, pratos que celebram Minas com elegância e uma atmosfera inigualável.",
    occasion: "Jantar inesquecível em Tiradentes",
  },
];

const moments: { key: MomentKey; label: string }[] = [
  { key: "almoco", label: "para almoço sem pressa" },
  { key: "doce", label: "para uma pausa doce" },
  { key: "jantar", label: "para jantar especial" },
];

const FavCard = ({ name, desc, special, occasion }: (typeof favorites)[0]) => (
  <div className="rounded-lg border border-border/50 bg-card/40 px-5 py-5 transition-all duration-200 hover:border-primary/20 hover:bg-card/60">
    <h3 className="font-display text-lg font-medium text-primary leading-tight mb-2">{name}</h3>
    <p className="font-body text-sm leading-relaxed text-earth mb-3">{desc}</p>
    <p className="font-body text-xs leading-relaxed text-muted-foreground mb-3 italic">
      {special}
    </p>
    <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1">
      <div className="h-1 w-1 rounded-full bg-primary/30" />
      <span className="font-body text-[10px] font-medium text-primary/60 tracking-wide">{occasion}</span>
    </div>
  </div>
);

const FavoritosVila = () => (
  <PageLayout title="Favoritos da Vila" subtitle="Curadoria dos anfitriões" icon={<IconCompass className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-8">

      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-6">
        <p className="font-display text-xl font-medium text-primary leading-snug mb-3">
          Uma curadoria com afeto.
        </p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Estes são os nossos lugares favoritos — os que indicamos com convicção, os que voltamos
          sempre que podemos. Pequena lista, muita personalidade.
        </p>
      </div>

      {moments.map(({ key, label }, i) => {
        const items = favorites.filter((f) => f.moment === key);
        return (
          <div key={key} className={`animate-fade-up delay-${(i + 1) * 100}`}>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">
              {label}
            </p>
            <div className="space-y-3">
              {items.map((fav) => <FavCard key={fav.name} {...fav} />)}
            </div>
          </div>
        );
      })}

      <div className="animate-fade-up delay-400 rounded-lg border border-primary/10 bg-primary/5 px-5 py-5">
        <p className="font-display text-base font-medium text-primary mb-2">Quer uma sugestão personalizada?</p>
        <p className="font-body text-sm leading-relaxed text-earth">
          A equipe da Vila conhece cada canto de Bichinho e adora indicar de acordo com o seu
          momento. Uma mensagem no WhatsApp resolve.
        </p>
      </div>

    </div>
  </PageLayout>
);

export default FavoritosVila;
