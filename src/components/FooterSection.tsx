import dafonseTitle from "@/assets/titles/dafonse.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <img src={dafonseTitle} alt="DAFONSE" className="h-8 w-auto" loading="lazy" />
        <div className="flex gap-8 text-xs font-heading tracking-wider text-muted-foreground">
          <a href="#bio" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#music" className="hover:text-primary transition-colors">Música</a>
          <a href="#podcast" className="hover:text-primary transition-colors">Podcast</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
        </div>
        <p className="text-muted-foreground/50 text-xs mt-2">© 2026 Dafonse. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
