export const siteConfig = {
  name: "Umer Khan Niazi",
  title: "Umer Khan Niazi | AI & ML Student",
  description:
    "I build ML pipelines, classifiers and tools that run on real data with real constraints. Second-year AI student at UET Lahore. Open to AI/ML internships and research roles.",
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
    eyebrow: "AI, Machine Learning and Systems",
    name: "Umer Khan Niazi",
    tagline:
      "I build AI and machine learning systems that don't stop at the notebook. I write pipelines, classifiers and tools designed for real data, real hardware and real constraints.",
    status: {
      label: "Open to AI/ML internships and research roles",
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
          "I scraped 15 years of Dawn News headlines and stored them in a SQLite database, then ran the full corpus through BERTopic for unsupervised topic modeling, spaCy for named entity recognition and VADER for sentiment, with no manual labeling at any stage. Structure emerges from the data itself.",
        detail: {
          problem:
            "No existing dataset captured 15 years of Pakistani news coverage. Building one meant scraping, deduplicating and storing 350,000+ headlines from scratch before any modeling could start.",
          approach:
            "Built a scraper for Dawn News, storing headlines in SQLite for portability and queryability. BERTopic for unsupervised topic discovery, spaCy NER for entity extraction, NLTK VADER for sentiment, with zero human annotation. Modular pipeline (src/) with unit tests, separate from research notebooks.",
          result:
            "Processed 350,718 headlines into 404,583 named entities across 20 discovered topics. Cricket dominates coverage at 40,000+ headlines, nearly double the next largest topic. Coverage skews negative overall (36.2% negative vs. 22.6% positive). The US is the second most-mentioned entity after Pakistan, ahead of India.",
        },
        tags: ["Python", "SQLite", "BERTopic", "spaCy", "NLP", "Streamlit"],
        dataset:
          "Self-scraped, 350,718 headlines from Dawn News, stored in SQLite",
        outcome:
          "350K+ self-scraped headlines, 20 coherent topic clusters, zero hand-labeled examples.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/news-nlp-pipeline", external: true },
          { label: "Live demo", href: "https://news-nlp-pipeline.streamlit.app/", external: true },
        ],
      },
      {
        slug: "gb-wildlife-classifier",
        title: "GB Wildlife Classifier",
        description:
          "Three endangered Himalayan species from Gilgit-Baltistan look similar enough that silent misclassification is a real failure mode. Trained on a public dataset of camera-trap and field photography, the harder problem wasn't accuracy, it was knowing when not to guess. I added an explicit confidence threshold so uncertain inputs get flagged rather than forced into a wrong class, then deliberately tried to break the model with out-of-distribution inputs.",
        detail: {
          problem:
            "Standard image classifiers confidently misclassify inputs that don't resemble their training distribution. In a conservation context, a confident wrong label is worse than an honest 'unknown.'",
          approach:
            "Frozen ResNet18 backbone with a custom 3-class head, trained for 5 epochs with aggressive augmentation on a public Kaggle dataset of the three species. Confidence threshold at 80% surfaces uncertain predictions explicitly. Stress-tested with out-of-distribution inputs (a toaster, a polar bear, an ibex) to find and document where it breaks.",
          result:
            "98.16% validation accuracy, 91.77% training accuracy at 5 epochs. Validation loss of 0.0631. Full failure-case analysis from out-of-distribution stress testing above.",
        },
        tags: ["Python", "PyTorch", "ResNet18", "Computer Vision", "Streamlit"],
        dataset:
          "Public Kaggle dataset of camera-trap and field photography",
        outcome:
          "98.16% validation accuracy. Confidence threshold + documented OOD failure analysis.",
        highlight:
          "Stress-tested the model with out-of-distribution inputs after training. A toaster was correctly flagged as unknown by the confidence threshold. A polar bear was misclassified as a Himalayan brown bear at 93% confidence due to shared snowy background context. An ibex was misclassified as a markhor at 98% confidence due to shared Caprinae features the model wasn't trained to distinguish.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/gb-wildlife-classifier", external: true },
          { label: "Live demo", href: "https://gb-wildlife-classifier.streamlit.app/", external: true },
        ],
      },
      {
        slug: "shelter-outcome-predictor",
        title: "Shelter Outcome Predictor",
        description:
          "An animal shelter can't save everyone. Using Austin Animal Center's public intake dataset, I looked at whether a model could flag at-risk animals early enough for limited resources to reach the right place first. Missing an at-risk animal is a worse outcome than a false alarm, so I optimized explicitly for recall instead of overall accuracy.",
        detail: {
          problem:
            "Standard accuracy-optimized models underperform on minority classes, like at-risk animals, where the real cost of a missed case is highest.",
          approach:
            "Random Forest trained on 62,000+ historical intake records from Austin Animal Center's public dataset. Used class weighting to prioritize recall on the at-risk class, matching the real-world cost asymmetry between a missed case and a false alarm. Evaluated on 12,500 held-out samples.",
          result:
            "76% overall accuracy. 63% euthanasia recall. 0.83 F1 score on adoptions. The model surfaces animals needing intervention earlier than an accuracy-optimized baseline would.",
        },
        tags: ["Python", "scikit-learn", "Pandas", "Streamlit"],
        dataset:
          "Austin Animal Center public intake dataset, 62,000+ records",
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
        nonMl: true,
        subtitle: "Not ML, the systems-engineering proof",
        description:
          "I use cmus on Linux. Nothing comparable existed on Windows, so I wrote my own: a terminal music player with fuzzy search, vim-style keybindings and smart metadata caching. Strictly keyboard-first, no GUI overhead. Also a useful test case for Python performance on I/O-bound workloads.",
        detail: {
          problem:
            "Every Windows music player is either too heavy or mouse-dependent. cmus has no Windows port. The gap was a lightweight, keyboard-driven alternative with no Electron.",
          approach:
            "Python with a metadata caching layer to avoid rescanning on every launch. Built with Library, Albums and Queue views, plus configurable keybindings and robust playback controls. Minimal dependencies.",
          result:
            "A fully featured daily driver supporting MP3, FLAC, WAV, OGG, AAC and M4A. Includes fuzzy search with intelligent filtering, shuffle and repeat modes, volume control, seeking and vim-style navigation (j/k/h/l).",
        },
        tags: ["Python", "Terminal", "Windows", "Audio"],
        outcome:
          "Terminal-based music player with advanced caching, multi-format support and vim-style navigation.",
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
      "Three of my projects exist because I cared about a question more than I cared about a tech stack. What 15 years of news coverage actually looked like. Whether a classifier could tell endangered Himalayan species apart without faking confidence it didn't have. Which shelter animals were quietly at the most risk. I think the most interesting software is written by people who care about something other than software.",
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
        skills: ["spaCy", "NER", "Topic Modeling", "Pandas", "SQLite"],
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
      label: "Open to AI/ML internships and research roles, remote or Lahore-based",
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