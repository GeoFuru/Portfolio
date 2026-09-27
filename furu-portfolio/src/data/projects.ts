import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "orbis-spatial",

    title: {
      en: "Orbis Spatial",
      es: "Orbis Spatial",
    },

    description: {
      en: "Desktop application for GNSS, surveying and geodesy, focused on rigorous spatial computation and geodetic workflows.",
      es: "Aplicación de escritorio para GNSS, topografía y geodesia, enfocada en el cálculo espacial riguroso y los flujos de trabajo geodésicos.",
    },

    sections: [
      {
        id: "overview",
        type: "overview",

        title: {
          en: "Overview",
          es: "Descripción general",
        },

        content: {
          en: "Orbis Spatial is a desktop application for GNSS, surveying, and geodetic workflows. It is designed as a long-term platform for rigorous spatial computation, project management, and geodetic analysis.",
          es: "Orbis Spatial es una aplicación de escritorio para flujos de trabajo de GNSS, topografía y geodesia. Está diseñada como una plataforma de largo plazo para el cálculo espacial riguroso, la gestión de proyectos y el análisis geodésico.",
        },
      },

      {
        id: "approach",
        type: "approach",

        title: {
          en: "Approach",
          es: "Enfoque",
        },

        content: {
          en: "The application is being developed around a modular architecture, separating the user interface from geodetic computation, coordinate models, GNSS processing, adjustment algorithms, and data persistence.",
          es: "La aplicación se está desarrollando en torno a una arquitectura modular que separa la interfaz de usuario del cálculo geodésico, los modelos de coordenadas, el procesamiento GNSS, los algoritmos de ajuste y la persistencia de datos.",
        },
      },

      {
        id: "validation",
        type: "validation",

        title: {
          en: "Validation",
          es: "Validación",
        },

        content: {
          en: "Core adjustment components are tested using deterministic and redundant test cases to verify matrix construction, weighted least-squares solutions, residuals, and numerical results.",
          es: "Los componentes principales del ajuste se prueban mediante casos de prueba deterministas y redundantes para verificar la construcción de matrices, las soluciones de mínimos cuadrados ponderados, los residuos y los resultados numéricos.",
        },
      },
    ],

    platform: "Windows",

    image: "/images/projects/orbis-spatial/main-interface.png",
    
    media: [
      {
        type: "image",

        src: "/images/projects/orbis-spatial/main-interface.png",

        title: {
          en: "Orbis Spatial",
          es: "Orbis Spatial",
        },

        description: {
          en: "Current development interface for the Orbis Spatial desktop application.",
          es: "Interfaz actual de desarrollo de la aplicación de escritorio Orbis Spatial.",
        },
      },

      {
        type: "image",

        src: "/images/projects/orbis-spatial/kirby.png",

        title: {
          en: "Kirby",
          es: "Kirby",
        },

        description: {
          en: "Definitely important to the project.",
          es: "Definitivamente importante para el proyecto.",
        },
      },
    ],

    year: 2026,

    status: "ongoing",

    technologies: [
      "cpp",
      "qt",
      "eigen",
      "cmake",
    ],

    domains: [
      {
        en: "Geodesy",
        es: "Geodesia",
      },
      {
        en: "Surveying",
        es: "Topografía",
      },
      {
        en: "GNSS",
        es: "GNSS",
      },
      {
        en: "Software",
        es: "Software",
      },
    ],

    featured: true,
  },

  {
    id: "volcanic-monitoring",

    title: {
      en: "Volcanic Monitoring System",
      es: "Sistema de Monitoreo Volcánico",
    },

    description: {
      en: "Remote sensing and spatial analysis workflow for monitoring volcanic environments using Earth observation data.",
      es: "Flujo de trabajo de teledetección y análisis espacial para el monitoreo de ambientes volcánicos mediante datos de observación de la Tierra.",
    },

    year: 2026,

    status: "ongoing",

    image: "/images/projects/volcanic-monitoring/main.jpg",

    technologies: [
      "Python",
      "PostGIS",
      "Sentinel-1",
      "Sentinel-2",
      "FastAPI",
    ],

    domains: [
      {
        en: "Remote Sensing",
        es: "Teledetección",
      },
      {
        en: "GIS",
        es: "GIS",
      },
      {
        en: "Environmental Monitoring",
        es: "Monitoreo Ambiental",
      },
    ],

    featured: true,

    location: {
      en: "Villarrica, Chile",
      es: "Villarrica, Chile",
    },

    coordinates: [-71.93937, -39.42085], // longitude, latitude — WGS 84 (EPSG:4326), decimal degrees.
  },
];