export const siteConfig = {
  name: "Umer Khan Niazi",
  description: "ML and systems developer, second-year AI student at UET Lahore.",

  navbar: {
    links: [
      { label: "home", href: "/#hero" },
      { label: "projects", href: "/#projects" }
    ],
    resume: {
      label: "resume",
      href: "/resume.pdf"
    }
  },

  hero: {
    status: "Machine Learning & Systems",
    title: "Umer Khan Niazi",
    intro: "I build things that actually run: pipelines, classifiers and terminal tools. Python mostly, C++ when it matters."
  },

  projects: {
    heading: {
      title: "projects"
    },
    featured: [
      {
        title: "news-nlp-pipeline",
        description: "I wanted to understand what Dawn actually writes about so I built a pipeline for unguided analysis. It runs raw text through BERTopic for topic modeling, spaCy for NER and a classifier for sentiment. No labels or supervision. The structure emerges from the data itself.",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/umerkniazi/news-nlp-pipeline"
          }
        ]
      },
      {
        title: "gb-wildlife-classifier",
        description: "Used a frozen backbone with a custom 3-class head trained on endangered Himalayan species from Gilgit-Baltistan. Focused on stress testing out-of-distribution inputs and added an 80% confidence threshold to flag uncertain predictions. Documented failure cases where visual similarity causes confusion between species.",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/umerkniazi/gb-wildlife-classifier"
          }
        ]
      },
      {
        title: "shelter-outcome-predictor",
        description: "Trained a Random Forest on data from Austin Animal Center to predict which animals are at risk. Built for recall over precision since missing an at-risk animal is worse than a false alarm.",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/umerkniazi/shelter-outcome-predictor"
          }
        ]
      },
      {
        title: "wmus",
        description: "I use cmus on Linux and wanted something similar on Windows. Nothing felt right so I wrote my own. A cmus-inspired Python terminal music player with fuzzy search, vim-style bindings and metadata caching. It focuses on doing one thing well without getting in the way.",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/umerkniazi/wmus"
          }
        ]
      }
    ]
  },

  about: {
    heading: {
      title: "about",
      education: "education",
      skills: "skills"
    },
    introParagraphs: [
      "I'm a second-year AI student at UET Lahore. I write a lot of Python, some C++ and spend more time in the terminal than I'd like to admit. I got into this because I wanted to understand how things actually work. Not theory in isolation but what happens when you run it on real data with real constraints on a machine that has better things to do.",
      "Outside that I'm into Linux, FOSS, animal welfare and cats. I think the most interesting software is written by people who care about something other than software."
    ],
    skillGroups: [
      {
        label: "Core",
        skills: ["Python", "C++", "Linux"]
      },
      {
        label: "ML & Data",
        skills: ["PyTorch", "scikit-learn", "spaCy"]
      }
    ],
    timeline: [
      {
        year: "2025 — Present",
        title: "BS Artificial Intelligence, UET",
        description: "",
        primary: true
      }
    ]
  },

  footer: {
    status: "open to opportunities",
    contacts: [
      {
        label: "Email",
        href: "mailto:umerkniazi@proton.me",
        value: "umerkniazi@proton.me"
      },
      {
        label: "GitHub",
        href: "https://github.com/umerkniazi",
        value: "github.com/umerkniazi",
        external: true
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/umerkniazi",
        value: "linkedin.com/in/umerkniazi",
        external: true
      }
    ]
  },

  error404: {
    title: "Signal Lost",
    message: "The route you requested doesn't exist on this machine.",
    cta: {
      label: "return home",
      href: "/"
    }
  }
};