import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
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
            A full-stack engineer turning complex problems into
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
        <div
          className="hero-art"
          aria-label="An illustration connecting thoughtful code to a finished interface"
          role="img"
        >
          <div className="art-grid" />
          <span className="art-corner art-corner-top">+</span>
          <span className="art-corner art-corner-bottom">+</span>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-window">
            <div className="window-toolbar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>something-good.tsx</span>
              <Code2 size={13} />
            </div>
            <div className="code-lines">
              <p>
                <span>01</span>
                <b>const</b> approach = {"{"}
              </p>
              <p>
                <span>02</span> curiosity: <em>"always"</em>,
              </p>
              <p>
                <span>03</span> details: <em>"matter"</em>,
              </p>
              <p>
                <span>04</span> purpose: <em>"people"</em>
              </p>
              <p>
                <span>05</span>
                {"}"};
              </p>
            </div>
            <div className="art-interface">
              <div className="interface-head">
                <span className="interface-logo">
                  a<span>↗</span>
                </span>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="interface-body">
                <span className="interface-eyebrow">A LITTLE POSSIBILITY</span>
                <strong>
                  Ideas, brought
                  <br />
                  <em>to life.</em>
                </strong>
                <div className="interface-bottom">
                  <span className="interface-button">
                    Let’s make something <ArrowUpRight size={10} />
                  </span>
                  <div className="interface-sculpture">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="art-note">
            <span className="note-symbol">✳</span>
            <div>
              Built with purpose.
              <br />
              <span>Made for people.</span>
            </div>
          </div>
          <span className="art-caption">
            THE SWEET SPOT BETWEEN LOGIC & CREATIVITY
          </span>
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
