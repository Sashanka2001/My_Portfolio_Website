"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

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
      title: "Software Engineer Intern",
      organization:
        "Ministry of Finance - Information Technology Management Department (ITMD)",
      description:
        "Internship · Colombo, Western Province, Sri Lanka · On-site",
      details:
        "Working as a Software Engineer Intern, developing and maintaining web applications using modern technologies. Contributing to full-stack development projects and gaining hands-on experience in professional software development practices. Key responsibilities include: Front End Software Development, Back End Software Development, Full Stack Software Development, Web Development, and Database Administration.",
      skills: ["Vue.js", "MySQL", "Spring Boot"],
      year: "2026 jan - Present",
      type: "Internship",
    },
    {
      id: 2,
      title: "Computer Science Student",
      organization: "SLIIT",
      description: "Currently pursuing Bachelor's degree in Computer Science",
      details:
        "Actively learning and applying computer science principles through coursework and personal projects. Focus areas include software development, algorithms, data structures, and web technologies.",
      skills: ["Academic Projects", "Team Collaboration", "Problem Solving"],
      year: "2023 July - Present",
      type: "Education",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-green-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 gradient-text mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6 animate-scale-in"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My educational journey and learning experiences in computer science.
          </p>
        </div>

        {/* Experience Grid - Enhanced Certificate Style */}
        <div
          className={`bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl"></div>

          <div className="grid gap-6 relative">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                className="group hover:shadow-2xl transition-all duration-500 hover-lift card-hover dark:bg-slate-700 border-0 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/10 dark:to-blue-900/10 animate-bounce-in overflow-hidden relative"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float">
                      {experience.type === "Internship" ? (
                        <Briefcase className="w-7 h-7 text-white" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <span className="text-xs bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 px-3 py-2 rounded-full font-medium">
                      {experience.year}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                    {experience.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 font-semibold">
                    {experience.organization}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {experience.description}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {experience.details}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-white/80 dark:bg-slate-600/50 text-slate-700 dark:text-slate-300 text-sm rounded-xl border border-slate-200/50 dark:border-slate-500/30 font-medium hover:scale-105 transition-transform duration-200 animate-fade-in-up backdrop-blur-sm"
                        style={{
                          animationDelay: `${0.5 + skillIndex * 0.05}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
