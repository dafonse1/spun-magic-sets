import { motion } from "framer-motion";

const remixes = [
  { title: "Shadows (Dafonse Remix)", artist: "Original by Artbat", year: "2026" },
  { title: "Lost Frequencies (Dafonse Remix)", artist: "Original by Kölsch", year: "2025" },
  { title: "Night Drive (Dafonse Remix)", artist: "Original by Adriatique", year: "2025" },
];

const originals = [
  { title: "Midnight Protocol", type: "Single", year: "2026", duration: "6:42" },
  { title: "Fractured Light", type: "EP", year: "2025", duration: "28:15" },
  { title: "Deep Signal", type: "Single", year: "2025", duration: "7:03" },
  { title: "Concrete Dreams", type: "Album", year: "2024", duration: "52:30" },
];

const MusicSection = () => {
  return (
    <section className="py-24 px-4" id="music">
      <div className="max-w-4xl mx-auto">
        {/* Originals */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl mb-12 text-primary text-glow-cyan"
        >
          Originals
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {originals.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-heading text-primary tracking-widest uppercase">
                  {track.type}
                </span>
                <span className="text-xs text-muted-foreground">{track.year}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                {track.title}
              </h3>
              <p className="text-muted-foreground text-sm">{track.duration}</p>
            </motion.div>
          ))}
        </div>

        {/* Remixes */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl mb-12 text-secondary text-glow-magenta"
        >
          Remixes
        </motion.h2>

        <div className="space-y-0">
          {remixes.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between py-5 border-b border-border hover:border-secondary/40 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-secondary transition-colors">
                  {track.title}
                </h3>
                <p className="text-muted-foreground text-sm">{track.artist}</p>
              </div>
              <span className="text-xs text-muted-foreground font-heading">{track.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
