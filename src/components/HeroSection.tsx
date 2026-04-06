import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Music, Play, Mail, ChevronDown } from "lucide-react";

const socials = [
  { name: "Instagram", href: "#", icon: "M7.8 2h8.4C19 2 22 5 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C5 22 2 19 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" },
  { name: "SoundCloud", href: "#", icon: "M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.5 0-1.24-.83-2.44-2.68-2.56a4.15 4.15 0 0 0-3.93-3.08c-.7 0-1.37.18-1.94.5V8.87a4.84 4.84 0 0 0-2.89 0M8.15 9.67V17M5.72 11.33V17M3.29 12.67V17M1 14.5V17" },
  { name: "Spotify", href: "#", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.5 14.5a.62.62 0 0 1-.85.21c-2.33-1.43-5.26-1.75-8.72-.96a.62.62 0 1 1-.28-1.21c3.79-.87 7.04-.49 9.64 1.11.3.17.39.55.21.85m1.2-2.74a.78.78 0 0 1-1.07.26c-2.67-1.64-6.74-2.11-9.9-1.16a.78.78 0 1 1-.45-1.49c3.6-1.09 8.08-.56 11.16 1.32.36.22.48.7.26 1.07m.1-2.85C14.5 8.85 8.63 8.63 5.22 9.64a.93.93 0 1 1-.54-1.78c3.91-1.16 10.41-.94 14.52 1.34a.93.93 0 0 1-.39 1.71" },
  { name: "TikTok", href: "#", icon: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.59-1.16-2.59-2.59s1.16-2.59 2.59-2.59c.28 0 .54.04.79.13v-3.13a5.72 5.72 0 0 0-.79-.06 5.72 5.72 0 0 0-5.72 5.72 5.72 5.72 0 0 0 5.72 5.72c3.16 0 5.72-2.56 5.72-5.72V9.41a7.28 7.28 0 0 0 4.28 1.38V7.7a4.28 4.28 0 0 1-3.27-1.88" },
  { name: "YouTube", href: "#", icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

const actionButtons = [
  { icon: Music, href: "#music", label: "Music" },
  { icon: Play, href: "#podcast", label: "Podcast" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="DJ Dafonse performing live with cyan and magenta lights"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Name */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading font-bold text-7xl md:text-9xl lg:text-[10rem] leading-none gradient-text"
        >
          DAFONSE
        </motion.h1>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 justify-center mt-10"
        >
          {actionButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              title={btn.label}
              className="w-14 h-14 rounded-full border-2 border-primary bg-background/30 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all"
            >
              <btn.icon className="w-6 h-6 text-primary" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bouncing chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce-slow"
      >
        <ChevronDown className="w-8 h-8 text-primary/70" />
      </motion.div>

      {/* Social icons at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4"
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="w-10 h-10 rounded-full border border-primary/50 bg-background/20 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/70 group-hover:text-primary transition-colors"
            >
              <path d={s.icon} />
            </svg>
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
