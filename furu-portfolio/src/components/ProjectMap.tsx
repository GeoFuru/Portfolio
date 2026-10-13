import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { getBasemap } from "../utils/basemap";

interface ProjectMapProps {
  coordinates: [number, number];
  title: string;
}

function ProjectMap({
  coordinates,
  title,
}: ProjectMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    // Coordinates are stored as [longitude, latitude].
    const [longitude, latitude] = coordinates;

    const position: L.LatLngExpression = [
      latitude,
      longitude,
    ];

    const map = L.map(mapRef.current).setView(
      position,
      11,
    );

    const basemap = getBasemap();

    L.tileLayer(basemap.url, {
      attribution: basemap.attribution,
    }).addTo(map);

    if (basemap.overlayUrl) {
      L.tileLayer(basemap.overlayUrl, {
        attribution: basemap.attribution,
      }).addTo(map);
    }

    L.circleMarker(position, {
      radius: 8,
    })
      .addTo(map)
      .bindPopup(title)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [coordinates, title]);

  return <div ref={mapRef} className="project-map" />;
}

export default ProjectMap;