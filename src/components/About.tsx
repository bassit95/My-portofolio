import { Code2, Palette, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const valueCards = [
  {
    icon: Code2,
    title: "Code propre",
    text: "J'écris un code lisible, maintenable et évolutif en respectant les bonnes pratiques.",
  },
  {
    icon: Palette,
    title: "Design moderne",
    text: "Je conçois des interfaces élégantes offrant une excellente expérience utilisateur.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "J'optimise les applications pour garantir rapidité, fluidité et efficacité.",
  },
  {
    icon: Users,
    title: "Esprit d'équipe",
    text: "Je communique efficacement et travaille avec professionnalisme dans les projets collaboratifs.",
  },
];

const timelineItems = [
  {
    period: "2026 — Aujourd'hui",
    role: "Développeur Full Stack",
    details: [
      "Création d'applications web complètes avec Laravel, React, Node.js et Tailwind CSS.",
      "Développement d'API REST sécurisées.",
      "Intégration de bases de données MySQL.",
      "Déploiement sur Vercel et autres plateformes.",
    ],
  },
  {
    period: "2025",
    role: "Formation intensive Full Stack",
    details: [
      "Laravel · React · JavaScript · PHP",
      "Git · GitHub · MySQL · API REST",
    ],
  },
  {
    period: "En cours",
    role: "Licence en Informatique",
    details: ["Université Virtuelle de Côte d'Ivoire"],
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className="py-28 px-6 bg-coffee-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">

        {/* ─── LEFT COLUMN ─── */}
        <div className="space-y-10">
          {/* Heading */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-3">
              À propos.
            </h2>
            <div className="w-12 h-0.5 bg-gray-900" />
          </div>

          {/* Card 1 — Qui suis-je */}
          <AnimatedSection>
            <div className="border border-gray-900 p-8 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
                Qui suis-je ?
              </h3>
              <div className="space-y-3 text-gray-700 text-[0.95rem] leading-[1.75]">
                <p>
                  Je suis <strong className="text-gray-900">Bassit Jr</strong>, développeur Full Stack basé en Côte d'Ivoire.
                </p>
                <p>
                  Je développe des applications web modernes, rapides et évolutives en utilisant{" "}
                  <span className="font-semibold" style={{ color: "#4F7DF3" }}>Laravel, React, Node.js, Express, MySQL</span>{" "}
                  et Tailwind CSS.
                </p>
                <p>
                  J'aime créer des interfaces élégantes ainsi que des architectures backend propres,
                  sécurisées et maintenables.
                </p>
                <p>
                  Je me passionne également pour l'automatisation, les API REST, les bases de données,
                  le <em>prompt engineering</em> et l'intelligence artificielle.
                </p>
                <p>
                  Mon objectif est de concevoir des solutions performantes qui apportent une réelle
                  valeur aux entreprises et aux utilisateurs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — Mon parcours */}
          <AnimatedSection>
            <div className="border border-gray-900 p-8 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-7">
                Mon parcours
              </h3>
              <div className="relative pl-5 space-y-7">
                {/* Vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200" />

                {timelineItems.map((item, i) => (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-[1.35rem] top-1.5 w-2.5 h-2.5 border-2 border-gray-900 bg-white"
                      style={i === 0 ? { backgroundColor: "#ae9775", borderColor: "#ae9775" } : {}}
                    />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#ae9775" }}>
                      {item.period}
                    </span>
                    <p className="text-sm font-bold text-gray-900 mt-0.5 mb-2">{item.role}</p>
                    <ul className="space-y-1">
                      {item.details.map((d, j) => (
                        <li key={j} className="text-sm text-gray-600 leading-relaxed">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div className="space-y-8">
          <AnimatedSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
                Mes valeurs
              </h2>
              <div className="w-8 h-0.5 bg-gray-900" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valueCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title}>
                  <div
                    className="group border border-gray-900 bg-white p-7 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300 h-full"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-5 transition-colors duration-300"
                      style={{ backgroundColor: "#4F7DF315" }}
                    >
                      <Icon size={22} style={{ color: "#4F7DF3" }} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Stats row */}
          {/* <AnimatedSection>
            <div className="grid grid-cols-3 border border-gray-200">
              {[
                { num: "2+",   label: "Projets réalisés" },
                { num: "+",   label: "Ans d'expérience" },
                // { num: "100%", label: "Satisfaction client" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-8 text-center ${i < 2 ? "border-r border-gray-200" : ""}`}
                >
                  <div className="text-3xl font-black text-gray-900">{stat.num}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection> */}
        </div>
      </div>
    </section>
  );
}
