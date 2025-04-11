"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-secondary/5">
      <div className="container px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Feel free to reach out to me for any questions or opportunities. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            <div className="flex flex-col items-center p-6 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow">
              <Mail className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:omsharma050322@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                omsharma050322@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow">
              <Github className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/KILLERTIAN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                github.com/KILLERTIAN
              </a>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow">
              <Linkedin className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/omsharma050322/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/omsharma050322
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 