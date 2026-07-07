export const PROJECTS = [
  {
    num: '01',
    name: 'MyNextRoom',
    subtitle: 'AI Rental Marketplace',
    year: '2024 – Now',
    type: 'Mobile App',
    featured: true,
    isMobile: true,
    description:
      'Full-stack mobile rental marketplace for the Irish market. Tenants browse verified listings with video walkthroughs, filter by location, chat with landlords in real-time, and get matched by a learned similarity model. A Random Forest classifier scores listings for fraud in real time.',
    tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'FastAPI', 'Google Cloud Run', 'Scikit-learn', 'PostHog'],
    link: 'https://mynextroom.ie',
    github: 'https://github.com/JanmeshJ/MyNextRoom',
    highlights: ['Real-time Chat', 'Fraud Detection', 'k-NN Matching', 'Video Verification'],
    metrics: ['Live product', '200+ waitlist signups', 'Real-time chat', 'ML fraud scoring'],
    architecture: 'React Native → Supabase → FastAPI (Cloud Run) → Random Forest / k-NN',
    img: '/images/mynextroom.png',
    caseStudy: {
      problem:
        'Ireland\'s rental market is fragmented and opaque. Listings live across Facebook groups, agency sites, and word of mouth. Tenants waste hours on outdated or fraudulent posts; landlords struggle to reach serious renters.',
      approach:
        'Built a mobile-first marketplace from zero: verified listings, real-time chat, and universal deep linking. Trained a Random Forest classifier on listing price-to-area feature vectors to flag anomalous listings for moderation, served via FastAPI on Google Cloud Run. Built a k-NN compatibility matching system in Scikit-learn over renter-listing feature vectors (budget, move-in date, housing preferences) to replace rule-based filtering.',
      outcome:
        'Shipped solo as founder. Submitted to the App Store with 200+ waitlist signups prior to launch. GPS-based search via expo-location, video verification for listing authenticity, and PostHog for funnel tracking are all live in production.',
      stack: [
        { layer: 'Client', detail: 'React Native + Expo, GPS search via expo-location, push notifications' },
        { layer: 'Backend', detail: 'Supabase Auth, Postgres, Row Level Security, realtime subscriptions' },
        { layer: 'ML Services', detail: 'Random Forest fraud scoring + k-NN matching via FastAPI on Google Cloud Run' },
        { layer: 'Analytics', detail: 'PostHog for product analytics and funnel tracking' },
      ],
      learned:
        'Marketplace products fail on trust and speed, not model complexity. A lightweight fraud classifier and a learned matching model moved the needle more than any deep model would have this early.',
    },
  },
  {
    num: '02',
    name: 'Stories of Ireland',
    subtitle: 'Multilingual Retail Companion · Carroll\'s Irish Gifts',
    year: '2026',
    type: 'Web App',
    description:
      'Multilingual web app telling the stories behind Carroll\'s heritage products — the Claddagh Ring, Aran Sweater, and Irish Symbols — in 12 languages, fully offline-capable, with per-product QR codes tourists scan in store.',
    tech: ['React', 'Google Cloud Translation API', 'QR Generation', 'i18n'],
    link: 'https://janmesh-carrolls-experience.vercel.app/',
    github: null,
    metrics: ['12 languages', 'Offline-capable', 'Per-product QR codes'],
    architecture: 'React → Translation pipeline (Google Cloud Translation API) → Static localized content',
    caseStudy: {
      problem:
        'Tourists in Carroll\'s stores hit a language barrier: the stories behind heritage products like the Claddagh Ring and Aran stitch patterns were only available in English, so most visitors never heard them.',
      approach:
        'Built an automated translation pipeline on the Google Cloud Translation API to generate and manage localized content at scale across all 12 languages, compiled into the app so it works fully offline in store. Added per-product QR code generation ready to print, audio storytelling, and a heritage trivia game with an integrated discount code.',
      outcome:
        'Covers three products end-to-end, including all 7 Aran stitch patterns, all 12 Irish symbols, and a Claddagh how-to-wear guide. Drew strong engagement when shared on the company\'s internal network.',
      learned:
        'Solving a problem you\'ve watched customers hit in person beats guessing at features. The offline constraint shaped the whole architecture: generate translations ahead of time, ship them static.',
    },
  },
  {
    num: '03',
    name: 'Ethical AI & Risk Modeling for AI Tutors',
    subtitle: 'MSc Thesis, TU Dublin',
    year: 'Sept 2024 – Oct 2025',
    type: 'Research',
    description:
      'MSc thesis engineering an ML pipeline to detect user over-reliance on AI tutoring systems, with Explainable AI techniques to surface the behavioural drivers behind model decisions.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'SHAP'],
    link: null,
    github: null,
    privateNote: 'Academic thesis, details on request',
    metrics: ['0.89 Macro F1', 'SHAP explainability'],
    architecture: 'Feature engineering → Random Forest → SHAP',
    caseStudy: {
      problem:
        'AI tutoring systems risk fostering over-reliance, where students lean on model answers instead of building understanding. Detecting this pattern requires more than accuracy: it needs an explanation a human can act on.',
      approach:
        'Engineered a Random Forest pipeline to classify over-reliance from interaction-level features, then applied SHAP (Shapley Additive exPlanations) to interpret predictions and identify behavioural drivers such as prompt verbosity and solution-seeking patterns.',
      outcome:
        'Achieved a Macro F1 of 0.89 on the classification task, with SHAP outputs that made the model\'s reasoning legible to non-technical stakeholders evaluating AI governance in education.',
      learned:
        'For high-stakes, regulated use cases, explainability is not an add-on. SHAP analysis surfaced behavioural signals that shaped the recommendations more than the raw accuracy number did.',
    },
  },
  {
    num: '04',
    name: 'EchoVerse',
    subtitle: 'Speech-to-Text Engine',
    year: '2025',
    type: 'Web App',
    description:
      'Production-grade STT powered by OpenAI Whisper and FastAPI. Containerised with Docker, deployed on Google Cloud Run with CI/CD via Cloud Build.',
    tech: ['Python', 'FastAPI', 'Whisper', 'Docker', 'Cloud Run'],
    link: 'https://echoverse-593998396101.us-central1.run.app/',
    img: '/images/echoverse.png',
    metrics: ['Multi-language STT', 'Cloud Run', 'CI/CD pipeline'],
    architecture: 'React UI → FastAPI → Whisper → Cloud Run',
    caseStudy: {
      problem:
        'Needed a deployable speech-to-text service, not a Jupyter notebook. Upload audio, get transcripts, handle cold starts and container limits on a budget.',
      approach:
        'FastAPI wrapper around Whisper, Dockerised for reproducible builds, deployed to Cloud Run with Cloud Build for push-to-deploy.',
      outcome:
        'Public demo running on GCP. Handles multi-language transcription with a clean API boundary between frontend upload and backend inference.',
      learned:
        'Container size and startup time matter as much as model accuracy for serverless STT. Optimising the inference path beat swapping to a larger model.',
    },
  },
  {
    num: '05',
    name: 'IntentAI',
    subtitle: 'Enterprise ML System',
    year: '2024',
    type: 'ML System',
    description:
      'Intent classification platform at 98% accuracy. Full ML lifecycle from 3,500+ samples to production with A/B testing and automated retraining.',
    tech: ['Python', 'Flask', 'XGBoost', 'Docker'],
    link: null,
    github: null,
    privateNote: 'Enterprise project, source on request',
    metrics: ['98% accuracy', '3,500+ samples', 'A/B tested', 'Auto-retrain'],
    architecture: 'Flask → XGBoost → Dockerised inference',
    caseStudy: {
      problem:
        'Route inbound customer messages to the right workflow. Manual triage did not scale; generic LLM routing was too slow and expensive for volume.',
      approach:
        'Classical ML pipeline: labelled dataset, XGBoost classifier, Flask inference API, Docker deployment. Added A/B testing and scheduled retraining when label drift appeared.',
      outcome:
        '98% holdout accuracy on 3,500+ samples. Production inference with monitoring hooks and a retraining path the ops team could run without a data scientist in the loop.',
      learned:
        'For well-defined intent buckets, gradient boosting still beats LLM routing on cost, latency, and explainability. The hard part was label quality, not model choice.',
    },
  },
  {
    num: '06',
    name: 'Digital Notice Board',
    subtitle: 'Institutional Desktop App',
    year: '2025',
    type: 'Desktop App',
    description:
      'Desktop app for institutional announcements with RBAC, real-time updates, and SQLite. Event-driven OOP architecture.',
    tech: ['Python', 'Tkinter', 'SQLite', 'OOP'],
    link: null,
    github: null,
    privateNote: 'Academic project, repo on request',
    metrics: ['RBAC roles', 'SQLite', 'Event-driven'],
    architecture: 'Tkinter → SQLite → RBAC',
  },
  {
    num: '07',
    name: 'FIFA World Cup 2026 Tracker',
    subtitle: 'Office Draw Leaderboard · Carroll\'s Irish Gifts',
    year: '2026',
    type: 'Web App',
    description:
      'React app tracking the 2026 World Cup for the company office draw. Live team leaderboard ranking 12 office teams by total points, fixture and result updates via automated match-data API calls, and a Golden Boot tab ranking all 48 players by goals.',
    tech: ['React', 'REST APIs', 'Netlify'],
    link: 'https://carrolls-wc2026.netlify.app/',
    github: null,
    metrics: ['Live results', '12 teams · 48 players', 'Golden Boot leaderboard'],
    architecture: 'React → Match-data API → Live leaderboard',
  },
];
