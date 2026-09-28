import type { Project } from "../types/project";

export const projects: Project[] = [
  {

    // Orbis spatial

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

  //volcanic-exposure-gis

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

  // Viña del mar

  {
    id: "terrain-data-assessment",

    title: {
      en: "Terrain Data Assessment",
      es: "Evaluación de Datos para Modelamiento del Terreno",
    },

    description: {
      en: "Technical assessment of geospatial datasets for terrain modelling, focusing on data sources, spatial reference systems, resolution, scale, raster and vector structures, topographic characteristics, and data limitations.",
      es: "Evaluación técnica de datos geoespaciales destinados al modelamiento del terreno, considerando fuentes de datos, sistemas de referencia, resolución, escala, estructuras ráster y vectoriales, características topográficas y limitaciones de la información.",
    },

    year: 2026,

    status: "ongoing",

    image: "/images/projects/terrain-data-assessment/main.jpg",

    technologies: [
      "GIS",
      "QGIS",
      "Raster Analysis",
      "Vector Analysis",
    ],

    domains: [
      {
        en: "GIS",
        es: "GIS",
      },
      {
        en: "Data Quality",
        es: "Calidad de Datos",
      },
      {
        en: "Terrain Analysis",
        es: "Análisis del Terreno",
      },
    ],

    featured: false,

    location: {
      en: "Viña del Mar, Chile",
      es: "Viña del Mar, Chile",
    },

    coordinates: [-71.55, -33.02], // approximate project area — WGS 84 (EPSG:4326), decimal degrees.
  },

  //GNSS-Reference-Station-Viewer

  {
    id: "gnss-reference-station-viewer",

    title: {
      en: "GNSS Reference Station Viewer",
      es: "Visor de Estaciones GNSS de Referencia",
    },

    description: {
      en: "Interactive web GIS for exploring GNSS reference stations in Chile, with spatial filtering, distance analysis, measurement tools, coverage visualization, and coordinate data export.",
      es: "Web GIS interactivo para explorar estaciones GNSS de referencia en Chile, con filtrado espacial, análisis de distancias, herramientas de medición, visualización de cobertura y exportación de datos de coordenadas.",
    },

    year: 2026,

    status: "completed",

    image: "/images/projects/gnss-reference-station-viewer/main.jpg",

    technologies: [
      "JavaScript",
      "Leaflet",
      "OpenStreetMap",
      "GNSS / NTRIP",
      "UTM",
    ],

    domains: [
      {
        en: "Web GIS",
        es: "Web GIS",
      },
      {
        en: "GNSS",
        es: "GNSS",
      },
      {
        en: "Spatial Analysis",
        es: "Análisis Espacial",
      },
    ],

    featured: false,

    github: "https://github.com/Geofuru/GNSS-Reference-Station-Viewer",

    liveDemo:
      "https://geofuru.github.io/GNSS-Reference-Station-Viewer/",
  },
];



