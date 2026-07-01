export const EXPERIENCES = [
  {
    period: 'Jan 2026 – Present',
    company: 'MyNextRoom',
    role: 'Founder & Product Engineer',
    location: 'Dublin, Ireland',
    type: 'Founder',
    points: [
      'Sole founder and engineer of a cross-platform iOS/Android rental marketplace built with React Native/Expo, Supabase (PostgreSQL), real-time messaging, push notifications, and universal deep linking; submitted to the App Store with 200+ waitlist signups prior to launch.',
      'Trained and deployed a Random Forest fraud detection classifier on listing price-to-area feature vectors, serving automated anomaly scoring for real-time listing moderation via FastAPI on Google Cloud Run.',
      'Built a k-NN compatibility matching system using Scikit-learn on structured renter-listing feature vectors spanning budget, move-in date, and housing preferences, replacing rule-based filtering with a learned similarity model.',
      'Integrated GPS-based location features via expo-location, video verification for listing authenticity, and PostHog for product analytics and funnel tracking.',
    ],
  },
  {
    period: 'Jun 2020 – Aug 2024',
    company: 'Panghat',
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
      'Delivered Machine Learning lectures (supervised learning, model evaluation, neural networks, and more) to 50+ first-year undergraduate students.',
      'Taught Python programming including data structures, OOP, and clean code principles, conducting code reviews to enforce modular design and best practices.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master's, Human Centered Artificial Intelligence",
    school: 'Technological University of Dublin',
    period: 'Sept 2024 – Oct 2025',
    focus: 'Explainable AI · Governance for high-stakes environments',
  },
  {
    degree: "Master's, Information Technology",
    school: 'University of Mumbai',
    period: 'Aug 2020 – May 2022',
    focus: 'Machine Learning · Data Science',
  },
  {
    degree: 'BSc Information Technology',
    school: 'University of Mumbai',
    period: '2017 – 2020',
    focus: 'Software Engineering · DBMS',
  },
];
