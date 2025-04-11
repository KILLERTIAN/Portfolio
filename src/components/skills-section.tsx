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
  SiC,
  SiSolidity,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiOpenai,
  SiPostman,
  SiVite,
  SiFastapi,
  SiAxios,
  SiFramer,
  SiShadcnui
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const skills = [
  {
    category: 'Languages',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className="h-6 w-6 text-[#E34F26]" /> },
      { name: 'CSS', icon: <SiCss3 className="h-6 w-6 text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="h-6 w-6 text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" /> },
      { name: 'Python', icon: <SiPython className="h-6 w-6 text-[#3776AB]" /> },
      { name: 'Java', icon: <FaJava className="h-6 w-6 text-[#007396]" /> },
      { name: 'C++', icon: <SiCplusplus className="h-6 w-6 text-[#00599C]" /> },
      { name: 'C', icon: <SiC className="h-6 w-6 text-[#A8B9CC]" /> },
      { name: 'Solidity', icon: <SiSolidity className="h-6 w-6 text-[#363636]" /> },
      { name: 'SQL', icon: <SiMysql className="h-6 w-6 text-[#4479A1]" /> }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <SiReact className="h-6 w-6 text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="h-6 w-6 text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="h-6 w-6 text-[#000000]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="h-6 w-6 text-black dark:text-white" /> },
      { name: 'Vite', icon: <SiVite className="h-6 w-6 text-[#646CFF]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" /> },
      { name: 'ShadCN', icon: <SiShadcnui className="h-6 w-6 text-[#000000]" /> },
      { name: 'GSAP', icon: <FaCode className="h-6 w-6 text-[#88CE02]" /> },
      { name: 'Framer Motion', icon: <SiFramer className="h-6 w-6 text-[#0055FF]" /> },
      { name: 'Axios', icon: <SiAxios className="h-6 w-6 text-[#5A29E4]" /> }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi className="h-6 w-6 text-[#009688]" /> },
      { name: 'REST APIs', icon: <SiExpress className="h-6 w-6 text-[#000000]" /> },
      { name: 'OpenAI API', icon: <SiOpenai className="h-6 w-6 text-[#412991]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-6 w-6 text-[#47A248]" /> },
      { name: 'Firestore', icon: <SiFirebase className="h-6 w-6 text-[#FFCA28]" /> },
      { name: 'MySQL', icon: <SiMysql className="h-6 w-6 text-[#4479A1]" /> }
    ]
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'DeepFace', icon: <SiPython className="h-6 w-6 text-[#009688]" /> },
      { name: 'Gemini AI', icon: <SiOpenai className="h-6 w-6 text-[#412991]" /> },
      { name: 'OpenAI APIs', icon: <SiOpenai className="h-6 w-6 text-[#412991]" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="h-6 w-6 text-[#FF6F00]" /> }
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <SiGit className="h-6 w-6 text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub className="h-6 w-6 text-[#181717]" /> },
      { name: 'Postman', icon: <SiPostman className="h-6 w-6 text-[#FF6C37]" /> }
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-8 md:py-16 lg:py-20 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Here are the technologies and tools I work with to build amazing applications.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {skills.map((category, index) => (
            <div
                key={index}
              className="flex flex-col space-y-3 rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
            >
              <h3 className="text-lg font-bold text-center">{category.category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 rounded-lg bg-primary/5 p-1.5 transition-colors hover:bg-primary/10"
                  >
                    <div>
                      {skill.icon}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
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