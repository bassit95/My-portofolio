import type { CSSProperties } from "react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiTrello,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

import {
  ShieldAlert,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { stackCategories } from "@/data/content";


/* =========================================================
   TYPE DES ICONES
========================================================= */

type IconType = React.ComponentType<{
  size?: number;
  className?: string;
  style?: CSSProperties;
}>;


/* =========================================================
   MAP DES LOGOS
========================================================= */

const iconMap: Record<string, IconType> = {
  React: SiReact,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,

  Laravel: SiLaravel,
  PHP: SiPhp,
  MySQL: SiMysql,

  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,

  VSCode: VscVscode,
  Postman: SiPostman,
  Figma: SiFigma,
  Trello: SiTrello,
};


/* =========================================================
   RECUPERATION DE L'ICONE
========================================================= */

const getIcon = (name: string): IconType => {
  return iconMap[name] || Cpu;
};


/* =========================================================
   COMPONENT
========================================================= */

export default function Stack() {

  const { ref, visible } = useScrollAnimation();


  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="stack"
      className="
        relative
        overflow-hidden
        bg-[#050e17]
        px-6
        py-32
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              #00d2c4 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #00d2c4 1px,
              transparent 1px
            )
          `,
          backgroundSize: "35px 35px",
        }}
      />


      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#00d2c4]/10
          blur-[150px]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">


        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className={`
            mx-auto
            mb-28
            max-w-3xl
            text-center
            transition-all
            duration-1000
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >

          {/* Small label */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
              font-mono
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#00d2c4]
            "
          >

            <span className="h-px w-12 bg-[#00d2c4]/40" />

            TECH_STACK // SYSTEM_TREE

            <span className="h-px w-12 bg-[#00d2c4]/40" />

          </div>


          {/* Title */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              md:text-6xl
            "
          >
            Mon écosystème
            <span className="text-[#00d2c4]">
              {" "}Tech.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              md:text-base
            "
          >
            Chaque technologie représente un nœud de mon
            environnement de développement.
          </p>

        </div>



        {/* ===================================================
            ARBRE
        =================================================== */}

        <div className="relative">


          {/* =================================================
              TRONC HORIZONTAL DESKTOP
          ================================================= */}

          <div
            className={`
              absolute
              left-[3%]
              right-[3%]
              top-[34px]
              hidden
              h-[2px]
              origin-left
              lg:block
              transition-transform
              duration-[1800ms]
              ${
                visible
                  ? "scale-x-100"
                  : "scale-x-0"
              }
            `}
          >

            {/* Ligne */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-[#00d2c4]/60
                to-transparent
              "
            />


            {/* Lumière qui se déplace */}

            <span
              className="
                absolute
                top-1/2
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-[#00d2c4]
                shadow-[0_0_20px_#00d2c4]
                animate-[moveLight_4s_linear_infinite]
              "
            />

          </div>



          {/* =================================================
              VERSION MOBILE
          ================================================= */}

          <div
            className="
              absolute
              bottom-10
              left-[28px]
              top-10
              w-[2px]
              bg-gradient-to-b
              from-[#00d2c4]/70
              via-[#00d2c4]/30
              to-transparent
              lg:hidden
            "
          />



          {/* =================================================
              CATEGORIES
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              gap-20
              lg:grid-cols-4
              lg:gap-8
            "
          >

            {stackCategories.map(
              (category, categoryIndex) => {

                const color =
                  category.color || "#00d2c4";


                return (
                  <div
                    key={category.label}
                    className={`
                      relative
                      transition-all
                      duration-1000
                      ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-12 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay:
                        `${categoryIndex * 200}ms`,
                    }}
                  >


                    {/* =========================================
                        CATEGORY NODE
                    ========================================= */}

                    <div
                      className="
                        relative
                        flex
                        flex-col
                        items-center
                      "
                    >

                      {/* Rotating ring */}

                      <div
                        className="
                          absolute
                          h-[82px]
                          w-[82px]
                          rounded-full
                          border
                          border-dashed
                          opacity-30
                          animate-[spin_12s_linear_infinite]
                        "
                        style={{
                          borderColor: color,
                        }}
                      />


                      {/* Main node */}

                      <div
                        className="
                          group
                          relative
                          z-20
                          flex
                          h-[68px]
                          w-[68px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-[#050e17]
                          transition-all
                          duration-500
                          hover:scale-110
                        "
                        style={{
                          borderColor: `${color}90`,
                          boxShadow:
                            `0 0 35px ${color}20`,
                        }}
                      >

                        <Cpu
                          size={25}
                          style={{
                            color,
                          }}
                          className="
                            transition-transform
                            duration-500
                            group-hover:rotate-180
                          "
                        />


                        {/* Pulse */}

                        <span
                          className="
                            absolute
                            -right-1
                            -top-1
                            h-3
                            w-3
                            animate-ping
                            rounded-full
                          "
                          style={{
                            backgroundColor: color,
                          }}
                        />


                        <span
                          className="
                            absolute
                            -right-1
                            -top-1
                            h-3
                            w-3
                            rounded-full
                          "
                          style={{
                            backgroundColor: color,
                            boxShadow:
                              `0 0 12px ${color}`,
                          }}
                        />

                      </div>



                      {/* Category title */}

                      <div className="mt-5 text-center">

                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.3em]
                          "
                          style={{
                            color,
                          }}
                        >
                          NODE_0{categoryIndex + 1}
                        </span>


                        <h3
                          className="
                            mt-1
                            text-base
                            font-black
                          "
                        >
                          {category.label}
                        </h3>

                      </div>

                    </div>



                    {/* =========================================
                        BRANCH
                    ========================================= */}

                    <div
                      className={`
                        mx-auto
                        mt-6
                        h-10
                        w-px
                        origin-top
                        transition-transform
                        duration-700
                        ${
                          visible
                            ? "scale-y-100"
                            : "scale-y-0"
                        }
                      `}
                      style={{
                        background:
                          `linear-gradient(
                            to bottom,
                            ${color},
                            transparent
                          )`,
                      }}
                    />



                    {/* =========================================
                        TECHNOLOGIES
                    ========================================= */}

                    <div className="space-y-3">

                      {category.items.map(
                        (item, itemIndex) => {

                          const Icon =
                            getIcon(item.icon);


                          return (
                            <div
                              key={item.name}
                              className="
                                group
                                relative
                                flex
                                cursor-pointer
                                items-center
                                justify-between
                                overflow-visible
                                border
                                border-white/[0.07]
                                bg-[#091824]/80
                                px-4
                                py-3
                                backdrop-blur-md
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-white/20
                              "
                              style={{
                                transitionDelay:
                                  visible
                                    ? `${categoryIndex * 200 + itemIndex * 100}ms`
                                    : "0ms",
                              }}
                            >


                              {/* =============================
                                  CONNECTEUR
                              ============================= */}

                              <span
                                className="
                                  absolute
                                  -top-3
                                  left-1/2
                                  h-3
                                  w-px
                                  opacity-30
                                "
                                style={{
                                  backgroundColor:
                                    color,
                                }}
                              />



                              {/* =============================
                                  SMALL LOGO
                              ============================= */}

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-3
                                "
                              >

                                <div
                                  className="
                                    relative
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-white/10
                                    bg-[#050e17]
                                    transition-all
                                    duration-500
                                    group-hover:scale-125
                                    group-hover:border-white/30
                                  "
                                  style={{
                                    boxShadow:
                                      "0 0 0 transparent",
                                  }}
                                >

                                  <Icon
                                    size={20}
                                    className="
                                      opacity-50
                                      grayscale
                                      transition-all
                                      duration-500
                                      group-hover:scale-110
                                      group-hover:grayscale-0
                                      group-hover:opacity-100
                                    "
                                  />

                                </div>


                                <span
                                  className="
                                    font-mono
                                    text-xs
                                    font-semibold
                                    text-slate-400
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                  "
                                >
                                  {item.name}
                                </span>

                              </div>



                              {/* =============================
                                  STATUS
                              ============================= */}

                              <span
                                className="
                                  font-mono
                                  text-[9px]
                                  text-slate-700
                                  transition-colors
                                  duration-300
                                  group-hover:text-[#00d2c4]
                                "
                              >
                                [OK]
                              </span>



                              {/* =============================
                                  LARGE HOVER LOGO
                              ============================= */}

                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  left-1/2
                                  top-1/2
                                  z-[100]
                                  flex
                                  -translate-x-1/2
                                  -translate-y-1/2
                                  scale-50
                                  flex-col
                                  items-center
                                  justify-center
                                  opacity-0
                                  transition-all
                                  duration-500
                                  group-hover:scale-100
                                  group-hover:opacity-100
                                "
                              >

                                {/* Logo container */}

                                <div
                                  className="
                                    relative
                                    flex
                                    h-24
                                    w-24
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    bg-[#050e17]/95
                                    backdrop-blur-xl
                                  "
                                  style={{
                                    borderColor:
                                      color,

                                    boxShadow: `
                                      0 0 20px ${color}40,
                                      0 0 70px ${color}20
                                    `,
                                  }}
                                >

                                  {/* Animated ring */}

                                  <div
                                    className="
                                      absolute
                                      inset-[-8px]
                                      rounded-2xl
                                      border
                                      border-dashed
                                      opacity-40
                                      animate-[spin_8s_linear_infinite]
                                    "
                                    style={{
                                      borderColor:
                                        color,
                                    }}
                                  />


                                  {/* Logo */}

                                  <Icon
                                    size={48}
                                    style={{
                                      color: color,
                                      filter:
                                        `drop-shadow(0 0 12px ${color})`,
                                    }}
                                  />

                                </div>



                                {/* Technology name */}

                                <div
                                  className="
                                    mt-3
                                    whitespace-nowrap
                                    border
                                    bg-[#050e17]/95
                                    px-4
                                    py-2
                                    font-mono
                                    text-xs
                                    font-bold
                                    backdrop-blur-xl
                                  "
                                  style={{
                                    borderColor:
                                      `${color}70`,
                                    color,
                                  }}
                                >
                                  {item.name}
                                </div>

                              </div>



                              {/* =============================
                                  HOVER GLOW
                              ============================= */}

                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  inset-0
                                  opacity-0
                                  transition-opacity
                                  duration-500
                                  group-hover:opacity-100
                                "
                                style={{
                                  boxShadow:
                                    `inset 0 0 30px ${color}12`,
                                }}
                              />

                            </div>
                          );
                        }
                      )}

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>



        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            mt-24
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            font-mono
            text-[10px]
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <ShieldAlert
              size={14}
              className="text-[#00d2c4]"
            />

            <span>
              STATUS:
              <span className="ml-2 text-[#00d2c4]">
                ALL_SYSTEMS_OPERATIONAL
              </span>
            </span>

          </div>


          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <ArrowUpRight size={13} />

            CYBER_ARBOR_PROTOCOL // READY

          </div>

        </div>

      </div>



      {/* =====================================================
          ANIMATIONS CSS
      ===================================================== */}

      <style>
        {`
          @keyframes moveLight {

            0% {
              left: 0%;
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            50% {
              opacity: 1;
            }

            90% {
              opacity: 1;
            }

            100% {
              left: 100%;
              opacity: 0;
            }

          }


          @keyframes spin {

            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }

          }
        `}
      </style>

    </section>
  );
}