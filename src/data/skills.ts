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
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Predictive Modeling", "LangChain"],
  },
  {
    title: "Data Analytics",
    skills: ["Power BI", "Data Visualization", "Exploratory Data Analysis", "Data Cleaning", "Excel", "DAX Queries"],
  },
  {
    title: "Software Testing",
    skills: ["Manual Testing", "Test Case Design", "Playwright (Automation)", "Bug Reporting", "JIRA"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Vercel", "VS Code", "Postman"],
  },
];
