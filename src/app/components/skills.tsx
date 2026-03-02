const skills = {
  Frontend: ["React 19", "Next.js", "Tailwind CSS", "Three.js"],
  Backend: ["Node.js", "Go", "PostgreSQL", "Prisma/Drizzle"],
  DevOps: ["Docker", "AWS (Lamba/S3)", "CI/CD Pipelines", "Edge Functions"]
};

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-white">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-emerald-400 font-medium mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}