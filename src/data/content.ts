export const personalInfo = {
  name: "Abdoul Bassit",
  fullName: "Abimbola Abdoul Bassit",
  role: "Fullstack Developer",
  location: "Abidjan, Côte d'Ivoire",
  university: "Université Virtuelle de Côte d'Ivoire",
  email: "bassitabimbola009@gmail.com",
  phone: "+225 0160922912",
  github: "https://github.com/bassit95",
  linkedin: "https://linkedin.com/in/abdoulbassit",
  whatsapp: "https://wa.me/2250160922912",
  cvPath: "/images/developpeur front-end.pdf",
  heroDescription:
    "Fullstack developer based in Ivory Coast, passionate about crafting modern, performant web applications — from sleek frontends to robust backends. Currently studying Networks & IT Security at Université Virtuelle de Côte d'Ivoire.",
    
    portraitDescription: `"

J’ai construit une grande partie de mes compétences de manière autodidacte, en avançant progressivement à travers différents niveaux d’apprentissage. Pour chaque étape de mon parcours, j’ai cherché à transformer la théorie en pratique en réalisant des projets concrets, afin de consolider mes connaissances et de développer mon autonomie.

Cette approche m’a appris à ne pas seulement apprendre une technologie, mais à comprendre comment et pourquoi l’utiliser pour résoudre un problème réel.

J’ai également une forte attirance pour  les compétitions et les environnements qui stimulent le dépassement de soi. 
"`,
 }


export const stackCategories = [
  {
    label: "Front-end",
    color: "#61DAFB",

    items: [
      {
        name: "React.js",
        icon: "React",
      },

      {
        name: "JavaScript",
        icon: "JavaScript",
      },

      {
        name: "HTML5",
        icon: "HTML",
      },

      {
        name: "CSS3",
        icon: "CSS",
      },

      {
        name: "Tailwind CSS",
        icon: "Tailwind",
      },

      {
        name: "Bootstrap",
        icon: "Bootstrap",
      },
    ],
  },


  {
    label: "Back-end & BDD",
    color: "#FF2D20",

    items: [
      {
        name: "Laravel",
        icon: "Laravel",
      },

      {
        name: "PHP",
        icon: "PHP",
      },

      {
        name: "MySQL",
        icon: "MySQL",
      },
    ],
  },


  {
    label: "Versioning & DevOps",
    color: "#F05032",

    items: [
      {
        name: "Git",
        icon: "Git",
      },

      {
        name: "GitHub",
        icon: "GitHub",
      },

      {
        name: "Vercel",
        icon: "Vercel",
      },
    ],
  },


  {
    label: "Outils & Workflow",
    color: "#34D399",

    items: [
      {
        name: "VS Code",
        icon: "VSCode",
      },

      {
        name: "Postman",
        icon: "Postman",
      },

      {
        name: "Figma",
        icon: "Figma",
      },

      {
        name: "Trello",
        icon: "Trello",
      },
    ],
  },
];


export const certifications = [
  {
    title: "Réseaux & Sécurité",
    issuer: "UVCI — Université Virtuelle de Côte d'Ivoire",
    year: "2024–2025",
    description:
      "Licence 2 – Réseaux et Sécurité Informatique. Protocoles réseau, cybersécurité, administration système.",
    icon: "GraduationCap",
    tags: ["Réseaux", "Cybersécurité", "Linux", "TCP/IP"],
  },
  {
    title: "IBM Full-Stack JS Developer",
    issuer: "Coursera — IBM",
    year: "2025",
    description:
      "IBM Full-Stack JavaScript Developer Professional Certificate. HTML, JS, React JS, Git, GitHub.",
    icon: "Award",
    tags: ["React", "JavaScript", "Git", "Node.js"],
    // NOUVEAU : Tableau des certificats associés
    certificates: [
      {
        name: "Introduction to Software Engineering",
        link: "https://coursera.org/share/1e5eaebef198b80fbe2d1c82a5e87292",
        image: "/images/ibm-software-engineering.png", // Placez l'image dans public/images/
      },
      /* Pour ajouter un autre certificat IBM, il suffit de rajouter un objet ici :
      {
        name: "React Basics",
        link: "https://coursera.org/share/...",
        image: "/images/ibm-react-basics.jpg",
      }
      */
    ],
  },
  {
    title: "Certifications Cisco Réseaux & Sécurité",
    issuer: "Credly — Cisco",
    year: "2025",
    description:
      "Certifications Cisco en réseaux et sécurité. Consultez mon profil Credly officiel.",
    icon: "ShieldCheck",
    tags: ["Cisco", "Réseaux", "Sécurité"],
    certificates: [
      {
        name: " badge junior-cybersecurity ",
        link: "https://www.credly.com/users/bassitabimbola/edit/badges/credly",
        image: "/images/junior-cybersecurity-analyst-career-path.1.png",
      },
      {
        name: " badge  ",
        link: "https://www.credly.com/users/bassitabimbola/edit/badges/credly",
        image: "/images/network-technician-career-path.png",
      },
    ],
  },
  {
    title: "Baccalauréat Scientifique",
    issuer: "Lycée Garçon de Bingerville",
    year: "2023–2024",
    description:
      "Baccalauréat Scientifique. Base solide en mathématiques, physique et sciences.",
    icon: "BookOpen",
    tags: ["Sciences", "Mathématiques"],
  },
];

export const projects = [
  {
    id: "foodleroy",
    title: "FoodLeroy",
    category: "HTML / CSS / JS",
    description: "Application / site web de restauration rapide et gestion de menu.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interface fluide et responsive",
      "Navigation intuitive",
      "Gestion dynamique des éléments"
    ],
    github: "https://github.com/bassit95/",
    demo: "https:///bassit95.github.io/FoodLeroy",
    image: "/images/foodleroy.png"
  },
  {
    id: "foody",
    title: "Foody",
    category: "HTML / CSS / JS",
    description: "Plateforme moderne de commande et de découverte culinaire.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Design épuré et moderne",
      "Expérience utilisateur optimisée",
      "Déploiement sur GitHub Pages"
    ],
    github: "https://github.com/bassit95",
    demo: "https://bassit95.github.io/foody/",
    image: "/images/foody.png"
  },
  // Exemple d'ajout d'un 3ème projet :
  {
    id: "roginio",
    title: "roginio",
    category:  "HTML / CSS / JS", // Doit correspondre à une catégorie de filterCategories
    description: "Plateforme moderne de commande et de découverte de meuble de luxe.",
    stack:  ["HTML", "CSS", "JavaScript"],
     features: [
      "Design épuré et moderne",
      "Expérience utilisateur optimisée",
      "Déploiement sur GitHub Pages"
    ],
    github: "https://github.com/bassit95/myProjetFood",
    demo:  "https://bassit95.github.io/roginio/",
    image: "/images/roginio.png"
  },
  {
    id: "Quiz-culture",
    title: "Quiz-culture",
    category: "HTML / CSS / JS", // Doit correspondre à une catégorie de filterCategories
    description: "plateforme de test connaissance sur la culture africaine",
    stack: ["HTML / CSS / JS"],
    features: [
        "Design épuré et moderne",
      "Expérience utilisateur optimisée",
      "Déploiement sur GitHub Pages"
    ],
     github: "https://github.com/bassit95",
    demo:  "https://bassit95.github.io/QuizCult/",
    image: "/images/cultureQuiz.png"
      },
  {
    id: "Classix",
    title: "Classix",
    category: "HTML / CSS / JS", // Doit correspondre à une catégorie de filterCategories
    description: "plateforme de vente de vetement en ligne",
    stack: ["HTML / CSS / JS"],
    features: [
        "Design épuré et moderne",
      "Expérience utilisateur optimisée",
      "Déploiement sur GitHub Pages"
    ],
     github: "https://github.com/bassit95",
    demo:  "https:/bassit95.github.io/Classix/",
    image: "/images/classix.png"
      },
  {
    id: "Roginio v2",
    title: "Mon Premiere React.js",
    category: "React / Next.js", // Doit correspondre à une catégorie de filterCategories
    description: "Plateforme SaaS développée avec React.js et Tailwind CSS.",
    stack: ["React.js", "Tailwind CSS"],
    features: [
      "Authentification utilisateur",
      "Paiement Stripe",
      "srtucturer et belle archictecture",
      "deploiement sur Vercel"
    ],
    github: "https://github.com/votre-user/mon-projet",
    demo: "https://roginio-v2.vercel.app/",
    image: "/images/roginioV2.png"
  }
];
export const filterCategories = ["Tous", "HTML / CSS / JS", "React / Next.js", "Fullstack"];
