export const siteConfig = {
  name: "Umer Khan Niazi",
  description: "ML and systems developer, second-year AI student at UET Lahore.",
  navbar: {
    brandMark: "UK",
    brandName: "Umer Khan Niazi",
    links: [
      { label: "Projects", href: "/#projects" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" }
    ],
    resume: {
      label: "Resume",
      href: "/resume.pdf"
    }
  },
  hero: {
    status: "Machine Learning & Systems",
    title: "Umer Khan Niazi",
    intro: "I build things that actually run: pipelines, classifiers, and terminal tools. Python mostly, C++ when it matters.",
    terminal: {
      meta: "umer@portfolio:~",
      prompt: "$",
      command: "ls projects/",
      output: [
        "news-nlp-pipeline/",
        "gb-wildlife-classifier/",
        "shelter-outcome-predictor/"
      ]
    },
    cta: {
      label: "Download CV",
      href: "/resume.pdf"
    },
    socials: {
      github: "https://github.com/umerkniazi",
      linkedin: "https://linkedin.com/in/umerkniazi"
    }
  },
  projects: {
    heading: {
      eyebrow: "// projects",
      title: "Things I've Built"
    },
    featured: [
      {
        kicker: "// flagship — unguided analysis",
        title: "News NLP Pipeline",
        metricBadge: "350k+ articles processed",
        description: "I wanted to know what Dawn actually writes about, so I built a pipeline for unguided analysis. Runs the raw data through BERTopic for topic modeling, spaCy for NER, and a classifier for sentiment. No labels, no supervision. The structure emerges from the text itself.",
        techStack: ["Python", "NLP", "spaCy", "BERTopic"],
        links: [
          { label: "GitHub", url: "https://github.com/umerkniazi/news-nlp-pipeline", icon: "GithubLogo" },
          { label: "Streamlit App", url: "https://news-nlp-pipeline.streamlit.app/", icon: "ArrowUpRight" }
        ],
        isFlagship: true
      },
      {
        kicker: "// computer vision — edge case QA",
        title: "GB Wildlife Classifier",
        metricBadge: "98.16% val accuracy",
        description: "Frozen early layers, custom 3-class head trained on three endangered Himalayan species from Gilgit-Baltistan. The real work was stress-testing out-of-distribution data, adding an 80% confidence threshold to catch unknowns, and documenting failure modes where visual and taxonomic similarity trips the model.",
        techStack: ["Python", "PyTorch", "Computer Vision", "Streamlit"],
        links: [
          { label: "GitHub", url: "https://github.com/umerkniazi/gb-wildlife-classifier", icon: "GithubLogo" },
          { label: "Streamlit App", url: "https://gb-wildlife-classifier.streamlit.app/", icon: "ArrowUpRight" }
        ]
      },
      {
        kicker: "// machine learning — predictive triage",
        title: "Shelter Outcome Predictor",
        metricBadge: "80k+ intake records modeled",
        description: "Trained a Random Forest on data from Austin Animal Center to predict which animals are at risk. Built for recall over precision because a missed at-risk animal is worse than a false alarm. Deployed as a Streamlit app. This one matters to me personally.",
        techStack: ["Python", "Machine Learning", "Streamlit"],
        links: [
          { label: "GitHub", url: "https://github.com/umerkniazi/shelter-outcome-predictor", icon: "GithubLogo" },
          { label: "Streamlit App", url: "https://shelter-outcome-predictor.streamlit.app/", icon: "ArrowUpRight" }
        ]
      }
    ],
    secondaryHeading: {
      eyebrow: "// other work"
    },
    other: [
      {
        kicker: "// systems — terminal music player",
        title: "WMUS",
        description: "I use cmus on Linux and needed something similar on Windows. Nothing I tried felt quite right, so I wrote my own. Cmus-inspired, Python-based terminal music player with fuzzy search, vim-style bindings, and metadata caching. It focuses on doing one thing well without getting in the way.",
        techStack: ["Python", "CLI Tool", "Systems Programming"],
        links: [
          { label: "GitHub", url: "https://github.com/umerkniazi/wmus", icon: "GithubLogo" }
        ]
      },
      {
        kicker: "// game dev — endless runner",
        title: "Waddle Away",
        description: "An endless runner built in Godot. I made this because I wanted to understand how games actually feel: collision response, frame timing, the gap between technically correct and fun. It taught me more about feedback loops than any ML paper has.",
        techStack: ["Godot", "Game Development"],
        links: [
          { label: "GitHub", url: "https://github.com/umerkniazi/waddle-away", icon: "GithubLogo" },
          { label: "Itch.io", url: "https://umerkniazi.itch.io/waddle-away", icon: "GameController" }
        ],
        isSideProject: true
      }
    ]
  },
  about: {
    heading: {
      eyebrow: "// about",
      title: "Builder. Second year."
    },
    introParagraphs: [
      "I'm a second-year AI student at UET Lahore. I write a lot of Python, some C++, and more time in the terminal than I'd like to admit. I got into this because I wanted to understand how things actually work.",
      "Not the theory in isolation, but what happens when you run it on real data, with real constraints, on a machine that has better things to do. That's still what pulls me toward NLP pipelines and low-level tooling.",
      "Outside that I'm into Linux, FOSS, animal welfare, and cats. I think the most interesting software is written by people who care about something other than software."
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
        year: "2024 — Present",
        title: "BS Artificial Intelligence, UET",
        description: "Focused on machine learning architecture, systems programming, and applied mathematics.",
        primary: true
      },
      {
        year: "Current Focus",
        title: "Systems & Infrastructure",
        description: "Building the infrastructure layer beneath the models. Moving past standard model training to focus on data structures, Linux concepts, and low-latency implementation."
      },
      {
        year: "Current Rabbithole",
        title: "Hands-On Machine Learning",
        description: "Reading Aurélien Géron."
      }
    ]
  },
  contact: {
    heading: {
      eyebrow: "// reach out",
      title: "Say Hello",
      lead: "If you're working on something interesting, want to talk Linux, NLP, or animal rescue tech, or just found a bug in one of my projects, my inbox is open."
    },
    contacts: [
      {
        label: "Email",
        href: "mailto:umerkniazi@proton.me",
        value: "umerkniazi@proton.me",
        icon: "EnvelopeSimple"
      },
      {
        label: "GitHub",
        href: "https://github.com/umerkniazi",
        value: "github.com/umerkniazi",
        icon: "GithubLogo",
        external: true
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/umerkniazi",
        value: "linkedin.com/in/umerkniazi",
        icon: "LinkedinLogo",
        external: true
      }
    ]
  },
  error404: {
    eyebrow: "// ERROR 404",
    title: "Signal Lost",
    terminal: {
      meta: "error 404",
      prompt: "$",
      command: "cat /requested-route",
      output: ["cat: /requested-route: No such file or directory"]
    },
    message: "The route you requested doesn't exist on this machine.",
    cta: {
      label: "Return Home",
      href: "/"
    }
  }
};