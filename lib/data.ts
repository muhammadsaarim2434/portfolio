export const profile = {
  name: 'Muhammad Saarim',
  title: 'AI Trainer | MERN Stack Developer',
  tagline:
    'I build responsive, high-performance web applications and integrate AI-driven solutions into scalable, user-focused products.',
  about:
    'AI Trainer and Full-Stack JavaScript Developer experienced in building responsive, high-performance web applications. Skilled in React.js, Next.js, Node.js, and MongoDB, with a strong UI/UX sense. Passionate about integrating AI-driven solutions into scalable, user-focused digital products.',
  photo: '/images/face1.png',
  resume: '/resume.pdf',
  email: 'muhammadsaarim2434@gmail.com',
  phone: '+92 310 4438088',
  location: 'Ashiana Road, Lahore, 54000, Pakistan',
  linkedin: 'https://www.linkedin.com/in/muhammad-saarim/',
  github: 'https://github.com/muhammadsaarim2434',
};

export const skills: string[] = [
  'Next.js',
  'React.js',
  'Node.js',
  'JavaScript',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Material UI',
  'Shadcn UI',
  'WordPress',
  'GitHub',
  'Git Bash',
  'Prompt Engineering',
  'LLM Training',
  'Data Annotation',
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: 'Taaply',
    description:
      'A responsive website with a strong focus on UI/UX, featuring dynamic functionality and deployed live on Hostinger.',
    tech: ['Next.js', 'Node.js'],
    live: '',
    github: '',
  },
  {
    title: 'Fycle',
    description:
      'A platform showcasing convenient, free and clean energy generated from wood waste, built with a strong UI/UX focus.',
    tech: ['React.js', 'Node.js'],
    live: '',
    github: '',
  },
  {
    title: 'Enlix',
    description:
      'A responsive marketing website for Enlix, a UK-based IT services company, with clean UI, intuitive navigation and mobile-friendly design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    live: '',
    github: '',
  },
  {
    title: 'Droozi',
    description:
      'A modern, responsive web platform with optimized performance, clean UI components and dynamic backend API integration.',
    tech: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    live: '',
    github: '',
  },
  {
    title: 'Droozi Admin Panel',
    description:
      'A secure and scalable admin dashboard for managing platform operations with real-time data handling via secure RESTful APIs.',
    tech: ['MERN', 'REST API'],
    live: '',
    github: '',
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: 'AI Trainer',
    company: 'Single Solutions',
    location: 'Lahore, Pakistan',
    period: 'Jan 2026 — Present',
    points: [
      'Specialized in prompt engineering, designing and refining prompts to improve AI model performance and output quality.',
      'Managed and optimized Turing profiles, ensuring accuracy, consistency and alignment with project requirements.',
      'Debugged and reviewed Git repositories, identifying issues and improving code quality for AI-related workflows.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Trivana Digital',
    location: 'Remote',
    period: 'Feb 2025 — Present',
    points: [
      'Developed and maintained scalable full-stack applications using the MERN stack.',
      'Designed responsive UIs and built robust backend APIs with clean, maintainable code.',
      'Collaborated with cross-functional teams to analyze requirements and deliver features on deadline.',
    ],
  },
  {
    role: 'Full Stack JavaScript Developer',
    company: 'Horizam Tech',
    location: 'Lahore, Pakistan',
    period: 'Jun 2024 — Aug 2025',
    points: [
      'Built responsive, user-friendly interfaces using HTML, CSS, Bootstrap and JavaScript.',
      'Built dynamic web applications with React.js and pixel-perfect UIs with Next.js.',
      'Handled backend tasks and built APIs with Node.js, integrating serverless APIs.',
    ],
  },
  {
    role: 'Web Designer',
    company: 'Bitlogicx',
    location: 'Lahore, Pakistan',
    period: 'Dec 2023 — May 2024',
    points: [
      'Designed and built responsive web pages using HTML, CSS, Bootstrap and JavaScript during internship.',
      'Worked as a Junior Web Designer, helping developers deliver multiple websites with clean design.',
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Master's in Data Sciences",
    school: 'Superior University',
    period: 'Feb 2026 — Present',
  },
  {
    degree: "Bachelor's in Computer Sciences",
    school: 'Superior University',
    period: 'Sep 2020 — Jul 2024',
  },
];

export const certificates = [
  { name: 'Change Management', org: 'Superior University', year: 'May 2023' },
  { name: 'Code War', org: 'GCU-ACM Student Chapter', year: 'Jun 2024' },
];

export const interests = ['Table Tennis', 'Snooker', 'Learning'];
