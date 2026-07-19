import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium bg-muted/60 text-muted-foreground border border-border/50 transition-all duration-300 hover:text-white hover:border-zinc-600 select-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
