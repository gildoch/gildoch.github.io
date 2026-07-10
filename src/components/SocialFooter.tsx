import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export function SocialFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.25 }}
      className="mt-16 flex w-full flex-col items-center gap-6"
    >
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/gildoch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group rounded-full p-2 text-muted-foreground transition-colors duration-[250ms] hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 transition-transform duration-[250ms] group-hover:scale-110" />
        </a>
        <a 
          href="https://www.linkedin.com/in/gildoch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group rounded-full p-2 text-muted-foreground transition-colors duration-[250ms] hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 transition-transform duration-[250ms] group-hover:scale-110" />
        </a>
      </div>
      
      <p className="text-xs font-medium text-muted-foreground/70">
        © 2026 Gildo Chaúze
      </p>
    </motion.footer>
  );
}
