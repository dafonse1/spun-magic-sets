const socials = [
  { name: "SoundCloud", href: "#" },
  { name: "Spotify", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Resident Advisor", href: "#" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="font-heading font-bold text-xl gradient-text">NXVIBE</p>
        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-heading tracking-wide"
            >
              {s.name}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs">© 2026 NXVIBE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
