export const siteConfig = {
  name: "Umer Khan Niazi",
  title: "Umer Khan Niazi | Software Engineer",
  description:
    "I build software across systems, machine learning and games, from terminal tools to ML pipelines to a Godot platformer. Second-year Artificial Intelligence student at UET Lahore, currently open to software engineering roles.",
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
        slug: "wmus",
        title: "wmus",
        description:
          "I use cmus on Linux. Nothing comparable existed on Windows, so I wrote my own: a terminal music player with fuzzy search, vim-style keybindings and smart metadata caching. Strictly keyboard-first, no GUI overhead. I built it because I wanted it to exist, and it's what I actually use now.",
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
      {
        slug: "waddle-away",
        title: "Waddle Away",
        description:
          "A Godot project I built to learn game development. It's an endless runner with a penguin instead of a dinosaur, and building it meant working through player movement, obstacle spawning, state management, difficulty scaling and getting it running in the browser.",
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
          "A finished, playable Godot game shipped from concept to done.",
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
      "Second-year Artificial Intelligence student at UET Lahore. I write mostly Python and C++, run Fedora on everything, and I'm just as likely to be tinkering with a Godot project or a terminal tool as training a model. Most of my projects start with a question rather than a tech stack.",
      "I got into this because I wanted to understand how things actually work. Not theory in isolation, but what happens when you run it on real data with real constraints on a machine that has better things to do.",
      "What 15 years of Pakistani news coverage actually looked like. Whether a classifier could tell endangered Himalayan species apart without faking confidence it didn't have. Why Windows never got a proper terminal music player. What a Chrome Dino clone looks like with a penguin instead of a dinosaur. Different questions, but the same instinct: go build the thing and see what happens.",
    ],
    skillGroups: [
      {
        label: "Core",
        skills: ["Python", "C++", "Linux", "Bash", "Git"],
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