import type { AboutContent } from "../types/about";

export const about: AboutContent = {
  name: "Fernanda Burgos",

  headline: {
    en: "Geomatics × Software Development",
    es: "Geomática × Desarrollo de software",
  },

  bio: [
    {
      en: "I am a Geomatics and Surveying Engineering student with a strong interest in software development and its applications in geospatial science. My main interests include geodesy, GNSS processing, programming, and ways technology can make spatial information easier to work with.",
      es: "Soy estudiante de Ingeniería en Geomensura y Geomática, con un interés especial por el desarrollo de software y sus aplicaciones en las ciencias geoespaciales. Me interesan especialmente la geodesia, el procesamiento GNSS, la programación y las distintas formas en que la tecnología puede facilitar el trabajo con información espacial.",
    },
    {
      en: "I like understanding how the tools I use work, rather than only learning how to operate them. When I come across a repetitive process, a limitation, or something that could be approached differently, I often try to build a solution of my own. That curiosity has led to projects ranging from scripts for automating geospatial data searches and preparation to desktop applications for GNSS processing and geodetic computation.",
      es: "Me gusta entender cómo funcionan las herramientas que utilizo, no solamente aprender a manejarlas. Cuando encuentro un proceso repetitivo, una limitación o algo que creo que podría resolverse de otra manera, suelo intentar desarrollar mi propia solución. De esa curiosidad han surgido varios de mis proyectos, desde scripts para automatizar la búsqueda y preparación de datos geoespaciales hasta aplicaciones de escritorio para procesamiento GNSS y cálculo geodésico.",
    },
    {
      en: "I work mainly with Python, C++, and web technologies, combining my geomatics background with programming, data analysis, and application development. I especially enjoy projects that call for research, experimentation, and connecting knowledge across different fields.",
      es: "Trabajo principalmente con Python, C++ y tecnologías web, combinando mi formación en geomática con programación, análisis de datos y desarrollo de aplicaciones. Disfruto especialmente los proyectos que requieren investigar, experimentar y conectar conocimientos de distintas áreas.",
    },
    {
      en: "I am currently building my knowledge of software engineering, spatial databases, cloud technologies, and artificial intelligence. I am interested in exploring how machine learning and other AI techniques can support data analysis, remote sensing, and geospatial process automation.",
      es: "Actualmente continúo profundizando en ingeniería de software, bases de datos espaciales, tecnologías cloud e inteligencia artificial. Me interesa explorar cómo el aprendizaje automático y otras técnicas de IA pueden aplicarse al análisis de datos, la teledetección y la automatización de procesos geoespaciales.",
    },
    {
      en: "My goal is to keep building useful tools, broaden my technical knowledge, and take part in projects where I can combine geomatics with software development.",
      es: "Mi objetivo es seguir desarrollando herramientas útiles, ampliar mis conocimientos técnicos y participar en proyectos donde pueda combinar la geomática con el desarrollo de software.",
    },
  ],

  interests: [
    { en: "Geodesy & GNSS", es: "Geodesia y GNSS" },
    { en: "Software Development", es: "Desarrollo de software" },
    { en: "Geospatial Data", es: "Datos geoespaciales" },
    { en: "Remote Sensing", es: "Teledetección" },
    { en: "Artificial Intelligence", es: "Inteligencia artificial" },
    { en: "Scientific Computing", es: "Cálculo científico" },
  ],

  contact: [
    {
      label: { en: "Email", es: "Correo" },
      value: "fernanda.franulic.a@gmail.com",
      href: "mailto:fernanda.franulic.a@gmail.com",
    },
    {
      label: { en: "LinkedIn", es: "LinkedIn" },
      value: "linkedin.com/in/fernanda-burgos-3670b838a",
      href: "https://www.linkedin.com/in/fernanda-burgos-3670b838a/",
    },
    {
      label: { en: "GitHub", es: "GitHub" },
      value: "github.com/GeoFuru",
      href: "https://github.com/GeoFuru",
    },
  ],

  education: [
    {
      id: "geomatics-engineering",
      title: {
        en: "Geomatics and Surveying Engineering",
        es: "Ingeniería en Geomensura y Geomática",
      },
      institution: {
        en: "INACAP · Temuco Campus",
        es: "INACAP · Sede Temuco",
      },
      period: {
        en: "In progress",
        es: "En curso",
      },
      description: {
        en: "Studies in surveying, geodesy, geographic information systems, remote sensing, and spatial data processing.",
        es: "Formación en topografía, geodesia, sistemas de información geográfica, teledetección y procesamiento de datos espaciales.",
      },
    },
  ],
};
