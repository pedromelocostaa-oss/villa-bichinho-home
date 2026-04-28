import { PageLayout } from "@/components/PageLayout";
import { IconWhatsApp, IconExternal } from "@/components/Icons";

const WHATSAPP = "5532999364977";
const WHATSAPP_MESSAGE = "Olá, equipe da Vila Bichinho! Gostaria de uma orientação durante a minha estadia.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const topics = [
  { title: "Reservas & disponibilidade", desc: "Datas, tarifas e condições especiais" },
  { title: "Chegada & check-in", desc: "Horários, acesso e orientações de chegada" },
  { title: "Experiências na Villa", desc: "Café da manhã, banheira, áreas externas" },
  { title: "Guia de Bichinho", desc: "Ateliês, restaurantes e passeios recomendados" },
  { title: "Solicitações especiais", desc: "Arranjos, datas comemorativas, pedidos" },
];

const Concierge = () => (
  <PageLayout title="Concierge" subtitle="Atendimento personalizado" icon={<IconWhatsApp className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">

      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-6">
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/80 text-primary/50">
            <IconWhatsApp className="h-8 w-8" />
          </div>
        </div>
        <p className="text-center font-body text-sm leading-relaxed text-earth">
          Nossa equipe está disponível para tornar sua estadia ainda mais especial.
          Uma mensagem é suficiente — respondemos com atenção e sem pressa.
        </p>
      </div>

      <div className="animate-fade-up delay-100 rounded-lg border border-primary/25 bg-primary/5 px-6 py-6">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-1">
          Fale com a Villa
        </p>
        <p className="font-display text-2xl font-medium text-primary mb-1 leading-snug">
          Concierge via WhatsApp
        </p>
        <p className="font-body text-xs text-muted-foreground mb-5">
          Respondemos em até alguns minutos durante o horário de atendimento
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-5 py-3 font-body text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
        >
          <IconWhatsApp className="h-4 w-4" />
          Iniciar conversa
          <IconExternal className="h-3.5 w-3.5 opacity-60" />
        </a>
      </div>

      <div className="animate-fade-up delay-200">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">
          Como posso ajudar
        </p>
        <div className="divide-y divide-border/50 rounded-lg border border-border/60 overflow-hidden">
          {topics.map(({ title, desc }) => (
            <div key={title} className="bg-card/40 px-5 py-4">
              <p className="font-body text-sm font-semibold text-primary leading-tight">{title}</p>
              <p className="mt-0.5 font-body text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up delay-300 rounded-lg border border-border/40 bg-card/30 px-5 py-4">
        <p className="font-body text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-primary/70">Atendimento: </span>
          Das 8h às 21h. Para emergências fora desse horário, utilize os contatos de segurança
          disponíveis na página de Contato.
        </p>
      </div>

    </div>
  </PageLayout>
);

export default Concierge;
