"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Code } from 'lucide-react';
import {
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiTailwindcss,
  SiSolidity,
  SiFirebase,
  SiCloudflarepages,
  SiGooglecloud
} from 'react-icons/si';

const projects = [
  {
    title: 'GArcade',
    description: 'A high-performance cross-platform mobile and web platform to track Google Cloud Skills Boost Arcade progress. Features real-time progress tracking, multi-profile support, badge milestone visualization, and automated score computation.',
    image: '/projects/garcade1.png',
    fallbackImage: '/projects/garcade2.jpeg',
    github: 'https://github.com/KILLERTIAN/garcade',
    demo: 'https://garcade.app/',
    tags: [
      { name: 'React Native', icon: <SiReact className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Expo', icon: <SiExpo className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Cloudflare', icon: <SiCloudflarepages className="h-3 w-3 sm:h-4 sm:w-4" /> }
    ]
  },
  {
    title: 'Urja Sarthi',
    description: 'An AI-powered energy management platform that helps users track and optimize their energy consumption. Features real-time analytics, smart recommendations, and intuitive dashboards for better energy decisions.',
    image: '/projects/urja-sarthi.png',
    fallbackImage: '/projects/urja-2.png',
    github: 'https://github.com/KILLERTIAN/Urja-Sarthi',
    demo: 'https://urjasarthi.garcade.in',
    tags: [
      { name: 'React', icon: <SiReact className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'AI/ML', icon: <SiGooglecloud className="h-3 w-3 sm:h-4 sm:w-4" /> }
    ]
  },
  {
    title: 'Blood Connect',
    description: 'A life-saving platform connecting blood donors with recipients in real-time. Features emergency blood requests, donor matching, blood bank inventory management, and real-time notifications. Winner of 1st Place at CodeRed IIT Delhi.',
    image: '/projects/BloodConnect.jpg',
    fallbackImage: '/projects/blood1.png',
    github: 'https://github.com/KILLERTIAN/bloodconnect',
    demo: null,
    tags: [
      { name: 'React', icon: <SiReact className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Express', icon: <SiExpress className="h-3 w-3 sm:h-4 sm:w-4" /> }
    ]
  },
  {
    title: 'Finvest',
    description: 'A secure, blockchain-powered crowdfunding platform using Vite, Tailwind CSS, MERN stack, and Web3. Features milestone-based smart contract system for tracking project progress and ensuring transparent fund distribution. Won $1500 in EDU Chain Semester 2 global hackathon.',
    image: '/projects/finvest.png',
    fallbackImage: '/projects/finvest.png',
    github: 'https://github.com/KILLERTIAN/finvest',
    demo: 'https://finvest-dev.vercel.app/',
    tags: [
      { name: 'Vite', icon: <SiVite className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'React', icon: <SiReact className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Solidity', icon: <SiSolidity className="h-3 w-3 sm:h-4 sm:w-4" /> }
    ]
  },
  {
    title: 'Doc Plus',
    description: 'A scalable Hospital Management System (HMS) using the MERN stack to streamline medical data management. Features user profiles with medical history, medical reminders, medical feeds, and family history.',
    image: '/projects/doc-plus.png',
    fallbackImage: '/projects/doc-plus.png',
    github: 'https://github.com/KILLERTIAN/doc-plus',
    demo: 'https://doc-plus.vercel.app/',
    tags: [
      { name: 'React', icon: <SiReact className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-3 w-3 sm:h-4 sm:w-4" /> },
      { name: 'Firebase', icon: <SiFirebase className="h-3 w-3 sm:h-4 sm:w-4" /> }
    ]
  }
];

export function ProjectsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setIsLoading(prev => ({ ...prev, [index]: false }));
  };

  return (
    <section id="projects" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/5">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary">
              Projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              My Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed lg:text-xl/relaxed px-2 sm:px-0">
              Here are some of my recent projects. Each project is built with modern technologies and best practices.
            </p>
          </div>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
                {isLoading[index] !== false && (
                  <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
                )}
                <Image
                  src={imageErrors[index] ? project.fallbackImage : project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${isLoading[index] ? 'opacity-0' : 'opacity-100'
                    }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground text-xs sm:text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tags - responsive sizing */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-primary"
                    >
                      {tag.icon}
                      <span className="hidden sm:inline">{tag.name}</span>
                      <span className="sm:hidden">{tag.name.split(' ')[0]}</span>
                    </span>
                  ))}
                </div>

                {/* Links - responsive layout */}
                <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Code</span>
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <Link
            href="https://github.com/KILLERTIAN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-primary hover:underline bg-primary/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors hover:bg-primary/20"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
