export const projects = [
  {
    name: 'News NLP Pipeline',
    summary:
      'An NLP pipeline that explores topics and sentiment across 15 years of Pakistani news history.',
    description:
      'A pipeline that scraped and analyzed over 350,000 Dawn News headlines to find 20 topic clusters and extract 404K+ named entities without manual labeling.',
    stack: ['Python', 'spaCy', 'BERTopic'],
    demoUrl: 'https://news-nlp-pipeline.streamlit.app/',
    sourceUrl: 'https://github.com/umerkniazi/news-nlp-pipeline',
    featured: true,
  },
  {
    name: 'wmus',
    summary:
      'A keyboard-first terminal music player for Windows focused on speed and metadata caching.',
    description:
      'A terminal music player for Windows with fast fuzzy search and metadata caching. Built because cmus is not available natively on Windows.',
    stack: ['Python', 'Terminal', 'curses'],
    demoUrl: null,
    sourceUrl: 'https://github.com/umerkniazi/wmus',
    featured: true,
  },
];