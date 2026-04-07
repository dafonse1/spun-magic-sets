import { useState } from "react";
import { motion } from "framer-motion";

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
  { key: "en" as const, label: "EN" },
  { key: "pt" as const, label: "PT" },
];

const BioSection = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  return (
    <section className="py-16 px-5" id="bio">
      <div className="max-w-2xl mx-auto">
        {/* Tab bar */}
        <div className="flex border-b border-border mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setLang(tab.key)}
              className={`relative flex-1 py-3 text-center font-heading text-base tracking-wide transition-colors ${
                lang === tab.key
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {lang === tab.key && (
                <motion.div
                  layoutId="bio-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Bio text */}
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {bio[lang].paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-foreground/90 text-[1.05rem] md:text-lg leading-[1.85] mb-8 last:mb-0"
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
