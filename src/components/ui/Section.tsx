"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  animate?: boolean;
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
  animate = true,
  ...props
}: SectionProps) {
  const sectionContent = (
    <div className="max-w-5xl mx-auto px-6">
      {(title || subtitle) && (
        <div className="mb-6 md:mb-8 flex flex-col items-start">
          {subtitle && (
            <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </div>
  );

  const containerStyles = cn("py-10 md:py-16 relative border-b border-border/20", className);

  if (!animate) {
    return (
      <section id={id} className={containerStyles} {...props}>
        {sectionContent}
      </section>
    );
  }

  return (
    <section id={id} className={containerStyles} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {sectionContent}
      </motion.div>
    </section>
  );
}
