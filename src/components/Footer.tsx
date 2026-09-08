// import React, { useState } from "react";
// import { Send } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";
// import { personalInfo } from "@/data/content";

// export default function Contact() {
//   const { theme } = useTheme();
//   const dark = theme === "dark";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // 1. Nettoyer le numéro de téléphone (conserver uniquement les chiffres)
//     // Ex: "+225 07 00 00 00 00" -> "2250700000000"
//     const phoneNumber = personalInfo.phone.replace(/[^0-9]/g, "");

//     // 2. Formatage du message pour WhatsApp
//     const text = `Bonjour Abdoul,\n\n` +
//       `*Nom:* ${formData.name}\n` +
//       `*Email:* ${formData.email}\n` +
//       `*Sujet:* ${formData.subject}\n\n` +
//       `*Message:*\n${formData.message}`;

//     // 3. Encodage du texte pour l'URL
//     const encodedText = encodeURIComponent(text);

//     // 4. Redirection vers l'API WhatsApp
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <section
//       id="contact"
//       className={`py-20 px-6 transition-colors duration-500 ${
//         dark ? "bg-coffee-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-black mb-2 text-center">Me Contacter</h2>
//         <p className="text-center text-sm mb-8 opacity-80">
//           Envoyez-moi un message, cela ouvrira directement une discussion WhatsApp avec le contenu pré-rempli.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Votre nom"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ae9775] ${
//                 dark ? "bg-coffee-950 border-coffee-800 text-white" : "bg-white border-gray-300"
//               }`}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Votre email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ae9775] ${
//                 dark ? "bg-coffee-950 border-coffee-800 text-white" : "bg-white border-gray-300"
//               }`}
//             />
//           </div>

//           <input
//             type="text"
//             name="subject"
//             placeholder="Sujet du message"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             className={`w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ae9775] ${
//               dark ? "bg-coffee-950 border-coffee-800 text-white" : "bg-white border-gray-300"
//             }`}
//           />

//           <textarea
//             name="message"
//             rows={5}
//             placeholder="Votre message..."
//             required
//             value={formData.message}
//             onChange={handleChange}
//             className={`w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ae9775] ${
//               dark ? "bg-coffee-950 border-coffee-800 text-white" : "bg-white border-gray-300"
//             }`}
//           />

//           <button
//             type="submit"
//             className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 px-6 rounded-lg transition-all active:scale-95"
//           >
//             Envoyer via WhatsApp <Send size={16} />
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

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