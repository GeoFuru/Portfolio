import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { publicProjects } from "../utils/projects";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";
import { getBasemap } from "../utils/basemap";

function HomeMap() {
  const { language } = useLanguage();
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const projectsWithCoordinates =
      publicProjects.filter(
        (project) => project.coordinates,
      );

    if (projectsWithCoordinates.length === 0) {
      return;
    }

    const map = L.map(mapRef.current);

    const basemap = getBasemap();

    L.tileLayer(basemap.url, {
      attribution: basemap.attribution,
    }).addTo(map);

    if (basemap.overlayUrl) {
      L.tileLayer(basemap.overlayUrl, {
        attribution: basemap.attribution,
      }).addTo(map);
    }

    // Frame every project: fitBounds always shows all of
    // them, and maxZoom keeps a single project (or very
    // close ones) from zooming in too far.
    const bounds = L.latLngBounds(
      projectsWithCoordinates.map(
        (project) => {
          const [longitude, latitude] =
            project.coordinates!;

          return [latitude, longitude] as [
            number,
            number,
          ];
        },
      ),
    );

    map.fitBounds(bounds, {
      padding: [70, 100],
      maxZoom: 10,
    });

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
                src="${withBase(project.image)}"
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
            // "auto" places the tooltip on the side
            // with more room, so it never gets cut
            // off by the edge of the map.
            direction: "auto",
            className:
              "home-map-tooltip-container",
          },
        );

        marker.on("click", () => {
          window.location.href = withBase(
            `/projects/${project.id}`,
          );
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
