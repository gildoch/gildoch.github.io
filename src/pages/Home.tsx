import React from 'react';
import { Briefcase, BookOpen, FolderGit2, FileText, Wrench } from 'lucide-react';
import { LinkCard } from '@/components/LinkCard';
import { ProfileHeader } from '@/components/ProfileHeader';
import { SocialFooter } from '@/components/SocialFooter';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const links = [
  {
    title: 'Portfolio',
    description: 'Explore my professional portfolio.',
    url: 'http://gildochauze.me/portifolio',
    icon: Briefcase,
  },
  {
    title: 'DebuggingLife',
    description: 'Programming, Linux, Windows, Automation and PowerShell articles.',
    url: 'https://portifolioch.wordpress.com/',
    icon: BookOpen,
  },
  {
    title: 'Projects',
    description: 'Open source and personal projects.',
    url: 'http://gildochauze.me/portifolio',
    icon: FolderGit2,
  },
  {
    title: 'Resume',
    description: 'Experience, certifications and skills.',
    url: 'http://gildochauze.me/portifolio',
    icon: FileText,
  },
  {
    title: 'Tools',
    description: 'Useful utilities and developer resources.',
    url: 'http://gildochauze.me/portifolio',
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden selection:bg-primary/20 selection:text-primary animate-fade-in">
      {/* Subtle Background Gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

      <ThemeToggle />

      <main className="mx-auto flex max-w-[640px] flex-col items-center px-4 py-16 sm:px-6 sm:py-24">
        <header>
          <ProfileHeader />
        </header>

        <section aria-label="Primary links" className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-10 flex w-full flex-col gap-4"
          >
            {links.map((link) => (
              <LinkCard key={link.title} {...link} />
            ))}
          </motion.div>
        </section>

        <SocialFooter />
      </main>
    </div>
  );
}
