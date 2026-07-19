"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Certifications() {
  const certifications = [
    {
      provider: "NPTEL",
      name: "Responsible & Safe AI Systems"
    },
    {
      provider: "MathWorks",
      name: "Machine Learning Onramp"
    },
    {
      provider: "Forage",
      name: "GenAI Powered Data Analytics Job Simulation"
    },
    {
      provider: "RapidMiner",
      name: "Data Engineering Professional"
    },
    {
      provider: "IBM SkillsBuild",
      name: "Getting Started with Artificial Intelligence"
    }
  ];

  return (
    <Section id="certifications" subtitle="Certifications" title="Verified credentials">
      <div className="flex flex-wrap justify-start items-center gap-3 mt-4">
        {certifications.map((cert, index) => (
          <Card
            key={cert.name}
            delay={index * 0.05}
            className="py-2.5 px-4 flex items-center gap-2 w-fit select-none"
          >
            <span className="text-sm">🏅</span>
            <div className="text-xs text-zinc-300 flex items-center gap-1.5">
              <span className="font-bold text-white uppercase tracking-wider text-[10px]">
                {cert.provider}:
              </span>
              <span className="text-zinc-400 font-medium">
                {cert.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
