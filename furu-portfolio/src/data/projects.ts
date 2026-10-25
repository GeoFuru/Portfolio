import type { Project } from "../types/project";

export const projects: Project[] = [
  {

    // Orbis spatial

    id: "orbis-spatial",
    visibility: "public",

    title: {
      en: "Orbis Spatial",
      es: "Orbis Spatial",
    },

    description: {
      en: "A C++ desktop application bringing GNSS processing, coordinate management, and geodetic network adjustment into one workspace.",
      es: "Aplicación de escritorio desarrollada en C++ que reúne el procesamiento GNSS, la gestión de coordenadas y el ajuste de redes geodésicas en un mismo entorno.",
    },

    subtitle: {
      en: "Desktop software for geomatics, GNSS, and geodesy",
      es: "Software de escritorio para geomática, GNSS y geodesia",
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
          en: "Why Orbis Spatial?",
          es: "¿Por qué Orbis Spatial?",
        },

        content: {
          en: "Orbis grew from my interest in geodesy and software development, and from the idea of bringing common geomatics workflows together in one tool.\n\nThe goal is to keep geodetic and mathematical operations rigorous without making people confront their internal complexity at every step. The project therefore focuses on organizing data, configuring processes, and presenting results clearly as well as implementing algorithms.\n\nDevelopment is incremental: it starts with data structures, coordinate models, and core calculations, then builds toward more advanced tools.",
          es: "Orbis nació de mi interés por la geodesia y el desarrollo de software, y de la idea de reunir en una herramienta distintos procesos habituales de la geomática.\n\nEl objetivo es mantener el rigor de las operaciones matemáticas y geodésicas sin que las personas deban enfrentarse a su complejidad interna en cada paso. Por eso, el proyecto busca organizar los datos, facilitar la configuración de los procesos y presentar los resultados con claridad, además de implementar algoritmos.\n\nEl desarrollo es progresivo: comienza por las estructuras de datos, los modelos de coordenadas y los cálculos fundamentales, y avanza hacia herramientas más complejas.",
        },
      },
      {
        id: "technical-approach",
        type: "approach",
        eyebrow: {
          en: "04 / Technical development",
          es: "04 / Desarrollo técnico",
        },
        title: {
          en: "Architecture, technologies, and validation",
          es: "Arquitectura, tecnologías y validación",
        },
        content: {
          en: "Orbis Spatial is developed in C++17, with Qt 6 for the desktop interface, Eigen for linear algebra, and CMake for project configuration and builds. Its architecture separates the interface, project data, geodetic models, and processing engines. This makes it possible to develop and test mathematical components independently and add tools without concentrating the application logic in the interface.\n\nA key part of development is checking mathematical consistency before integrating components into application workflows. Automated tests, synthetic cases, and adjustment networks with known results are used for this purpose. GNSS validation also examines algorithm behavior and integration across calculation stages. These checks support development; they are not a certification of accuracy for professional use.",
          es: "Orbis Spatial está desarrollado en C++17, con Qt 6 para la interfaz de escritorio, Eigen para álgebra lineal y CMake para configurar y compilar el proyecto. Su arquitectura separa la interfaz, los datos del proyecto, los modelos geodésicos y los motores de procesamiento. Esto permite desarrollar y probar los componentes matemáticos de forma independiente, e incorporar herramientas sin concentrar la lógica de la aplicación en la interfaz.\n\nUna parte importante del desarrollo es comprobar la consistencia matemática antes de integrar los componentes en los flujos de trabajo. Para ello se utilizan pruebas automatizadas, casos sintéticos y redes de ajuste con resultados conocidos. La validación GNSS también revisa el comportamiento de los algoritmos y su integración entre las distintas etapas del cálculo. Estas comprobaciones apoyan el desarrollo; no constituyen una certificación de precisión para uso profesional.",
        },
      },
      {
        id: "current-status",
        type: "results",
        eyebrow: {
          en: "05 / Project status",
          es: "05 / Estado del proyecto",
        },
        title: {
          en: "A project in active development",
          es: "Un proyecto en desarrollo activo",
        },
        content: {
          en: "Orbis Spatial is not a finished application. It already has a functional foundation for project management, coordinate representation, and geodetic calculations, while some GNSS tools still need further stabilization and validation before they are ready for regular use.\n\nThe current priority is to consolidate existing workflows, improve communication between calculation engines and the interface, and expand tools for configuring processes and reviewing results. Longer term, I would like to add surveying tools, transformations, visualization, and automation while keeping an architecture that can support the software's gradual growth.",
          es: "Orbis Spatial todavía no es una aplicación terminada. Ya cuenta con una base funcional para gestionar proyectos, representar coordenadas y ejecutar cálculos geodésicos, mientras que algunas herramientas GNSS aún requieren estabilización y validación antes de estar listas para un uso habitual.\n\nLa prioridad actual es consolidar los procesos existentes, mejorar la comunicación entre los motores de cálculo y la interfaz, y ampliar las herramientas para configurar procesos y revisar resultados. A largo plazo, me gustaría incorporar herramientas de levantamiento, transformaciones, visualización y automatización, manteniendo una arquitectura que permita ampliar el software de forma progresiva.",
        },
      },
    ],

    featuresEyebrow: {
      en: "03 / Capabilities",
      es: "03 / Funcionalidades",
    },
    featuresTitle: {
      en: "What Orbis Spatial is being built to do",
      es: "Herramientas que reúne Orbis Spatial",
    },
    features: [
      {
        id: "project-coordinates",
        title: {
          en: "Project and coordinate management",
          es: "Gestión de proyectos y coordenadas",
        },
        description: {
          en: "Projects organize points, stations, and related resources in the native .orbs format. The coordinate model includes geocentric Cartesian (ECEF), geodetic, and projected representations, with ellipsoids, reference frames, and coordinate systems modeled separately.",
          es: "Los proyectos permiten organizar puntos, estaciones y otros recursos en el formato propio .orbs. El modelo de coordenadas contempla representaciones cartesianas geocéntricas (ECEF), geodésicas y proyectadas, y mantiene separados los elipsoides, los marcos de referencia y los sistemas de coordenadas.",
        },
      },
      {
        id: "gnss-processing",
        title: {
          en: "GNSS processing",
          es: "Procesamiento GNSS",
        },
        description: {
          en: "Components are being developed for RINEX observation files and precise orbit products. The GNSS engine is still in progress, with baseline processing, FLOAT solutions, and integer ambiguity resolution using LAMBDA among its planned capabilities. Current work focuses on integration, behavior with real data, and making results easier to review.",
          es: "Se están desarrollando componentes para trabajar con archivos de observación RINEX y productos orbitales precisos. El motor GNSS sigue en desarrollo e incluye entre sus capacidades previstas el procesamiento de líneas base, soluciones FLOAT y resolución de ambigüedades enteras mediante LAMBDA. El trabajo actual se centra en integrar estos componentes, evaluar su comportamiento con datos reales y facilitar la revisión de resultados.",
        },
      },
      {
        id: "network-adjustment",
        title: {
          en: "Geodetic network adjustment",
          es: "Ajuste de redes geodésicas",
        },
        description: {
          en: "A three-dimensional least-squares engine works with vector observations between points. It builds design and weight matrices, solves the system, and estimates residuals and precision for adjusted coordinates. The calculations use Eigen and can be tested independently of the graphical interface.",
          es: "El motor de ajuste tridimensional por mínimos cuadrados trabaja con observaciones vectoriales entre puntos. Construye las matrices de diseño y ponderación, resuelve el sistema y estima los residuos y la precisión de las coordenadas ajustadas. Los cálculos utilizan Eigen y pueden probarse independientemente de la interfaz gráfica.",
        },
      },
    ],

    platform: "Windows",

    year: 2026,

    status: "alpha",

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

    roles: ["desktop"],

    featured: true,
    mediaLayout: "carousel",
    mediaTitle: {
      en: "Development showcase",
      es: "Demostración del desarrollo",
    },
    media: [
      {
        type: "video",
        src: "/videos/projects/orbis-spatial/development-preview.mp4",
        poster: "/videos/projects/orbis-spatial/development-preview.jpg",
        title: {
          en: "Orbis Spatial development showcase",
          es: "Demostración de Orbis Spatial",
        },
        description: {
          en: "A look at the current state of the application. Orbis is in an early alpha stage; workflows and interfaces are evolving, and some capabilities remain under development.",
          es: "Un recorrido por el estado actual de la aplicación. Orbis se encuentra en una fase alfa temprana: los flujos de trabajo y las interfaces siguen evolucionando, y algunas capacidades aún están en desarrollo.",
        },
      },
    ],
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
