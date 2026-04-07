import { useEffect, useState } from "react";

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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.41-1.49 9.06 9.06 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1.04 2.49c0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34m-5.44 7.43h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.89 9.89 0 0 1 9.9 9.9c-.01 5.45-4.45 9.88-9.9 9.88m8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.46 0 .11 5.34.11 11.92a11.86 11.86 0 0 0 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.73 1.46c6.58 0 11.93-5.34 11.94-11.92a11.83 11.83 0 0 0-3.53-8.38" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
