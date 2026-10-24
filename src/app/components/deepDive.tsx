"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "../content";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <article className={`project-card project-${project.id}`}>
      <button
        type="button"
        className="project-open"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        aria-label={`View details: ${project.title}`}
      >
        <ProjectPreview media={project.media[0]} />
        <span className="project-information">
          <span className="project-label">
            {project.number} / {project.label}
          </span>
          <span className="project-title-row">
            <span className="project-title" role="heading" aria-level={3}>
              {project.title}
            </span>
            <span className="project-arrow">
              <ArrowUpRight size={22} />
            </span>
          </span>
          <span className="project-description">{project.description}</span>
          <span className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={`${project.id}-title`}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-header">
            <span className="eyebrow">{project.label}</span>
            <button
              type="button"
              className="dialog-close"
              aria-label="Close project details"
              onClick={() => dialog.current?.close()}
              autoFocus
            >
              <X size={20} />
            </button>
          </div>
          {open && (
            <div className="project-media-gallery">
              {project.media.map((media) => (
                <figure key={media.src}>
                  <ProjectPreview media={media} interactive />
                  {project.media.length > 1 && (
                    <figcaption>{media.alt}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
          <div className="dialog-copy">
            <h2 id={`${project.id}-title`}>{project.title}</h2>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="dialog-overview">{project.overview}</p>
            {project.details.map((detail) => (
              <div className="project-detail" key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            ))}
            {project.repo && (
              <a
                className="button button-primary"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> Explore the source{" "}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </dialog>
    </article>
  );
}
