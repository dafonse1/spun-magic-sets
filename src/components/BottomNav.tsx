import { useEffect, useState } from "react";
import videoIcon from "@/assets/icons/video.png";
import musicIcon from "@/assets/icons/music.png";
import instagramIcon from "@/assets/icons/instagram.png";

const navItems = [
  { icon: videoIcon, label: "VÍDEOS", href: "#podcast" },
  { icon: musicIcon, label: "DJ SETS", href: "#music" },
  { icon: instagramIcon, label: "SOCIAL", href: "#contact" },
];

const BottomNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bioSection = document.getElementById("bio");
      if (bioSection) {
        const rect = bioSection.getBoundingClientRect();
        setVisible(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-6 left-6 z-50 flex flex-col gap-3 transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
        >
          <img src={item.icon} alt={item.label} className="w-5 h-5" loading="lazy" />
          <span className="font-heading font-bold text-sm tracking-wide">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
