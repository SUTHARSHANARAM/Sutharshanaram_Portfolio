"use client";

import React from "react";
import { ArrowUpRight, Github, ExternalLink, Activity, Leaf, BarChart3, Music, Radio } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/data/projects";

// Helper function to format markdown bold **text** to HTML tags
function formatMarkdownBold(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-100 font-bold">$1</strong>');
}

// Dedicated mockup renderer for each project card to give a premium SaaS aesthetic
function ProjectMockup({ type }: { type: "crm" | "plant" | "dashboard" | "grid" | "music" | "radar" }) {
  switch (type) {
    case "crm":
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex flex-col p-3 gap-2 overflow-hidden select-none">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-border/40 pb-1">
            <span className="text-[9px] font-bold text-accent flex items-center gap-1">
              <Activity className="w-2.5 h-2.5" /> CLINICAL-CRM
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
            </div>
          </div>
          {/* Content Mock */}
          <div className="grid grid-cols-3 gap-2 flex-1">
            <div className="col-span-2 bg-zinc-950 rounded border border-border/40 p-1.5 flex flex-col justify-between">
              <div className="w-10 h-1 bg-zinc-700 rounded mb-1" />
              <div className="space-y-1">
                <div className="w-full h-1 bg-zinc-800 rounded" />
                <div className="w-5/6 h-1 bg-zinc-800 rounded" />
              </div>
              <div className="w-12 h-2 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                <span className="text-[6px] text-accent font-semibold">LLM Active</span>
              </div>
            </div>
            <div className="bg-zinc-950 rounded border border-border/40 p-1.5 flex flex-col items-center justify-center gap-1">
              <div className="text-[10px] font-bold text-white">40%</div>
              <div className="text-[5px] text-zinc-500 uppercase text-center">Note Efficiency</div>
            </div>
          </div>
        </div>
      );

    case "plant":
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex items-center justify-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_70%)" />
          <div className="relative border border-border/50 bg-zinc-950 p-4 rounded-xl flex items-center gap-3">
            <Leaf className="w-8 h-8 text-emerald-500 animate-pulse" />
            <div className="space-y-1.5">
              <div className="text-[9px] font-bold text-white tracking-wider flex items-center gap-1">
                Diagnostic Node <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
              </div>
              <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
              </div>
              <div className="text-[6px] text-zinc-400">Accuracy: 94.6% (FastAPI)</div>
            </div>
          </div>
          {/* Diagnostic Scanning Laser Lines */}
          <div className="absolute left-0 right-0 h-[1px] bg-emerald-500/20 top-1/4 animate-bounce" />
        </div>
      );

    case "dashboard":
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex flex-col p-3 gap-2 overflow-hidden select-none">
          <div className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-accent" />
            <span className="text-[8px] font-bold text-zinc-400">SALARY RADAR</span>
          </div>
          <div className="grid grid-cols-4 gap-2 items-end flex-1 pb-1">
            <div className="h-10 bg-zinc-800 rounded border border-border/40 flex items-center justify-center"><span className="text-[6px] text-zinc-500">React</span></div>
            <div className="h-16 bg-accent/10 border border-accent/20 rounded flex flex-col justify-end items-center pb-1"><span className="text-[7px] text-accent font-bold">SQL</span></div>
            <div className="h-20 bg-accent/20 border border-accent/30 rounded flex flex-col justify-end items-center pb-1"><span className="text-[7px] text-accent font-bold">Py</span></div>
            <div className="h-12 bg-zinc-800 rounded border border-border/40 flex items-center justify-center"><span className="text-[6px] text-zinc-500">Dart</span></div>
          </div>
        </div>
      );

    case "grid":
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex items-center justify-center overflow-hidden select-none">
          <svg className="w-32 h-20 text-zinc-700" viewBox="0 0 100 60">
            {/* Vector bus grid diagram */}
            <circle cx="20" cy="15" r="3" fill="#3B82F6" />
            <circle cx="50" cy="45" r="3" fill="#EF4444" /> {/* Overloaded red node */}
            <circle cx="80" cy="15" r="3" fill="#3B82F6" />
            
            <line x1="20" y1="15" x2="50" y2="45" stroke="#3B82F6" strokeWidth="0.5" />
            <line x1="50" y1="45" x2="80" y2="15" stroke="#EF4444" strokeWidth="0.8" />
            <line x1="20" y1="15" x2="80" y2="15" stroke="#3B82F6" strokeWidth="0.5" />

            <text x="50" y="55" textAnchor="middle" fill="#EF4444" fontSize="4.5" fontWeight="bold">OVERLOAD</text>
            <text x="20" y="8" textAnchor="middle" fill="#A1A1AA" fontSize="3.5">Bus 1</text>
            <text x="80" y="8" textAnchor="middle" fill="#A1A1AA" fontSize="3.5">Bus 2</text>
          </svg>
        </div>
      );

    case "radar":
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex items-center justify-center overflow-hidden select-none">
          <div className="border border-border/50 bg-zinc-950 p-3 rounded-lg flex flex-col gap-2 items-center w-44">
            <div className="flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <div className="text-[8px] font-bold text-white uppercase tracking-wider">Civic Radar Feed</div>
            </div>
            <div className="w-full bg-zinc-900 rounded p-1.5 flex items-center justify-between border border-border/30">
              <span className="text-[7px] text-zinc-300">Pothole Defect #104</span>
              <span className="text-[6px] bg-emerald-500/20 text-emerald-400 font-semibold px-1 py-0.5 rounded">Verified</span>
            </div>
            <span className="text-[6px] text-zinc-500">FastAPI • PostgreSQL • OpenCV</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-36 bg-zinc-900 border-b border-border/40 relative flex items-center justify-center overflow-hidden select-none">
          <div className="border border-border/50 bg-zinc-950 p-3 rounded-lg flex flex-col gap-2 items-center w-40">
            <div className="flex items-center gap-1.5">
              <Music className="w-4 h-4 text-accent" />
              <div className="text-[8px] font-bold text-white uppercase tracking-wider">Music Stream</div>
            </div>
            {/* Visualizer bars */}
            <div className="flex items-end gap-1 h-6">
              <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
              <div className="w-1 h-5 bg-accent/80 rounded-full animate-bounce" />
              <div className="w-1 h-4 bg-accent/60 rounded-full animate-pulse" />
              <div className="w-1 h-6 bg-accent rounded-full animate-bounce" />
              <div className="w-1 h-2 bg-accent/40 rounded-full animate-pulse" />
            </div>
            <span className="text-[6px] text-zinc-500">Classification: Stressed → Ambient</span>
          </div>
        </div>
      );
  }
}

export function ProjectsGrid() {
  return (
    <Section id="projects" subtitle="Portfolio Projects" title="Engineering systems designed for impact">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projectsData.map((project, index) => (
          <Card
            key={project.slug}
            delay={index * 0.05}
            className="flex flex-col h-full !p-0 overflow-hidden"
          >
            {/* Project Banner Graphic */}
            <ProjectMockup type={project.uiGraphicType} />

            {/* Content Details */}
            <div className="p-5 flex flex-col flex-1 gap-4">
              <div className="flex flex-col flex-1">
                {/* Title & Subtitle Container (aligned height) */}
                <div className="min-h-[56px] flex flex-col justify-start">
                  <h3 className="font-display font-bold text-base text-white hover:text-accent transition-colors duration-300">
                    <a href={`/projects/${project.slug}`}>
                      {project.title}
                    </a>
                  </h3>
                  <span className="text-[10px] font-medium text-accent tracking-wide block mt-0.5">
                    {project.subtitle}
                  </span>
                </div>

                {/* Description Container (aligned height) */}
                <div className="min-h-[64px] mt-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technologies Badges Container (aligned height) */}
                <div className="flex flex-wrap gap-1.5 mt-4 min-h-[44px] content-start">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {/* Key Highlights (aligned height & divider) */}
                <div className="border-t border-border/10 pt-3 mt-4 min-h-[104px]">
                  <ul className="text-[10px] text-zinc-400 space-y-1.5">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-1.5">
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        <span 
                          className="leading-snug text-zinc-400"
                          dangerouslySetInnerHTML={{ __html: formatMarkdownBold(highlight) }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions (perfectly aligned at bottom) */}
              <div className="flex items-center justify-between pt-3 border-t border-border/10">
                <Button
                  variant="primary"
                  href={`/projects/${project.slug}`}
                  className="text-xs py-1.5 px-3 h-8 gap-1.5"
                >
                  Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-muted-foreground hover:text-white transition-all duration-300 border border-transparent hover:border-zinc-700"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-muted-foreground hover:text-white transition-all duration-300 border border-transparent hover:border-zinc-700"
                    aria-label={`Visit ${project.title} Live Demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
