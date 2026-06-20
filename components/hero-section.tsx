"use client"
import { useState, useEffect, useRef } from "react"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

// Particle Animation Pattern (matching contact/page.tsx art code)
const ParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }

    setCanvasSize()
    
    let resizeObserver: ResizeObserver | null = null
    if (canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        setCanvasSize()
      })
      resizeObserver.observe(canvas.parentElement)
    }

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.45 + 0.25,
      })
    }

    let animId = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(94,234,212,${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(94,234,212,${0.15 * (1 - dist / 100)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div className="absolute inset-0 z-0 bg-[#0d1117]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 z-0 opacity-25 bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:34px_34px]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />
    </>
  )
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [hovered, setHovered] = useState<"designer" | "coder" | null>(null)
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        .hero-root {
          font-family: 'Inter', sans-serif;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          position: relative;
        }
        .panel {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
          transition: flex 0.75s cubic-bezier(.77,0,.18,1);
          overflow: hidden;
          cursor: pointer;
        }
        .panel-designer { background: #ffffff; align-items: flex-start; }
        .panel-coder { background: #0d1117; align-items: flex-end; text-align: right; }
        .panel-designer:hover, .panel-designer.active { flex: 1.4; }
        .panel-coder:hover, .panel-coder.active { flex: 1.4; }
        .panel-eyebrow {
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.16em;
          text-transform: uppercase; margin-bottom: 16px;
          position: relative; z-index: 2;
        }
        .panel-designer .panel-eyebrow { color: #bbb; }
        .panel-coder .panel-eyebrow { color: rgba(94,234,212,0.5); }
        .panel-title {
          font-weight: 900;
          font-size: clamp(3rem, 5.5vw, 6rem);
          line-height: 1; letter-spacing: -0.03em;
          margin: 0 0 20px;
          position: relative; z-index: 2;
          transition: transform 0.5s cubic-bezier(.77,0,.18,1);
        }
        .panel-designer .panel-title { color: #1a1a1a; font-family: 'Inter', sans-serif; }
        .panel-coder .panel-title { color: #e2e8f0; font-family: 'Courier New', monospace; font-weight: 700; letter-spacing: -0.02em; }
        .panel:hover .panel-title, .panel.active .panel-title { transform: translateY(-5px); }
        .panel-desc {
          font-size: 0.97rem; font-weight: 400; line-height: 1.65;
          max-width: 270px; position: relative; z-index: 2;
        }
        .panel-designer .panel-desc { color: #666; }
        .panel-coder .panel-desc { color: rgba(180,200,220,0.65); text-align: right; }
        .panel-cta {
          margin-top: 32px; position: relative; z-index: 2;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.3s, transform 0.3s;
          pointer-events: none;
        }
        .panel:hover .panel-cta, .panel.active .panel-cta {
          opacity: 1; transform: translateY(0); pointer-events: auto;
        }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.73rem; font-weight: 700; letter-spacing: 0.13em;
          text-transform: uppercase; cursor: pointer;
          border: none; background: none; padding: 0;
          transition: gap 0.2s;
        }
        .cta-btn:hover { gap: 14px; }
        .panel-designer .cta-btn { color: #1a1a1a; }
        .panel-coder .cta-btn { color: #5eead4; flex-direction: row-reverse; }
        
        .shape-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.055); z-index: 1;
          pointer-events: none; animation: spinRing 20s linear infinite;
        }
        .shape-ring-2 {
          animation-duration: 13s; animation-direction: reverse;
          border-style: dashed; border-color: rgba(0,0,0,0.04);
        }
        @keyframes spinRing { to { transform: rotate(360deg); } }
        .grid-dots {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(94,234,212,0.07) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .code-watermark {
          position: absolute; bottom: 48px; right: 44px; z-index: 1;
          font-family: 'Courier New', monospace; font-size: 0.68rem;
          line-height: 2; color: rgba(94,234,212,0.13); text-align: right;
          pointer-events: none; white-space: nowrap;
        }
        .design-watermark {
          position: absolute; bottom: 48px; left: 44px; z-index: 1;
          font-size: 0.68rem; line-height: 2;
          color: rgba(0,0,0,0.06); pointer-events: none;
        }
        
        .divider {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom,
            transparent 0%, rgba(120,120,120,0.18) 15%,
            rgba(120,120,120,0.18) 85%, transparent 100%);
          z-index: 9; transform: translateX(-50%); pointer-events: none;
        }
        .name-badge {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%); z-index: 15;
          white-space: nowrap; pointer-events: none;
        }
        .name-badge-inner {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.88);
          background: rgba(8,14,24,0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(94,234,212,0.22);
          padding: 7px 24px;
        }
        .scroll-hint {
          position: absolute; bottom: 30px; right: 40px; z-index: 20;
          display: flex; flex-direction: column; align-items: center;
          gap: 6px; opacity: 0.38;
          animation: bobDown 2.6s ease-in-out infinite;
        }
        @keyframes bobDown {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .scroll-hint span {
          font-size: 0.57rem; letter-spacing: 0.22em;
          text-transform: uppercase; color: #5eead4;
        }
        .scroll-hint-line {
          width: 1px; height: 38px;
          background: linear-gradient(to bottom, rgba(94,234,212,0.7), transparent);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-in { animation: fadeUp 0.85s cubic-bezier(.22,1,.36,1) both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.28s; }
        
        @media (max-width: 680px) {
          .hero-root { flex-direction: column; height: auto; min-height: 100svh; }
          .panel { flex: none !important; min-height: 45svh; padding: 44px 28px;
                   align-items: center !important; text-align: center !important; }
          .panel-coder .panel-desc { text-align: center; }
          .divider, .name-badge, .shape-ring, .shape-ring-2 { display: none; }
        }
      `}</style>
      <section id="home" className="hero-root">
        {/* LEFT: DESIGNER */}
        <div
          className={`panel panel-designer${hovered === "designer" ? " active" : ""}`}
          onMouseEnter={() => setHovered("designer")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollToSection("projects")}
        >
          <div className="shape-ring" style={{ width: 280, height: 280, top: 48, right: 80 }} />
          <div className="shape-ring shape-ring-2" style={{ width: 190, height: 190, top: 94, right: 125 }} />
          <div className="design-watermark">
            <div>— layout</div>
            <div>— colour</div>
            <div>— typography</div>
            <div>— interaction</div>
          </div>
          <div className="anim-in d1">
            <p className="panel-eyebrow">UI/UX &amp; Design</p>
            <h2 className="panel-title">D'zigner</h2>
            <p className="panel-desc">
              Crafting intuitive interfaces and cohesive design systems that feel natural to use.
            </p>
            <div className="panel-cta">
              <button className="cta-btn" onClick={e => { e.stopPropagation(); scrollToSection("projects"); }}>
                <span>View my work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* RIGHT: CODER */}
        <div
          className={`panel panel-coder${hovered === "coder" ? " active" : ""}`}
          onMouseEnter={() => setHovered("coder")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollToSection("projects")}
        >
          <ParticleAnimation />
          <div className="grid-dots" />
          <div className="code-watermark">
            <div>&lt;html&gt;</div>
            <div>{' className="jedi"'}</div>
            <div>{' display: flex;'}</div>
            <div>TypeScript</div>
            <div>React / Next.js</div>
            <div>&lt;/html&gt;</div>
          </div>
          <div className="anim-in d2">
            <p className="panel-eyebrow">Dev &amp; Engineering</p>
            <h2 className="panel-title">&lt;coder&gt;</h2>
            <p className="panel-desc">
              Building clean, performant web apps with modern technologies and elegant code.
            </p>
            <div className="panel-cta">
              <button className="cta-btn" onClick={e => { e.stopPropagation(); scrollToSection("contact"); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>Work with me</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}