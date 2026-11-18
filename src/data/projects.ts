export interface Project {
  name: string;
  description: string;
  stack: string[];
  outcome?: string[];
  demoUrl?: string | null;
  demoLabel?: string;
  sourceUrl?: string | null;
}

export const projects: Project[] = [
  {
    name: 'News NLP Pipeline',
    description:
      'An NLP pipeline that indexes 15 years of Dawn News headlines in SQLite, using BERTopic, spaCy, and Transformers to uncover topic trends, track sentiment, and extract named entities without manual labeling.',
    stack: ['Python', 'SQLite', 'BERTopic', 'spaCy', 'Transformers', 'Streamlit'],
    outcome: ['350K+ headlines', '420K+ entity mentions', 'Unsupervised topic discovery'],
    demoUrl: 'https://news-nlp-pipeline.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/news-nlp-pipeline',
  },
  {
    name: 'Himalayan Wildlife Classifier',
    description:
      'A PyTorch image classifier fine-tuned on ResNet18 to identify Snow Leopard, Markhor, and Himalayan Brown Bear. Includes an "Other" class and confidence thresholding to reject irrelevant images instead of forcing a false match.',
    stack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit'],
    outcome: ['96.55% validation accuracy', 'Confidence-based rejection', 'Fine-tuned ResNet18'],
    demoUrl: 'https://himalayan-wildlife-classifier.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/himalayan-wildlife-classifier',
  },
  {
    name: 'wmus',
    description:
      'A lightweight Windows terminal music player inspired by cmus, built with windows-curses and pygame. Features keyboard-driven navigation, fast fuzzy search, and local metadata caching to avoid rescanning large libraries.',
    stack: ['Python', 'windows-curses', 'pygame'],
    outcome: ['Keyboard-driven workflow', 'Fuzzy track search', 'Local metadata caching'],
    demoUrl: null,
    sourceUrl: 'https://github.com/umerkniazi/wmus',
  },
  {
    name: 'Shelter Outcome Predictor',
    description:
      'A predictive model trained on 62,000+ animal shelter intake records to estimate adoption, transfer, and euthanasia outcomes. Tuned to prioritize recall on at-risk animals, where missing an animal is far worse than a false alarm.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    outcome: ['62K+ intake records', '63% euthanasia recall', '76% overall accuracy'],
    demoUrl: 'https://shelter-outcome-predictor.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/shelter-outcome-predictor',
  },
];