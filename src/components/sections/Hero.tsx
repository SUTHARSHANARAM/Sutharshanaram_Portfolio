"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

function TerminalMockup() {
  const terminalLines = [
    { text: "$ flutter build", delay: 0.5, color: "text-zinc-400" },
    { text: "✓ Built release APK (18.2MB)", delay: 1.0, color: "text-emerald-400" },
    { text: "$ git push origin main", delay: 1.5, color: "text-zinc-400" },
    { text: "✓ Pushed to github/SUTHARSHANARAM", delay: 2.2, color: "text-zinc-500" },
    { text: "$ pytest tests/", delay: 2.6, color: "text-zinc-400" },
    { text: "✓ 100+ manual & automation tests OK", delay: 3.2, color: "text-emerald-400" },
    { text: "$ uvicorn main:app --reload", delay: 3.6, color: "text-zinc-400" },
    { text: "✓ FastAPI running: localhost:8000", delay: 4.2, color: "text-blue-400" },
    { text: "$ powerbi-cli load dashboard.pbix", delay: 4.6, color: "text-zinc-400" },
    { text: "✓ Dashboard loaded successfully", delay: 5.2, color: "text-emerald-400" }
  ];

  return (
    <div className="w-full max-w-[340px] rounded-xl border border-border/40 bg-zinc-955/90 font-mono shadow-xl relative overflow-hidden text-[9px] text-zinc-300">
      {/* Top Header Bar */}
      <div className="bg-zinc-900 border-b border-border/30 px-3 py-1.5 flex items-center justify-between select-none">
        {/* Dot Controls */}
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#EF4444] opacity-80" />
          <div className="w-2 h-2 rounded-full bg-[#F59E0B] opacity-80" />
          <div className="w-2 h-2 rounded-full bg-[#10B981] opacity-80" />
        </div>
        {/* Title */}
        <div className="text-[8px] text-zinc-500 font-sans tracking-wide">
          bash - sutharshanaram - 80×24
        </div>
        <div className="w-6" />
      </div>
      
      {/* Code Text Body */}
      <div className="p-3.5 space-y-1 h-44 overflow-y-auto font-mono scrollbar-thin select-none text-left">
        {terminalLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: line.delay,
              ease: "easeOut"
            }}
            className={line.color || "text-zinc-300"}
          >
            {line.text}
          </motion.div>
        ))}
        {/* Blinking Cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="inline-block w-1.5 h-2.5 bg-zinc-400 align-middle ml-0.5"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center border-b border-border/20 overflow-hidden py-12">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: Text & Actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-0.5">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest block font-mono">
              Hello 👋 I&apos;m
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Sutharshanaram R
            </h1>
          </motion.div>

          {/* Target Role & Skills Subheading */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1.5 w-full">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                Software Developer
              </span>
              <span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 ring-1 ring-inset ring-white/15">
                AI &amp; Data Science Graduate
              </span>
            </div>
            <p className="text-xs font-semibold text-zinc-400 font-mono tracking-wide">
              Flutter • Python • Machine Learning • QA
            </p>
          </motion.div>

          {/* Slogan */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg"
          >
            Building scalable software, AI-powered applications and responsive mobile experiences.
          </motion.p>

          {/* Recruiter Metadata Cards/Pills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-2.5 w-full border-y border-border/10 py-3.5 my-1"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-xs">📍</span>
              <span>Nagapattinam, India</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-xs">🟢</span>
              <span className="text-emerald-400 font-medium">Available for Full-Time</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-xs">💼</span>
              <span>2 Industry Internships</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-xs">🚀</span>
              <span>5 Featured Projects</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 col-span-2">
              <span className="text-xs">🎓</span>
              <span>B.Tech AI &amp; Data Science (8.13 CGPA)</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <Button variant="primary" href="/resume.pdf" external>
              <FileText className="w-4 h-4" /> Download Resume
            </Button>
            <Button variant="secondary" href="#contact">
              Contact Me <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-1 w-full"
          >
            <a
              href="https://github.com/SUTHARSHANARAM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-300 border border-border/30 rounded-md px-2 py-1 bg-card/25"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" /> View GitHub
            </a>
            <a
              href="https://linkedin.com/in/sutharshanaram-r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-300 border border-border/30 rounded-md px-2 py-1 bg-card/25"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rsutharshanaram@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Stacked Photo Placeholder & Code Terminal */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center gap-5 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Avatar Picture Card */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-border/50 bg-card flex items-center justify-center group cursor-pointer overflow-hidden shadow-lg select-none">
            {/* Visual background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-zinc-900 pointer-events-none group-hover:opacity-80 transition-opacity" />
            
            {/* Initial Placeholder Text representation */}
            <span className="font-display font-bold text-3xl text-zinc-100 group-hover:scale-105 transition-transform duration-300 relative z-10">
              SR
            </span>
            
            {/* Minimal Developer Silhouette Outline Icon */}
            <User className="absolute w-20 h-20 text-zinc-700/35 bottom-0 translate-y-4 group-hover:text-accent/25 transition-colors duration-300" />
            
            {/* Green Availability Badge indicator */}
            <div className="absolute bottom-0 right-3 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background animate-pulse" title="Available for hire" />
          </div>
          
          {/* Code Output Terminal Widget */}
          <TerminalMockup />
        </motion.div>
      </div>
    </section>
  );
}
