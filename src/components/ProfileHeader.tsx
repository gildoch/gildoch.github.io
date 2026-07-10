import React from 'react';
import { motion } from 'framer-motion';

export function ProfileHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        {/* Glow effect */}
        <div className="absolute -inset-1 animate-pulse rounded-full bg-primary/30 blur-xl dark:bg-primary/20" />
        
        {/* Avatar Placeholder */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-border/50 bg-card shadow-sm backdrop-blur-sm">
          <span className="text-3xl font-medium tracking-tight text-primary">GC</span>
        </div>
      </div>

      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Gildo Chaúze
      </h1>
      
      <p className="mb-4 text-sm font-medium text-primary dark:text-secondary sm:text-base">
        IT Support Specialist • System Administrator • Developer
      </p>
      
      <p className="max-w-md text-sm text-muted-foreground sm:text-base">
        Building reliable IT solutions, automation tools and modern web applications.
      </p>
    </motion.div>
  );
}
