import { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo-gop-white.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "bg" : ""}`}>
      <nav className="navHeader">
        <div>
          <img src={logo} alt="Logo GoPresence" />
        </div>
        <ul className="navLinks">
          <li>
            <a href="#Home">Início</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
