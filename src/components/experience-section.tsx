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
    title: "Lead Full Stack Developer",
    company: "Skill Chase",
    date: "Aug 2024 - Oct 2024",
    location: "Delhi, IN",
    description: [
      "Led the development of modern web applications, implemented AI-powered features, and mentored junior developers.",
      "Spearheaded the development of a high-impact project using Next.js and Tailwind CSS, achieving a 30% increase in page load speed and ensuring timely delivery with optimal performance and responsiveness.",
      "Crafted comprehensive project layouts in Figma, effectively delegating tasks, and providing technical guidance that reduced development errors by 20% and enhanced overall workflow efficiency."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Apka Soft Tech",
    date: "Aug 2023 - Oct 2023",
    location: "Delhi, IN",
    description: [
      "Developed responsive web applications, integrated RESTful APIs, and implemented database solutions.",
      "Designed high-conversion landing pages with a user-centric UI/UX approach, increasing organic traffic by 20% and enhancing user engagement."
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
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">My Journey</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional experience and career achievements.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8 pt-8 w-full max-w-4xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="relative pl-8 border-l-2 border-border"
                variants={item}
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="flex flex-col text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      {exp.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-sm text-muted-foreground">• {exp.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-sm md:text-base">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground">{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-bold">Honors & Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <motion.div 
                className="flex flex-col items-center p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-primary">1st Place</div>
                <div className="text-sm mt-1">Hackathon (DDUC) (PlantX)</div>
                <div className="text-xs text-muted-foreground mt-1">2024</div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-primary">4th Rank</div>
                <div className="text-sm mt-1">Global Hackathon (EDU Chain Semester 2)</div>
                <div className="text-xs text-muted-foreground mt-1">2024</div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-primary">412 Days</div>
                <div className="text-sm mt-1">of streak on GitHub</div>
                <div className="text-xs text-muted-foreground mt-1">2023</div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-4 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-primary">Certificate</div>
                <div className="text-sm mt-1">of Excellence in Java</div>
                <div className="text-xs text-muted-foreground mt-1">2023</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 