"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SiLeetcode, SiLinkedin, SiGithub } from "react-icons/si";
import Image from "next/image";
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
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:py-8 md:flex-row md:py-12">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold">Om Sharma</span>
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="#about"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="https://github.com/KILLERTIAN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors group"
            >
              <SiGithub className="h-4 w-4 sm:h-5 sm:w-5 group-hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/omsharma050322/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors group"
            >
              <SiLinkedin className="h-4 w-4 sm:h-5 sm:w-5 text-[#0A66C2] transition-all group-hover:scale-110" />
            </Link>
            <Link
              href="https://leetcode.com/u/KILLERTIAN/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <SiLeetcode className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFA116]" />
            </Link>
            <Link
              href="mailto:omsharma050322@gmail.com"
              className="p-2 rounded-full hover:bg-accent transition-colors group"
            >
              <Image
                src="/gmail.png"
                alt="Gmail"
                width={16}
                height={16}
                className="h-4 w-4 sm:h-5 sm:w-5 object-contain transition-all group-hover:scale-110"
              />
            </Link>
          </div>
        </div>

        <div className="border-t py-4 sm:py-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Om Sharma. All rights reserved.
          </p>
        </div>
      </div>

      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-full p-2 h-8 w-8 sm:h-10 sm:w-10"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      )}
    </footer>
  );
}
