import { useEffect, useState } from "react";
import { Accessibility } from "lucide-react";

export default function AccessibilityButton() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-7 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-opacity duration-200 sm:bottom-5 ${
        isFooterVisible ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="img"
      aria-label="Akadálymentesítési beállítások – bemutató"
      title="Akadálymentesítési beállítások"
    >
      <Accessibility size={26} strokeWidth={1.8} aria-hidden="true" />
    </div>
  );
}
