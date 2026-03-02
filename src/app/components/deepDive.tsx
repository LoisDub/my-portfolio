// components/ProjectCard.tsx
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  repoUrl: string;
}

export default function ProjectCard({ title, description, tags, metrics, repoUrl }: ProjectProps) {
  return (
    <div className="group border border-white/10 bg-zinc-900/50 rounded-3xl p-8 hover:bg-zinc-800/50 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-emerald-500/10 rounded-2xl">
          <Code2 className="text-emerald-400 w-6 h-6" />
        </div>
        <div className="flex gap-3">
          <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
          <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-white/5 bg-white/5 text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-6 border-t border-white/5">
        <p className="text-sm font-medium text-emerald-400">
          <span className="text-gray-500 mr-2">Impact:</span> {metrics}
        </p>
      </div>
    </div>
  );
}