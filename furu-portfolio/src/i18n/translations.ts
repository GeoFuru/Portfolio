export type Language = "en" | "es";

export const translations = {
  en: {
    accessibility: {
      returnToTop: "Return to top",
    },

    nav: {
      projects: "Projects",
      gallery: "Gallery",
      about: "About",
    },

    hero: {
      name: "Fernanda Burgos",
      eyebrow: "GEOMATICS · GIS · DATA",
      titleLine1: "Geomatics, data & software development.",
      description:
        "Geomatics, GIS, geospatial data, remote sensing, and software development.",
      button: "Explore my work",
    },

    home: {
      selectedWork: "SELECTED PROJECTS",
      title: "Selected projects.",
      description:
        "Projects combining geospatial science, software, data, and real-world applications.",

      galleryEyebrow: "GALLERY",
      galleryTitle: "A glimpse of my work.",
      galleryLink: "View full gallery →",
    },

    gallery: {
      eyebrow: "GALLERY",
      title: "Frames of my work.",
      description:
        "Photos, cartography, and demo videos from my projects. Open a project card to learn more.",
    },

    projects: {
      eyebrow: "PROJECTS",
      title: "All my projects.",
      description:
        "A collection of projects involving geospatial science, software, data, and real-world applications.",

      searchLabel: "Search projects",
      searchPlaceholder:
        "Search by name, technology, domain...",
      filterButton: "Technologies",
      clearFilters: "Clear filters",
      noResults: "No projects match your search.",
    },

    project: {
      eyebrow: "PROJECT",
      technologies: "Technologies",
      features: "Key features",
      featuresEyebrow: "What it does",
      repository: "View source on GitHub",
      openDemo: "Explore the demo",
      documentation: "Documentation",
      imagePending: "Project screenshot to be added",
      demoEyebrow: "Interactive preview",
      demoTitle: "Try the application",
      demoDescription: "The live application loads on request to keep the page responsive. Its ES/EN control is independent of the portfolio language.",
      demoPrompt: "Load the live application here, or open it in a separate tab.",
      demoLoading: "Loading the interactive map…",
      demoFailed: "The embedded application could not be loaded.",
      demoFallback: "If the embedded app does not load,",
      loadDemo: "Load interactive demo",
      openInNewTab: "Open demo in a new tab",
      tableOfContents: "Project sections",
      onThisPage: "On this page",
      projectNavigation: "Project navigation",
      previousProject: "PREVIOUS PROJECT",
      nextProject: "NEXT PROJECT",
      sectionLabels: {
        overview: "Context",
        problem: "Problem",
        approach: "Approach",
        results: "Results",
        validation: "Validation",
        limitations: "Limitations",
        future: "Future work",
      },
      location: "Location",
      media: "Media",
      openImage: "Open image",
      previousImage: "Previous image",
      nextImage: "Next image",
      closeImage: "Close image",
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
      alpha: "Alpha · Early Development",
      archived: "Archived",
    },

    roles: {
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-Stack",
      desktop: "Desktop App",
      data: "Data",
      analysis: "Analysis",
    },

    about: {
      eyebrow: "ABOUT",
      title: "Geomatics × Software",
      description:
        "I work at the intersection of geospatial science, programming, spatial data, and Earth observation.",
      moreLink: "More about me →",
    },

    aboutPage: {
      eyebrow: "01 / ABOUT ME",
      bio: "FIELD NOTES",
      bioTitle: "Curiosity, research, and making tools",
      interests: "02 / AREAS OF INTEREST",
      interestsTitle: "Areas I keep exploring",
      contact: "Let's connect",
      contactEyebrow: "04 / CONTACT",
      experience: "Experience",
      education: "03 / EDUCATION",
        educationSubtitle: "Currently studying",
      skills: "Skills",
      languages: "Languages",
    },

    footer: {
      text: "GeoFuru · Geomatics · GIS · Data",
    },

    language: {
      english: "English",
      spanish: "Español",
      switchLanguage: "Switch language to Spanish",
    },
  },

  es: {
    accessibility: {
      returnToTop: "Volver arriba",
    },

    nav: {
      projects: "Proyectos",
      gallery: "Galería",
      about: "Sobre mí",
    },

    hero: {
      name: "Fernanda Burgos",
      eyebrow: "GEOMÁTICA · GIS · DATOS",
      titleLine1: "Geomática, datos y desarrollo de software.",
      description:
        "Geomática, SIG, datos geoespaciales, teledetección y desarrollo de software.",
      button: "Explorar mi trabajo",
    },

    home: {
      selectedWork: "PROYECTOS SELECCIONADOS",
      title: "Proyectos seleccionados.",
      description:
        "Proyectos que combinan ciencia geoespacial, software, datos y aplicaciones del mundo real.",

      galleryEyebrow: "GALERÍA",
      galleryTitle: "Una mirada a mi trabajo.",
      galleryLink: "Ver galería completa →",
    },

    gallery: {
      eyebrow: "GALERÍA",
      title: "Fragmentos de mi trabajo.",
      description:
        "Fotografías, cartografía y videos de demostración de mis proyectos. Abre una tarjeta para conocer más sobre cada proyecto.",
    },

    projects: {
      eyebrow: "PROYECTOS",
      title: "Todos mis proyectos.",
      description:
        "Una colección de proyectos relacionados con ciencia geoespacial, software, datos y aplicaciones del mundo real.",

      searchLabel: "Buscar proyectos",
      searchPlaceholder:
        "Buscar por nombre, tecnología, área...",
      filterButton: "Tecnologías",
      clearFilters: "Limpiar filtros",
      noResults:
        "Ningún proyecto coincide con la búsqueda.",
    },

    project: {
      eyebrow: "PROYECTO",
      technologies: "Tecnologías",
      features: "Funciones destacadas",
      featuresEyebrow: "Qué permite hacer",
      repository: "Ver el código en GitHub",
      openDemo: "Explorar la demo",
      documentation: "Documentación",
      imagePending: "Captura del proyecto pendiente",
      demoEyebrow: "Vista interactiva",
      demoTitle: "Prueba la aplicación",
      demoDescription: "La aplicación se carga cuando lo solicitas para mantener la página ágil. Su control ES/EN es independiente del idioma del portafolio.",
      demoPrompt: "Carga aquí la aplicación en vivo o ábrela en una pestaña aparte.",
      demoLoading: "Cargando el mapa interactivo…",
      demoFailed: "No se pudo cargar la aplicación incrustada.",
      demoFallback: "Si la aplicación incrustada no carga,",
      loadDemo: "Cargar demo interactiva",
      openInNewTab: "Abrir demo en otra pestaña",
      tableOfContents: "Secciones del proyecto",
      onThisPage: "En esta página",
      projectNavigation: "Navegación entre proyectos",
      previousProject: "PROYECTO ANTERIOR",
      nextProject: "PROYECTO SIGUIENTE",
      sectionLabels: {
        overview: "Contexto",
        problem: "Problema",
        approach: "Enfoque",
        results: "Resultados",
        validation: "Validación",
        limitations: "Limitaciones",
        future: "Trabajo futuro",
      },
      location: "Ubicación",
      media: "Multimedia",
      openImage: "Abrir imagen",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      closeImage: "Cerrar imagen",
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
      alpha: "Alfa · Desarrollo inicial",
      archived: "Archivado",
    },

    roles: {
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full-Stack",
      desktop: "Escritorio",
      data: "Datos",
      analysis: "Análisis",
    },

    about: {
      eyebrow: "SOBRE MÍ",
      title: "Geomática × Software",
      description:
        "Trabajo en la intersección entre ciencia geoespacial, programación, datos espaciales y observación de la Tierra.",
      moreLink: "Más sobre mí →",
    },

    aboutPage: {
      eyebrow: "01 / SOBRE MÍ",
      bio: "APUNTES DE TRABAJO",
      bioTitle: "Curiosidad, investigación y creación de herramientas",
      interests: "02 / ÁREAS DE INTERÉS",
      interestsTitle: "Áreas que sigo explorando",
      contact: "Conectemos",
      contactEyebrow: "04 / CONTACTO",
      experience: "Experiencia",
      education: "03 / FORMACIÓN ACADÉMICA",
        educationSubtitle: "Formación en curso",
      skills: "Habilidades",
      languages: "Idiomas",
    },

    footer: {
      text: "GeoFuru · Geomática · GIS · Datos",
    },

    language: {
      english: "English",
      spanish: "Español",
      switchLanguage: "Cambiar idioma a inglés",
    },
  },
} as const;
