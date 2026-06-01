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
      'Full-stack mobile rental marketplace for the Irish market. Tenants browse verified listings with video walkthroughs, filter by location, chat with landlords in real-time, and save favourites.',
    tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Google Maps', 'Cloudinary'],
    link: 'https://mynextroom.ie',
    github: 'https://github.com/JanmeshJ/MyNextRoom',
    highlights: ['Real-time Chat', 'Video Walkthroughs', 'Map Search', 'Apple Sign-In'],
    metrics: ['Live product', 'Real-time chat', 'Map search', 'Video listings'],
    architecture: 'React Native → Supabase → Cloudinary → Google Maps',
    img: '/images/mynextroom.png',
    caseStudy: {
      problem:
        'Ireland\'s rental market is fragmented and opaque. Listings live across Facebook groups, agency sites, and word of mouth. Tenants waste hours on outdated posts; landlords struggle to reach serious renters.',
      approach:
        'Built a mobile-first marketplace from zero: verified listings, map-based discovery, in-app chat, and Cloudinary-hosted video walkthroughs so tenants can shortlist before viewing.',
      outcome:
        'Shipped solo as founder. Live on mynextroom.ie with auth, realtime messaging, favourites, and location filters. The stack is designed to scale listing volume without rewriting core flows.',
      stack: [
        { layer: 'Client', detail: 'React Native + Expo, Apple Sign-In, offline-friendly state' },
        { layer: 'Backend', detail: 'Supabase Auth, Postgres, Row Level Security, realtime subscriptions' },
        { layer: 'Media', detail: 'Cloudinary for video walkthroughs and image transforms' },
        { layer: 'Maps', detail: 'Google Maps for geocoded search and listing pins' },
      ],
      learned:
        'Marketplace products fail on trust and speed, not model complexity. Realtime chat and video did more for conversion than any ranking algorithm I could have shipped first.',
    },
  },
  {
    num: '02',
    name: 'EchoVerse',
    subtitle: 'Speech-to-Text Engine',
    year: '2025',
    type: 'Web App',
    featured: true,
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
    num: '03',
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
    num: '04',
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
];
