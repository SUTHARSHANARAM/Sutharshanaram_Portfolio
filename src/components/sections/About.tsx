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
        {/* Left Column: Narrative & Beyond Coding */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI &amp; Data Science graduate with hands-on experience in Flutter development, software testing, and machine learning. Passionate about building scalable applications and solving real-world problems through software.
            </p>
          </div>
          
          {/* Beyond Coding Personal Brand Card */}
          <Card delay={0.05} className="p-5 border border-border/30 bg-card/10">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-2">
              Beyond Coding
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Photography", "Filmmaking", "UI Design", "Writing", "Problem Solving"].map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center rounded-md bg-white/5 px-2 py-0.5 text-[9px] font-semibold text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Outside of coding, data engineering, and testing, I capture stories through visual media. I am passionate about photography, filmmaking, and UI design, combining analytical logic with creative composition.
            </p>
          </Card>
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
