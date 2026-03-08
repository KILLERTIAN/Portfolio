"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiSolidity,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPostman,
  SiVite,
  SiFastapi,
  SiFramer,
  SiShadcnui,
  SiDocker,
  SiPostgresql,
  SiExpo,
  SiInfluxdb,
  SiBlender,
  SiGooglegemini,
  SiGreensock,
  SiTurso
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Network, BrainCircuit, ScanFace } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript className="h-5 w-5 sm:h-6 sm:w-6 text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="h-5 w-5 sm:h-6 sm:w-6 text-[#3178C6]" /> },
      { name: 'Python', icon: <SiPython className="h-5 w-5 sm:h-6 sm:w-6 text-[#3776AB]" /> },
      { name: 'Java', icon: <FaJava className="h-5 w-5 sm:h-6 sm:w-6 text-[#007396]" /> },
      { name: 'C++', icon: <SiCplusplus className="h-5 w-5 sm:h-6 sm:w-6 text-[#00599C]" /> },
      { name: 'Solidity', icon: <SiSolidity className="h-5 w-5 sm:h-6 sm:w-6 text-[#363636]" /> },
      { name: 'SQL', icon: <SiMysql className="h-5 w-5 sm:h-6 sm:w-6 text-[#4479A1]" /> },
      { name: 'HTML5', icon: <SiHtml5 className="h-5 w-5 sm:h-6 sm:w-6 text-[#E34F26]" /> },
      { name: 'CSS3', icon: <SiCss3 className="h-5 w-5 sm:h-6 sm:w-6 text-[#1572B6]" /> }
    ]
  },
  {
    category: 'Frontend & Mobile',
    skills: [
      { name: 'React', icon: <SiReact className="h-5 w-5 sm:h-6 sm:w-6 text-[#61DAFB]" /> },
      { name: 'React Native', icon: <SiReact className="h-5 w-5 sm:h-6 sm:w-6 text-[#61DAFB]" /> },
      { name: 'Expo', icon: <SiExpo className="h-5 w-5 sm:h-6 sm:w-6 text-[#000020] dark:text-white" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" /> },
      { name: 'Vite', icon: <SiVite className="h-5 w-5 sm:h-6 sm:w-6 text-[#646CFF]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-5 w-5 sm:h-6 sm:w-6 text-[#06B6D4]" /> },
      { name: 'ShadCN', icon: <SiShadcnui className="h-5 w-5 sm:h-6 sm:w-6 text-[#000000] dark:text-white" /> },
      { name: 'Framer Motion', icon: <SiFramer className="h-5 w-5 sm:h-6 sm:w-6 text-[#0055FF]" /> },
      { name: 'GSAP', icon: <SiGreensock className="h-5 w-5 sm:h-6 sm:w-6 text-[#88CE02]" /> }
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="h-5 w-5 sm:h-6 sm:w-6 text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="h-5 w-5 sm:h-6 sm:w-6 text-[#000000] dark:text-white" /> },
      { name: 'FastAPI', icon: <SiFastapi className="h-5 w-5 sm:h-6 sm:w-6 text-[#009688]" /> },
      { name: 'REST APIs', icon: <Network className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6C37]" /> }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="h-5 w-5 sm:h-6 sm:w-6 text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="h-5 w-5 sm:h-6 sm:w-6 text-[#336791]" /> },
      { name: 'MySQL', icon: <SiMysql className="h-5 w-5 sm:h-6 sm:w-6 text-[#4479A1]" /> },
      { name: 'Firestore', icon: <SiFirebase className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFCA28]" /> },
      { name: 'InfluxDB', icon: <SiInfluxdb className="h-5 w-5 sm:h-6 sm:w-6 text-[#22ADF6]" /> },
      { name: 'Turso', icon: <SiTurso className="h-5 w-5 sm:h-6 sm:w-6 text-[#4DEDAA]" /> }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: <SiDocker className="h-5 w-5 sm:h-6 sm:w-6 text-[#2496ED]" /> },
      { name: 'Git', icon: <SiGit className="h-5 w-5 sm:h-6 sm:w-6 text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub className="h-5 w-5 sm:h-6 sm:w-6 text-[#181717] dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6C37]" /> }
    ]
  },
  {
    category: 'AI / ML & Other',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6F00]" /> },
      { name: 'Gemini AI', icon: <SiGooglegemini className="h-5 w-5 sm:h-6 sm:w-6 text-[#8E75B2]" /> },
      { name: 'DeepFace', icon: <BrainCircuit className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E86AB]" /> },
      { name: 'FaceNet', icon: <ScanFace className="h-5 w-5 sm:h-6 sm:w-6 text-[#009688]" /> },
      { name: 'Blender', icon: <SiBlender className="h-5 w-5 sm:h-6 sm:w-6 text-[#F5792A]" /> }
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/5">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs sm:text-sm text-primary">
              Skills
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed px-2 sm:px-0">
              Here are the technologies and tools I work with to build amazing applications.
            </p>
          </div>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 sm:space-y-3 rounded-lg border bg-card p-3 sm:p-4 text-card-foreground shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-center">{category.category}</h3>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-primary/5 p-1.5 sm:p-2 transition-colors hover:bg-primary/10"
                  >
                    <div>{skill.icon}</div>
                    <span className="text-xs sm:text-sm font-medium truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
