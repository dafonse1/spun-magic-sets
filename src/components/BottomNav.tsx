import { Video, Music, Instagram } from "lucide-react";

const navItems = [
  { icon: Video, label: "VÍDEOS", href: "#podcast" },
  { icon: Music, label: "DJ SETS", href: "#music" },
  { icon: Instagram, label: "SOCIAL", href: "#contact" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
        >
          <item.icon className="w-5 h-5" />
          <span className="font-heading font-bold text-sm tracking-wide">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
