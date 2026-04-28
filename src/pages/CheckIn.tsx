import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { IconKey, IconChevronDown } from "@/components/Icons";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

const AccordionSection = ({ items }: { items: AccordionItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border/50 rounded-lg border border-border/60 overflow-hidden">
      {items.map(({ title, content }, i) => (
        <div key={title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 bg-card/40 px-5 py-4 text-left transition-colors hover:bg-card/70"
          >
            <span className="font-body text-sm font-semibold text-primary">{title}</span>
            <IconChevronDown className={`h-4 w-4 shrink-0 text-primary/50 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-background/40 px-5 py-5">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const checkInItems: AccordionItem[] = [
  {
    title: "Horário de check-in",
    content: (
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-2xl font-medium text-primary">14h00</span>
          <span className="font-body text-xs text-muted-foreground">em diante</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          Para chegadas antes das 14h, entre em contato conosco via WhatsApp. Faremos o possível
          para acomodar seu horário com a maior antecedência disponível.
        </p>
      </div>
    ),
  },
  {
    title: "Chegada & recepção",
    content: (
      <div className="space-y-3">
        {[
          "Entre em contato pelo WhatsApp para confirmar horário de chegada",
          "Estaremos presentes para recebê-lo pessoalmente",
          "Apresentaremos os espaços e tiraremos suas dúvidas com calma",
          "Chaves e instruções do quarto serão entregues na recepção",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
              <span className="font-body text-[10px] font-bold text-primary">{i + 1}</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-earth">{step}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "O que trazer",
    content: (
      <div className="space-y-2">
        {[
          "Documento de identidade (RG ou CNH)",
          "Comprovante de reserva (e-mail ou confirmação)",
          "Roupas confortáveis para caminhar pela natureza",
          "Protetor solar e repelente para passeios ao ar livre",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
            <p className="font-body text-sm leading-relaxed text-earth">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const checkOutItems: AccordionItem[] = [
  {
    title: "Horário de check-out",
    content: (
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2">
          <span className="font-display text-2xl font-medium text-primary">11h00</span>
          <span className="font-body text-xs text-muted-foreground">horário limite</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-earth">
          Late check-out pode ser solicitado com antecedência, sujeito à disponibilidade.
          Consulte nossa equipe pelo WhatsApp.
        </p>
      </div>
    ),
  },
  {
    title: "Procedimento de saída",
    content: (
      <div className="space-y-3">
        {[
          "Deixe as chaves na recepção ou no local indicado pela equipe",
          "Confira se não esqueceu pertences pessoais no quarto",
          "Avisamos com antecedência sobre a hora de partida",
          "Bagagens podem ser guardadas até o horário de saída",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
              <span className="font-body text-[10px] font-bold text-primary">{i + 1}</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-earth">{step}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const CheckIn = () => (
  <PageLayout title="Check-in & Check-out" subtitle="Tudo sobre sua chegada e saída" icon={<IconKey className="h-full w-full" />}>
    <div className="px-5 py-8 space-y-6">
      <div className="animate-fade-up">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">Chegada</p>
        <AccordionSection items={checkInItems} />
      </div>
      <div className="animate-fade-up delay-100">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50 mb-3 px-1">Partida</p>
        <AccordionSection items={checkOutItems} />
      </div>
      <div className="animate-fade-up delay-200 rounded-lg border border-primary/15 bg-primary/5 px-5 py-5">
        <p className="font-body text-xs font-semibold text-primary mb-2">Uma observação</p>
        <p className="font-body text-sm leading-relaxed text-earth">
          Na Villa Bichinho, a recepção é feita com presença e cuidado. Não temos balcão de check-in
          automático — há sempre alguém disponível para recebê-lo da melhor forma.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default CheckIn;
