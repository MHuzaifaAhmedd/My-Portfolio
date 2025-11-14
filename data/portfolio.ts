export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "mobile" | "tools" | "database";
  proficiency: number; // 1-100
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "RastaNigheban.ai",
    description: "AI-based road safety app detecting potholes in real time using YOLO models",
    longDescription:
      "An innovative AI-based road safety application built with React Native and Django. The app detects potholes in real time using YOLO models, includes live GPS tracking, voice alerts, and map-based navigation. This was my final year project that integrates AI, GPS, and real-time backend processing to enhance road safety.",
    image: "/projects/rastanigheban.jpg",
    technologies: ["React Native", "Django", "YOLO", "Python", "GPS", "AI/ML"],
    category: "mobile",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    id: "2",
    title: "HR Management System",
    description: "Full-stack HR platform for candidate tracking, scheduling, and analytics dashboards",
    longDescription:
      "A comprehensive HR management system built for Family Builders and Developers. Features include candidate tracking, interview scheduling, employee analytics dashboards, and real-time updates using WebSockets for seamless collaboration.",
    image: "/projects/hr-management.jpg",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "WebSockets", "Express.js"],
    category: "fullstack",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    id: "3",
    title: "Naba Hussam E-Commerce",
    description: "Complete e-commerce solution for clothing sales with admin panel and product management",
    longDescription:
      "A full-featured e-commerce platform built for clothing sales. Includes user authentication, product management, shopping cart, order processing, admin dashboard, and secure payment integration. Built with modern MERN stack technologies.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Docker", "Express.js"],
    category: "fullstack",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    id: "4",
    title: "Employee Management System",
    description: "Role-based dashboard for admins and employees with attendance and performance tracking",
    longDescription:
      "A comprehensive employee management system with role-based access control. Features include attendance tracking, leave management, performance monitoring, employee profiles, and admin dashboards. Built with Next.js and Express.js for optimal performance.",
    image: "/projects/employee-management.jpg",
    technologies: ["Next.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    id: "5",
    title: "Automated Web Vulnerability Detector",
    description: "Mobile + backend system detecting SQLi/XSS vulnerabilities using React Native, PHP, and Python",
    longDescription:
      "An innovative security tool that combines mobile and backend technologies to detect common web vulnerabilities like SQL injection and Cross-Site Scripting (XSS). The system uses React Native for the mobile interface, PHP for backend processing, and Python for vulnerability scanning algorithms.",
    image: "/projects/vulnerability-detector.jpg",
    technologies: ["React Native", "PHP", "Python", "Security Testing", "Web Scraping"],
    category: "mobile",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend", proficiency: 90 },
  { name: "Next.js", icon: "nextjs", category: "frontend", proficiency: 88 },
  { name: "React Native", icon: "react", category: "mobile", proficiency: 90 },
  { name: "Expo", icon: "expo", category: "mobile", proficiency: 85 },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend", proficiency: 90 },
  { name: "HTML5", icon: "html", category: "frontend", proficiency: 95 },
  { name: "CSS3", icon: "css", category: "frontend", proficiency: 93 },
  
  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend", proficiency: 88 },
  { name: "Express.js", icon: "express", category: "backend", proficiency: 85 },
  { name: "Django", icon: "python", category: "backend", proficiency: 82 },
  { name: "Django REST Framework", icon: "api", category: "backend", proficiency: 80 },
  { name: "REST APIs", icon: "api", category: "backend", proficiency: 90 },
  { name: "WebSockets", icon: "api", category: "backend", proficiency: 85 },
  
  // Database
  { name: "MongoDB", icon: "mongodb", category: "database", proficiency: 88 },
  { name: "MySQL", icon: "postgresql", category: "database", proficiency: 85 },
  { name: "PostgreSQL", icon: "postgresql", category: "database", proficiency: 80 },
  { name: "Oracle", icon: "postgresql", category: "database", proficiency: 75 },
  
  // Languages
  { name: "JavaScript", icon: "javascript", category: "frontend", proficiency: 92 },
  { name: "TypeScript", icon: "typescript", category: "frontend", proficiency: 85 },
  { name: "Python", icon: "python", category: "backend", proficiency: 85 },
  { name: "C/C++", icon: "git", category: "tools", proficiency: 75 },
  
  // Tools & Cloud
  { name: "Docker", icon: "docker", category: "tools", proficiency: 80 },
  { name: "Redis", icon: "redis", category: "tools", proficiency: 75 },
  { name: "AWS", icon: "aws", category: "tools", proficiency: 75 },
  { name: "Google Cloud", icon: "aws", category: "tools", proficiency: 70 },
  { name: "GitHub Actions", icon: "cicd", category: "tools", proficiency: 80 },
  { name: "Git", icon: "git", category: "tools", proficiency: 90 },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Family Builders and Developers",
    position: "Full Stack Developer",
    duration: "July 2025 – Present",
    location: "Karachi, Pakistan",
    description: [
      "Built scalable business platforms with MERN stack and real-time workflows",
      "Developed Employee & HR Management Systems and an e-commerce platform",
      "Implemented secure authentication and automated data handling",
      "Created comprehensive dashboards with analytics and reporting features",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "MERN Stack"],
    current: true,
  },
  {
    id: "2",
    company: "National Bank of Pakistan",
    position: "Database Intern",
    duration: "July 2023 – Sept 2023",
    location: "Karachi, Pakistan",
    description: [
      "Managed Oracle databases and optimized SQL queries for better performance",
      "Supported reporting automation and data accuracy initiatives",
      "Assisted in database maintenance and backup procedures",
      "Collaborated with team members on data migration projects",
    ],
    technologies: ["Oracle", "SQL", "Database Management", "Data Analysis"],
    current: false,
  },
];

export const about = {
  name: "Muhammad Huzaifa Ahmed",
  title: "Full Stack & Mobile Application Developer",
  bio: "I'm a Full Stack & Mobile Application Developer passionate about building powerful, scalable, and user-focused digital products. I develop web and mobile applications using React Native, Next.js, Node.js, and Django, and love solving real-world problems with elegant code and AI-driven solutions.",
  longBio: "I'm a dedicated developer with over a year of hands-on experience in creating full-stack web and mobile applications.\n\nAt Family Builders and Developers, I built platforms like Employee Management System, HR Management System, and Naba Hussam E-commerce using the MERN stack.\n\nFor my final year project, I created RastaNigheban.ai, an AI-based road safety app that detects potholes in real time using YOLO and React Native — integrating AI, GPS, and real-time backend processing.\n\nMy focus is on writing clean, maintainable code, designing intuitive UIs, and building systems that make life simpler and smarter.",
  location: "Karachi, Pakistan",
  email: "ahmedhuzaifa451@gmail.com",
  resume: "/resume.pdf", // Path to your CV/Resume PDF in the public folder
};

