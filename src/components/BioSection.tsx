import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sobreTitle from "@/assets/titles/sobre.png";

const bio = {
  pt: {
    paragraphs: [
      "Dafonse é um DJ e produtor de música eletrónica conhecido por misturar deep house, tech house e techno melódico em experiências sonoras imersivas. Com raízes na cultura underground dos clubes, Dafonse tem movido pistas de dança por toda a Europa e além, entregando sets que equilibram energia crua com profundidade emocional.",
      "De festas íntimas em armazéns a grandes palcos de festivais, cada performance é uma viagem — criada para conectar, mover e inspirar.",
    ],
  },
  en: {
    paragraphs: [
      "Dafonse is an electronic music DJ and producer known for blending deep house, tech house, and melodic techno into immersive sonic experiences. With roots in underground club culture, Dafonse has been moving dancefloors across Europe and beyond, delivering sets that balance raw energy with emotional depth.",
      "From intimate warehouse parties to major festival stages, every performance is a journey — crafted to connect, move, and inspire.",
    ],
  },
};

const tabs = [
  { key: "pt" as const, label: "PT", flag: "🇵🇹" },
  { key: "en" as const, label: "EN", flag: "🇬🇧" },
];

const BioSection = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  return (
    <section className="relative py-20 px-5 overflow-hidden" id="bio">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <img src={sobreTitle} alt="Sobre" className="h-10 md:h-14 w-auto" loading="lazy" />
        </motion.div>

        {/* Tab bar */}
        <div className="flex mb-10 glass rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setLang(tab.key)}
              className={`relative flex-1 py-3.5 text-center font-heading text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                lang === tab.key
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-base">{tab.flag}</span>
              {tab.label}
              {lang === tab.key && (
                <motion.div
                  layoutId="bio-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bio text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {bio[lang].paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-foreground/80 text-[1.05rem] md:text-lg leading-[1.9] mb-7 last:mb-0"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="section-divider mt-20 max-w-4xl mx-auto" />
    </section>
  );
};

export default BioSection;
