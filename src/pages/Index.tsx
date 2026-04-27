import villaBichinhoLogo from "@/assets/villa-bichinho-logo.svg";

const highlights = ["Hospedagem acolhedora", "Natureza ao redor", "Experiência local"];

const VillaLogo = () => (
  <div className="group relative mx-auto flex aspect-square w-52 items-center justify-center rounded-full border border-primary/25 bg-linen p-3 shadow-botanical transition-transform duration-500 hover:-translate-y-1 sm:w-72">
    <div className="absolute -left-5 top-12 h-16 w-8 rounded-full border border-olive-soft/50 animate-slow-drift" />
    <div className="absolute -right-4 bottom-14 h-14 w-7 rounded-full border border-terracotta/45 animate-slow-drift" />
    <img src={villaBichinhoLogo} alt="Logo Villa Bichinho" className="relative h-full w-full object-contain" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-hero-villa text-foreground">
      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-10">
        <div className="absolute left-0 top-0 h-full w-full opacity-45 [background-image:linear-gradient(hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-primary/10" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-terracotta/15" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center md:text-left">
            <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.32em] text-terracotta">Refúgio de charme</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] text-primary sm:text-7xl lg:text-8xl">
              Villa Bichinho
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-earth md:mx-0">
              Um lugar de pausa, natureza e hospitalidade simples para sentir o tempo passar com mais calma.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-y-8 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative border border-primary/15 bg-card/70 px-6 py-10 shadow-botanical backdrop-blur-sm sm:px-12 sm:py-14">
              <VillaLogo />
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="border border-primary/15 bg-background/55 p-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-primary transition-colors duration-300 hover:bg-linen">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/15 px-6 py-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-primary/70">
        Villa Bichinho · Estadia com alma mineira
      </footer>
    </main>
  );
};

export default Index;
