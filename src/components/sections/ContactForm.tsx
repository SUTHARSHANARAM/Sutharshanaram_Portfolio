"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    
    // Simulate API request lifecycle
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-10 md:py-16 relative border-b border-border/10">
      {/* Glow dot in background */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block">
                Currently seeking roles
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white">
                Let&apos;s Work Together
              </h2>
              {/* Target Role Sub-badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Software Developer", "AI / ML Engineer", "Data Analyst / BI Analyst", "QA Engineer"].map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9px] font-semibold text-zinc-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                Currently available for Software Developer, AI/ML Engineer, Data Analyst and QA Engineer opportunities. Whether you have an open junior position, an internship opportunity, or want to discuss collaborations—feel free to send a message. I am ready to start immediately.
              </p>
            </div>

            <div className="space-y-6">
              {/* Direct Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rsutharshanaram@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-lg border border-border/30 bg-card/30 hover:border-accent/40 hover:bg-card/70 transition-all duration-300 w-full"
              >
                <div className="p-2 rounded bg-accent/5 border border-accent/15 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">Send Email</span>
                  <span className="text-sm font-medium text-white">rsutharshanaram@gmail.com</span>
                </div>
              </a>

              {/* Social Channels */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/SUTHARSHANARAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-zinc-500 hover:bg-card/60 transition-all duration-300 text-xs text-muted-foreground hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sutharshanaram-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-zinc-500 hover:bg-card/60 transition-all duration-300 text-xs text-muted-foreground hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <Card delay={0.05} className="h-full relative overflow-hidden" animate={false}>
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 flex flex-col h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-border/60 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                          placeholder="Jane Doe"
                        />
                      </div>
                      
                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-900/60 border border-border/60 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-border/60 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                        placeholder="Hiring Inquiry / Project collaboration"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5 flex-1 flex flex-col">
                      <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-900/60 border border-border/60 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none flex-1 min-h-[100px]"
                        placeholder="Describe your project, timeline or role requirements..."
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === "loading"}
                      className="w-full h-10 mt-2 gap-2 text-xs"
                    >
                      {status === "loading" ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 min-h-[300px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-accent" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-bold text-white">Message Sent!</h3>
                      <p className="text-xs text-muted-foreground max-w-sm">
                        Thank you for reaching out. Sutharshanaram will get back to you shortly.
                      </p>
                    </div>
                    <Button variant="outline" onClick={handleReset} className="text-xs py-1.5 px-3">
                      Send another message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
