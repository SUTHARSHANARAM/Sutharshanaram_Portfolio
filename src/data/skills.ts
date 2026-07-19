export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Dart", "C"],
  },
  {
    title: "Development",
    skills: ["Flutter", "React / Next.js", "Firebase", "FastAPI", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "OpenCV", "Scikit Learn"],
  },
  {
    title: "Software Testing",
    skills: ["Manual Testing", "Playwright (Automation)"],
  },
  {
    title: "Data Analytics",
    skills: ["Power BI", "Excel"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Vercel", "VS Code"],
  },
];
