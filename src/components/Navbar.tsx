import { useState, useEffect } from "react";
import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/content";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Détecte dès que scrollY est supérieur à 0
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil",     href: "#hero" },
    { label: "À propos",    href: "#about" },
    { label: "Compétences", href: "#stack" },
    { label: "Projets",     href: "#projects" },
    { label: "Contact",     href: "#contact" },
  ];

  // Le texte devient NOIR dès que scrolled === true (window.scrollY > 0)
  const textColor = scrolled ? "text-black" : "text-coffee-100";

  // Fond adaptatif pour assurer un bon contraste
  const navBg = scrolled
    ? "bg-white/90 backdrop-blur-md shadow-md"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo (devient noir au scroll) */}
        <a 
          href="#hero" 
          className={`text-2xl font-black tracking-tight transition-colors duration-300 ${textColor}`}
        >
          abdoul<span style={{ color: scrolled ? "#000000" : "#ae9775" }}>.</span>
        </a>

        {/* Liens Desktop (deviennent noirs au scroll) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a 
                href={l.href} 
                className={`text-sm font-medium transition-colors duration-300 ${textColor} hover:opacity-70`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href={personalInfo.cvPath}
            download
            className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 transition-all duration-300 active:scale-95 ${
              scrolled ? "bg-black text-white" : "text-white"
            }`}
            style={{ backgroundColor: scrolled ? "#000000" : "#ae9775" }}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        {/* Actions Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className={`p-2 transition-colors duration-300 ${textColor}`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 transition-colors duration-300 ${textColor}`}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 ${scrolled ? "bg-white" : theme === "dark" ? "bg-coffee-950" : "bg-white"}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-300 ${textColor}`}
            >
              {l.label}
            </a>
          ))}
          <a 
            href={personalInfo.cvPath} 
            download 
            className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 w-fit transition-all duration-300" 
            style={{ backgroundColor: "#000000" }}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}