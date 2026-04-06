import { motion } from "framer-motion";

const tracks = [
  { title: "Midnight Protocol", type: "Single", year: "2026", duration: "6:42" },
  { title: "Fractured Light EP", type: "EP", year: "2025", duration: "28:15" },
  { title: "Deep Signal", type: "Single", year: "2025", duration: "7:03" },
  { title: "Concrete Dreams", type: "Album", year: "2024", duration: "52:30" },
];

const MusicSection = () => {
  return (
    <section className="py-24 px-4" id="music">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl mb-16 text-glow-magenta text-secondary"
        >
          Music
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-secondary/40 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-heading text-secondary tracking-widest uppercase">
                  {track.type}
                </span>
                <span className="text-xs text-muted-foreground">{track.year}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors mb-2">
                {track.title}
              </h3>
              <p className="text-muted-foreground text-sm">{track.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
