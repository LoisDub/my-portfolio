"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "../content";
import ProjectCard from "./deepDive";

const filters = ["All work", "Web development", "Interface concepts"] as const;

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visibleProjects = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );

  return (
    <section id="work" className="work-section section-shell">
      <div className="section-eyebrow">
        <span>01 / SELECTED WORK & EXPLORATIONS</span>
        <span className="tiny-cross">+</span>
      </div>
      <div className="section-heading">
        <div>
          <h2>
            A few things
            <br />
            <span className="serif-accent">I’ve put thought into.</span>
          </h2>
        </div>
        <p>
          From working code to interface explorations.
          <br />A look at how I approach the details.
        </p>
      </div>
      <div className="work-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All work" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <span className="work-count" role="status">
          {String(visibleProjects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div
        className={`project-grid ${visibleProjects.length === 1 ? "single-project" : ""}`}
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a
        className="github-note"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <Github size={17} /> There’s more behind the scenes.
        </span>
        <span>
          Find me on GitHub <ArrowUpRight size={15} />
        </span>
      </a>
    </section>
  );
}
