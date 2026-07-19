"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Experience() {
  const internships = [
    {
      role: "AI Intern",
      company: "Aazeero Software Labs",
      period: "January 2026 – June 2026",
      logoText: "AZ",
      techs: ["Flutter", "Dart", "QA Testing", "Defect Tracking", "Manual Testing"],
      highlights: [
        "Developed and tested AI-integrated mobile application modules across <strong>LUVA</strong> and <strong>Digidine</strong> using Flutter, ensuring functionality across key workflows.",
        "Executed <strong>100+ functional, regression, and integration test cases</strong> to validate application functionality and software reliability.",
        "Identified, documented, and tracked <strong>20+ software defects</strong> through the complete defect lifecycle, collaborating with developers to verify resolutions."
      ]
    },
    {
      role: "AI Intern",
      company: "Lavendal Consulting",
      period: "May 2025 – December 2025",
      logoText: "LC",
      techs: ["Flutter", "Dart", "Agile Sprints", "REST APIs", "Mobile UI Design"],
      highlights: [
        "Developed and delivered <strong>10+ production-ready features</strong> including AI-powered modules for the <strong>LUVA</strong> mobile application using Flutter and Dart.",
        "Collaborated with cross-functional teams in an <strong>Agile environment</strong>, participating in sprint planning, code reviews, and feature discussions.",
        "Developed responsive UI screens and integrated <strong>REST APIs</strong> to support end-to-end application workflows and seamless backend communication."
      ]
    }
  ];

  return (
    <Section id="experience" subtitle="Professional History" title="Practical engineering experience">
      {/* Left aligned timeline container matching main grid line */}
      <div className="relative max-w-5xl mt-6 pl-8 md:pl-10 border-l border-border/40 space-y-10">
        {internships.map((intern, idx) => (
          <div key={idx} className="relative space-y-4">
            {/* Timeline Pointer Dot centered exactly on vertical border line */}
            <div className="absolute -left-[38px] md:-left-[46px] top-4 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/15 flex items-center justify-center font-display font-bold text-[8px] text-white">
              {idx + 1}
            </div>
            
            {/* Header / Logo / Card Row */}
            <Card delay={idx * 0.08} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/10 pb-4">
                {/* Company Logo and Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center font-display font-bold text-sm text-accent tracking-wide shrink-0">
                    {intern.logoText}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white tracking-tight">
                      {intern.role}
                    </h3>
                    <p className="text-xs font-semibold text-accent mt-0.5">
                      {intern.company}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground bg-zinc-900 border border-border/40 rounded-full px-3 py-1.5 w-fit self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{intern.period}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Key Achievements &amp; Outputs
                </h4>
                <ul className="space-y-3">
                  {intern.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p
                        className="text-xs text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: highlight }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Row */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mr-1.5">
                  Tech Stack:
                </span>
                {intern.techs.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
