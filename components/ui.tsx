"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: React.PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-normal text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost";
    size?: "default" | "icon";
  }
>(({ className, asChild, variant = "primary", size = "default", ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-50",
        size === "default" && "h-12 px-6",
        size === "icon" && "h-11 w-11",
        variant === "primary" &&
          "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:bg-foreground/90",
        variant === "secondary" &&
          "border bg-card/70 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
        variant === "ghost" && "text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export function Badge({
  className,
  children
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Reveal({
  children,
  className,
  delay = 0
}: React.PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
