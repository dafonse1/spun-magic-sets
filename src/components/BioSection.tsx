import { motion } from "framer-motion";

const BioSection = () => {
  return (
    <section className="py-24 px-4" id="bio">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-12"
        >
          Sobre
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            Dafonse é um DJ e produtor de música eletrónica conhecido por misturar deep house, tech house e techno melódico em experiências sonoras imersivas. Com raízes na cultura underground dos clubes, Dafonse tem movido pistas de dança por toda a Europa e além, entregando sets que equilibram energia crua com profundidade emocional.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            De festas íntimas em armazéns a grandes palcos de festivais, cada performance é uma viagem — criada para conectar, mover e inspirar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
