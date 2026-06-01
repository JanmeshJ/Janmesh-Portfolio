export const SITE = {
  name: 'Janmesh Joshi',
  title: 'AI & ML Engineer',
  tagline: 'I deploy ML models and ship products people actually use.',
  email: 'janmesh5900@gmail.com',
  location: 'Dublin, Ireland',
  resumePath: '/janmesh-joshi-resume.pdf',
  url: process.env.REACT_APP_SITE_URL || 'https://janmeshjoshi.dev',
};

export const ROLES = ['Founder @ MyNextRoom', 'ML Engineer', 'TU Dublin Tutor', 'Content Creator'];

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/janmeshjoshi/' },
  { label: 'GitHub', href: 'https://github.com/janmeshj' },
  { label: 'Email', href: 'mailto:janmesh5900@gmail.com' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ActuallyIndian_AI/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@actually.indian.ai' },
];

export const NAV_LINKS = [
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Content', href: '#content', id: 'content' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const HERO_STATS = [
  { v: '3+', l: 'Years', sub: 'Production ML engineering' },
  { v: '1TB+', l: 'Processed', sub: 'ETL pipelines at scale' },
  { v: '98%', l: 'Accuracy', sub: 'IntentAI classifier' },
  { v: 'Live', l: 'Product', sub: 'mynextroom.ie' },
];

export const MARQUEE_ITEMS = [
  'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'FastAPI',
  'Scikit-learn', 'OpenAI Whisper', 'PostgreSQL', 'React Native', 'SageMaker',
  'Azure', 'Supabase', 'NumPy', 'XGBoost', 'CI/CD',
];
