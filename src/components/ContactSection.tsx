import { motion } from "framer-motion";
import mailIcon from "@/assets/icons/mail.png";
import contactoTitle from "@/assets/titles/contacto.png";

const ContactSection = () => {
  return (
    <section className="relative py-28 px-4 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-8"
        >
          <img src={mailIcon} alt="" className="w-7 h-7" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <img src={contactoTitle} alt="Contacto" className="h-14 md:h-20 w-auto mx-auto" loading="lazy" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg mb-12 max-w-md mx-auto"
        >
          Para bookings, colaborações ou apenas para dizer olá.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#fff] font-heading font-bold tracking-wide text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.41-1.49 9.06 9.06 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1.04 2.49c0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34m-5.44 7.43h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.89 9.89 0 0 1 9.9 9.9c-.01 5.45-4.45 9.88-9.9 9.88m8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.46 0 .11 5.34.11 11.92a11.86 11.86 0 0 0 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.73 1.46c6.58 0 11.93-5.34 11.94-11.92a11.83 11.83 0 0 0-3.53-8.38" />
            </svg>
            WhatsApp
          </a>

          <a
            href="mailto:booking@dafonse.com"
            className="group inline-flex items-center justify-center gap-3 border border-primary/30 hover:border-primary text-primary font-heading font-bold tracking-wide text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
          >
            <img src={mailIcon} alt="" className="w-4 h-4" />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
