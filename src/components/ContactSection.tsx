import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#", icon: "M7.8 2h8.4C19 2 22 5 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C5 22 2 19 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" },
  { name: "SoundCloud", href: "#", icon: "M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.5 0-1.24-.83-2.44-2.68-2.56a4.15 4.15 0 0 0-3.93-3.08c-.7 0-1.37.18-1.94.5V8.87a4.84 4.84 0 0 0-2.89 0M8.15 9.67V17M5.72 11.33V17M3.29 12.67V17M1 14.5V17" },
  { name: "Spotify", href: "#", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.5 14.5a.62.62 0 0 1-.85.21c-2.33-1.43-5.26-1.75-8.72-.96a.62.62 0 1 1-.28-1.21c3.79-.87 7.04-.49 9.64 1.11.3.17.39.55.21.85m1.2-2.74a.78.78 0 0 1-1.07.26c-2.67-1.64-6.74-2.11-9.9-1.16a.78.78 0 1 1-.45-1.49c3.6-1.09 8.08-.56 11.16 1.32.36.22.48.7.26 1.07m.1-2.85C14.5 8.85 8.63 8.63 5.22 9.64a.93.93 0 1 1-.54-1.78c3.91-1.16 10.41-.94 14.52 1.34a.93.93 0 0 1-.39 1.71" },
  { name: "TikTok", href: "#", icon: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.59-1.16-2.59-2.59s1.16-2.59 2.59-2.59c.28 0 .54.04.79.13v-3.13a5.72 5.72 0 0 0-.79-.06 5.72 5.72 0 0 0-5.72 5.72 5.72 5.72 0 0 0 5.72 5.72c3.16 0 5.72-2.56 5.72-5.72V9.41a7.28 7.28 0 0 0 4.28 1.38V7.7a4.28 4.28 0 0 1-3.27-1.88" },
  { name: "YouTube", href: "#", icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

const ContactSection = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg mb-10 max-w-md mx-auto"
        >
          For bookings, collabs, or just to say hey.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#fff] font-heading font-bold tracking-wide text-base px-8 py-4 rounded-lg transition-colors mb-12"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.41-1.49 9.06 9.06 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1.04 2.49c0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34m-5.44 7.43h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.89 9.89 0 0 1 9.9 9.9c-.01 5.45-4.45 9.88-9.9 9.88m8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.46 0 .11 5.34.11 11.92a11.86 11.86 0 0 0 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.73 1.46c6.58 0 11.93-5.34 11.94-11.92a11.83 11.83 0 0 0-3.53-8.38" />
          </svg>
          WhatsApp
        </motion.a>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-5 flex-wrap"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground group-hover:text-primary transition-colors"
              >
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
