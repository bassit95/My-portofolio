import { useState } from "react";
import { GraduationCap, Code2, Award, BookOpen, ChevronDown, ExternalLink, ShieldCheck, Copy, Check, Eye, Sparkles, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/context/ThemeContext";
import { certifications } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  GraduationCap,
  Code2,
  Award,
  BookOpen,
};

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; link: string } | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const { ref, visible } = useScrollAnimation();
  const { theme } = useTheme();

  const toggleExpand = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="certifications"
      className={`py-24 px-6 transition-colors duration-500 relative ${theme === "dark" ? "bg-coffee-900" : "bg-coffee-100"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec badge Premium */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${theme === "dark" ? "text-coffee-50" : "text-gray-900"}`}>
            Diplômes, badges et projets académiques.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon];
            const isExpanded = openIndex === i;
            const hasSubCertificates = cert.certificates && cert.certificates.length > 0;

            return (
              <div
                key={cert.title}
                className={`group relative p-8 border rounded-xl transition-all duration-500 hover:-translate-y-1.5 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  theme === "dark"
                    ? "bg-coffee-950/80 backdrop-blur-md border-coffee-800 hover:border-[#ae9775] hover:shadow-[0_10px_30px_rgba(174,151,117,0.15)]"
                    : "bg-white/80 backdrop-blur-md border-gray-200 hover:border-[#ae9775] hover:shadow-2xl"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Halo d'ambiance au survol */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#ae9775]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                <div className="relative z-10 flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-inner"
                    style={{ backgroundColor: "rgba(174,151,117,0.15)" }}
                  >
                    {Icon && <Icon size={26} style={{ color: "#ae9775" }} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-lg font-bold ${theme === "dark" ? "text-coffee-50" : "text-gray-900"}`}>
                        {cert.title}
                      </h3>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded border border-[#ae9775]/30" style={{ color: "#ae9775", backgroundColor: "rgba(174,151,117,0.08)" }}>
                        {cert.year}
                      </span>
                    </div>

                    <p className="text-sm font-medium mb-3" style={{ color: "#ae9775" }}>
                      {cert.issuer}
                    </p>

                    <p className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-coffee-300" : "text-gray-600"}`}>
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1 rounded-md transition-colors ${
                            theme === "dark" ? "bg-coffee-800/80 text-coffee-200" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bouton Accordéon Interactif */}
                    {hasSubCertificates && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider transition-all pt-3 border-t border-gray-200/50 dark:border-coffee-800 w-full hover:opacity-80"
                        style={{ color: "#ae9775" }}
                      >
                        <span className="flex items-center gap-2">
                          <ShieldCheck size={16} />
                          {isExpanded ? "Masquer la galerie" : "Explorer les certificats"} ({cert.certificates.length})
                        </span>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Galerie déroulante avec Carte Interactive */}
                {hasSubCertificates && (
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="overflow-hidden space-y-4 pt-4 border-t border-dashed border-[#ae9775]/30">
                      {cert.certificates.map((subCert, idx) => (
                        <div key={idx} className="group/item relative p-4 rounded-xl border border-gray-200/60 dark:border-coffee-800/60 bg-gray-50/50 dark:bg-coffee-900/30 hover:border-[#ae9775]/60 transition-all">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-xs font-bold dark:text-coffee-100">{subCert.name}</p>
                            <span className="flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Vérifié
                            </span>
                          </div>

                          {/* Preview Image avec effet Hover & Overlay */}
                          {subCert.image && (
                            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-coffee-700 group/img cursor-pointer" onClick={() => setPreviewImage({ src: subCert.image!, title: subCert.name, link: subCert.link })}>
                              <img src={subCert.image} alt={subCert.name} className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover/img:scale-105" />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                                <Eye size={16} /> Inspecter en Plein Écran
                              </div>
                            </div>
                          )}

                          {/* Actions interactives (Copier le lien + Ouvrir dans un nouvel onglet) */}
                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200/40 dark:border-coffee-800/40">
                            <button
                              onClick={() => copyToClipboard(subCert.link)}
                              className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-coffee-400 hover:text-[#ae9775] transition-colors"
                            >
                              {copiedLink === subCert.link ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                              <span>{copiedLink === subCert.link ? "Lien copié !" : "Copier le lien"}</span>
                            </button>

                            <a
                              href={subCert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold hover:underline"
                              style={{ color: "#ae9775" }}
                            >
                              Credly / Coursera <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MODALE FULLSCREEN "LIGHTBOX" HD PREVIEW */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-coffee-950 border border-coffee-700 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-coffee-800 pb-4">
              <h3 className="text-lg font-bold text-coffee-50 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" /> {previewImage.title}
              </h3>
              <button onClick={() => setPreviewImage(null)} className="p-2 text-coffee-400 hover:text-white rounded-full bg-coffee-900 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="relative max-h-[70vh] overflow-auto rounded-lg border border-coffee-800">
              <img src={previewImage.src} alt={previewImage.title} className="w-full h-auto object-contain" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={previewImage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ae9775] text-coffee-950 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Vérifier l'authenticité en ligne <ExternalLink size={14} />
              </a>
              <button onClick={() => setPreviewImage(null)} className="text-xs text-coffee-400 hover:underline">
                Fermer l'aperçu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}