import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    ).addTo(map);

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