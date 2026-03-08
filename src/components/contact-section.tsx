import { Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/5">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 sm:space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary">
              Contact
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed px-2 sm:px-0">
              Feel free to reach out to me for any questions or opportunities. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
            <a
              href="tel:+919717488830"
              className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-4 text-primary" />
              <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Phone</h3>
              <span className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors">
                +91 9717488830
              </span>
            </a>

            <a
              href="mailto:omsharma050322@gmail.com"
              className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div className="mb-2 sm:mb-4 transition-transform group-hover:scale-110">
                <Image
                  src="/gmail.png"
                  alt="Gmail"
                  width={32}
                  height={32}
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Email</h3>
              <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm hover:text-primary transition-colors truncate w-full">
                omsharma050322@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/KILLERTIAN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <SiGithub className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-4 text-foreground transition-transform group-hover:scale-110" />
              <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">GitHub</h3>
              <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm hover:text-primary transition-colors truncate w-full">
                github.com/KILLERTIAN
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/omsharma050322/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 sm:p-5 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <SiLinkedin className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-4 text-[#0A66C2] transition-transform group-hover:scale-110" />
              <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">LinkedIn</h3>
              <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm hover:text-primary transition-colors truncate w-full">
                linkedin.com/in/omsharma050322
              </span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
