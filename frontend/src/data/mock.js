// Mock data for John Frances Eder's Portfolio

export const personalInfo = {
  name: "John Frances Eder",
  title: "Full Stack Developer",
  tagline: "Building scalable web solutions with modern technologies",
  location: "Philippines",
  phone: "+63 935 847 4023",
  email: "johnfrancesquiminaleseder@gmail.com",
  github: "https://github.com/johnfranceseder",
  linkedin: "https://linkedin.com/in/johnfranceseder",
  bio: "Full-stack developer experienced in building scalable web and mobile solutions. Skilled in creating user-focused interfaces, optimizing backend systems, and ensuring reliable integrations. Continuously upskilling to stay ahead in full-stack development, quick to learn new technologies, and committed to continuous improvement across frontend, backend, and IoT systems."
};

export const skills = {
  frontend: [
    { name: "Angular", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "Figma", level: 80 }
  ],
  backend: [
    { name: "Laravel", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Authentication & RBAC", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 75 }
  ],
  mobile: [
    { name: "Android (Java)", level: 80 },
    { name: "Flutter", level: 70 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Jira (Agile/Scrum)", level: 85 },
    { name: "CI/CD", level: 75 },
    { name: "Arduino/IoT", level: 80 }
  ]
};

export const experience = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "Backride Pinas",
    type: "Remote",
    duration: "August 2024 - Present",
    responsibilities: [
      "Co-developed BRP-Workforce, an employee login and records management system, handling both frontend (Angular) and backend code optimization",
      "Enhanced the admin panel certification console, improving efficiency in adding Gift certifications",
      "Created the /online-hiring module, enabling streamlined recruitment workflows",
      "Optimized Customer-Web and Palawan-Partner applications by fixing API request handling, resolving HTTP 429 errors",
      "Worked within an Agile environment using Jira, collaborating with cross-functional teams",
      "Improved backend performance through code refactoring and better API request handling"
    ],
    technologies: ["Angular", "Laravel", "MySQL", "Jira", "REST APIs"]
  },
  {
    id: 2,
    position: "Backend Developer Intern",
    company: "Smart Inbox Technology",
    type: "Remote",
    duration: "January 2025 - June 2025",
    responsibilities: [
      "Developed backend features in Laravel (admin panels, role-based access, ticketing systems)",
      "Built responsive UIs using Bootstrap & Figma, improving usability across devices",
      "Implemented appointment-based ticketing & priority handling, cutting average response time by 25%",
      "Contributed to healthcare & recruitment platforms (AMDC Recruitment, Obeid Patient Portal, SunCity Clinic)",
      "Collaborated with remote team using GitHub"
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "Figma", "GitHub"]
  }
];

export const projects = [
  {
    id: 1,
    title: "BRP-Workforce Management System",
    description: "Employee login and records management system with advanced admin certification console",
    technologies: ["Angular", "Laravel", "MySQL", "REST APIs"],
    features: [
      "Employee authentication and records management",
      "Admin certification console",
      "Online hiring module",
      "Role-based access control"
    ],
    category: "Web Application",
    year: "2024"
  },
  {
    id: 2,
    title: "Customer-Web Optimization",
    description: "Optimized API request handling and resolved rate limit errors for improved system reliability",
    technologies: ["Angular", "REST APIs", "Performance Optimization"],
    features: [
      "Fixed HTTP 429 rate limit errors",
      "Improved API request handling",
      "Enhanced system reliability",
      "Better user experience"
    ],
    category: "Performance Optimization",
    year: "2024"
  },
  {
    id: 3,
    title: "Healthcare & Recruitment Platforms",
    description: "Contributed to multiple healthcare and recruitment platforms with backend and UI development",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Figma"],
    features: [
      "AMDC Recruitment system",
      "Obeid Patient Portal",
      "SunCity Clinic platform",
      "Responsive UI design"
    ],
    category: "Healthcare & HR",
    year: "2025"
  },
  {
    id: 4,
    title: "Arduino Writing Board Wiper",
    description: "Capstone project featuring IoT integration with mobile app interface for automated board cleaning",
    technologies: ["Arduino", "Android (Java)", "IoT"],
    features: [
      "IoT-driven automation",
      "Mobile app control interface",
      "Real-time device communication",
      "User-friendly interface"
    ],
    category: "IoT Project",
    year: "2025"
  }
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Eastern Samar State University - Guiuan",
  duration: "2021 - 2025",
  certifications: [
    {
      name: "Computer System Servicing NC II",
      issuer: "TESDA",
      year: "2023"
    }
  ]
};