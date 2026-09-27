export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
    },

    hero: {
      eyebrow: "GEOMATICS · GIS · DATA",
      titleLine1: "Building software for the spatial world.",
      description:
        "Geomatics, surveying, geospatial data, remote sensing, and software development.",
      button: "Explore my work",
    },

    home: {
      selectedWork: "SELECTED WORK",
      title: "Things I build.",
      description:
        "Projects combining geospatial science, software, data, and real-world applications.",

      galleryEyebrow: "GALLERY",
      galleryTitle: "A glimpse of my work.",
    },

    projects: {
      eyebrow: "PROJECTS",
      title: "Things I build.",
      description:
        "A collection of projects involving geospatial science, software, data, and real-world applications.",
    },

    project: {
      eyebrow: "PROJECT",
      technologies: "Technologies",
      location: "Location",
      media: "Media",
      back: "← Back to projects",
      notFound: "Project not found",
      backToProjects: "Back to projects",
    },

    facts: {
      status: "STATUS",
      year: "YEAR",
      platform: "PLATFORM",
      domain: "DOMAIN",
    },

    status: {
      completed: "Completed",
      ongoing: "Ongoing",
      archived: "Archived",
    },

    about: {
      eyebrow: "ABOUT",
      title: "Geomatics × Software",
      description:
        "I work at the intersection of geospatial science, programming, spatial data, and Earth observation.",
    },

    footer: {
      text: "FURU · Geomatics · GIS · Data",
    },

    language: {
      english: "English",
      spanish: "Español",
    },
  },

  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
    },

    hero: {
      eyebrow: "GEOMÁTICA · GIS · DATOS",
      titleLine1: "Desarrollando software para el mundo espacial.",
      description:
        "Geomática, topografía, datos geoespaciales, teledetección y desarrollo de software.",
      button: "Explorar mi trabajo",
    },

    home: {
      selectedWork: "PROYECTOS DESTACADOS",
      title: "Lo que construyo.",
      description:
        "Proyectos que combinan ciencia geoespacial, software, datos y aplicaciones del mundo real.",

      galleryEyebrow: "GALERÍA",
      galleryTitle: "Una mirada a mi trabajo.",
    },

    projects: {
      eyebrow: "PROYECTOS",
      title: "Lo que construyo.",
      description:
        "Una colección de proyectos relacionados con ciencia geoespacial, software, datos y aplicaciones del mundo real.",
    },

    project: {
      eyebrow: "PROYECTO",
      technologies: "Tecnologías",
      location: "Ubicación",
      media: "Multimedia",
      back: "← Volver a proyectos",
      notFound: "Proyecto no encontrado",
      backToProjects: "Volver a proyectos",
    },

    facts: {
      status: "ESTADO",
      year: "AÑO",
      platform: "PLATAFORMA",
      domain: "ÁREA",
    },

    status: {
      completed: "Completado",
      ongoing: "En desarrollo",
      archived: "Archivado",
    },

    about: {
      eyebrow: "SOBRE MÍ",
      title: "Geomática × Software",
      description:
        "Trabajo en la intersección entre ciencia geoespacial, programación, datos espaciales y observación de la Tierra.",
    },

    footer: {
      text: "FURU · Geomática · GIS · Datos",
    },

    language: {
      english: "English",
      spanish: "Español",
    },
  },
} as const;