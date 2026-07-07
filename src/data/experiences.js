export const EXPERIENCES = [
  {
    period: 'Jan 2026 – Present',
    company: 'MyNextRoom',
    role: 'Founder & Product Engineer',
    location: 'Dublin, Ireland',
    type: 'Founder',
    points: [
      'Sole founder and engineer of a cross-platform rental marketplace built with React Native/Expo, PostgreSQL, FastAPI, and Google Cloud Run, featuring real-time messaging, push notifications, universal deep linking, and AI-powered fraud detection.',
      'Trained and deployed a Random Forest fraud detection classifier on listing price-to-area feature vectors, serving automated anomaly scoring for real-time listing moderation via FastAPI on Google Cloud Run.',
      'Built a k-NN compatibility matching system using Scikit-learn on structured renter-listing feature vectors spanning budget, move-in date, and housing preferences, replacing rule-based filtering with a learned similarity model.',
    ],
  },
  {
    period: 'Jun 2020 – Aug 2024',
    company: 'Panghat · Legal-tech startup building AI search over case law',
    role: 'Machine Learning Engineer',
    location: 'Mumbai, India',
    type: 'Full-time',
    points: [
      'Improved top-5 semantic retrieval relevance by 35% over a BM25 baseline across 500K+ legal documents using DPR-CTX and BGE embeddings.',
      'Built and deployed containerized ML inference services on Docker and Kubernetes, serving 1000+ daily requests with sub-100ms latency.',
      'Reduced vector search latency by 10x through HNSW index tuning and optimised partitioning strategies in Milvus.',
      'Developed a RAG-based legal search assistant using LangChain and GPT-4, achieving 92% answer relevance in internal evaluations.',
    ],
  },
  {
    period: 'Feb 2025 – Present',
    company: 'Technological University of Dublin',
    role: 'Teaching Assistant (TA)',
    location: 'Dublin, Ireland',
    type: 'Part-time',
    points: [
      'Delivered Machine Learning and Python labs to 50+ undergraduate students, covering supervised learning, neural networks, data structures, and clean software engineering practices while conducting code reviews and mentoring students.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'MSc, Human Centered Artificial Intelligence',
    school: 'Technological University of Dublin',
    period: 'Sept 2024 – Oct 2025',
    focus: 'Explainable AI · AI Governance for regulated environments',
  },
  {
    degree: 'MSc, Information Technology',
    school: 'University of Mumbai',
    period: 'Aug 2020 – May 2022',
    focus: 'Machine Learning · Data Science',
  },
  {
    degree: 'BSc, Information Technology',
    school: 'University of Mumbai',
    period: 'Aug 2017 – May 2020',
    focus: 'Software Engineering · DBMS',
  },
];
