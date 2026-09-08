import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/BrandIcons";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/content";

export default function Footer() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const links = [
    { label: "Accueil",      href: "#hero" },
    { label: "À propos",      href: "#about" },
    { label: "Compétences",   href: "#stack" },
    { label: "Projets",       href: "#projects" },
    { label: "Contact",       href: "#contact" },
  ];

  return (
    <footer className={`py-16 px-6 transition-colors duration-500 ${dark ? "bg-coffee-950 border-t border-coffee-800" : "bg-coffee-200 border-t border-coffee-300"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <a href="#hero" className={`text-3xl font-black tracking-tight ${dark ? "text-coffee-50" : "text-gray-900"}`}>
              abdoul<span style={{ color: "#ae9775" }}>.</span>
            </a>
            <p className={`text-sm leading-relaxed max-w-xs ${dark ? "text-coffee-300" : "text-gray-600"}`}>
              Fullstack Developer & Cybersecurity Enthusiast basé en Côte d'Ivoire.
              Créateur d'applications web modernes, performantes et sécurisées.
            </p>
          </div>

          {/* Nav links */}
          <div className="space-y-4">
            <h4 className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-coffee-400" : "text-gray-500"}`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`text-sm transition-colors ${dark ? "text-coffee-200 hover:text-[#ae9775]" : "text-gray-700 hover:text-[#ae9775]"}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="space-y-4">
            <h4 className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-coffee-400" : "text-gray-500"}`}>
              Contact
            </h4>
            <div className="space-y-2">
              <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-3 text-sm transition-colors ${dark ? "text-coffee-200 hover:text-[#ae9775]" : "text-gray-700 hover:text-[#ae9775]"}`}>
                <Mail size={15} style={{ color: "#ae9775" }} />
                {personalInfo.email}
              </a>
              <div className={`flex items-center gap-3 text-sm ${dark ? "text-coffee-200" : "text-gray-700"}`}>
                <MapPin size={15} style={{ color: "#ae9775" }} />
                {personalInfo.location}
              </div>
              <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-3 text-sm transition-colors ${dark ? "text-coffee-200 hover:text-[#ae9775]" : "text-gray-700 hover:text-[#ae9775]"}`}>
                <Phone size={15} style={{ color: "#ae9775" }} />
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 flex items-center justify-center transition-all hover:scale-110 ${dark ? "bg-coffee-900 hover:bg-coffee-800 text-coffee-200" : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"}`}>
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 flex items-center justify-center transition-all hover:scale-110 ${dark ? "bg-coffee-900 hover:bg-coffee-800 text-coffee-200" : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"}`}>
                <LinkedinIcon size={18} />
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110 bg-[#25D366] hover:bg-[#1ebe5d] text-white">
                <WhatsappIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${dark ? "border-coffee-800" : "border-gray-200"}`}>
          <p className={`text-xs ${dark ? "text-coffee-500" : "text-gray-500"}`}>
            © {new Date().getFullYear()} Abdoul Bassit. Tous droits réservés.
          </p>
          <a
            href="#hero"
            className={`flex items-center gap-2 text-xs font-semibold transition-colors ${dark ? "text-coffee-300 hover:text-[#ae9775]" : "text-gray-600 hover:text-[#ae9775]"}`}
          >
            Retour en haut
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
