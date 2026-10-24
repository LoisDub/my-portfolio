import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
} from "lucide-react";
import { profile } from "../content";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-topline">
        <span className="eyebrow">
          INDEPENDENT THINKING. INTENTIONAL BUILDING.
        </span>
        <span className="availability">
          <i /> AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">
            Hi, I’m {profile.name} <span className="intro-line" />
          </p>
          <h1>
            Thoughtful code.
            <br />
            Meaningful
            <br />
            <span className="serif-accent">experiences.</span>
          </h1>
          <p className="hero-description">
            A full-stack developer turning complex problems into
            <br className="desktop-break" /> intuitive experiences. From the
            first pixel to the last API.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a
              className="hero-github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src="/profile/730640427_2416642762164176_2218318876449714497_n.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 740px) 380px, (max-width: 1100px) 45vw, 408px"
            className="hero-portrait-image"
          />
        </div>
      </div>
      <div className="hero-bottom">
        <p>GOOD EXPERIENCES START WITH A SOLID FOUNDATION</p>
        <a href="#work" aria-label="Scroll to selected work">
          <ArrowDown size={16} />
        </a>
      </div>
      <div className="stack-strip" aria-label="Core technologies">
        <span>
          TypeScript<span className="stack-symbol">TS</span>
        </span>
        <span>
          React<span className="stack-symbol react-symbol">✳</span>
        </span>
        <span>
          Next.js<span className="stack-symbol">N↗</span>
        </span>
        <span>
          Node.js<span className="stack-symbol">⬡</span>
        </span>
        <span>
          PostgreSQL<span className="stack-symbol">▤</span>
        </span>
        <span>
          Docker<span className="stack-symbol">▦</span>
        </span>
      </div>
    </section>
  );
}
