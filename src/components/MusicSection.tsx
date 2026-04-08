import { motion } from "framer-motion";
import playIcon from "@/assets/icons/play.png";
import externalLinkIcon from "@/assets/icons/external-link.png";
import faixasTitle from "@/assets/titles/faixas-djsets.png";
import remixesTitle from "@/assets/titles/remixes.png";

const originals = [
  { title: "Midnight Protocol", type: "Single", year: "2026", duration: "6:42" },
  { title: "Fractured Light", type: "EP", year: "2025", duration: "28:15" },
  { title: "Deep Signal", type: "Single", year: "2025", duration: "7:03" },
  { title: "Concrete Dreams", type: "Álbum", year: "2024", duration: "52:30" },
];

const remixes = [
  { title: "Shadows (Dafonse Remix)", artist: "Original de Artbat", year: "2026" },
  { title: "Lost Frequencies (Dafonse Remix)", artist: "Original de Kölsch", year: "2025" },
  { title: "Night Drive (Dafonse Remix)", artist: "Original de Adriatique", year: "2025" },
];

const MusicSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="music">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Originals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-primary/60 uppercase">Discografia</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <img src={faixasTitle} alt="FAIXAS E DJ SETS" className="h-16 md:h-24 w-auto" loading="lazy" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {originals.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-xl p-6 hover:glow-border-cyan transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-heading text-primary tracking-[0.2em] uppercase px-2 py-1 rounded-full border border-primary/20 bg-primary/5">
                  {track.type}
                </span>
                <span className="text-xs text-muted-foreground">{track.year}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                {track.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">{track.duration}</p>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <img src={playIcon} alt="Play" className="w-4 h-4 ml-0.5" loading="lazy" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remixes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-secondary/60 uppercase">Reworked</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <img src={remixesTitle} alt="Remixes" className="h-12 md:h-16 w-auto" loading="lazy" />
        </motion.div>

        <div className="space-y-0">
          {remixes.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between py-5 border-b border-border/50 hover:border-secondary/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-secondary group-hover:bg-secondary/10 flex items-center justify-center transition-all duration-300 shrink-0">
                  <img src={externalLinkIcon} alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-secondary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{track.artist}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-heading">{track.year}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-4xl mx-auto" />
    </section>
  );
};

export default MusicSection;
