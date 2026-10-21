import { ArrowUp, ArrowUpRight, Github, Mail } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/skills";
import { profile } from "./content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <section id="about" className="about-section section-shell">
          <div className="section-eyebrow">
            <span>02 / A LITTLE ABOUT ME</span>
            <span className="tiny-cross">+</span>
          </div>
          <div className="about-grid">
            <div>
              <h2>
                Curiosity drives me.
                <br />
                <span className="serif-accent">Craft defines my work.</span>
              </h2>
              <div className="about-signature">
                {profile.name}
                <span>Full Stack Engineer</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I’m a full-stack engineer who enjoys connecting the dots between
                thoughtful interfaces and the systems that power them.
              </p>
              <p>
                My focus is TypeScript, Next.js, and distributed systems. I turn
                complex logic into straightforward experiences, with equal
                attention to how a product feels and how it works.
              </p>
              <p>
                I like readable code, considered details, and learning something
                new along the way.
              </p>
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                A closer look at my code <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <Skills />
        </section>
        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner">
            <div className="section-eyebrow">
              <span>03 / WHAT’S NEXT?</span>
              <span className="availability">
                <i /> OPEN TO OPPORTUNITIES
              </span>
            </div>
            <div className="contact-grid">
              <h2>
                Good things start
                <br />
                with <span className="serif-accent">a conversation.</span>
              </h2>
              <div className="contact-copy">
                <p>
                  Have a project in mind, an interesting opportunity, or just
                  want to say hello? I’d love to hear from you.
                </p>
                <a
                  className="button button-light"
                  href={`mailto:${profile.email}`}
                >
                  Let’s talk <ArrowUpRight size={18} />
                </a>
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-shell">
        <a className="wordmark" href="#home">
          <span className="brand-mark" aria-hidden="true">
            l<span>.</span>
          </span>
          {profile.name}
        </a>
        <p>Thoughtfully designed. Carefully built.</p>
        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LoisDub on GitHub"
          >
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email LoisDub">
            <Mail size={18} />
          </a>
          <a href="#home" className="back-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </footer>
    </>
  );
}
