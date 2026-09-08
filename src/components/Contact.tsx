import { useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/BrandIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/content";

export default function Contact() {
  const { ref, visible } = useScrollAnimation();
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  const dark = theme === "dark";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`py-28 px-6 transition-colors duration-500 ${dark ? "bg-coffee-950" : "bg-coffee-100"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#ae9775" }}>Contact</span>
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight mt-2 ${dark ? "text-coffee-50" : "text-gray-900"}`}>
            Travaillons ensemble.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${dark ? "text-coffee-200" : "text-gray-800"}`}>Nom</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-5 py-3.5 border transition-all focus:outline-none focus:ring-2 ${dark ? "bg-coffee-950 border-coffee-800 text-coffee-50 placeholder-coffee-600" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  style={{ "--tw-ring-color": "#ae9775" } as React.CSSProperties}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${dark ? "text-coffee-200" : "text-gray-800"}`}>Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-5 py-3.5 border transition-all focus:outline-none focus:ring-2 ${dark ? "bg-coffee-950 border-coffee-800 text-coffee-50 placeholder-coffee-600" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  style={{ "--tw-ring-color": "#ae9775" } as React.CSSProperties}
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${dark ? "text-coffee-200" : "text-gray-800"}`}>Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-5 py-3.5 border transition-all focus:outline-none focus:ring-2 resize-none ${dark ? "bg-coffee-950 border-coffee-800 text-coffee-50 placeholder-coffee-600" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  style={{ "--tw-ring-color": "#ae9775" } as React.CSSProperties}
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button
                type="submit" disabled={sent}
                className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: sent ? "#16a34a" : "#ae9775" }}
              >
                {sent ? "Message envoyé !" : (<><Send size={16} /> Envoyer le message</>)}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className={`p-8 border ${dark ? "bg-coffee-900 border-coffee-800" : "bg-gray-50 border-gray-200"}`}>
              <h3 className={`text-lg font-bold mb-6 ${dark ? "text-coffee-50" : "text-gray-900"}`}>Coordonnées</h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-4 text-sm transition-colors ${dark ? "text-coffee-200 hover:text-[#ae9775]" : "text-gray-700 hover:text-[#ae9775]"}`}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "rgba(174,151,117,0.12)" }}>
                    <Mail size={18} style={{ color: "#ae9775" }} />
                  </div>
                  {personalInfo.email}
                </a>
                <div className={`flex items-center gap-4 text-sm ${dark ? "text-coffee-200" : "text-gray-700"}`}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "rgba(174,151,117,0.12)" }}>
                    <MapPin size={18} style={{ color: "#ae9775" }} />
                  </div>
                  {personalInfo.location}
                </div>
                <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-4 text-sm transition-colors ${dark ? "text-coffee-200 hover:text-[#ae9775]" : "text-gray-700 hover:text-[#ae9775]"}`}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "rgba(174,151,117,0.12)" }}>
                    <Phone size={18} style={{ color: "#ae9775" }} />
                  </div>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className={`p-8 border ${dark ? "bg-coffee-900 border-coffee-800" : "bg-gray-50 border-gray-200"}`}>
              <h3 className={`text-lg font-bold mb-6 ${dark ? "text-coffee-50" : "text-gray-900"}`}>Réseaux sociaux</h3>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 flex items-center justify-center transition-all hover:scale-110 ${dark ? "bg-coffee-950 hover:bg-coffee-800 text-coffee-200" : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"}`}>
                  <GithubIcon size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 flex items-center justify-center transition-all hover:scale-110 ${dark ? "bg-coffee-950 hover:bg-coffee-800 text-coffee-200" : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"}`}>
                  <LinkedinIcon size={20} />
                </a>
                <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 bg-[#25D366] hover:bg-[#1ebe5d] text-white">
                  <WhatsappIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
