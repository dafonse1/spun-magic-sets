import { motion } from "framer-motion";

const episodes = [
  { number: "012", title: "Late Night Frequencies", date: "Mar 2026", duration: "1:02:30" },
  { number: "011", title: "Warehouse Echoes", date: "Feb 2026", duration: "58:45" },
  { number: "010", title: "Sunset Sessions — Ibiza", date: "Jan 2026", duration: "1:15:20" },
  { number: "009", title: "Underground Movements", date: "Dec 2025", duration: "55:10" },
  { number: "008", title: "Midnight Groove", date: "Nov 2025", duration: "1:05:00" },
];

const PodcastSection = () => {
  return (
    <section className="py-24 px-4 bg-card/50" id="podcast">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-3 gradient-text">
            Dafonse Sessions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Monthly podcast — curated mixes, guest sets, and deep dives into electronic music.
          </p>
        </motion.div>

        <div className="space-y-0">
          {episodes.map((ep, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-4 md:gap-8 py-5 border-b border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <span className="font-heading text-primary text-2xl md:text-3xl font-bold opacity-40 group-hover:opacity-100 transition-opacity w-12 md:w-16 shrink-0">
                {ep.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate">
                  {ep.title}
                </h3>
                <p className="text-muted-foreground text-sm">{ep.date}</p>
              </div>
              <span className="text-xs text-muted-foreground font-heading shrink-0">
                {ep.duration}
              </span>
              {/* Play icon */}
              <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-all shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-muted-foreground group-hover:text-primary transition-colors ml-0.5">
                  <path d="M2 1l10 6-10 6V1z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
