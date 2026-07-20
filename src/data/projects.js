export const projects = [
  {
    name: 'News NLP Pipeline',
    summary:
      'An NLP pipeline that explores topics, sentiment and named entities across 15 years of Pakistani news history.',
    description:
      'A pipeline that analyzed Dawn News headlines to discover topics, measure sentiment and extract named entities without any manual labeling.',
    stack: ['Python', 'SQLite', 'BERTopic', 'spaCy', 'Transformers', 'Streamlit'],
    outcome: ['350K+ headlines', '20 discovered topics', '420K+ entity mentions'],
    demoUrl: 'https://news-nlp-pipeline.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/news-nlp-pipeline',
    featured: true,
  },
  {
    name: 'Himalayan Wildlife Classifier',
    summary:
      'A computer vision project that classifies endangered Himalayan wildlife species using transfer learning.',
    description:
      'A PyTorch-based classifier for Snow Leopards, Markhors and Himalayan Brown Bears, with an internal Other class and confidence thresholding to reduce false positives.',
    stack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit'],
    outcome: ['96.55% validation accuracy', '4-class classification', 'Open-set rejection'],
    demoUrl: 'https://himalayan-wildlife-classifier.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/himalayan-wildlife-classifier',
    featured: true,
  },
  {
    name: 'wmus',
    summary:
      'A keyboard-first terminal music player for Windows, inspired by cmus.',
    description:
      'A terminal music player for Windows that recreates the keyboard-driven workflow of cmus while adapting it for a native Windows environment.',
    stack: ['Python', 'windows-curses', 'pygame'],
    outcome: ['Keyboard-first workflow', 'Fast fuzzy search', 'Metadata caching'],
    demoUrl: null,
    sourceUrl: 'https://github.com/umerkniazi/wmus',
    featured: true,
  },
  {
    name: 'Shelter Outcome Predictor',
    summary:
      'A machine learning project exploring animal shelter outcomes using real-world intake data.',
    description:
      'A predictive model that analyzes shelter records to estimate adoption, transfer and euthanasia outcomes, built to prioritize recall over raw accuracy since missing an at-risk animal is costlier than a false alarm.',
    stack: ['Python', 'scikit-learn', 'pandas', 'Streamlit'],
    outcome: ['62K+ intake records', '76% accuracy', 'Euthanasia recall focused'],
    demoUrl: 'https://shelter-outcome-predictor.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/shelter-outcome-predictor',
    featured: false,
  },
];

export const secondaryProjects = [
  {
    name: 'Waddle Away',
    summary:
      'A small 2D endless runner built with Godot and released for browser play.',
    description:
      'A complete game project focused on finishing and shipping a polished experience rather than leaving another prototype unfinished.',
    stack: ['Godot', 'GDScript'],
    features: ['Browser release', 'Desktop and mobile support', 'Complete playable project'],
    demoUrl: 'https://umerkniazi.itch.io/waddle-away',
    demoLabel: 'Play',
    sourceUrl: 'https://github.com/umerkniazi/waddle-away',
    featured: false,
  },
];