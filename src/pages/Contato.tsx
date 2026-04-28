import { PageLayout } from "@/components/PageLayout";
import { IconPhone, IconExternal } from "@/components/Icons";

const WHATSAPP = "5532999364977";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

const contacts = [
  {
    label: "WhatsApp principal",
    value: "+55 (32) 99936-4977",
    desc: "Para dúvidas, pedidos e suporte durante a estadia",
    url: WHATSAPP_URL,
    cta: "Abrir conversa",
    primary: true,
  },
  {
    label: "E-mail",
    value: "villabichinho@gmail.com",
    desc: "Para reservas e informações gerais",
    url: "mailto:villabichinho@gmail.com",
    cta: "Enviar e-mail",
    primary: false,
  },
];

const faqs = [
  { question: "Posso fazer check-in antes das 14h?", answer: "Sim, mediante disponibilidade. Entre em contato pelo WhatsApp com antecedência." },
  { question: "Há estacionamento na Villa?", answer: "Sim, temos área de estacionamento privativa para hóspedes." },
  { question: "O café da manhã está incluso na diária?", answer: "Sim, o café da manhã completo é cortesia para todos os hóspedes." },
  { question: "A Villa aceita pets?", answer: "Aceitamos animais de estimação com consulta prévia. Fale conosco antes de reservar." },
];

const Contato = () => (
  <PageLayout title="Contato" subtitle="Estamos aqui para você" icon={<IconPhone className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">
      <div className="animate-fade-up rounded-lg border border-border/60 bg-card/50 px-6 py-5">
        <p className="font-body text-sm leading-relaxed text-earth">
          Nossa equipe está disponível para atendê-lo durante toda a estadia.
          Para qualquer necessidade — pequena ou urgente — não hesite em nos contatar.
        </p>
      </div>
      <div className="animate-fade-up delay-100 space-y-3">
        {contacts.map(({ label, value, desc, url, cta, primary }) => (
          <div key={label} className={`rounded-lg border px-5 py-5 ${primary ? "border-primary/25 bg-primary/5" : "border-border/60 bg-card/40"}`}>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-1">{label}</p>
            <p className="font-display text-lg font-medium text-primary mb-1">{value}</p>
            <p className="font-body text-xs text-muted-foreground mb-4">{desc}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-body text-xs font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${
                primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border/60 bg-background/60 text-primary hover:bg-sand"
              }`}
            >
              {cta}
              <IconExternal className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        ))}
      </div>
      <div className="animate-fade-up delay-200 rounded-lg border border-red-200/60 bg-red-50/30 px-5 py-5">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600/70 mb-2">Emergências</p>
        <p className="font-body text-sm leading-relaxed text-earth mb-3">Em caso de emergência médica ou situação urgente:</p>
        <div className="space-y-1.5">
          {[{ label: "SAMU", number: "192" }, { label: "Bombeiros", number: "193" }, { label: "Polícia Militar", number: "190" }].map(({ label, number }) => (
            <a key={label} href={`tel:${number}`} className="flex items-center justify-between rounded border border-red-200/40 bg-background/60 px-3 py-2 transition-colors hover:bg-red-50/40">
              <span className="font-body text-sm text-earth">{label}</span>
              <span className="font-display text-base font-medium text-primary">{number}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="animate-fade-up delay-300">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">Dúvidas frequentes</p>
        <div className="space-y-2">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="rounded-lg border border-border/50 bg-card/30 px-5 py-4">
              <p className="font-body text-sm font-semibold text-primary mb-1">{question}</p>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Contato;
