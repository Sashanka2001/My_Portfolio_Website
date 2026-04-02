"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

interface HeroSectionProps {
  scrollToSection: (section: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated constellation/particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }

    let animId: number
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

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(94,234,212,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .hero-root {
          font-family: 'Inter', sans-serif;
        }

        /* Staggered entrance animations */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        .anim-1 { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .anim-2 { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .anim-3 { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.5s both; }
        .anim-4 { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.7s both; }
        .anim-5 { animation: fadeSlideUp 0.9s cubic-bezier(.22,1,.36,1) 0.9s both; }
        .line-anim { animation: scaleIn 1.1s cubic-bezier(.22,1,.36,1) 0.6s both; transform-origin: left; }
        .float-anim { animation: floatY 6s ease-in-out infinite; }

        /* Name styles */
        .name-display {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-style: normal;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        /* Glowing teal text */
        .teal-glow {
          color: #5eead4;
          text-shadow: 0 0 40px rgba(94,234,212,0.35), 0 0 80px rgba(94,234,212,0.15);
        }

        /* Pill badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: rgba(94,234,212,0.8);
          background: rgba(94,234,212,0.05);
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 6px #5eead4;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        /* Vertical stat dividers */
        .stat-block {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 20px;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          border: 1px solid #5eead4;
          color: #5eead4;
          padding: 12px 28px;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.35s;
        }
        .btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: #5eead4;
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
          z-index: 0;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover { color: #0f172a; }
        .btn-primary span, .btn-primary svg { position: relative; z-index: 1; }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.6);
          padding: 12px 28px;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
        }
        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.4);
          color: rgba(255,255,255,0.9);
        }

        /* Decorative corner bracket */
        .corner-bracket {
          position: absolute;
          width: 24px; height: 24px;
          border-color: rgba(94,234,212,0.4);
          border-style: solid;
        }
        .corner-tl { top: 0; left: 0; border-width: 1px 0 0 1px; }
        .corner-tr { top: 0; right: 0; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 0; left: 0; border-width: 0 0 1px 1px; }
        .corner-br { bottom: 0; right: 0; border-width: 0 1px 1px 0; }

        /* Scroll indicator */
        @keyframes scrollBounce {
          0%,100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(8px); opacity: 0.4; }
        }
        .scroll-indicator { animation: scrollBounce 2s ease-in-out infinite; }

        /* Noise texture overlay */
        .noise-overlay {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        /* Horizontal rule */
        .teal-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(94,234,212,0.5) 40%, rgba(94,234,212,0.5) 60%, transparent);
        }

        /* Image frame */
        .img-frame {
          position: relative;
          width: 280px; height: 340px;
        }
        .img-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          filter: grayscale(20%) contrast(1.05);
        }
        .img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(10,20,30,0.7));
        }
      `}</style>

      <section
        id="home"
        className="hero-root relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#080e18" }}
      >
        {/* Canvas particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Deep background gradients */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(20,80,80,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 20%, rgba(10,40,80,0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 flex flex-col items-center gap-16 min-h-screen">

          {/* Left: text */}
          <div className="flex-1 flex flex-col items-center gap-7 text-center">

            {/* Name */}
            <div className="anim-2 mb-6">
              <h1 className="name-display" style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)", color: "rgba(255,255,255,0.92)" }}>
                Sashanka<br />
                <span className="teal-glow">Rathnayaka</span>
              </h1>
            </div>

            {/* Animated rule */}
            <div className="w-48 teal-rule line-anim" />

            {/* Role + description */}
            <div className="anim-3 space-y-3" style={{ maxWidth: "480px" }}>
              <p style={{ fontSize: "0.82rem", letterSpacing: "0.14em", color: "rgba(94,234,212,0.75)", textTransform: "uppercase" }}>
                Computer Science Undergraduate
              </p>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.75", fontFamily: "'Inter', sans-serif", fontStyle: "normal", fontWeight: 400, }}>
                Crafting digital experiences with precision where clean engineering meets considered design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="anim-5 mt-2 flex flex-col items-center gap-5">
              <div className="flex flex-wrap gap-5 justify-center">
                <button className="btn-primary" onClick={() => scrollToSection("contact")}>
                  <span>Work With Me</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn-ghost" onClick={() => scrollToSection("projects")}>
                  View Projects
                </button>
              </div>
              <p className="mt-8" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(94,234,212,0.78)", textTransform: "uppercase" }}>
                Available for Freelance Projects
              </p>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 scroll-indicator" style={{ opacity: 0.4 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "white", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(94,234,212,0.6), transparent)" }} />
        </div>

        {/* Bottom teal rule */}
        <div className="absolute bottom-0 left-0 right-0 z-20 teal-rule" style={{ opacity: 0.3 }} />
      </section>
    </>
  )
}