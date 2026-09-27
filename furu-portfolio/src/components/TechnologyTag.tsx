import { technologies } from "../data/technologies";

interface TechnologyTagProps {
  id: string;
}

function TechnologyTag({ id }: TechnologyTagProps) {
  const technology = technologies.find(
    (technology) => technology.id === id,
  );

  if (!technology) {
    return null;
  }

  return (
    <span className="technology-tag">
      {technology.name}
    </span>
  );
}

export default TechnologyTag;