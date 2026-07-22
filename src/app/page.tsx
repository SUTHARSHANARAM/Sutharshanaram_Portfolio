import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-background relative overflow-hidden">
        {/* Top glow dot */}
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[140px] pointer-events-none" />
        
        <Hero />

        {/* Recruiter Metrics Card Grid */}
        <section className="py-12 relative z-10 select-none border-b border-border/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card delay={0.05} className="p-4 flex flex-col items-center justify-center text-center gap-1.5 h-24 hover:border-accent/40 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-display font-extrabold text-accent tracking-tight">
                  94.6%
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  ML Accuracy
                </span>
              </Card>
              <Card delay={0.1} className="p-4 flex flex-col items-center justify-center text-center gap-1.5 h-24 hover:border-accent/40 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">
                  100+
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  QA Test Cases
                </span>
              </Card>
              <Card delay={0.15} className="p-4 flex flex-col items-center justify-center text-center gap-1.5 h-24 hover:border-accent/40 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-display font-extrabold text-accent tracking-tight">
                  2
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  Internships
                </span>
              </Card>
              <Card delay={0.2} className="p-4 flex flex-col items-center justify-center text-center gap-1.5 h-24 hover:border-accent/40 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">
                  6
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                  Featured Projects
                </span>
              </Card>
            </div>
          </div>
        </section>

        <About />
        <Experience />
        <ProjectsGrid />
        <Skills />
        <Education />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
