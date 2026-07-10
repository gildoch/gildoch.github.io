import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

export function LinkCard({ title, description, url, icon: Icon }: LinkCardProps) {
  return (
    <motion.a
      variants={itemVariants}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}: ${description}`}
      className="group relative flex w-full items-center gap-4 rounded-2xl border border-card-border bg-card/60 p-4 shadow-sm backdrop-blur-md transition-transform transition-shadow duration-[250ms] hover:-translate-y-1 hover:border-primary/20 hover:bg-card hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary transition-colors duration-[250ms] group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <h2 className="truncate text-base font-medium text-foreground transition-colors duration-[250ms] group-hover:text-primary">
          {title}
        </h2>
        <p className="truncate text-sm text-muted-foreground transition-colors duration-[250ms] group-hover:text-foreground">
          {description}
        </p>
      </div>
      
      {/* Subtle chevron or indicator can go here if desired, but minimalistic works well */}
    </motion.a>
  );
}
