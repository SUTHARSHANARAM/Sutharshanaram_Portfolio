import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Target, AlertTriangle, Layers, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { projectsData } from "@/data/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Sutharshan Portfolio",
    };
  }

  return {
    title: `${project.title} - Software Engineering Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-background relative overflow-hidden py-12 md:py-20">
        {/* Background glow node */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-white transition-colors duration-300 mb-8 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          {/* Project Title Block */}
          <div className="border-b border-border/20 pb-8 mb-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase mb-2 block">
              Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-300 font-display font-medium tracking-tight">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.techStack.map((tech) => (
                <Badge key={tech} className="text-xs px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              variant="primary"
              href={project.liveUrl}
              external
              className="text-xs gap-2"
            >
              Launch Live Demo <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              href={project.githubUrl}
              external
              className="text-xs gap-2"
            >
              <Github className="w-4 h-4" /> View Source Code
            </Button>
          </div>

          {/* Grid: Challenges, Architecture, and Outcomes */}
          <div className="space-y-10">
            {/* Goal Card */}
            <Card delay={0.05} className="p-6">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/10 h-fit shrink-0">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white mb-2 uppercase tracking-wider">
                    The Goal
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {project.details.goal}
                  </p>
                </div>
              </div>
            </Card>

            {/* Challenge Card */}
            <Card delay={0.1} className="p-6">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10 h-fit shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white mb-2 uppercase tracking-wider">
                    The Engineering Challenge
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {project.details.challenge}
                  </p>
                </div>
              </div>
            </Card>

            {/* Architecture Card */}
            <Card delay={0.15} className="p-6">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 h-fit shrink-0">
                  <Layers className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="w-full">
                  <h3 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                    System Architecture &amp; Methods
                  </h3>
                  <ol className="space-y-4">
                    {project.details.architecture.map((step, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-[10px] text-indigo-400 font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Card>

            {/* Outcomes Card */}
            <Card delay={0.2} className="p-6">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 h-fit shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="w-full">
                  <h3 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                    Key Outcomes &amp; Metrics
                  </h3>
                  <ul className="space-y-3">
                    {project.details.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {outcome}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Case Study Page Navigation Footer */}
          <div className="flex items-center justify-between border-t border-border/20 pt-8 mt-16">
            <Link
              href="/#projects"
              className="text-xs font-semibold text-muted-foreground hover:text-white transition-colors duration-300 cursor-pointer"
            >
              ← Back to Dashboard
            </Link>
            <span className="text-xs text-zinc-600">Sutharshan &copy; {new Date().getFullYear()}</span>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
