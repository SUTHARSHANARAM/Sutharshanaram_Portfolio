"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skillsData } from "@/data/skills";
import { Code2, Smartphone, Brain, ShieldCheck, BarChart3, Wrench } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming":
        return <Code2 className="w-4 h-4 text-accent" />;
      case "Development":
        return <Smartphone className="w-4 h-4 text-accent" />;
      case "AI & ML":
        return <Brain className="w-4 h-4 text-accent" />;
      case "Software Testing":
        return <ShieldCheck className="w-4 h-4 text-accent" />;
      case "Data Analytics":
        return <BarChart3 className="w-4 h-4 text-accent" />;
      default:
        return <Wrench className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <Section id="skills" subtitle="Technical Skills" title="Core capabilities &amp; technologies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {skillsData.map((category, catIndex) => (
          <Card
            key={category.title}
            delay={catIndex * 0.05}
            className="flex flex-col gap-4 p-5 h-full"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-border/20">
              <div className="p-1.5 rounded bg-accent/5 border border-accent/15">
                {getCategoryIcon(category.title)}
              </div>
              <h3 className="font-display font-bold text-xs tracking-tight text-white uppercase">
                {category.title}
              </h3>
            </div>

            {/* Chips Wrap List */}
            <div className="flex flex-wrap gap-2 mt-1">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-300 hover:border-accent hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
