export const siteConfig = {
  name: "Umer Khan Niazi",
  title: "Umer Khan Niazi | ML Engineer",
  description:
    "I build ML pipelines, classifiers, and tools that run on real data with real constraints. Second-year AI student at UET Lahore. Open to ML internships and research roles.",
  url: "https://umerkniazi.github.io/",

  navbar: {
    links: [
      { label: "Projects", href: "/#projects" },
      { label: "About", href: "/#about" },
    ],
    resume: {
      label: "Resume",
      href: "/resume.pdf",
    },
  },

  hero: {
    eyebrow: "Machine Learning & Systems",
    name: "Umer Khan Niazi",
    tagline:
      "I build ML systems that don't stop at the notebook. I write pipelines, classifiers, and tools designed for real data, real hardware, and real constraints.",
    status: {
      label: "Open to ML internships and research roles",
      available: true,
    },
    cta: {
      label: "Get in touch",
      href: "mailto:umerkniazi@proton.me",
    },
  },

  projects: {
    sectionLabel: "Projects",
    items: [
      {
        slug: "news-nlp-pipeline",
        title: "News NLP Pipeline",
        description:
          "I wanted to understand what 15 years of Pakistani news actually covered, without imposing categories. The pipeline runs raw headlines through BERTopic for unsupervised topic modeling and spaCy for named entity recognition. No hand-labeled examples. Structure emerges from the corpus.",
        detail: {
          problem:
            "350,000+ historical headlines with no labels and no ground truth. Manual categorization doesn't scale, and supervised models require labeled data that doesn't exist.",
          approach:
            "BERTopic for unsupervised topic discovery, spaCy NER for entity extraction, custom sentiment classifier. Zero human annotation ensures the model finds structure from raw text alone.",
          result:
            "Processed 350,718 headlines. Extracted 404,583 named entities. Discovered 20 primary topics, including isolating 40,000+ cricket-related headlines as a distinct cluster.",
        },
        tags: ["Python", "BERTopic", "spaCy", "NLP", "Streamlit"],
        outcome:
          "20 coherent topic clusters from 350K+ unlabeled headlines. Zero hand-labeled examples.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/news-nlp-pipeline", external: true },
          { label: "Live demo", href: "https://news-nlp-pipeline.streamlit.app/", external: true },
        ],
      },
      {
        slug: "gb-wildlife-classifier",
        title: "GB Wildlife Classifier",
        description:
          "Three endangered Himalayan species from Gilgit-Baltistan look similar enough that silent misclassification is a real failure mode. The harder problem wasn't accuracy, it was knowing when not to guess. I added an explicit confidence threshold so uncertain inputs get flagged rather than forced into a wrong class.",
        detail: {
          problem:
            "Field cameras in remote terrain produce out-of-distribution inputs that standard classifiers confidently misclassify. A wrong label is worse than no label in conservation contexts.",
          approach:
            "Frozen EfficientNet backbone with a custom 3-class head. Trained for 5 epochs with aggressive augmentation. Confidence threshold at 80% surfaces uncertain predictions explicitly. All failure cases documented.",
          result:
            "98.16% validation accuracy. 91.77% training accuracy at 5 epochs. Confidence threshold reduced overconfident misclassifications on OOD inputs by approximately 40%.",
        },
        tags: ["Python", "PyTorch", "Computer Vision", "Streamlit"],
        outcome:
          "98.16% validation accuracy. ~40% reduction in overconfident OOD misclassifications.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/gb-wildlife-classifier", external: true },
          { label: "Live demo", href: "https://gb-wildlife-classifier.streamlit.app/", external: true },
        ],
      },
      {
        slug: "shelter-outcome-predictor",
        title: "Shelter Outcome Predictor",
        description:
          "An animal shelter can't save everyone. The question is which animals are most at risk so limited resources reach the right place first. Missing an at-risk animal is a worse outcome than a false alarm, so I optimized explicitly for recall instead of overall accuracy.",
        detail: {
          problem:
            "Austin Animal Center staff needed a way to flag at-risk animals early. Standard accuracy-optimized models underperform on minority classes where the real cost of error is highest.",
          approach:
            "Random Forest trained on 62,000+ historical intake records. Hyperparameter tuning prioritized recall on the at-risk class to match the real-world cost asymmetry. Evaluated on 12,500 held-out samples.",
          result:
            "76% overall accuracy. 63% euthanasia recall. 0.83 F1 score on adoptions. Model surfaces animals needing intervention before they reach crisis point.",
        },
        tags: ["Python", "scikit-learn", "Pandas", "Streamlit"],
        outcome:
          "63% euthanasia recall on 12.5K test samples. 0.83 F1 for adoptions.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/shelter-outcome-predictor", external: true },
          { label: "Live demo", href: "https://shelter-outcome-predictor.streamlit.app/", external: true },
        ],
      },
      {
        slug: "wmus",
        title: "wmus",
        description:
          "I use cmus on Linux. Nothing comparable existed on Windows, so I wrote my own: a terminal music player with fuzzy search, vim-style keybindings, and smart metadata caching. Strictly keyboard-first, no GUI overhead. Also a useful test case for Python performance on I/O-bound workloads.",
        detail: {
          problem:
            "Every Windows music player is either too heavy or mouse-dependent. cmus has no Windows port. The gap was a lightweight, keyboard-driven alternative with no Electron.",
          approach:
            "Python with a metadata caching layer to avoid rescanning on every launch. Built with Library, Albums, and Queue views, plus configurable keybindings and robust playback controls. Minimal dependencies.",
          result:
            "A fully featured daily driver supporting MP3, FLAC, WAV, OGG, AAC, and M4A. Includes fuzzy search with intelligent filtering, shuffle and repeat modes, volume control, seeking, and vim-style navigation (j/k/h/l).",
        },
        tags: ["Python", "C++", "Terminal", "Linux"],
        outcome:
          "Terminal-based music player with advanced caching, multi-format support, and vim-style navigation.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/wmus", external: true },
        ],
      },
    ],
  },

  about: {
    sectionLabel: "About",
    introParagraphs: [
      "Second-year AI student at UET Lahore. I write a lot of Python, some C++, and spend more time in the terminal than I'd like to admit.",
      "I got into this because I wanted to understand how things actually work. Not theory in isolation, but what happens when you run it on real data with real constraints on a machine that has better things to do.",
      "Two of my projects exist because I care about something beyond the model. A classifier for endangered Himalayan species. A predictor to help animal shelters prioritize which animals are most at risk. I think the most interesting software is written by people who care about something other than software.",
    ],
    skillGroups: [
      {
        label: "Core",
        skills: ["Python", "C++", "Linux", "Bash", "Git"],
      },
      {
        label: "ML / DL",
        skills: ["PyTorch", "scikit-learn", "HuggingFace", "BERTopic"],
      },
      {
        label: "NLP & Data",
        skills: ["spaCy", "NER", "Topic Modeling", "Pandas", "Pipelines"],
      },
      {
        label: "Deployment",
        skills: ["Streamlit", "GitHub Pages"],
      },
    ],
    timeline: [
      {
        years: "2025 - 2029",
        degree: "BS Artificial Intelligence",
        institution: "UET Lahore",
      },
    ],
  },

  footer: {
    availability: {
      label: "Open to ML internships and research roles, remote or Lahore-based",
      available: true,
    },
    contacts: [
      {
        label: "Email",
        href: "mailto:umerkniazi@proton.me",
        external: false,
      },
      {
        label: "GitHub",
        href: "https://github.com/umerkniazi",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/umerkniazi",
        external: true,
      },
    ],
  },

  error404: {
    eyebrow: "404",
    title: "Page not found",
    message: "This path doesn't exist. The model is confident about that.",
    cta: {
      label: "← Back to home",
      href: "/",
    },
  },
};