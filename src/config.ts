export const siteConfig = {
  name: "Umer Khan Niazi",
  title: "Umer Khan Niazi | Software Engineer",
  description:
    "I build software across systems, machine learning and games, from terminal tools to ML pipelines to a Godot platformer. Second-year Artificial Intelligence student at UET Lahore, open to software engineering roles.",
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
    eyebrow: "Software Engineer",
    name: "Umer Khan Niazi",
    tagline:
      "I build software to understand how things work. Most of what I build starts with a question rather than a choice of technology, whether that ends up being an ML pipeline, a terminal tool or a small game.",
    status: {
      label: "Open to software engineering roles",
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
          "Scraped and processed 350,000+ Dawn News headlines into SQLite, then built an NLP pipeline using BERTopic, spaCy and VADER to discover topics, extract named entities and analyze sentiment without manual labeling.",
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
          "350K+ headlines • 20 topic clusters • 404K entities",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/news-nlp-pipeline", external: true },
          { label: "Live demo", href: "https://news-nlp-pipeline.streamlit.app/", external: true },
        ],
      },
      {
        slug: "wmus",
        title: "wmus",
        description:
          "Built a keyboard-first terminal music player for Windows inspired by cmus, featuring fuzzy search, vim-style keybindings and metadata caching for fast startup.",
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
          "Keyboard-first • Fuzzy search • Metadata caching",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/wmus", external: true },
        ],
      },
      {
        slug: "himalayan-wildlife-classifier",
        title: "Himalayan Wildlife Classifier",
        description:
          "Built an image classifier for three endangered Himalayan species using a public camera-trap dataset. Added a confidence threshold so uncertain predictions are flagged instead of forcing incorrect classifications.",
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
          "98.16% validation accuracy • Confidence thresholding • OOD testing",
        highlight:
          "Stress-tested the model with out-of-distribution inputs after training. A toaster was correctly flagged as unknown by the confidence threshold. A polar bear was misclassified as a Himalayan brown bear at 93% confidence due to shared snowy background context. An ibex was misclassified as a markhor at 98% confidence due to shared Caprinae features the model wasn't trained to distinguish.",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/himalayan-wildlife-classifier", external: true },
          { label: "Live demo", href: "https://himalayan-wildlife-classifier.streamlit.app/", external: true },
        ],
      },
      {
        slug: "waddle-away",
        title: "Waddle Away",
        description:
          "Built an endless runner in Godot inspired by Chrome's offline dinosaur game. I deliberately kept the scope small so I could finish and ship it while learning GDScript, player movement, obstacle spawning and difficulty scaling.",
        detail: {
          problem:
            "Endless runners live or die on feel. Jump timing, obstacle spacing and difficulty ramp all have to be tuned by hand, there's no dataset or metric that tells you when a game feels good.",
          approach:
            "Built in Godot with GDScript, using a state machine for the player character and a spawner system that increases obstacle frequency and speed as the score rises. Iterated on jump physics and hitboxes through repeated playtesting rather than a formula.",
          result:
            "A complete, playable endless runner with jump and slide mechanics, a difficulty curve that ramps with score, and a penguin doing a very reasonable impression of a dinosaur.",
        },
        tags: ["Godot", "GDScript", "Game Dev"],
        outcome:
          "Finished Godot game • Browser playable",
        links: [
          { label: "GitHub", href: "https://github.com/umerkniazi/waddle-away", external: true },
          { label: "Play on itch.io", href: "https://umerkniazi.itch.io/waddle-away", external: true },
        ],
      },
    ],
  },

  about: {
    sectionLabel: "About",
    introParagraphs: [
      "Most of my projects start with a question rather than a tech stack. I'm a student who writes mostly Python and C++, runs Fedora on everything, and is just as likely to be tinkering with a Godot project or a terminal tool as training a model.",
      "I got into this because I wanted to understand how things actually work. Not theory in isolation, but what happens when ideas meet real data, practical constraints and a machine that has better things to do.",
      "News coverage, endangered species, a terminal music player, a penguin dodging obstacles: different questions, but the same instinct, go build the thing and see what happens.",
    ],
    skillGroups: [
      {
        label: "Languages",
        skills: ["Python", "C++"],
      },
      {
        label: "Tools",
        skills: ["Linux", "Bash", "Git"],
      },
      {
        label: "AI / ML",
        skills: ["PyTorch", "scikit-learn", "HuggingFace", "BERTopic"],
      },
      {
        label: "Game Development",
        skills: ["Godot", "GDScript"],
      },
      {
        label: "NLP & Data",
        skills: ["spaCy", "BERTopic", "Pandas", "SQLite"],
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
      label: "Based in Lahore, open to remote work.",
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