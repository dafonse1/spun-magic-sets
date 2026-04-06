import { useState } from "react";
import { motion } from "framer-motion";

const bio = {
  en: {
    title: "About",
    text: `Dafonse is an electronic music DJ and producer known for blending deep house, tech house, and melodic techno into immersive sonic experiences. With roots in underground club culture, Dafonse has been moving dancefloors across Europe and beyond, delivering sets that balance raw energy with emotional depth.\n\nFrom intimate warehouse parties to major festival stages, every performance is a journey — crafted to connect, move, and inspire.`,
  },
  pt: {
    title: "Sobre",
    text: `Dafonse é um DJ e produtor de música eletrónica conhecido por misturar deep house, tech house e techno melódico em experiências sonoras imersivas. Com raízes na cultura underground dos clubes, Dafonse tem movido pistas de dança por toda a Europa e além, entregando sets que equilibram energia crua com profundidade emocional.\n\nDe festas íntimas em armazéns a grandes palcos de festivais, cada performance é uma viagem — criada para conectar, mover e inspirar.`,
  },
};

const BioSection = () => {
  const [lang, setLang] = useState<"en" | "pt">("en");

  return (
    <section className="py-24 px-4" id="bio">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl text-foreground"
          >
            {bio[lang].title}
          </motion.h2>

          <div className="flex gap-1 bg-muted rounded-md p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-heading tracking-wide rounded transition-colors ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`px-3 py-1.5 text-xs font-heading tracking-wide rounded transition-colors ${
                lang === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              PT
            </button>
          </div>
        </div>

        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {bio[lang].text.split("\n\n").map((p, i) => (
            <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
