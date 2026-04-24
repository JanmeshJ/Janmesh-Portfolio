import { useState, useEffect } from 'react';
import { Mail, ExternalLink, Download, Menu, X, Github, Linkedin, Youtube, Video, ArrowUpRight } from 'lucide-react';
import echoverseImg from './echoverse.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCES = [
  {
    period: 'Jun 2022 – Aug 2024',
    company: 'Panghat',
    role: 'Machine Learning Engineer',
    location: 'Mumbai, India · Remote',
    type: 'Full-time',
    points: [
      'Deployed predictive ML models on AWS distributed infrastructure, achieving 30% improvement in forecasting efficiency for time-series workloads.',
      'Engineered scalable ETL pipelines using Python, Pandas, and AWS (S3/EC2), handling 1TB+ of raw data with high reliability.',
      'Implemented fault-tolerant distributed training workflows with AWS SageMaker and CloudWatch for production monitoring.',
      'Led cross-functional collaboration with DevOps and Product teams to ship AI-powered features via seamless CI/CD integration.',
    ],
  },
  {
    period: 'Feb 2025 – Present',
    company: 'Technological University of Dublin',
    role: 'Lab Assistant & Programming Tutor',
    location: 'Dublin, Ireland',
    type: 'Part-time',
    points: [
      'Teaching Python fundamentals including OOP, data structures, and NumPy/Pandas to 2nd-year undergraduate students.',
      'Running SQL & database management workshops covering complex joins, query optimization, and normalization.',
      'Mentoring 50+ students individually on assignments, debugging, and core ML concepts.',
    ],
  },
];

const PROJECTS = [
  {
    name: 'EchoVerse',
    year: '2025',
    description:
      'Production-grade speech-to-text web app powered by OpenAI Whisper and FastAPI. Containerized with Docker, deployed on Google Cloud Run with CI/CD via Cloud Build. Supports multiple languages with real-time transcription.',
    tech: ['Python', 'FastAPI', 'OpenAI Whisper', 'Docker', 'Google Cloud Run', 'CI/CD'],
    link: 'https://echoverse-593998396101.us-central1.run.app/',
    img: echoverseImg,
    featured: true,
  },
  {
    name: 'IntentAI',
    year: '2024',
    description:
      'Enterprise intent classification platform achieving 98% accuracy. Full ML lifecycle from data generation (3,500+ samples) to production deployment with A/B testing, automated retraining, and real-time inference.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'XGBoost', 'REST APIs', 'Docker'],
    link: null,
  },
  {
    name: 'Digital Notice Board',
    year: '2025',
    description:
      'Desktop application for institutional announcements featuring role-based access control, real-time updates, and SQLite persistence, built with event-driven architecture and modular OOP design.',
    tech: ['Python', 'Tkinter', 'SQLite', 'OOP', 'Event-driven'],
    link: null,
  },
];

const SKILLS = [
  { category: 'ML & AI', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'] },
  { category: 'Programming', items: ['Python', 'JavaScript', 'SQL', 'REST APIs', 'Git'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'EC2', 'S3', 'SageMaker', 'CI/CD'] },
  { category: 'Data Engineering', items: ['Pandas', 'NumPy', 'ETL Pipelines', 'PostgreSQL', 'MySQL'] },
  { category: 'Tools', items: ['Flask', 'FastAPI', 'Jupyter', 'Linux', 'Postman'] },
];

const MARQUEE_ITEMS = [
  'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'FastAPI',
  'Scikit-learn', 'OpenAI Whisper', 'PostgreSQL', 'Python', 'SageMaker',
  'Azure', 'React', 'NumPy', 'XGBoost', 'CI/CD',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const goTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-xs text-lime-400 tracking-[0.2em] shrink-0">{number}</span>
      <div className="h-px flex-1 bg-zinc-800" />
      <span className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase shrink-0">{children}</span>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-mono text-zinc-400 border border-zinc-800 rounded hover:border-zinc-600 hover:text-zinc-200 transition-colors cursor-default select-none">
      {children}
    </span>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-zinc-900 py-4">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase">{item}</span>
            <span className="text-zinc-800">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">

      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center px-6 lg:px-12 transition-all duration-300 ${
          scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900' : ''
        }`}
      >
        <button
          onClick={() => goTo('#home')}
          className="font-bold text-base tracking-tight mr-auto text-zinc-50 hover:text-lime-400 transition-colors"
        >
          JJ<span className="text-lime-400">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 mr-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => goTo(l.href)}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href="/Janmesh Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm px-4 py-2 border border-zinc-700 rounded text-zinc-300 hover:border-lime-400 hover:text-lime-400 transition-all"
        >
          <Download size={12} />
          Resume
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-zinc-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 flex flex-col pt-20 px-8 gap-5 md:hidden">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => { goTo(l.href); setMenuOpen(false); }}
              className="text-4xl font-bold text-left tracking-tight text-zinc-50 hover:text-lime-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/Janmesh Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-bold text-lime-400 mt-2"
          >
            Resume ↓
          </a>
          <div className="mt-auto pb-12 flex gap-5">
            <a href="mailto:janmesh5900@gmail.com" className="text-zinc-500 hover:text-zinc-200 transition-colors"><Mail size={20} /></a>
            <a href="https://linkedin.com/in/janmeshjoshi/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/janmeshj" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors"><Github size={20} /></a>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-8 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3f3f46 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, #09090b 80%)' }}
        />

        <div className="relative max-w-5xl mx-auto w-full">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm mb-10 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="font-black tracking-tighter leading-[0.88] mb-6"
            style={{ fontSize: 'clamp(60px, 10vw, 116px)' }}
          >
            Janmesh
            <br />
            <span className="text-zinc-500">Joshi</span>
            <span className="text-lime-400">.</span>
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-xl text-zinc-400 font-light mb-5 tracking-tight">
            AI &amp; ML Engineer
          </p>

          {/* Bio */}
          <p className="text-sm sm:text-base text-zinc-500 max-w-md mb-10 leading-relaxed">
            Building intelligent systems at the intersection of machine learning,
            cloud infrastructure, and human-centered design. 3+ years turning data
            into production-grade solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-16">
            <button
              onClick={() => goTo('#projects')}
              className="flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-zinc-950 text-sm font-semibold rounded hover:bg-lime-300 transition-colors"
            >
              View Projects
              <ArrowUpRight size={14} />
            </button>
            <a
              href="mailto:janmesh5900@gmail.com"
              className="px-5 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded hover:border-zinc-500 hover:text-zinc-50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-zinc-800 pt-8">
            {[
              { v: '3+', l: 'Years experience' },
              { v: '10+', l: 'Projects shipped' },
              { v: '20+', l: 'Technologies' },
              { v: '50+', l: 'Students mentored' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold text-zinc-50">{s.v}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-zinc-700" />
          <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="01">Experience</SectionLabel>

          <div className="space-y-4">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="reveal border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors overflow-hidden"
                style={{ backgroundColor: '#0f0f11' }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <span className="inline-block text-[10px] font-mono text-lime-400 tracking-widest uppercase px-2 py-0.5 border border-lime-400/30 rounded bg-lime-400/5 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-50">{exp.role}</h3>
                      <p className="text-lime-400 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-mono text-xs text-zinc-500">{exp.period}</p>
                      <p className="text-xs text-zinc-600 mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-lime-400 shrink-0 mt-0.5">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-14">
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-5">Education</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  degree: "MSc Human-Centered AI",
                  school: 'TU Dublin',
                  period: '2024 – 2025',
                  focus: 'Explainable AI · Conversational AI · Generative AI',
                },
                {
                  degree: "MSc Information Technology",
                  school: 'Univ. of Mumbai',
                  period: '2020 – 2022',
                  focus: 'Machine Learning · Data Science',
                },
                {
                  degree: "BSc Information Technology",
                  school: 'Univ. of Mumbai',
                  period: '2017 – 2020',
                  focus: 'Software Engineering · DBMS',
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="reveal border border-zinc-800 rounded-lg p-5"
                  style={{ backgroundColor: '#0f0f11' }}
                >
                  <p className="text-sm font-medium text-zinc-200 mb-1">{edu.degree}</p>
                  <p className="text-xs text-zinc-500">{edu.school}</p>
                  <p className="font-mono text-xs text-zinc-600 mt-1.5">{edu.period}</p>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="02">Selected Work</SectionLabel>

          {/* Featured project */}
          <div
            className="reveal mb-4 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group"
            style={{ backgroundColor: '#0f0f11' }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-zinc-900 lg:order-2">
                <img
                  src={echoverseImg}
                  alt="EchoVerse"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-between lg:order-1">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[10px] text-lime-400 tracking-[0.2em] uppercase px-2 py-0.5 border border-lime-400/30 rounded bg-lime-400/5">
                      Featured
                    </span>
                    <span className="font-mono text-xs text-zinc-600">{PROJECTS[0].year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-50 mb-3">{PROJECTS[0].name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{PROJECTS[0].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS[0].tech.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
                <a
                  href={PROJECTS[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm text-lime-400 hover:text-lime-300 transition-colors font-medium"
                >
                  Visit Live Project
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.slice(1).map((project, i) => (
              <div
                key={i}
                className="reveal border border-zinc-800 rounded-xl p-7 hover:border-zinc-700 transition-colors flex flex-col group"
                style={{ backgroundColor: '#0f0f11' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs text-zinc-600">{project.year}</span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-zinc-200 transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-zinc-50 mb-2.5">{project.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="03">Technologies</SectionLabel>

          <div className="divide-y divide-zinc-900">
            {SKILLS.map((group, i) => (
              <div key={i} className="reveal flex flex-col sm:flex-row gap-3 sm:gap-10 py-5">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] sm:w-36 shrink-0 sm:pt-1">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-14 reveal">
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-5">Certifications</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: 'Deep Learning Specialization', issuer: 'Coursera / DeepLearning.AI' },
                { name: 'NLP with Python', issuer: 'Udemy' },
                { name: 'TensorFlow Developer Certificate', issuer: 'Google' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg"
                  style={{ backgroundColor: '#0f0f11' }}
                >
                  <span className="text-lime-400 text-sm mt-0.5 shrink-0">✦</span>
                  <div>
                    <p className="text-sm text-zinc-200 font-medium">{c.name}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="04">Contact</SectionLabel>

          <div className="reveal">
            <h2
              className="font-black tracking-tighter leading-[0.92]"
              style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}
            >
              Let's build
              <br />
              <span className="text-zinc-600">something</span>
              <br />
              together<span className="text-lime-400">.</span>
            </h2>

            <p className="text-zinc-500 mt-8 mb-10 max-w-sm text-sm leading-relaxed">
              Open to full-time roles, freelance projects, and research collaborations.
              Based in Dublin — available remotely worldwide.
            </p>

            <a
              href="mailto:janmesh5900@gmail.com"
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-semibold text-zinc-50 hover:text-lime-400 transition-colors group"
            >
              janmesh5900@gmail.com
              <ArrowUpRight size={24} className="group-hover:rotate-12 transition-transform" />
            </a>

            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/in/janmeshjoshi/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/janmeshj', label: 'GitHub' },
                { icon: Mail, href: 'mailto:janmesh5900@gmail.com', label: 'Email' },
                { icon: Youtube, href: 'https://www.youtube.com/@ActuallyIndian_AI/', label: 'YouTube' },
                { icon: Video, href: 'https://www.tiktok.com/@actually.indian.ai', label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-3 border border-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-50 hover:border-zinc-600 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-600 font-mono">
          <span>© 2025 Janmesh Joshi</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse inline-block" />
            Dublin, Ireland
          </span>
        </div>
      </footer>
    </div>
  );
}
