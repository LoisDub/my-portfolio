"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../content";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id === "home" ? "" : entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );
    ["home", ...links.map((link) => link.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (
          document
            .getElementById("main-navigation")
            ?.contains(document.activeElement)
        ) {
          menuButton.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <a
          href="#home"
          className="wordmark"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            l<span>.</span>
          </span>
          {profile.name}
          <span className="wordmark-label">/ PORTFOLIO</span>
        </a>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          className={`main-navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <span className="nav-dot" />
            </a>
          ))}
          <a className="header-contact" href={`mailto:${profile.email}`}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
