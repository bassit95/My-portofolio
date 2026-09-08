import { ArrowDown, ArrowRight, Circle, Code2, MapPin, Sparkles, Wifi } from "lucide-react";

const badges = [
  { icon: <Circle size={10} className="fill-green-400 text-green-400" />, label: "Available for freelance" },
  { icon: <MapPin size={13} style={{ color: "#7dd3fc" }} />, label: "Based in Abidjan, CI" },
  { icon: <Code2 size={13} style={{ color: "#7dd3fc" }} />, label: "Clean code & UI" },
  { icon: <Code2 size={13} style={{ color: "#7dd3fc" }} />, label: "React & Laravel Expert" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#07131c] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_38%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(135deg,#07131c_0%,#0b2230_55%,#102c38_100%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full border border-cyan-200/10 pointer-events-none" />
      <div className="absolute -right-16 top-36 h-[360px] w-[360px] rounded-full border border-cyan-200/10 pointer-events-none" />

     <div className="absolute bottom-0 right-0 z-0 h-full w-[min(58vw,760px)] pointer-events-none select-none">
  <img
    src="/images/hero-avatar.png"
    alt="Abdoul Bassit"
    /*  MODIFICATION ICI : remplacez object-top par object-[center_20%] ou object-[center_10%] */
    className="absolute inset-0 h-full w-full object-cover object-[center_30%] drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
    draggable={false}
  />
</div>

      <div className="absolute right-0 top-0 z-20 hidden h-full w-[min(58vw,760px)] pointer-events-none md:block">
        {badges.map((badge, i) => {
          const positions = [
            { left: "0%", top: "18%" },
            { right: "1%", top: "27%" },
            { left: "-2%", top: "55%" },
            { right: "4%", bottom: "13%" },
          ];
          return (
            <div key={i} className="absolute pointer-events-auto flex items-center gap-2 whitespace-nowrap border border-cyan-100/20 bg-[#0b202b]/85 px-4 py-2.5 text-xs font-semibold text-cyan-50 shadow-[0_14px_35px_rgba(0,0,0,0.25)] backdrop-blur-md animate-float" style={{ ...positions[i], animationDelay: `${i * 0.45}s` }}>
              {badge.icon}
              {badge.label}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-xl space-y-8 py-28">
          <div className="inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-100/10 px-4 py-2 text-xs font-semibold text-cyan-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Disponible pour de nouveaux projets
          </div>
          <h1 className="font-black leading-[0.96] tracking-tight text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m<br />
            <span className="text-cyan-200">Abdoul Bassit,</span><br />
            <span className="text-3xl font-bold text-slate-200 md:text-4xl lg:text-5xl">Fullstack Dev</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
            Développeur Full Stack basé en Côte d&apos;Ivoire, passionné par la création d&apos;applications web modernes et performantes.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#about" className="flex items-center gap-2 bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#07131c] transition-all hover:bg-cyan-200 active:scale-95">
              À propos <ArrowRight size={16} />
            </a>
            <a href="#projects" className="flex items-center gap-2 border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
              <Sparkles size={15} className="text-cyan-200" /> Mes projets
            </a>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Faire défiler vers le bas" className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-cyan-200/80 transition-colors hover:text-cyan-100">
        <Wifi size={27} className="rotate-180 animate-pulse" />
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
