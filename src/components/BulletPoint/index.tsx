import { useEffect, useRef } from "react";
import "./styles.css";

export default function BulletPoint({ text }: { text: string }) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;

      ref.current.style.transform = `translateY(${scrollY * -0.1}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="bulletPoint">
      <p>{text}</p>
    </section>
  );
}
