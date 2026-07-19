"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Education() {
  const achievements = [
    "Completed double AI software engineering internships delivering mobile & API modules.",
    "Developed a GAN-Enhanced Plant Disease Detection neural network and Streamlit web app.",
    "Executed 100+ manual & integration test cases and resolved 20+ tracked software defects.",
    "Graduated with a specialized B.Tech degree focused on Machine Learning and Computer Vision."
  ];

  return (
    <Section id="education" subtitle="Credentials" title="Academic foundation & achievements">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
        
        {/* Left column: Education */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 border-b border-border/20 pb-2">
            <GraduationCap className="w-4 h-4 text-accent" /> Education
          </h3>
          <Card delay={0.05} className="p-6 flex flex-col gap-4 justify-between h-full">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 border border-accent/10 rounded-full px-2 py-0.5 w-fit">
                B.Tech Degree
              </span>
              <h4 className="font-display font-bold text-base text-white mt-3">
                Artificial Intelligence &amp; Data Science
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                E.G.S. Pillay Engineering College, Nagapattinam
              </p>
            </div>
            
            <div className="border-t border-border/20 pt-4 flex justify-between items-center mt-4">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase">Academic Score</span>
                <span className="text-lg font-display font-bold text-white">8.13 <span className="text-xs font-normal text-muted-foreground">/ 10 CGPA</span></span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block uppercase">Graduation</span>
                <span className="text-xs font-semibold text-white">Class of 2026</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right column: Key Achievements */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 border-b border-border/20 pb-2">
            <Award className="w-4 h-4 text-accent" /> Key Milestones
          </h3>
          <Card delay={0.1} className="p-6 h-full">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="mt-0.5 p-1 rounded bg-accent/5 border border-accent/10">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

      </div>
    </Section>
  );
}
