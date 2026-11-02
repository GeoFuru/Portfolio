import { orbisSpatialUpdates } from "./updates/orbis-spatial";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    "id": "orbis-spatial",
    updates: orbisSpatialUpdates,
    "visibility": "public",
    "title": {
      "en": "Orbis Spatial",
      "es": "Orbis Spatial"
    },
    "subtitle": {
      "es": "Software de escritorio para procesamiento GNSS y análisis geodésico.",
      "en": "Desktop software for GNSS processing and geodetic analysis."
    },
    "description": {
      "en": "A C++17 desktop platform for geodetic processing, GNSS data management, and spatial network analysis. In alpha and active development.",
      "es": "Plataforma de escritorio en C++17 para procesamiento geodésico, gestión de datos GNSS y análisis de redes espaciales. En fase alfa y desarrollo activo."
    },
    "introduction": {
      "es": "Proyecto de ingeniería de software científico desarrollado en C++17. Integra gestión de coordenadas, procesamiento de información GNSS y ajuste de redes mediante una arquitectura modular.",
      "en": "A scientific software engineering project developed in C++17. It integrates coordinate management, GNSS data processing, and network adjustment within a modular architecture."
    },
    "methodologies": [
      "Scientific Computing",
      "Software Architecture",
      "Automated Testing",
      "AI-assisted Development"
    ],
    "statusDetail": {
      "en": "Active development",
      "es": "Desarrollo activo"
    },
    "sections": [
      {
        "id": "overview",
        "type": "overview",
        "eyebrow": {
          "en": "02 / Context",
          "es": "02 / Contexto"
        },
        "title": {
          "en": "Why Orbis Spatial?",
          "es": "¿Por qué Orbis Spatial?"
        },
        "content": {
          "en": "Orbis Spatial emerged from the convergence of geodesy, software engineering, and the need for scientific tools that support structured work with spatial information.\n\nThe project aims to address the complexity of geodetic processing through an architecture that separates mathematical models, data management, and the user experience.\n\nIts goal goes beyond implementing algorithms: it seeks to build an extensible, verifiable, and technically consistent working environment.\n\nDevelopment follows an incremental approach, starting with fundamental coordinate models, data structures, and mathematical operations before integrating more advanced capabilities for GNSS processing, network adjustment, and workflow automation.\n\nThis approach allows each component to be evaluated independently before it becomes part of more complex processes.",
          "es": "Orbis Spatial nace de la convergencia entre la geodesia, la ingeniería de software y la necesidad de herramientas científicas que permitan trabajar con información espacial de manera estructurada.\n\nEl proyecto busca abordar la complejidad del procesamiento geodésico mediante una arquitectura que separe los modelos matemáticos, la gestión de datos y la experiencia de usuario.\n\nSu objetivo no es únicamente implementar algoritmos, sino construir un entorno de trabajo extensible, verificable y técnicamente consistente.\n\nEl desarrollo sigue un enfoque incremental, comenzando por los modelos fundamentales de coordenadas, estructuras de datos y operaciones matemáticas, para posteriormente integrar capacidades más avanzadas de procesamiento GNSS, ajuste de redes y automatización de flujos de trabajo.\n\nEsta aproximación permite evaluar cada componente de forma independiente antes de incorporarlo a procesos de mayor complejidad."
        }
      },
      {
        "id": "technical-approach",
        "type": "approach",
        "eyebrow": {
          "en": "04 / Software engineering",
          "es": "04 / Ingeniería de software"
        },
        "title": {
          "en": "Architecture, technologies, and quality assurance",
          "es": "Arquitectura, tecnologías y aseguramiento de calidad"
        },
        "content": {
          "en": "Orbis Spatial is developed in **C++17**, using **Qt 6** for the desktop interface, **Eigen** for numerical computing, and **CMake** to configure the build system.\n\nThe architecture organizes the project by separating responsibilities across:\n\n- Interface and interaction components.\n- Data models and persistence.\n- Coordinate systems and geodetic references.\n- Calculation engines and scientific processing.\n- Automated tests and validation tools.\n\nThis modular design allows components to be developed, verified, and maintained independently, reducing coupling between scientific logic and visual presentation.\n\n### Validation and quality\n\nDevelopment incorporates automated tests, synthetic scenarios, adjustment networks with known results, and mathematical consistency checks.\n\nReviews also cover data integrity, coordinate transformations, processing state management, and compatibility between components.\n\nThese practices aim to improve software reliability and reproducibility without replacing the certification and validation processes required for professional applications.\n\n**Methodologies:** Scientific Computing · Software Architecture · Automated Testing · AI-assisted Development",
          "es": "Orbis Spatial está desarrollado en **C++17**, utilizando **Qt 6** para la interfaz de escritorio, **Eigen** para computación numérica y **CMake** para la configuración del sistema de compilación.\n\nLa arquitectura organiza el proyecto mediante una separación de responsabilidades entre:\n\n- Interfaz y componentes de interacción.\n- Modelos y persistencia de datos.\n- Sistemas de coordenadas y referencias geodésicas.\n- Motores de cálculo y procesamiento científico.\n- Pruebas automatizadas y herramientas de validación.\n\nEste diseño modular permite desarrollar, verificar y mantener componentes de forma independiente, reduciendo el acoplamiento entre la lógica científica y la presentación visual.\n\n### Validación y calidad\n\nEl desarrollo incorpora pruebas automatizadas, escenarios sintéticos, redes de ajuste con resultados conocidos y comprobaciones de consistencia matemática.\n\nTambién se realizan revisiones de integridad de datos, transformaciones de coordenadas, manejo de estados de procesamiento y compatibilidad entre componentes.\n\nEstas prácticas buscan mejorar la confiabilidad y reproducibilidad del software, sin sustituir los procesos de certificación y validación requeridos para aplicaciones profesionales.\n\n**Metodologías:** Scientific Computing · Software Architecture · Automated Testing · AI-assisted Development"
        }
      },
      {
        "id": "artificial-intelligence",
        "type": "approach",
        "eyebrow": {
          "en": "05 / Artificial intelligence",
          "es": "05 / Inteligencia artificial"
        },
        "title": {
          "en": "AI-assisted Software Engineering & Agentic Workflows",
          "es": "AI-assisted Software Engineering & Agentic Workflows"
        },
        "content": {
          "en": "Orbis Spatial incorporates artificial intelligence tools into its software engineering methodology.\n\n**Large Language Models (LLMs)** and coding agents support technical research, code analysis, implementation, refactoring, documentation, and test design.\n\nAI-assisted work includes:\n\n### LLM-assisted Development\n\nUsing language models to support component implementation, understand dependencies, review design alternatives, and document technical decisions.\n\n### AI Agents & Tool-based Workflows\n\nUsing development agents that can work with environment tools, inspect repositories, execute tasks, and support verification processes.\n\n### Agent Skills & Context Engineering\n\nStructuring specialized instructions, technical context, and reusable procedures to guide agents in programming and research tasks.\n\n### Human-in-the-loop Validation\n\nHuman supervision and evaluation of AI-assisted results, especially for mathematical implementations, geodetic algorithms, and operations that require numerical consistency.\n\n### Automated Testing & Verification\n\nIntegrating automated tests and results review to check implementations against the project's technical requirements.\n\nArtificial intelligence supports the development process, while architectural decisions, scientific interpretation, and acceptance of results remain under human supervision.",
          "es": "El desarrollo de Orbis Spatial incorpora herramientas de inteligencia artificial como parte de su metodología de ingeniería de software.\n\nSe utilizan **Large Language Models (LLMs)** y agentes de programación para apoyar actividades de investigación técnica, análisis de código, implementación, refactorización, documentación y diseño de pruebas.\n\nEl trabajo con IA incluye:\n\n### LLM-assisted Development\n\nUso de modelos de lenguaje para apoyar la implementación de componentes, comprender dependencias, revisar alternativas de diseño y documentar decisiones técnicas.\n\n### AI Agents & Tool-based Workflows\n\nUtilización de agentes de desarrollo capaces de trabajar con herramientas del entorno, inspeccionar repositorios, ejecutar tareas y apoyar procesos de verificación.\n\n### Agent Skills & Context Engineering\n\nEstructuración de instrucciones especializadas, contexto técnico y procedimientos reutilizables para orientar el trabajo de agentes en tareas de programación e investigación.\n\n### Human-in-the-loop Validation\n\nSupervisión y evaluación humana de los resultados generados con asistencia de IA, especialmente en implementaciones matemáticas, algoritmos geodésicos y operaciones que requieren consistencia numérica.\n\n### Automated Testing & Verification\n\nIntegración de pruebas automatizadas y revisión de resultados como mecanismos para contrastar las implementaciones con los requisitos técnicos del proyecto.\n\nLa inteligencia artificial funciona como herramienta de apoyo al proceso de desarrollo, mientras que las decisiones de arquitectura, interpretación científica y aceptación de resultados permanecen bajo supervisión humana."
        }
      },
      {
        "id": "current-status",
        "type": "results",
        "eyebrow": {
          "en": "06 / Status and evolution",
          "es": "06 / Estado y evolución"
        },
        "title": {
          "en": "Active development and upcoming challenges",
          "es": "Desarrollo activo y próximos desafíos"
        },
        "content": {
          "en": "Orbis Spatial is in alpha, with a functional foundation for project management, coordinate representation, and geodetic operations.\n\nGNSS processing components are still undergoing development, integration, and validation, and are not yet considered ready for general operational use.\n\nCurrent priorities include:\n\n- Consolidating calculation engines and their interfaces.\n- Expanding numerical and geodetic validation.\n- Progressively integrating GNSS processing.\n- Improving the traceability of data, configurations, and results.\n- Developing additional transformation, visualization, and automation tools.\n\nIn the long term, the project aims to evolve into a modular geospatial computing environment combining scientific processing, geodetic information management, and extensible analysis tools.\n\nOrbis Spatial is also a space for applied research and continuous learning, bringing together **geomatics, software development, scientific computing, and artificial intelligence applied to engineering**.",
          "es": "Orbis Spatial se encuentra en fase alfa, con una base funcional para la gestión de proyectos, representación de coordenadas y ejecución de operaciones geodésicas.\n\nLos componentes de procesamiento GNSS continúan en desarrollo, integración y validación, por lo que todavía no se consideran preparados para un uso operacional generalizado.\n\nLas prioridades actuales incluyen:\n\n- Consolidación de los motores de cálculo y sus interfaces.\n- Ampliación de la validación numérica y geodésica.\n- Integración progresiva de procesamiento GNSS.\n- Mejora de la trazabilidad de datos, configuraciones y resultados.\n- Desarrollo de herramientas adicionales de transformación, visualización y automatización.\n\nA largo plazo, el proyecto busca evolucionar hacia un entorno modular de computación geoespacial que reúna procesamiento científico, gestión de información geodésica y herramientas extensibles de análisis.\n\nOrbis Spatial es también un espacio de investigación aplicada y aprendizaje continuo, donde convergen **geomática, desarrollo de software, computación científica e inteligencia artificial aplicada a la ingeniería**."
        }
      }
    ],
    "featuresEyebrow": {
      "en": "03 / Capabilities",
      "es": "03 / Funcionalidades"
    },
    "featuresTitle": {
      "en": "System components and capabilities",
      "es": "Componentes y capacidades del sistema"
    },
    "features": [
      {
        "id": "project-coordinates",
        "title": {
          "en": "Project management and spatial data engineering",
          "es": "Gestión de proyectos e ingeniería de datos espaciales"
        },
        "description": {
          "en": "A system for organizing and persisting geodetic information using the native `.orbs` format.\n\nIt includes structures for managing points, stations, and technical resources, alongside geocentric Cartesian (ECEF), geodetic, and projected coordinate models.\n\nThe architecture explicitly distinguishes ellipsoids, coordinate systems, and reference frames, supporting data consistency and traceable operations.",
          "es": "Sistema de organización y persistencia de información geodésica mediante el formato nativo `.orbs`.\n\nIncluye estructuras para gestionar puntos, estaciones y recursos técnicos, junto con modelos de coordenadas cartesianas geocéntricas (ECEF), geodésicas y proyectadas.\n\nLa arquitectura diferencia explícitamente elipsoides, sistemas de coordenadas y marcos de referencia, favoreciendo la consistencia de los datos y la trazabilidad de las operaciones."
        }
      },
      {
        "id": "gnss-processing",
        "title": {
          "en": "GNSS processing and geodetic algorithms",
          "es": "Procesamiento GNSS y algoritmos geodésicos"
        },
        "description": {
          "en": "Development of a specialized engine for GNSS observations, RINEX files, and precise orbit products.\n\nIts architecture supports the progressive integration of baseline processing, FLOAT solution estimation, and integer ambiguity resolution using the LAMBDA algorithm.\n\nGNSS components remain under development and validation, with particular attention to interoperability between stages, observation handling, and evaluation of results using real data.",
          "es": "Desarrollo de un motor especializado para el tratamiento de observaciones GNSS, archivos RINEX y productos orbitales precisos.\n\nSu arquitectura contempla la integración progresiva de procesamiento de líneas base, estimación de soluciones FLOAT y resolución de ambigüedades enteras mediante el algoritmo LAMBDA.\n\nLos componentes GNSS permanecen en desarrollo y validación, con especial atención a la interoperabilidad entre etapas, el tratamiento de observaciones y la evaluación de resultados con datos reales."
        }
      },
      {
        "id": "network-adjustment",
        "title": {
          "en": "Network adjustment and numerical computing",
          "es": "Ajuste de redes y computación numérica"
        },
        "description": {
          "en": "Implementation of a three-dimensional geodetic network adjustment engine using weighted least squares.\n\nThe system builds design and weight matrices, solves systems of equations, and calculates residuals and precision indicators for adjusted coordinates.\n\n**Eigen** handles linear algebra operations, while mathematical logic remains decoupled from the graphical interface to support unit testing, numerical validation, and component reuse.",
          "es": "Implementación de un motor de ajuste tridimensional de redes geodésicas mediante mínimos cuadrados ponderados.\n\nEl sistema construye matrices de diseño y ponderación, resuelve los sistemas de ecuaciones y calcula residuos e indicadores de precisión de las coordenadas ajustadas.\n\nSe utiliza **Eigen** para operaciones de álgebra lineal, manteniendo la lógica matemática desacoplada de la interfaz gráfica para facilitar pruebas unitarias, validación numérica y reutilización de componentes."
        }
      }
    ],
    "platform": "Windows",
    "year": 2026,
    "status": "alpha",
    "technologies": [
      "cpp",
      "qt",
      "eigen",
      "cmake"
    ],
    "domains": [
      {
        "en": "Geodesy",
        "es": "Geodesia"
      },
      {
        "en": "Scientific software",
        "es": "Software científico"
      },
      {
        "en": "GNSS",
        "es": "GNSS"
      }
    ],
    "roles": [
      "desktop"
    ],
    "featured": true,
    "mediaLayout": "carousel",
    "mediaEyebrow": {
      "en": "01 / Demonstration",
      "es": "01 / Demostración"
    },
    "mediaTitle": {
      "en": "Orbis Spatial in development",
      "es": "Orbis Spatial en desarrollo"
    },
    "media": [
      {
        "type": "video",
        "src": "/videos/projects/orbis-spatial/development-preview.mp4",
        "poster": "/videos/projects/orbis-spatial/development-preview.jpg",
        "title": {
          "en": "Orbis Spatial in development",
          "es": "Orbis Spatial en desarrollo"
        },
        "description": {
          "en": "A demonstration of the current state of the application, including its interfaces, project structures, and geodetic tools.\n\nOrbis is in alpha. Its modules are evolving progressively, and some capabilities are still undergoing implementation, integration, and validation.",
          "es": "Demostración del estado actual de la aplicación, incluyendo sus interfaces, estructuras de proyectos y herramientas geodésicas.\n\nOrbis se encuentra en fase alfa. Sus módulos evolucionan de manera progresiva y algunas capacidades continúan en implementación, integración y validación."
        }
      },
{
  "type": "image",
  "src": "/images/projects/orbis-spatial/workspace-1.png",
  "title": {
    "es": "Espacio de trabajo inicial",
    "en": "Initial workspace"
  }
},
{
  "type": "image",
  "src": "/images/projects/orbis-spatial/workspace-2.png",
  "title": {
    "es": "Estaciones y observaciones RINEX",
    "en": "Stations and RINEX observations"
  }
},
{
  "type": "image",
  "src": "/images/projects/orbis-spatial/workspace-3.png",
  "title": {
    "es": "Configuración de referencias geodésicas",
    "en": "Geodetic reference settings"
  }
},
{
  "type": "image",
  "src": "/images/projects/orbis-spatial/workspace-4.png",
  "title": {
    "es": "Revisión de referencias y diagnósticos",
    "en": "Reference review and diagnostics"
  }
}
    ],
    "engineeringHighlight": {
      "title": {
        "es": "Ingeniería asistida por IA",
        "en": "AI-assisted engineering"
      },
      "description": {
        "es": "Desarrollo con LLMs, agentes de programación, skills especializadas y validación automatizada.",
        "en": "Development with LLMs, coding agents, specialized skills, and automated validation."
      }
    }
  },

  //GNSS-Reference-Station-Viewer

  {
    id: "gnss-reference-station-viewer",
    visibility: "public",

    title: {
      en: "GNSS Reference Station Viewer",
      es: "Visor de Estaciones GNSS de Referencia",
    },

    subtitle: {
      en: "A spatial reference for Chile's GNSS station networks.",
      es: "Una referencia espacial de las redes de estaciones GNSS de Chile.",
    },

    description: {
      en: "An interactive map to locate and compare reference stations across Chile.",
      es: "Un mapa interactivo para localizar y comparar estaciones de referencia en Chile.",
    },

    year: 2026,

    status: "completed",

    technologies: [
      "javascript",
      "leaflet",
      "openstreetmap",
      "gnss-ntrip",
      "utm",
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

    roles: ["frontend"],

    featured: true,

    featuresEyebrow: {
      en: "03 / Features",
      es: "03 / Funcionalidades",
    },

    featuresTitle: {
      en: "What can you do with the viewer?",
      es: "¿Qué puedes hacer con el visor?",
    },

    github: "https://github.com/Geofuru/GNSS-Reference-Station-Viewer",

    image: "/images/projects/gnss-reference-station-viewer/capture-nearby.png",

    imageAlt: {
      en: "Map of Santiago showing nearby reference stations, proximity distances, station connections, and adjustable radius circles.",
      es: "Mapa de Santiago con estaciones de referencia cercanas, distancias, conexiones entre estaciones y círculos de radio ajustable.",
    },

    liveDemo:
      "https://geofuru.github.io/GNSS-Reference-Station-Viewer/",

    demo: {
      url: "https://geofuru.github.io/GNSS-Reference-Station-Viewer/",
      mode: "iframe",
      title: {
        en: "Interactive GNSS station map",
        es: "Mapa interactivo de estaciones GNSS",
      },
      sectionEyebrow: {
        en: "08 / Demo",
        es: "08 / Demo",
      },
      heading: {
        en: "Explore the viewer",
        es: "Explora el visor",
      },
      description: {
        en: "You can use the application directly on this page to explore stations, try the measurement tools, and learn about its features.\n\nThe demo has its own language selector, independent of the portfolio language.",
        es: "Puedes utilizar la aplicación directamente desde esta página para explorar las estaciones, probar las herramientas de medición y consultar sus funciones.\n\nLa demo incluye su propio selector de idioma, independiente del idioma del portafolio.",
      },
    },

    mediaLayout: "carousel",

    mediaTitle: {
      en: "Project screenshots",
      es: "Capturas del proyecto",
    },

    media: [
      {
        type: "image",
        src: "/images/projects/gnss-reference-station-viewer/capture-nearby.png",
        title: {
          en: "Proximity analysis and nearby stations",
          es: "Análisis de proximidad y estaciones cercanas",
        },
        description: {
          en: "The map displays nearby reference stations, distance labels, and adjustable radius circles.",
          es: "El mapa muestra estaciones de referencia cercanas, sus distancias y círculos de radio ajustable.",
        },
      },
      {
        type: "image",
        src: "/images/projects/gnss-reference-station-viewer/capture-measurement.png",
        title: {
          en: "Polygon measurement and CSV export",
          es: "Medición de polígonos y exportación CSV",
        },
        description: {
          en: "A measured polygon is displayed with its area and perimeter alongside the CSV export controls.",
          es: "Un polígono medido muestra su área y perímetro junto a los controles para exportarlo en CSV.",
        },
      },
      {
        type: "image",
        src: "/images/projects/gnss-reference-station-viewer/capture-result.png",
        title: {
          en: "Measured area and perimeter",
          es: "Área y perímetro medidos",
        },
        description: {
          en: "The map presents the measured polygon with its calculated area and perimeter.",
          es: "El mapa presenta el polígono medido con el área y el perímetro calculados.",
        },
      },
    ],

    features: [
      {
        id: "station-exploration",
        title: {
          en: "Explore GNSS stations",
          es: "Explorar estaciones GNSS",
        },
        description: {
          en: "View stations directly on the map, search by code, and filter results by network: GA, JPL, Geocom, IGS, or CSN.",
          es: "Consulta las estaciones directamente en el mapa, busca por código y filtra los resultados según su red: GA, JPL, Geocom, IGS o CSN.",
        },
      },
      {
        id: "proximity",
        title: {
          en: "Find nearby stations",
          es: "Encontrar estaciones cercanas",
        },
        description: {
          en: "Use the device location to identify and rank the closest stations. Distances are calculated with the Haversine formula.",
          es: "Utiliza la ubicación del dispositivo para identificar y ordenar las estaciones más próximas. Las distancias se calculan mediante la fórmula de Haversine.",
        },
      },
      {
        id: "measurement",
        title: {
          en: "Measure distances and areas",
          es: "Medir distancias y superficies",
        },
        description: {
          en: "Draw points and polygons on the map to calculate distances, perimeters, and areas. You can also inspect each vertex in geographic and UTM coordinates.",
          es: "Dibuja puntos y polígonos sobre el mapa para calcular distancias, perímetros y áreas. También puedes consultar las coordenadas de cada vértice, tanto geográficas como UTM.",
        },
      },
      {
        id: "coverage",
        title: {
          en: "Visualize distance radii",
          es: "Visualizar radios de distancia",
        },
        description: {
          en: "Display adjustable-radius circles around stations. This tool shows reference distances and does not necessarily represent actual GNSS signal coverage.",
          es: "Representa círculos de radio ajustable alrededor de las estaciones. Esta herramienta permite observar distancias de referencia, sin representar necesariamente la cobertura real de la señal GNSS.",
        },
      },
      {
        id: "export",
        title: {
          en: "Export measurements",
          es: "Exportar mediciones",
        },
        description: {
          en: "Save measured polygons as CSV files with their areas and vertex coordinates in both systems.",
          es: "Guarda los polígonos medidos en archivos CSV, incluyendo superficies y coordenadas de sus vértices en ambos sistemas.",
        },
      },
    ],

    sections: [
      {
        id: "overview",
        type: "overview",
        eyebrow: {
          en: "02 / Context",
          es: "02 / Contexto",
        },
        title: {
          en: "Context and purpose",
          es: "Contexto y propósito",
        },
        content: {
          en: "This project began during the Observation Adjustment course, with the idea of bringing together and visualizing GNSS reference stations in Chile.\n\nWhat started as a reference map grew to include new tools: network filters, station search, map-based measurements, and proximity analysis. The result is a web viewer that brings different geospatial operations together in a single interface.",
          es: "Este proyecto comenzó durante el curso de Ajuste de Observaciones, con la idea de reunir y visualizar estaciones GNSS de referencia en Chile.\n\nLo que inicialmente era un mapa de consulta fue creciendo con nuevas herramientas: filtros por red, búsqueda de estaciones, mediciones sobre el mapa y análisis de proximidad. El resultado es un visor web que reúne distintas operaciones geoespaciales en una sola interfaz.",
        },
      },
      {
        id: "technical-approach",
        type: "approach",
        eyebrow: {
          en: "04 / Development",
          es: "04 / Desarrollo",
        },
        title: {
          en: "Technical implementation",
          es: "Implementación técnica",
        },
        content: {
          en: "The viewer is built with HTML, CSS, and JavaScript, using Leaflet for map visualization and CARTO basemaps with data from OpenStreetMap.\n\nStation data is managed locally in JavaScript, while search, filtering, and measurement tools run directly in the browser.\n\nCustom functions calculate distances with Haversine, convert geographic coordinates to UTM, and calculate areas. The application can also export results as CSV and switch between Spanish and English.",
          es: "El visor está desarrollado con HTML, CSS y JavaScript, utilizando Leaflet para la visualización cartográfica y mapas base de CARTO con datos de OpenStreetMap.\n\nLos datos de las estaciones se gestionan localmente en JavaScript, mientras que las herramientas de búsqueda, filtrado y medición funcionan directamente en el navegador.\n\nPara los cálculos se implementaron funciones de distancia mediante Haversine, conversión de coordenadas geográficas a UTM y cálculo de superficies. La aplicación también permite exportar resultados en CSV y cambiar entre español e inglés.",
        },
      },
      {
        id: "results",
        type: "results",
        eyebrow: {
          en: "05 / Result",
          es: "05 / Resultado",
        },
        title: {
          en: "From a course exercise to a web application",
          es: "Del ejercicio académico a una aplicación web",
        },
        content: {
          en: "An academic exercise grew into a web application that combines station lookup, map visualization, and basic spatial analysis tools.\n\nThe development also gave me experience working with mapping libraries, geospatial calculations, and interactive features in JavaScript.",
          es: "El proyecto pasó de ser una actividad de clase a convertirse en una aplicación que combina consulta de estaciones, visualización cartográfica y herramientas básicas de análisis espacial.\n\nAdemás de servir como una forma de explorar las redes GNSS disponibles en Chile, el desarrollo me permitió trabajar con bibliotecas de mapas, cálculos geoespaciales e interacciones en JavaScript.",
        },
      },
      {
        id: "limitations",
        type: "limitations",
        eyebrow: {
          en: "06 / Scope",
          es: "06 / Alcance",
        },
        title: {
          en: "Considerations and limitations",
          es: "Alcance y limitaciones",
        },
        content: {
          en: "The viewer is primarily intended for exploring reference stations in Chile and performing straightforward spatial queries.\n\nProximity distances are approximations calculated on a sphere, while the circles shown on the map are distance references and do not necessarily represent real GNSS signal coverage.\n\nStation data comes from the dataset included in the project and is not updated automatically.",
          es: "El visor está pensado principalmente para explorar estaciones de referencia en Chile y realizar consultas espaciales sencillas.\n\nLas distancias de proximidad son aproximaciones calculadas sobre una esfera, mientras que los radios mostrados en el mapa son referencias visuales y no representan necesariamente la cobertura real de la señal GNSS.\n\nLos datos de las estaciones corresponden al conjunto incorporado al proyecto y no cuentan con un sistema automático de actualización.",
        },
      },
      {
        id: "future",
        type: "future",
        eyebrow: {
          en: "07 / Next steps",
          es: "07 / Próximos pasos",
        },
        title: {
          en: "Possible next steps",
          es: "Posibles mejoras",
        },
        content: {
          en: "A future version could include station-data updates, more detailed information about data sources, and additional tools for assessing GNSS network availability.\n\nI would also like to expand the spatial analysis options and improve data management.",
          es: "Una futura versión podría incorporar actualizaciones de las estaciones, información más detallada sobre sus fuentes y herramientas adicionales para evaluar la disponibilidad de las redes GNSS.\n\nTambién me gustaría ampliar las opciones de análisis espacial y mejorar la gestión de los datos.",
        },
      },
    ],
  },

  // Geo Data Tools

  {
    id: "geo-data-tools",
    visibility: "public",

    title: {
      en: "Geo Data Tools",
      es: "Geo Data Tools",
    },

    description: {
      en: "Python scripts for satellite imagery search, coverage-aware scene selection, remote-sensing preparation, and GNSS product downloads.",
      es: "Scripts en Python para buscar imágenes satelitales, seleccionar escenas según su cobertura, preparar datos de teledetección y descargar productos GNSS.",
    },

    subtitle: {
      en: "Python tools for geospatial automation",
      es: "Herramientas en Python para automatización geoespacial",
    },

    sections: [
      {
        id: "overview",
        type: "overview",

        eyebrow: {
          en: "02 / Context",
          es: "02 / Contexto",
        },

        title: {
          en: "Automating repetitive work",
          es: "Automatizar lo repetitivo",
        },

        content: {
          en: "Working with geospatial data often involves querying catalogs, reviewing available scenes, checking coverage, and preparing files before analysis can begin.\n\nI developed these tools to simplify some of that work and reuse the same processes across projects, without repeating each search or download manually.\n\nOver time, the collection has added new data sources and capabilities, from searches in Earth Engine to downloads of GNSS orbital products.",
          es: "Trabajar con datos geoespaciales suele implicar consultar catálogos, revisar escenas disponibles, comprobar coberturas y preparar archivos antes de comenzar el análisis.\n\nDesarrollé estas herramientas para simplificar parte de ese trabajo y reutilizar los mismos procesos en distintos proyectos, sin tener que repetir cada búsqueda o descarga manualmente.\n\nCon el tiempo, la colección fue incorporando nuevas fuentes de datos y funciones, desde búsquedas en Earth Engine hasta la descarga de productos orbitales GNSS.",
        },
      },

      {
        id: "implementation",
        type: "approach",
        eyebrow: {
          en: "04 / Development",
          es: "04 / Desarrollo",
        },
        title: {
          en: "Implementation",
          es: "Implementación",
        },
        content: {
          en: "The project is written in Python and uses libraries such as GeoPandas to handle geometries and study areas, together with query interfaces for ASF and Google Earth Engine.\n\nEach tool runs independently from the terminal, using parameters or interactive configuration depending on the operation. For scene selection, spatial criteria help evaluate how much each image contributes to the area of interest's coverage.\n\nOutputs are saved in formats that can be used in QGIS and other geospatial analysis software.",
          es: "El proyecto está desarrollado en Python y utiliza bibliotecas como GeoPandas para manejar geometrías y áreas de estudio, junto con interfaces de consulta de ASF y Google Earth Engine.\n\nCada herramienta funciona de forma independiente desde la terminal, con parámetros o configuraciones interactivas según el tipo de operación. Para la selección de escenas se utilizan criterios espaciales que permiten evaluar cuánto aporta cada imagen a la cobertura del área de interés.\n\nLos resultados se guardan en formatos que pueden utilizarse posteriormente en QGIS u otros programas de análisis geoespacial.",
        },
      },
      {
        id: "results",
        type: "results",
        eyebrow: {
          en: "05 / Results",
          es: "05 / Resultados",
        },
        title: {
          en: "Data ready for the next step",
          es: "Datos listos para seguir trabajando",
        },
        content: {
          en: "These tools are not intended to replace a GIS; they make the work before analysis easier. Depending on the workflow, they can produce layers of selected scenes, coverage tables, satellite mosaics, configuration files, or downloaded and checked GNSS products.\n\nThe collection can continue to grow and brings together solutions I can reuse in other geomatics, remote-sensing, and geodesy projects.",
          es: "El objetivo de estas herramientas no es reemplazar un SIG, sino facilitar el trabajo previo al análisis. Según el proceso, pueden generarse capas con escenas seleccionadas, tablas de cobertura, mosaicos satelitales, archivos de configuración o productos GNSS descargados y verificados.\n\nLa colección sigue siendo ampliable y reúne soluciones que puedo reutilizar en otros proyectos de geomática, teledetección y geodesia.",
        },
      },
    ],

    featuresEyebrow: {
      en: "03 / Tools",
      es: "03 / Herramientas",
    },
    featuresTitle: {
      en: "Search, prepare, and download geospatial data",
      es: "Buscar, preparar y descargar datos geoespaciales",
    },
    features: [
      {
        id: "satellite-imagery",
        title: {
          en: "Satellite imagery search and selection",
          es: "Búsqueda y selección de imágenes satelitales",
        },
        description: {
          en: "The Sentinel-1 and ALOS PALSAR scripts query the Alaska Satellite Facility catalog for scenes that intersect a study area. They apply filters and select scenes based on their contribution to area coverage, rather than relying only on a date-based search. Results include geographic footprints, coverage information, and links to the available products.",
          es: "Los scripts de Sentinel-1 y ALOS PALSAR consultan el catálogo de Alaska Satellite Facility para encontrar escenas que intersectan un área de estudio. Además de aplicar filtros, permiten seleccionar escenas considerando su contribución a la cobertura del área, evitando depender únicamente de una búsqueda por fecha. Los resultados incluyen huellas geográficas, información de cobertura y enlaces a los productos encontrados.",
        },
      },
      {
        id: "earth-engine",
        title: {
          en: "Earth Engine data and composites",
          es: "Datos y composiciones de Earth Engine",
        },
        description: {
          en: "The Google Earth Engine tools search imagery and datasets, configure analysis periods, and export results. They support searches for individual scenes, temporal composites, and RGB Sentinel-2 mosaics, with options to download results as GeoTIFF.",
          es: "Las herramientas de Google Earth Engine permiten buscar imágenes y conjuntos de datos, configurar periodos de análisis y exportar resultados. Incluyen búsquedas de escenas individuales, composiciones temporales y generación de mosaicos RGB de Sentinel-2, con opciones para descargar resultados en GeoTIFF.",
        },
      },
      {
        id: "gnss-products",
        title: {
          en: "GNSS products",
          es: "Productos GNSS",
        },
        description: {
          en: "The GNSS module requests geodetic products by calendar date or GPS week. It supports precise orbit, clock, navigation, and other products available from public archives, and handles downloads, decompression, and basic checks of retrieved files.",
          es: "El módulo GNSS permite solicitar productos geodésicos a partir de fechas de calendario o semanas GPS. Admite archivos de órbitas precisas, relojes, navegación y otros productos disponibles en archivos públicos. También gestiona la descarga, descompresión y comprobación básica de los archivos obtenidos.",
        },
      },
    ],

    mediaLayout: "carousel",
    mediaTitle: {
      en: "Workflow demo",
      es: "Demostración de flujos de trabajo",
    },
    media: [
      {
        type: "video",
        src: "/videos/projects/geo-data-tools/workflows.mp4",
        poster: "/videos/projects/geo-data-tools/workflows.jpg",
        title: {
          en: "Selected workflows: InSAR, PALSAR, and ALS",
          es: "Flujos seleccionados: InSAR, PALSAR y ALS",
        },
        description: {
          en: "This recording demonstrates the InSAR, PALSAR, and ALS workflows. The Earth Engine and GNSS tools described on this page are not shown in this clip.",
          es: "Esta grabación muestra los flujos InSAR, PALSAR y ALS. Las herramientas de Earth Engine y GNSS descritas en esta página no aparecen en este video.",
        },
      },
    ],

    year: 2026,

    status: "completed",

    technologies: [
      "python",
      "google-earth-engine",
      "asf",
      "geopandas",
      "sentinel-1",
      "alos-palsar",
    ],

    domains: [
      {
        en: "Remote Sensing",
        es: "Teledetección",
      },
      {
        en: "Geospatial Data",
        es: "Datos Geoespaciales",
      },
      {
        en: "Automation",
        es: "Automatización",
      },
    ],

    roles: ["data"],

    featured: true,

    github: "https://github.com/GeoFuru/geo-data-tools",
  },

];
