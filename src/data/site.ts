export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EnvironmentCategory {
  category: string;
  items: string[];
}

export const site = {
  name: 'Umer Khan Niazi',
  role: 'Software Engineer & AI Student',
  tagline:
    'I build machine learning projects and software tools, working with real datasets and practical constraints.',
  email: 'umerkniazi@proton.me',
  github: 'https://github.com/umerkniazi',
  linkedin: 'https://linkedin.com/in/umerkniazi',
  statusText: 'Open to AI/ML and SWE internships',
  currentFocus: 'Machine learning, software engineering, and terminal tools',
  resumeUrl: '/resume.pdf',
  description:
    'Portfolio of Umer Khan Niazi, a software engineer and AI student at UET Lahore. Machine learning projects, terminal tools, and software experiments.',

  socials: [
    { label: 'GitHub', url: 'https://github.com/umerkniazi' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/umerkniazi' },
  ] as SocialLink[],

  nav: [
    { label: 'projects', href: '#projects' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
  ] as NavLink[],

  hero: {
    focusLabel: 'Focus',
    statusLabel: 'Status',
    resumeCta: 'Resume',
  },

  projectsSection: {
    title: 'Projects',
    description:
      "A selection of open-source projects I've built to explore ideas, solve practical problems, and work with real data.",
  },

  bio: {
    summary:
      "I am studying Artificial Intelligence at UET Lahore with a strong interest in software engineering and systems. Most of my projects start with a question or a practical problem, whether that means working with a large dataset, building a terminal tool, or training a model. I enjoy machine learning, Linux, open source, and building software that feels solid and complete.",
    about: [
      "I started programming in Python by writing small automation scripts. Even before writing code, I was always tinkering with hardware, electronics, and home networking. I have always enjoyed taking things apart to understand how they work under the surface and putting them back together.",
      "Building small games in Unity early on sparked my curiosity about software and eventually led me to machine learning, particularly computer vision and NLP. Outside of computing, I care deeply about wildlife conservation and animal welfare, which directly inspired two of my projects: classifying Himalayan species and predicting shelter outcomes.",
    ],
  },

  education: {
    degree: 'BS Artificial Intelligence',
    school: 'University of Engineering and Technology (UET Lahore)',
    period: 'Expected 2029',
  },

  aboutSection: {
    title: 'About',
    emailCta: 'Get in touch \u2193',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    interestsTitle: 'Interests',
    setupTitle: 'Setup',
    setupSubtitle: 'What I actually build with, day to day.',
  },

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'C++', 'SQL', 'GDScript'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['PyTorch', 'scikit-learn', 'Transformers', 'Computer Vision', 'NLP'],
    },
    {
      category: 'Software & Systems',
      items: ['Streamlit', 'SQLite', 'Linux', 'Git', 'Bash'],
    },
    {
      category: 'Game Dev',
      items: ['Godot', 'Unity'],
    },
  ] as SkillCategory[],

  interests: [
    'Game development',
    'Systems programming & CLI tools',
    'Open source software',
    'Electronics & hardware',
    'Wildlife conservation & animal welfare',
  ],

  environment: [
    {
      category: 'Linux distribution',
      items: ['Ubuntu', 'Arch', 'Fedora (current)'],
    },
    {
      category: 'Desktop environment',
      items: ['KDE Plasma'],
    },
  ] as EnvironmentCategory[],

  contactSection: {
    title: "Let's connect",
    body:
      "I am currently looking for AI/ML and software engineering internship opportunities. If you have an open role, an interesting project to discuss, or want to collaborate on open source, feel free to reach out.",
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    message: "There's nothing at this path.",
    cta: 'Go back home',
  },
};