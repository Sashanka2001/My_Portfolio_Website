"use client";

// SkillsGlobe.tsx
// Usage: import SkillsGlobe from './SkillsGlobe';  then <SkillsGlobe />
// No extra packages needed — icons load from jsdelivr CDN (devicons) or data URIs

import React, { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  SKILLS  — loaded dynamically from the skills section
// ─────────────────────────────────────────────────────────────
interface Skill {
  name: string;
  url: string;
}

const SKILLS: Skill[] = [
  // Web Development
  { name: "React",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Spring Boot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "ASP.NET",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" },
  { name: "Node.js",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
  { name: "Express.js",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "HTML5",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
  { name: "CSS3",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
  { name: "Tailwind CSS",url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  
  // Mobile Development
  { name: "Flutter",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" },
  { name: "Kotlin",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },

  // Programming Languages
  { name: "Java",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
  { name: "C",           url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg" },
  { name: "JavaScript",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { name: "TypeScript",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
  { name: "Python",      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
  { name: "R",           url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { name: "C#",          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" },

  // Database
  { name: "SQL",         url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300758f'><path d='M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5zm0-6c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5z'/></svg>" },
  { name: "MongoDB",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
  { name: "Firebase",    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },

  // Hosting & Platforms
  { name: "Vercel",      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M12 2L2 22h20L12 2z'/></svg>" },
  { name: "AWS",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "Render",      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2346a354'><path d='M12 2L2 22h20L12 2zm0 4l6.4 12.8H5.6L12 6z'/></svg>" },
  { name: "Railway",     url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff007f'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/></svg>" },

  // OS & Testing
  { name: "Linux",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg" },
  { name: "Postman",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Playwright",  url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
  { name: "Swagger",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },

  // Concepts & Tools
  { name: "OOP",         url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338bdf8'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/></svg>" },
  { name: "SOLID",       url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a855f7'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" },
  { name: "SDLC",        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f97316'><path d='M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0012 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0012 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z'/></svg>" },
  { name: "ACID",        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2322c55e'><path d='M12 2L1 21h22L12 2zm0 3.5L18.5 19H5.5L12 5.5z'/></svg>" },
  { name: "Agile",       url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899'><path d='M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm-6 8c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z'/></svg>" },
  { name: "BNF / EBNF",  url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314b8a6'><path d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/></svg>" },
  { name: "Lex & Yacc",  url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23eab308'><path d='M12 2L2 22h20L12 2zm0 3.6L18.4 18H5.6L12 5.6z'/></svg>" },

  // Project management Tools
  { name: "Jira",        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "ClickUp",     url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237b68ee'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z'/></svg>" },

  // Design Tools & IDEs
  { name: "Git",         url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
  { name: "draw.io",     url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23df6c1c'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" },
  { name: "Figma",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "FlutterFlow",  url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2305a4e4'><path d='M12 2L2 22h20L12 2zm0 4l6.4 12.8H5.6L12 6z'/></svg>" },
  { name: "VS Code",     url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ",    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
  { name: "Android Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },

  // Game Engines & Security
  { name: "Unity",       url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
  { name: "Wireshark",   url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2312c5f4'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z'/></svg>" },
];

interface SpherePoint extends Skill {
  idx: number;
  x: number;
  y: number;
  z: number;
}

// Spread skills evenly over a sphere using Fibonacci lattice
function buildSphere(skills: Skill[]): SpherePoint[] {
  const n = skills.length;
  return skills.map((s, i) => {
    const phi   = Math.acos(1 - 2 * (i + 0.5) / n);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return {
      ...s,
      idx: i,
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    };
  });
}

interface AnimationState {
  rotX: number;
  rotY: number;
  velX: number;
  velY: number;
  dragging: boolean;
  lastMX: number;
  lastMY: number;
  pts: SpherePoint[];
  rafId: number | null;
}

// ─────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────
export default function SkillsGlobe() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef     = useRef<HTMLDivElement>(null);
  const nodesRef    = useRef<(HTMLDivElement | null)[]>([]);   // one DOM div per skill, indexed by skill.idx

  // Dynamic responsive values (updated on resize)
  const sizeRef = useRef(850);
  const radiusRef = useRef(330);

  // All mutable animation state lives here — avoids re-renders on every frame
  const S = useRef<AnimationState>({
    rotX: 0.3,
    rotY: 0,
    velX: 0,
    velY: 0.002,
    dragging: false,
    lastMX: 0,
    lastMY: 0,
    pts: buildSphere(SKILLS),
    rafId: null,
  });

  // ── Handle responsive resizing for globe canvas ──────────────
  useEffect(() => {
    function handleResize() {
      const width = Math.max(300, Math.min(window.innerWidth - 40, 850));
      sizeRef.current = width;
      radiusRef.current = width * 0.38;

      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = width;
      }
      if (wrapRef.current) {
        wrapRef.current.style.width = width + "px";
        wrapRef.current.style.height = width + "px";
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Background Particle Network Animation ────────────────────
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const section = document.getElementById("skills");
      canvas.width = window.innerWidth;
      canvas.height = section?.offsetHeight || window.innerHeight;
    };

    setCanvasSize();

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 95; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.45 + 0.25,
      });
    }

    let animId = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94,234,212,${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(94,234,212,${0.11 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", setCanvasSize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  // ── Globe Animation loop ────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const s   = S.current;

    function applyRotation({ x, y, z }: { x: number; y: number; z: number }) {
      const y1 =  y * Math.cos(s.rotX) - z * Math.sin(s.rotX);
      const z1 =  y * Math.sin(s.rotX) + z * Math.cos(s.rotX);
      const x2 =  x * Math.cos(s.rotY) + z1 * Math.sin(s.rotY);
      const z2 = -x * Math.sin(s.rotY) + z1 * Math.cos(s.rotY);
      return { x: x2, y: y1, z: z2 };
    }

    function frame() {
      if (!ctx) return;
      const size = sizeRef.current;
      const radius = radiusRef.current;
      const cx = size / 2;
      const cy = size / 2;

      ctx.clearRect(0, 0, size, size);

      // ── Dark sphere background ──
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 16, 26, 0.75)";
      ctx.fill();

      // ── Project all 3-D points → 2-D screen coords ──
      const projected = s.pts.map(p => {
        const r = applyRotation(p);
        return { px: cx + r.x * radius, py: cy + r.y * radius, z: r.z, idx: p.idx };
      });

      // ── Wireframe mesh (connect nearby point pairs) ──
      for (let i = 0; i < s.pts.length; i++) {
        for (let j = i + 1; j < s.pts.length; j++) {
          const dx = s.pts[i].x - s.pts[j].x;
          const dy = s.pts[i].y - s.pts[j].y;
          const dz = s.pts[i].z - s.pts[j].z;
          if (dx * dx + dy * dy + dz * dz < 0.95) {
            const avgZ    = (projected[i].z + projected[j].z) / 2;
            const opacity = avgZ > 0 ? 0.22 : 0.05;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      // ── Update icon DOM nodes — paint back-to-front (painter's algorithm) ──
      projected
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach(p => {
          const vis = (p.z + 1) / 2;           // 0 = far side, 1 = front
          const div = nodesRef.current[p.idx];
          if (!div) return;

          const scale    = 0.45 + vis * 0.75;
          const baseIconSize = size > 600 ? 36 : 26;
          const iconSize = Math.round(baseIconSize * scale);

          div.style.left      = p.px + "px";
          div.style.top       = p.py + "px";
          div.style.opacity   = vis < 0.08 ? "0" : String(0.15 + vis * 0.85);
          div.style.zIndex    = String(Math.round(vis * 100));

          const img = div.querySelector("img");
          const lbl = div.querySelector("span");
          if (img) { img.style.width = iconSize + "px"; img.style.height = iconSize + "px"; }
          if (lbl) lbl.style.fontSize = Math.round((size > 600 ? 11 : 9) * scale) + "px";
        });

      // ── Auto-spin + drag momentum ──
      if (!s.dragging) {
        s.rotY += s.velY;
        s.rotX += s.velX;
        s.velX *= 0.96;                         // friction
        s.velY += (0.002 - s.velY) * 0.005;    // ease back to base spin speed
      }

      s.rafId = requestAnimationFrame(frame);
    }

    frame();
    return () => {
      if (s.rafId !== null) {
        cancelAnimationFrame(s.rafId);
      }
    };
  }, []);

  // ── Pointer / touch handlers ────────────────────────────────
  function handleDown(mx: number, my: number) {
    const s = S.current;
    s.dragging = true;
    s.lastMX   = mx;
    s.lastMY   = my;
    s.velX     = 0;
    s.velY     = 0;
  }

  // ── Move handler ────────────────────────────────────────────
  function handleMove(mx: number, my: number) {
    const s = S.current;
    if (!s.dragging) return;
    s.velY   = (mx - s.lastMX) * 0.005;
    s.velX   = (my - s.lastMY) * 0.005;
    s.rotY  += s.velY;
    s.rotX  += s.velX;
    s.lastMX = mx;
    s.lastMY = my;
  }

  function handleUp() {
    S.current.dragging = false;
  }

  // ── Render ──────────────────────────────────────────────────
  return (
    <section id="skills" style={sectionStyle}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      </div>

      {/* Floating particles background canvas */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center w-full">
        {/* Section heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-slate-100 gradient-text mb-4">
            Interactive Skills Globe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Drag to rotate and explore the technologies in my stack.
          </p>
        </div>

        {/* Globe container */}
        <div
          ref={wrapRef}
          style={wrapStyle}
          onMouseDown={e  => handleDown(e.clientX, e.clientY)}
          onMouseMove={e  => handleMove(e.clientX, e.clientY)}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={e => handleDown(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={e  => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handleUp}
        >
          {/* Canvas — sphere bg + wireframe */}
          <canvas
            ref={canvasRef}
            style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
          />

          {/* One icon+label div per skill */}
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name + i}
              ref={el => { nodesRef.current[i] = el; }}
              style={nodeStyle}
            >
              <img
                src={skill.url}
                alt={skill.name}
                width={30}
                height={30}
                style={{ display: "block", filter: "drop-shadow(0 0 3px rgba(0,0,0,0.85))" }}
              />
              <span style={labelStyle}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  Styles
// ─────────────────────────────────────────────────────────────
const sectionStyle: React.CSSProperties = {
  textAlign:       "center",
  padding:         "5rem 1rem",
  minHeight:       "85vh",
  display:         "flex",
  flexDirection:   "column",
  alignItems:      "center",
  justifyContent:  "center",
  position:        "relative",
  overflow:        "hidden",
};

const wrapStyle: React.CSSProperties = {
  position:   "relative",
  cursor:     "grab",
  userSelect: "none",
  margin:     "0 auto",
};

const nodeStyle: React.CSSProperties = {
  position:       "absolute",
  display:        "flex",
  flexDirection:  "column",
  alignItems:     "center",
  gap:            "4px",
  transform:      "translate(-50%, -50%)",
  pointerEvents:  "none",
  whiteSpace:     "nowrap",
};

const labelStyle: React.CSSProperties = {
  fontSize:   "11px",
  fontWeight: 600,
  color:      "#ffffff",
  fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
  textShadow: "0 1.5px 4px rgba(0,0,0,1)",
};
