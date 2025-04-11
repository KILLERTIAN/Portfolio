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
  SiSolidity
} from 'react-icons/si';

const projects = [
  {
    title: 'GArcade',
    description: 'A high-performance Expo + React Native app that allows a growing community to track Google Cloud Arcade points and achievements in real time via a custom Next.js API.',
    image: '/projects/garcade1.jpeg',
    fallbackImage: '/projects/garcade2.jpeg',
    github: 'https://github.com/KILLERTIAN/garcade',
    demo: 'https://expo.dev/artifacts/eas/5WB7rD3mo51g9LcD1CeEkd.apk',
    tags: [
      { name: 'React Native', icon: <SiReact className="h-4 w-4" /> },
      { name: 'Expo', icon: <SiExpo className="h-4 w-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-4 w-4" /> },
      { name: 'API', icon: <SiNodedotjs className="h-4 w-4" /> }
    ]
  },
  {
    title: 'Finvest',
    description: 'A secure, blockchain-powered crowdfunding platform using Vite, Tailwind CSS, MERN stack, and Web3.',
    image: '/projects/finvest.png',
    fallbackImage: '/projects/finvest.png',
    github: 'https://github.com/KILLERTIAN/finvest',
    demo: 'https://finvest-dev.vercel.app/',
    tags: [
      { name: 'Vite', icon: <SiVite className="h-4 w-4" /> },
      { name: 'React', icon: <SiReact className="h-4 w-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-4 w-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-4 w-4" /> },
      { name: 'Express', icon: <SiExpress className="h-4 w-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-4 w-4" /> },
      { name: 'Solidity', icon: <SiSolidity className="h-4 w-4" /> }
    ]
  },
  {
    title: 'Doc Plus',
    description: 'A scalable HMS using the MERN stack to streamline medical data management, improving accessibility and reducing operational inefficiencies for hospitals and patients.',
    image: '/projects/doc-plus.png',
    fallbackImage: '/projects/doc-plus.png',
    github: 'https://github.com/KILLERTIAN/doc-plus',
    demo: 'https://doc-plus.vercel.app/',
    tags: [
      { name: 'MongoDB', icon: <SiMongodb className="h-4 w-4" /> },
      { name: 'Express', icon: <SiExpress className="h-4 w-4" /> },
      { name: 'React', icon: <SiReact className="h-4 w-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-4 w-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-4 w-4" /> }
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
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects. Each project is built with modern technologies and best practices.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                {isLoading[index] !== false && (
                  <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
                )}
                <Image
                  src={imageErrors[index] ? project.fallbackImage : project.image}
                      alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                    isLoading[index] ? 'opacity-0' : 'opacity-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                        <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {tag.icon}
                      {tag.name}
                                </span>
                              ))}
                            </div>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Code className="h-4 w-4" />
                    View Code
                        </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="https://github.com/KILLERTIAN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline bg-primary/10 px-6 py-3 rounded-lg transition-colors hover:bg-primary/20"
          >
            <Github className="h-5 w-5" />
            View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
} 