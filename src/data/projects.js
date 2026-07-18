export const projects = [
  {
    name: 'News NLP Pipeline',
    summary:
      'An NLP pipeline that explores topics and sentiment across 15 years of Pakistani news history.',
    description:
      'A pipeline that scraped and analyzed Dawn News headlines to discover topics, run sentiment analysis, and extract named entities — without any manual labeling.',
    stack: ['Python', 'SQLite', 'BERTopic', 'spaCy', 'Transformers', 'Streamlit'],
    outcome: ['350K+ headlines', '20 topic clusters', '404K+ named entities'],
    demoUrl: 'https://news-nlp-pipeline.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/news-nlp-pipeline',
    featured: true,
  },
  {
    name: 'wmus',
    summary:
      'A keyboard-first terminal music player for Windows, inspired by cmus.',
    description:
      'A terminal music player for Windows, built because cmus isn\u2019t available natively on Windows.',
    stack: ['Python', 'windows-curses', 'pygame'],
    outcome: ['Keyboard-first workflow', 'Fast fuzzy search', 'Metadata caching'],
    demoUrl: null,
    sourceUrl: 'https://github.com/umerkniazi/wmus',
    featured: true,
  },
];