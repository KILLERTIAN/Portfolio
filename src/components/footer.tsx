"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:py-12">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Om Sharma</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/KILLERTIAN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/omsharma050322/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:omsharma050322@gmail.com"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Om Sharma. All rights reserved.</p>
        </div>
      </div>
      
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full p-2 h-10 w-10"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
} 