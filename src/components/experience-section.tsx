"use client";

import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
};

const experienceData: Experience[] = [
  {
    title: "Founder",
    company: "GArcade",
    date: "Apr 2025 - Present",
    location: "Delhi, IN",
    description: [
      "Founded and engineered a cross-platform mobile and web platform to track Google Cloud Skills Boost Arcade progress using React Native + Expo and Next.js.",
      "Grew to 10,000+ monthly active users with strong daily retention while reliably processing 1.5M+ API requests per month.",
      "Architected and deployed scalable backend infrastructure on Cloudflare Workers, delivering high availability and ultra-low latency under production load.",
      "Built multi-profile tracking, badge milestone visualization, and automated score computation through custom scraping and API-driven data pipelines."
    ]
  },
  {
    title: "Lead Full Stack Developer",
    company: "Skill Chase",
    date: "Aug 2024 - Oct 2024",
    location: "Delhi, IN",
    description: [
      "Led and mentored a team of 10 developers, accelerating project delivery by 25% and improving overall productivity by 15%.",
      "Directed frontend architecture using Next.js and Tailwind CSS, increasing page load performance by 30%.",
      "Structured system workflows and UI architecture in Figma, reducing implementation errors by 20%."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Apka Soft Tech (AST)",
    date: "Aug 2023 - Oct 2023",
    location: "Delhi, IN",
    description: [
      "Revamped and optimized client-facing websites using React, Node.js, and WordPress, enhancing SEO, WooCommerce integrations, and Google Reviews visibility.",
      "Decreased page load times by 30% and increased organic traffic by 20% through targeted performance tuning and technical SEO enhancements."
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center w-full">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-xs sm:text-sm">
              My Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed lg:text-xl/relaxed px-2 sm:px-0">
              My professional experience and career achievements.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:gap-8 pt-6 sm:pt-8 w-full max-w-4xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-6 sm:pl-8 border-l-2 border-border"
                variants={item}
              >
                <div className="absolute -left-[7px] sm:-left-[9px] top-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-primary"></div>
                <div className="flex flex-col text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {exp.date}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                    <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">• {exp.location}</span>
                  </div>
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 list-disc list-inside text-xs sm:text-sm md:text-base">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <div className="mt-12 sm:mt-16 space-y-4 sm:space-y-6 w-full max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                className="flex flex-col p-4 sm:p-6 rounded-lg border border-border bg-card text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-base sm:text-lg font-bold text-primary">ADGIPS (GGSIPU)</div>
                <div className="text-sm sm:text-base font-medium mt-1">Computer Science Engineering</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">2022 - 2026 • Delhi, IN</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">CGPA: 7.5</div>
              </motion.div>

              <motion.div
                className="flex flex-col p-4 sm:p-6 rounded-lg border border-border bg-card text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-base sm:text-lg font-bold text-primary">Kendriya Vidyalaya</div>
                <div className="text-sm sm:text-base font-medium mt-1">Senior Secondary (12th)</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">2021 - 2022 • Delhi Cantt</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Percentage: 81%</div>
              </motion.div>
            </div>
          </div>

          {/* Honors & Awards Section */}
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 w-full max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-bold">Honors & Awards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">Winner</div>
                <div className="text-xs sm:text-sm mt-1 text-center">Smart India Hackathon 2025</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">₹1.5 Lakh • 2025</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">1st Place</div>
                <div className="text-xs sm:text-sm mt-1 text-center">CodeRed (IIT Delhi)</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">BloodConnect • 2025</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">2nd Place</div>
                <div className="text-xs sm:text-sm mt-1 text-center">MetaMask DevCook Off</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">2025</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">4th Rank</div>
                <div className="text-xs sm:text-sm mt-1 text-center">EDUChain Global Hackathon</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">$1500 • 2024</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">1st Place</div>
                <div className="text-xs sm:text-sm mt-1 text-center">Hackathon (DDUC)</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">PlantX • 2024</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">412 Days</div>
                <div className="text-xs sm:text-sm mt-1 text-center">of streak on GitHub</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">2023</div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border bg-card sm:col-span-2 lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">7+ Hackathons Won</div>
                <div className="text-xs sm:text-sm mt-1 text-center">Total Prizes $5,500+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">2022 - 2026</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
