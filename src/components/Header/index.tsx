import { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/img/logo-gop-white.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);
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

        <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>

        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#Home" onClick={() => setMenuOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#Product" onClick={() => setMenuOpen(false)}>
              Produtos
            </a>
          </li>
          <li>
            <a href="#About" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
