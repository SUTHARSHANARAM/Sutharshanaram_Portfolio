"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Spring-animated scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      <header className="sticky top-0 w-full z-40 border-b border-border/30 bg-background/85 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-bold text-lg tracking-tight hover:text-accent transition-colors duration-300"
          >
            Sutharshanaram R<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/#contact"
              className="py-1.5 px-3.5 text-xs h-9"
            >
              Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-background border-b border-border/80 px-6 py-6 flex flex-col gap-4 z-30"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/10"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-2"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </header>
    </>
  );
}
