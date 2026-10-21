import { Braces, Database, Layers3 } from "lucide-react";

const skills = [
  {
    title: "The interface",
    subtitle: "FRONTEND",
    icon: Braces,
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Behind the scenes",
    subtitle: "BACKEND",
    icon: Database,
    items: ["Node.js", "Go", "PostgreSQL", "Prisma / Drizzle"],
  },
  {
    title: "Built to keep going",
    subtitle: "INFRASTRUCTURE",
    icon: Layers3,
    items: ["Docker", "AWS Lambda / S3", "CI/CD pipelines", "Edge functions"],
  },
];

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-heading">
        <span className="eyebrow">MY EVERYDAY TOOLKIT</span>
        <span>Different layers. The same attention to detail.</span>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, subtitle, icon: Icon, items }) => (
          <div className="skill-column" key={title}>
            <div className="skill-icon">
              <Icon size={21} strokeWidth={1.5} />
            </div>
            <span className="skill-subtitle">{subtitle}</span>
            <h3>{title}</h3>
            <div className="skill-tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
