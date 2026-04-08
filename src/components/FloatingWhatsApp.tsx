import { useEffect, useState } from "react";
import whatsappIcon from "@/assets/icons/whatsapp.png";

const FloatingWhatsApp = () => {
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
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
