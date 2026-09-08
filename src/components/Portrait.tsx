import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/content";

export default function Portrait() {
  const { ref, visible } = useScrollAnimation();
  const { theme } = useTheme();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2))  / rect.width;
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / rect.height;
    setTilt({ x: dy * -6, y: dx * 6 });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="portrait"
      className={`py-24 px-6 transition-colors duration-500 ${theme === "dark" ? "bg-coffee-900" : "bg-coffee-100"}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div
            className="relative w-full max-w-md mx-auto transition-transform duration-300 ease-out"
            style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="absolute -inset-4 blur-2xl" style={{ backgroundColor: "rgba(174,151,117,0.12)" }} />
            <div className="relative overflow-hidden shadow-2xl border-4" style={{ borderColor: "rgba(174,151,117,0.25)" }}>
              <img src="/images/823a1d86-ff03-4a7a-9b09-8212775d950c.jpg" alt="Abdoul Bassit Portrait" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-6 gap-1 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5" style={{ backgroundColor: "#ae9775" }} />
              ))}
            </div>
          </div>
        </div>

        <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#ae9775" }}>Portrait</span>
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${theme === "dark" ? "text-coffee-50" : "text-gray-900"}`}>
            Le développeur derrière le code.
          </h2>
          <p className={`text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-coffee-200" : "text-gray-700"}`}>
            {personalInfo.portraitDescription}
          </p>
          <p className={`text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-coffee-200" : "text-gray-700"}`}>
            Mon double profil — développement Fullstack et culture cybersécurité — me permet de concevoir des applications
            qui ne sont pas seulement performantes et élégantes, mais aussi robustes face aux menaces modernes.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Fullstack Dev", "Cybersécurité", "UVCI Student", "Based in Abidjan"].map((tag) => (
              <span
                key={tag}
                className={`text-xs font-semibold px-4 py-2 border ${theme === "dark" ? "border-coffee-800 text-coffee-200 bg-coffee-950/50" : "border-gray-200 text-gray-700 bg-white"}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
