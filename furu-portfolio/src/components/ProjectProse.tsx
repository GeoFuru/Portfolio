function inlineText(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export default function ProjectProse({ text }: { text: string }) {
  return text.split(/\n\s*\n/).map((block, index) => {
    if (block.startsWith("### ")) return <h3 key={index}>{inlineText(block.slice(4))}</h3>;
    if (block.startsWith("- ")) {
      return <ul className="project-prose" key={index}>{block.split("\n").map((item, itemIndex) => (
        <li key={itemIndex}>{inlineText(item.replace(/^- /, ""))}</li>
      ))}</ul>;
    }
    return <p className="project-prose" key={index}>{inlineText(block)}</p>;
  });
}
