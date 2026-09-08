import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink, X, Smartphone, Monitor, Zap, Gauge, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects, filterCategories } from "@/data/content";

export default function Projects() {
  const { ref, visible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  
  // Fonctionnalité Senior : Bascule Preview Image / Live Interactive Iframe
  const [viewMode, setViewMode] = useState<"image" | "live">("image");
  const [deviceFrame, setDeviceFrame] = useState<"desktop" | "mobile">("desktop");

  const filtered = activeFilter === "Tous" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setViewMode("image"); // Par défaut sur l'image
    setDeviceFrame("desktop");
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="bg-[#f6f8fa] px-6 py-28 relative">
      <div className="mx-auto max-w-7xl">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="text-4xl font-black tracking-tight text-[#10212b] md:text-6xl">Réalisations récentes.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">Des architectures web performantes, pensées pour l'expérience utilisateur et l'élégance du code.</p>
        </div>

        {/* Boutons de Filtre */}
        <div className={`mb-10 flex flex-wrap justify-center gap-3 transition-all delay-150 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          {filterCategories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveFilter(category)} 
              className={`rounded-none border px-5 py-2.5 text-sm font-bold transition-all active:scale-95 ${
                activeFilter === category 
                  ? "border-[#10212b] bg-[#10212b] text-white shadow-xl shadow-slate-300" 
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#6b8e9f] hover:text-[#10212b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de Cartes Projets Senior */}
        <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[240px]">
          {filtered.map((project, i) => (
            <button 
              key={project.id} 
              onClick={() => openProjectModal(project)} 
              className={`group relative overflow-hidden rounded-none border border-slate-200 bg-[#10212b] text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                i === 0 ? "md:col-span-6 md:row-span-2" : i < 3 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} 
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image de fond avec overlay dynamique */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07131c] via-[#07131c]/60 to-black/30 transition-opacity duration-300 group-hover:via-[#07131c]/40" />

              {/* Tag "Senior Badge" au survol */}
              <div className="absolute left-5 top-5 z-10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="bg-[#10212b]/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1">
                  Projet Pro
                </span>
              </div>

              {/* Bouton d'action coin supérieur */}
              <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-none border border-white/20 bg-black/40 text-cyan-100 backdrop-blur-sm transition-transform duration-300 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-[#07131c]">
                <ArrowUpRight size={18} />
              </div>

              {/* Overlay Contenu */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 pt-20 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">0{i + 1} / {project.category}</span>
                <h3 className="mt-1 text-2xl font-black tracking-tight">{project.title}</h3>
                
                {/* Tech Stack Chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-none border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] font-mono text-slate-200 backdrop-blur-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && <p className="py-12 text-center text-slate-400">Aucun projet dans cette catégorie.</p>}
      </div>

      {/* MODALE PREMUM SENIOR AVEC SIMULATEUR LIVE */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-6" onClick={() => setSelectedProject(null)}>
          <div className="relative max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-none border border-white/10 bg-[#07131c] shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Barre de contrôle Senior (Switch Preview / Live Demo + Device Switch) */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#07131c]/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex border border-white/20 bg-black/40 p-1">
                  <button 
                    onClick={() => setViewMode("image")}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${viewMode === "image" ? "bg-cyan-400 text-[#07131c]" : "text-slate-300 hover:text-white"}`}
                  >
                    Aperçu HD
                  </button>
                  <button 
                    onClick={() => setViewMode("live")}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${viewMode === "live" ? "bg-cyan-400 text-[#07131c]" : "text-slate-300 hover:text-white"}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Web Test
                  </button>
                </div>

                {/* Switch Mobile/Desktop quand le mode Live est actif */}
                {viewMode === "live" && (
                  <div className="hidden sm:flex border border-white/20 bg-black/40 p-1">
                    <button 
                      onClick={() => setDeviceFrame("desktop")}
                      className={`p-1.5 transition-colors ${deviceFrame === "desktop" ? "text-cyan-300" : "text-slate-500 hover:text-slate-300"}`}
                      title="Vue Ordinateur"
                    >
                      <Monitor size={16} />
                    </button>
                    <button 
                      onClick={() => setDeviceFrame("mobile")}
                      className={`p-1.5 transition-colors ${deviceFrame === "mobile" ? "text-cyan-300" : "text-slate-500 hover:text-slate-300"}`}
                      title="Vue Mobile"
                    >
                      <Smartphone size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Fermeture */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X size={20} />
              </button>
            </div>

            {/* Zone de Contenu Visuel (Image HD ou Iframe Live) */}
            <div className="relative min-h-[300px] md:min-h-[420px] w-full bg-black/60 flex items-center justify-center overflow-hidden border-b border-white/10">
              {viewMode === "image" ? (
                <div className="relative w-full h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="h-72 md:h-[420px] w-full object-cover object-top" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07131c] via-transparent to-transparent" />
                </div>
              ) : (
                <div className={`transition-all duration-300 h-[450px] w-full my-4 flex justify-center ${deviceFrame === "mobile" ? "max-w-[375px] border-4 border-slate-700 rounded-xl overflow-hidden shadow-2xl" : "w-full"}`}>
                  <iframe 
                    src={selectedProject.demo} 
                    title={selectedProject.title}
                    className="w-full h-full border-none bg-white"
                  />
                </div>
              )}
            </div>

            {/* Détails Techniques & Métriques Senior */}
            <div className="grid gap-8 p-6 md:p-10 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{selectedProject.category}</span>
                </div>
                <h3 className="text-3xl font-black text-white md:text-5xl">{selectedProject.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{selectedProject.description}</p>
                
                {/* Badges de Métriques de Performance */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                    <Zap size={15} className="text-amber-400" />
                    <span>Lighthouse Score: <strong className="text-white">98+</strong></span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                    <Gauge size={15} className="text-cyan-400" />
                    <span>Temps de réponse: <strong className="text-white">&lt; 1.2s</strong></span>
                  </div>
                </div>
              </div>
              
              {/* Fonctionnalités clés */}
              <div className="md:border-l md:border-white/10 md:pl-8">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-cyan-200">Points Clés de l'Architecture</h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pied de Modale : CTA Directs */}
            <div className="flex flex-wrap gap-4 border-t border-white/10 p-6 md:p-8 bg-[#050e14]">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-none bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20">
                <GithubIcon size={16} /> Repertoire GitHub
              </a>
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-none bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-[#07131c] transition-colors hover:bg-cyan-200">
                <ExternalLink size={16} /> Ouvrir en Plein Écran
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}