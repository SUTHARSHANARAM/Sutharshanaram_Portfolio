"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

export function About() {
  const strengths = [
    "AI & Data Science Graduate",
    "Flutter Mobile Developer",
    "Software Testing Experience (QA)",
    "Machine Learning Projects",
    "Python Backend APIs",
    "Power BI Data Analytics"
  ];

  return (
    <Section id="about" subtitle="About Me" title="Professional Profile">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As an AI &amp; Data Science graduate, I enjoy transforming data into actionable insights, developing intelligent machine learning solutions, and building scalable software that combines modern engineering with data-driven decision-making. Experienced in Flutter development, Python backends, software testing, and Power BI analytics.
            </p>
          </div>
        </div>

        {/* Right Column: Highlights Checklist Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strengths.map((strength, index) => (
            <Card key={index} delay={index * 0.05} className="p-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-zinc-300">
                {strength}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
