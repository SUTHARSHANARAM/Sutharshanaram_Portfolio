"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  href,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_22px_rgba(59,130,246,0.4)] hover:bg-[#2563EB] hover:scale-[1.01]",
    secondary:
      "bg-card text-foreground border border-border/80 hover:bg-muted hover:border-zinc-700 hover:scale-[1.01] hover:text-white",
    outline:
      "bg-transparent text-foreground border border-border hover:bg-card hover:border-zinc-700 hover:scale-[1.01] hover:text-white",
    ghost:
      "bg-transparent text-muted-foreground hover:bg-card hover:text-foreground",
  };

  const isLink = !!href;

  if (isLink) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
