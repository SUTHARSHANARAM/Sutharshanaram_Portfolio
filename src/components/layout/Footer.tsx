import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/20 py-8 md:py-12 bg-background/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear} Sutharshanaram R. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with Next.js • Tailwind CSS • Framer Motion • TypeScript
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/SUTHARSHANARAM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sutharshanaram-r"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rsutharshanaram@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
