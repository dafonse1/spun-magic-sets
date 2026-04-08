import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";
import musicIcon from "@/assets/icons/music.png";
import playIcon from "@/assets/icons/play.png";
import mailIcon from "@/assets/icons/mail.png";
import instagramIcon from "@/assets/icons/instagram.png";
import soundcloudIcon from "@/assets/icons/soundcloud.png";
import spotifyIcon from "@/assets/icons/spotify.png";
import tiktokIcon from "@/assets/icons/tiktok.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import dafonseTitle from "@/assets/titles/dafonse.png";

const socials = [
  { name: "Instagram", href: "#", icon: instagramIcon },
  { name: "SoundCloud", href: "#", icon: soundcloudIcon },
  { name: "Spotify", href: "#", icon: spotifyIcon },
  { name: "TikTok", href: "#", icon: tiktokIcon },
  { name: "YouTube", href: "#", icon: youtubeIcon },
];

const actionButtons = [
  { icon: musicIcon, href: "#music", label: "Música" },
  { icon: playIcon, href: "#podcast", label: "Podcast" },
  { icon: mailIcon, href: "#contact", label: "Contacto" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="DJ Dafonse a atuar ao vivo com luzes ciano e magenta"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent h-1/3" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base tracking-[0.4em] text-primary/80 uppercase mb-4"
        >
          DJ &middot; Produtor &middot; Artista
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={dafonseTitle}
            alt="DAFONSE"
            className="h-20 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-5 justify-center mt-10"
        >
          {actionButtons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              title={btn.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="group relative w-14 h-14 rounded-full border-2 border-primary/60 bg-background/20 backdrop-blur-md flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)] transition-all duration-300"
            >
              <img src={btn.icon} alt={btn.label} className="w-5 h-5 group-hover:scale-110 transition-transform" loading="lazy" />
              <span className="absolute -bottom-7 text-[10px] font-heading text-primary/60 group-hover:text-primary transition-colors tracking-wider">
                {btn.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-heading tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="w-9 h-9 rounded-full border border-primary/30 bg-background/10 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/15 transition-all duration-300 group"
          >
            <img src={s.icon} alt={s.name} className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" loading="lazy" />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
