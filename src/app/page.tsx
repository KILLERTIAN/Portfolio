import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { SiLeetcode, SiLinkedin, SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <>
      <main className="flex flex-col scroll-smooth">
        <Navbar />
        <div className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/5">
            <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
              <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center items-center lg:items-start space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                  <div className="space-y-3 sm:space-y-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 leading-tight">
                      Hi, I&apos;m Om Sharma
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[650px] mx-auto lg:mx-0">
                      Founder of GArcade • Full Stack Developer specializing in React Native, Next.js, and modern web technologies • Winner of Smart India Hackathon 2025 & 7+ hackathons
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                    <Button asChild className="inline-flex h-11 sm:h-12 items-center justify-center rounded-md bg-primary px-8 text-sm sm:text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105">
                      <a href="#projects" className="flex items-center">
                        View My Projects
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="inline-flex h-11 sm:h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm sm:text-base font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                    >
                      <a href="https://drive.google.com/file/d/1gyKTktf3Hfdecz4c_eLvJ4yuQcaZro39/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Resume
                      </a>
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-muted-foreground">
                    <Link
                      href="https://github.com/KILLERTIAN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-foreground transition-colors"
                    >
                      <SiGithub className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/omsharma050322/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-foreground transition-colors"
                    >
                      <SiLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="https://leetcode.com/u/KILLERTIAN/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-foreground transition-colors"
                    >
                      <SiLeetcode className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFA116]" />
                      <span className="hidden sm:inline">LeetCode</span>
                    </Link>
                    <Link
                      href="mailto:omsharma050322@gmail.com"
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-foreground transition-colors"
                    >
                      <Image 
                        src="/gmail.png" 
                        alt="Gmail" 
                        width={20} 
                        height={20} 
                        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                      />
                      <span>Email</span>
                    </Link>
                  </div>
                </div>

                <div className="mx-auto w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] order-1 lg:order-2 flex justify-center items-center">
                  <div className="relative aspect-square w-full rounded-full border-2 border-primary/20 bg-background/50 p-3 sm:p-5 shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center">
                    <div className="relative aspect-square w-full rounded-full border border-border/50 bg-background flex items-center justify-center overflow-hidden">
                      <Image
                        src="/projects/om-sharma.jpeg"
                        alt="Om Sharma"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/5">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
                <div className="space-y-2 sm:space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary">
                    About Me
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                    Who I Am
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed px-2 sm:px-0">
                    I&apos;m the Founder of GArcade, a Full Stack Developer, and an award-winning hackathon participant.
                    I founded GArcade, a platform that grew to 10,000+ monthly active users processing 1.5M+ API requests monthly.
                    I&apos;ve won 7+ hackathons including Smart India Hackathon 2025 (₹1.5 Lakh prize) and have a 412-day GitHub streak.
                    I specialize in building modern web and mobile applications using React Native, Next.js, and scalable cloud infrastructure.
                  </p>
                </div>

                <div className="w-full max-w-5xl p-4 sm:p-6 rounded-lg bg-background/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">My Journey</h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                        Currently pursuing B.Tech in Computer Science Engineering at ADGIPS (GGSIPU) with a 7.5 CGPA.
                        I founded GArcade in April 2025, which has grown to serve thousands of users.
                        I&apos;ve been actively building real-world projects and winning hackathons while continuously expanding my skill set.
                      </p>
                      <h4 className="text-base sm:text-lg font-semibold mb-2">Achievements</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1">
                        <li>Winner - Smart India Hackathon 2025 (₹1.5 Lakh)</li>
                        <li>1st Place - CodeRed (IIT Delhi) - BloodConnect</li>
                        <li>2nd Place - MetaMask DevCook Off 2025</li>
                        <li>4th Rank - EDUChain Global Hackathon ($1500)</li>
                        <li>412-Day GitHub Streak</li>
                        <li>7+ Hackathons Won ($5,500+ in prizes)</li>
                      </ul>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What Drives Me</h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                        I&apos;m passionate about creating innovative solutions that solve real-world problems.
                        From founding GArcade to winning hackathons, I combine technical expertise with entrepreneurial spirit
                        to deliver exceptional user experiences at scale.
                      </p>
                      <h4 className="text-base sm:text-lg font-semibold mb-2">Technical Interests</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1">
                        <li>Cross-platform mobile development (React Native + Expo)</li>
                        <li>Scalable backend architecture (Cloudflare Workers)</li>
                        <li>Web3 and Blockchain development (Solidity)</li>
                        <li>AI/ML applications (TensorFlow, Gemini AI)</li>
                        <li>Performance optimization and DevOps</li>
                        <li>Real-time data processing and visualization</li>
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
