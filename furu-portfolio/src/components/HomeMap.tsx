import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

function HomeMap() {
  const { language } = useLanguage();
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const projectsWithCoordinates =
      projects.filter(
        (project) => project.coordinates,
      );

    if (projectsWithCoordinates.length === 0) {
      return;
    }

    const firstProject =
      projectsWithCoordinates[0];

    if (!firstProject.coordinates) {
      return;
    }

    const [
      firstLongitude,
      firstLatitude,
    ] = firstProject.coordinates;

    const map = L.map(mapRef.current).setView(
      [firstLatitude, firstLongitude],
      10,
    );

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    ).addTo(map);

    projectsWithCoordinates.forEach(
      (project) => {
        if (!project.coordinates) {
          return;
        }

        const [
          longitude,
          latitude,
        ] = project.coordinates;

        const marker = L.circleMarker(
          [latitude, longitude],
          {
            radius: 8,
            weight: 2,
          },
        ).addTo(map);

        const image = project.image
          ? `
              <img
                src="${project.image}"
                alt="${project.title[language]}"
                class="home-map-tooltip-image"
              />
            `
          : "";

        const tooltipContent = `
          <div class="home-map-tooltip">
            ${image}

            <strong>
              ${project.title[language]}
            </strong>

            <span>
              ${project.location?.[language] ?? ""}
            </span>
          </div>
        `;

        marker.bindTooltip(
          tooltipContent,
          {
            sticky: true,
            direction: "top",
            className:
              "home-map-tooltip-container",
          },
        );

        marker.on("click", () => {
          window.location.href =
            `/projects/${project.id}`;
        });
      },
    );

    return () => {
      map.remove();
    };
  }, [language]);

  return (
    <div className="home-map">
      <div
        ref={mapRef}
        className="home-map-container"
      />
    </div>
  );
}

export default HomeMap;