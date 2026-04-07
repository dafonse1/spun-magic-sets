import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

const episodes = [
  { number: "012", title: "Frequências da Madrugada", date: "Mar 2026", duration: "1:02:30" },
  { number: "011", title: "Ecos do Armazém", date: "Fev 2026", duration: "58:45" },
  { number: "010", title: "Sessões ao Pôr do Sol — Ibiza", date: "Jan 2026", duration: "1:15:20" },
  { number: "009", title: "Movimentos Underground", date: "Dez 2025", duration: "55:10" },
  { number: "008", title: "Groove da Meia-Noite", date: "Nov 2025", duration: "1:05:00" },
];

const PodcastSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="podcast">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-5 h-5 text-primary/60" />
            <span className="font-heading text-xs tracking-[0.3em] text-primary/60 uppercase">Podcast Mensal</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-6xl gradient-text mb-4">
            Dafonse Sessions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg">
            Mixes selecionadas, sets convidados e mergulhos profundos na música eletrónica.
          </p>
        </motion.div>

        <div className="space-y-0">
          {episodes.map((ep, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex items-center gap-4 md:gap-6 py-5 border-b border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <span className="font-heading text-primary text-2xl md:text-3xl font-bold opacity-30 group-hover:opacity-100 transition-all duration-300 w-12 md:w-14 shrink-0 tabular-nums">
                {ep.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate">
                  {ep.title}
                </h3>
                <p className="text-muted-foreground text-sm">{ep.date}</p>
              </div>
              <span className="text-xs text-muted-foreground font-heading shrink-0 hidden sm:block">
                {ep.duration}
              </span>
              <div className="w-10 h-10 rounded-full border border-border/50 group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 shrink-0 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor" className="text-muted-foreground group-hover:text-primary transition-colors ml-0.5">
                  <path d="M2 1l10 6-10 6V1z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
};

export default PodcastSection;
