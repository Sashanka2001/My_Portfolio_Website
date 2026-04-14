"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const section = document.getElementById("experience");
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Full Stack Engineer - Intern",
      organization: "Ministry of Finance - Information Technology Management Department (ITMD)",
      description: "Internship · Colombo, Western Province, Sri Lanka · On-site",
      details: "Working as a Software Engineer Intern, developing and maintaining web applications using modern technologies. Contributing to full-stack development projects and gaining hands-on experience in professional software development practices. Key responsibilities include: Front End Software Development, Back End Software Development, Full Stack Software Development, Web Development, and Database Administration.",
      skills: ["Vue.js", "SQL", "Spring Boot"],
      year: "2026 Jan - Present",
      type: "Internship",
    },
    {
      id: 2,
      title: "Computer Science Student",
      organization: "SLIIT",
      description: "Currently pursuing Bachelor's degree in Computer Science",
      details: "Actively learning and applying computer science principles through coursework and personal projects. Focus areas include software development, algorithms, data structures, and web technologies.",
      skills: ["Academic Projects", "Team Collaboration", "Problem Solving"],
      year: "2023 July - Present",
      type: "Education",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Hero-style animated background */}
      <div className="absolute inset-0 z-0 bg-[#080e18]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,80,80,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(10,40,80,0.2)_0%,transparent_70%)]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-100 gradient-text mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My educational journey and learning experiences in computer science.
          </p>
        </div>

        {/* Experience Grid - Enhanced Certificate Style */}
        <div
          className={`bg-slate-900/55 border border-cyan-300/20 backdrop-blur-xl rounded-3xl p-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-2xl"></div>

          <div className="grid gap-6 relative">
            {experiences.map((experience) => (
              <Card
                key={experience.id}
                className="group hover:shadow-2xl transition-all duration-500 hover-lift card-hover border border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl animate-bounce-in overflow-hidden relative"
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    experience.type === "Internship"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600"
                      : "bg-gradient-to-r from-teal-500 to-blue-600"
                  }`}
                ></div>

                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float ${
                        experience.type === "Internship"
                          ? "bg-gradient-to-r from-pink-500 to-purple-600"
                          : "bg-gradient-to-r from-teal-500 to-blue-600"
                      }`}
                    >
                      {experience.type === "Internship" ? (
                        <Briefcase className="w-7 h-7 text-white" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <span className="text-xs bg-slate-800/85 text-slate-200 px-3 py-2 rounded-full font-medium border border-slate-600/40">
                      {experience.year}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-100 mb-3 text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:to-slate-300 transition-all duration-300">
                    {experience.title}
                  </h4>
                  <p className="text-sm text-slate-200 mb-3 font-semibold">
                    {experience.organization}
                  </p>
                  <p className="text-sm text-slate-300 mb-4">
                    {experience.description}
                  </p>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {experience.details}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-slate-800/70 text-slate-200 text-sm rounded-xl border border-slate-500/35 font-medium hover:scale-105 transition-transform duration-200 animate-fade-in-up backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg ${
                      experience.type === "Internship"
                        ? "bg-gradient-to-br from-pink-500 to-purple-600"
                        : "bg-gradient-to-br from-teal-500 to-blue-600"
                    }`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
