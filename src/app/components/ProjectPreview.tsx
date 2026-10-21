import {
  ArrowUpRight,
  Check,
  Command,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import type { Project } from "../content";

export default function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  if (kind === "portfolio")
    return (
      <div className="project-visual portfolio-visual" aria-hidden="true">
        <span className="visual-index">DESIGN MEETS DEVELOPMENT</span>
        <div className="portfolio-browser">
          <div className="preview-browser-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>loisdub / portfolio</span>
            <ArrowUpRight size={11} />
          </div>
          <div className="mini-site">
            <div className="mini-site-nav">
              <b>
                l<span>.</span>
              </b>
              <span>
                Work&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; Contact
              </span>
              <span>Let’s talk ↗</span>
            </div>
            <div className="mini-site-hero">
              <span>FULL STACK ENGINEER · CREATIVE THINKER</span>
              <h3>
                Thoughtful code.
                <br />
                Meaningful <em>experiences.</em>
              </h3>
              <p>Turning complex problems into intuitive experiences.</p>
              <div className="mini-cta">Explore my work ↘</div>
              <div className="mini-orbit">
                <i />
                <i />
                <i />
                <span>✳</span>
              </div>
            </div>
            <div className="mini-site-footer">
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
        <span className="visual-note">CRAFTED FROM THE GROUND UP ↗</span>
      </div>
    );
  if (kind === "workspace")
    return (
      <div className="project-visual workspace-visual" aria-hidden="true">
        <div className="workspace-app">
          <aside>
            <span className="workspace-logo">
              <Command size={17} /> space
            </span>
            <span className="workspace-search">
              <Search size={10} /> Quick find
            </span>
            <span className="workspace-nav active">
              <LayoutDashboard size={11} /> Overview
            </span>
            <span className="workspace-nav">▦ &nbsp; Projects</span>
            <span className="workspace-nav">☑ &nbsp; My tasks</span>
            <span className="workspace-nav">◷ &nbsp; Activity</span>
            <small>YOUR WORKSPACE</small>
            <span className="workspace-nav">
              <i className="project-dot" /> Website refresh
            </span>
            <span className="workspace-nav">
              <i className="project-dot blue" /> Design system
            </span>
            <span className="workspace-avatar">
              L<span>My workspace</span>
            </span>
          </aside>
          <div className="workspace-main">
            <div className="workspace-top">
              <span>Workspace / Overview</span>
              <MoreHorizontal size={13} />
            </div>
            <div className="workspace-title">
              <div>
                <small>A LITTLE CLARITY GOES A LONG WAY</small>
                <h3>Make room for good work.</h3>
              </div>
              <Plus size={17} />
            </div>
            <div className="workspace-stats">
              <div>
                <span>In progress</span>
                <b>
                  06 <i>↗</i>
                </b>
              </div>
              <div>
                <span>Completed</span>
                <b>
                  12 <i>✓</i>
                </b>
              </div>
              <div>
                <span>On your radar</span>
                <b>
                  03 <i>◷</i>
                </b>
              </div>
            </div>
            <div className="workspace-list-heading">
              Your priorities <span>This week⌄</span>
            </div>
            {[
              "Refine the homepage experience",
              "Review component library",
              "Map out the next sprint",
            ].map((task, index) => (
              <div className="workspace-task" key={task}>
                <span className={`task-check ${index === 1 ? "checked" : ""}`}>
                  {index === 1 && <Check size={9} />}
                </span>
                <span>{task}</span>
                <i>{index === 0 ? "In progress" : "To do"}</i>
              </div>
            ))}
            <div className="workspace-progress">
              <div>
                <b>A little progress, every day.</b>
                <span>You’re finding your flow.</span>
              </div>
              <span>✳</span>
            </div>
          </div>
        </div>
        <span className="visual-note">ILLUSTRATIVE INTERFACE CONCEPT</span>
      </div>
    );
  return (
    <div className="project-visual commerce-visual" aria-hidden="true">
      <div className="commerce-app">
        <div className="commerce-nav">
          <b>
            form<span> & </span>field
          </b>
          <span>Objects &nbsp; Our story &nbsp; Bag (0)</span>
        </div>
        <div className="commerce-body">
          <div className="commerce-copy">
            <span>LESS, BUT MORE CONSIDERED.</span>
            <h3>
              Objects for
              <br />
              <em>the everyday.</em>
            </h3>
            <p>
              Simple forms. Lasting presence.
              <br />A little intention in every detail.
            </p>
            <span className="commerce-cta">
              Explore the collection <ArrowUpRight size={10} />
            </span>
          </div>
          <div className="lamp-scene">
            <span className="lamp-halo" />
            <div className="lamp">
              <i className="lamp-shade" />
              <i className="lamp-stem" />
              <i className="lamp-base" />
            </div>
            <span className="lamp-shadow" />
            <span className="lamp-caption">THE EVERYDAY LAMP / 01</span>
          </div>
        </div>
        <div className="commerce-footer">
          <span>THOUGHTFULLY MADE.</span>
          <span>FOR THE WAY YOU LIVE.</span>
        </div>
      </div>
      <span className="visual-note">ILLUSTRATIVE STOREFRONT CONCEPT</span>
    </div>
  );
}
