"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ProjectMedia } from "../content";

export default function ProjectPreview({
  media,
  interactive = false,
}: {
  media: ProjectMedia;
  interactive?: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = video.current;
    if (!element || interactive) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const updatePlayback = () => {
      if (visible && !motion.matches && !document.hidden) {
        void element.play().catch(() => {
          // The full demo remains available with controls in the project dialog.
        });
      } else {
        element.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    observer.observe(element);
    motion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      element.pause();
    };
  }, [interactive]);

  return (
    <div className="project-visual project-media">
      {media.type === "video" ? (
        <video
          ref={video}
          className="project-media-asset"
          src={media.src}
          aria-label={media.alt}
          muted
          loop={!interactive}
          playsInline
          controls={interactive}
          preload="metadata"
        />
      ) : (
        <Image
          className="project-media-asset"
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          sizes={interactive ? "(max-width: 720px) 100vw, 668px" : "(max-width: 640px) 100vw, 50vw"}
        />
      )}
    </div>
  );
}
