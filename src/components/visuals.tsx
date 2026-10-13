import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export function OrbitArt() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="orbit-grid" />
      <span className="art-coordinate">FIG. 01 — A WORK IN PROGRESS</span>
      <div className="orbit-sphere">
        <svg viewBox="0 0 400 400" fill="none">
          <defs>
            <radialGradient id="orb">
              <stop stopColor="#526e4c" />
              <stop offset=".65" stopColor="#273d2b" />
              <stop offset="1" stopColor="#13271d" />
            </radialGradient>
            <linearGradient id="line">
              <stop stopColor="#d3edab" />
              <stop offset="1" stopColor="#517543" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="148" fill="url(#orb)" />
          {Array.from({ length: 17 }, (_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx={12 + i * 8.5}
              ry="148"
              stroke="url(#line)"
              strokeWidth=".8"
              transform={`rotate(-30 200 200)`}
              opacity={0.25 + i * 0.035}
            />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx="148"
              ry={8 + i * 12}
              stroke="#b6cd98"
              strokeWidth=".6"
              transform="rotate(-30 200 200)"
              opacity=".32"
            />
          ))}
          <ellipse
            cx="200"
            cy="200"
            rx="192"
            ry="56"
            stroke="#d4f5a0"
            strokeWidth="1.3"
            transform="rotate(-30 200 200)"
          />
          <circle cx="355" cy="110" r="7" fill="#d4f5a0" />
        </svg>
      </div>
      <span className="art-plus art-plus-one">+</span>
      <span className="art-plus art-plus-two">+</span>
      <span className="art-label">IDEAS → DESIGN → CODE</span>
      <div className="art-note">
        <span className="tiny-dot" />
        Always evolving
        <ArrowUpRight size={14} />
      </div>
    </div>
  );
}
export function ProjectArt({ kind }: { kind: string }) {
  if (kind === "mangos")
    return (
      <div
        className="project-art mangos-art"
        aria-hidden="true"
        style={{ background: "#fffaf3" }}
      >
        <Image
          src="/mangos-preview.jpg"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1180px) 60vw, 1000px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    );
  if (kind === "focus")
    return (
      <div className="project-art focus-art" aria-hidden="true">
        <div className="focus-window">
          <div className="mock-window-bar">
            <span />
            <span />
            <span />
            <span className="mock-window-title">
              focus / your quiet workspace
            </span>
          </div>
          <div className="focus-content">
            <div className="focus-sidebar">
              f<span>✳</span>
              <i />
              <i />
              <i />
            </div>
            <div className="focus-timer">
              <small>TIME TO FOCUS</small>
              <div className="timer-circle">
                25<span>:00</span>
              </div>
              <span className="timer-label">One thing at a time.</span>
            </div>
            <div className="focus-tasks">
              <small>TODAY’S PLAN</small>
              <p>
                <i />
                Make something good
              </p>
              <p>
                <i />
                Take a little break
              </p>
              <p>
                <i />
                Keep exploring
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  if (kind === "steppe")
    return (
      <div className="project-art steppe-art" aria-hidden="true">
        <div className="steppe-sun" />
        <div className="steppe-hill hill-back" />
        <div className="steppe-hill hill-front" />
        <div className="steppe-content">
          <small>STEPPE STUDIO / EST. 2026</small>
          <span>
            A little closer
            <br />
            to the earth.
          </span>
          <i>EXPLORE THE POSSIBILITIES ↗</i>
        </div>
      </div>
    );
  return (
    <div className="project-art portfolio-art" aria-hidden="true">
      <div className="portfolio-mockup">
        <div className="mini-nav">
          <strong>sainbayar.</strong>
          <span>Work　 About　 Contact ↗</span>
        </div>
        <div className="mini-hero">
          <small>HELLO, I’M SAINBAYAR</small>
          <strong>
            Thoughtful code.
            <br />
            <em>Meaningful</em>
            <br />
            experiences.
          </strong>
          <div className="mini-cta">Explore my work ↗</div>
        </div>
        <div className="mini-orb">✳</div>
        <div className="mini-footer">
          CURIOUS BY NATURE. CREATIVE BY CHOICE.
        </div>
      </div>
    </div>
  );
}
