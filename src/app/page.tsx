import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScreenLoader } from "@/components/screen-loader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScreenLoader />
      <main className="flex flex-col scroll-smooth">
        <Navbar />
        <div className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 bg-gradient-to-b from-background to-secondary/5">
            <div className="container px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                      Hi, I&apos;m Om Sharma
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px]">
                      Full Stack Developer specializing in modern web technologies like Next.js, React, and Tailwind CSS.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Button asChild className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      <a href="#projects" className="flex items-center">
                        View My Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <a href="https://drive.google.com/file/d/1_eT8xkAoQBQnqQGbgrHNJZP0RB8waoDT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <Link
                      href="https://github.com/KILLERTIAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/omsharma050322/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="mailto:omsharma050322@gmail.com"
                      className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email</span>
                    </Link>
                  </div>
                </div>
                <div className="mx-auto aspect-square overflow-hidden rounded-full border-2 border-primary/10 bg-background p-2 shadow-lg transition-all hover:scale-105">
                  <div className="aspect-square overflow-hidden rounded-full border border-border/40 bg-background/30 p-4">
                    <Image
                      src="/projects/om-sharma.jpeg" 
                      alt="Om Sharma"
                      width={600}
                      height={600}
                      className="aspect-square rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full py-8 md:py-16 lg:py-20 bg-secondary/5">
            <div className="container px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who I Am</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    I&apos;m a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                    My journey in tech started with a deep curiosity about how things work, leading me to explore various 
                    programming languages and frameworks. I specialize in building modern, responsive web applications 
                    using Next.js, React, and Tailwind CSS, with a keen eye for performance and user experience.
                  </p>
                </div>
                <div className="w-full max-w-5xl p-6 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                      <p className="text-muted-foreground mb-4">
                        Currently pursuing B.Tech in Computer Science Engineering at ADGIPS (GGSIPU), 
                        I&apos;ve been actively working on real-world projects and continuously expanding my skill set.
                      </p>
                      <h4 className="text-lg font-semibold mb-2">Technical Interests</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>AI and Machine Learning applications</li>
                        <li>Web3 and Blockchain development</li>
                        <li>Real-time web applications</li>
                        <li>Performance optimization</li>
                        <li>UI/UX design principles</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
                      <p className="text-muted-foreground mb-4">
                        I&apos;m passionate about creating innovative solutions that solve real-world problems. 
                        My approach combines technical expertise with creative problem-solving to deliver 
                        exceptional user experiences.
                      </p>
                      <h4 className="text-lg font-semibold mb-2">Future Goals</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>Contribute to open-source projects</li>
                        <li>Develop innovative AI solutions</li>
                        <li>Build scalable web applications</li>
                        <li>Mentor aspiring developers</li>
                        <li>Stay updated with emerging technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <SkillsSection />
          
          {/* Projects Section */}
          <ProjectsSection />
          
          {/* Experience Section */}
          <ExperienceSection />
          
          {/* Contact Section */}
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
