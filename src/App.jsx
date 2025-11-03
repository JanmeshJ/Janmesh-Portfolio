import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Youtube, Video, MapPin, ExternalLink, Calendar, Award, ChevronRight, Code2, Database, Cloud, Brain, Terminal, Briefcase, GraduationCap, Folder, Send, Phone, Download, Sparkles, Rocket, Zap, Target, Menu, X, Sun, Moon } from 'lucide-react';
import profilePhoto from './profile.png';
import echoversePhoto from './echoverse.png'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Intersection observer for fade-in animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Reduced offset for less empty space
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const skills = [
    { 
      category: 'Machine Learning', 
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'], 
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      category: 'Programming', 
      items: ['Python', 'JavaScript', 'C++', 'SQL', 'Git', 'REST APIs'], 
      icon: Code2,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Cloud & DevOps', 
      items: ['AWS (EC2, S3, SageMaker)', 'Azure', 'Distributed Systems', 'Docker', 'CI/CD'], 
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Data Engineering', 
      items: ['Pandas', 'NumPy', 'ETL Pipelines', 'PostgreSQL', 'MySQL', 'Data Visualization'], 
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const experience = [
    {
      title: 'Machine Learning Engineer',
      company: 'Panghat',
      location: 'Mumbai, India',
      period: 'June 2022 – Aug. 2024',
      type: 'Full-time',
      description: [
        'Spearheaded the design and deployment of predictive ML models on distributed cloud infrastructure (AWS), resulting in a documented 30% improvement in forecasting efficiency for time-series workloads.',
    'Engineered and managed scalable ETL data pipelines using Python, Pandas, and AWS services (S3/EC2), supporting high-throughput ingestion and preparation of over 1TB of raw data.',
    'Implemented fault-tolerant distributed training workflows and continuous monitoring mechanisms (AWS SageMaker/CloudWatch) to ensure system reliability and prompt error-handling in production.',
    'Drove cross-functional collaboration with DevOps and Product teams to ensure seamless CI/CD integration and production-readiness of mission critical ML applications.'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Lab Assistant & Programming Tutor',
      company: 'Technological University of Dublin',
      location: 'Dublin, Ireland',
      period: 'Feb. 2025 – Present',
      type: 'Part-time',
      description: [
        'Conducted regular practical sessions teaching 2nd-year students core Python fundamentals, including object-oriented programming (OOP), data structures (lists, dictionaries), and practical module usage (NumPy, Pandas).',
        'Led comprehensive workshops on **SQL and database management** (PostgreSQL/MySQL), focusing on essential skills like complex joins, query optimization, and data normalization.',
        'Mentored over 50 students individually on assignments, debugging complex code, and solidifying foundational concepts necessary for subsequent advanced machine learning courses.'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const education = [
    {
      degree: "Master's in Human Centered Artificial Intelligence",
      institution: 'Technological University of Dublin',
      location: 'Dublin, Ireland',
      period: 'Sept. 2024 – Oct. 2025',
      focus: 'Explainable AI, Conversational AI, Human-AI Interaction, Generative AI',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      degree: "Master's in Information Technology",
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Aug. 2020 – May 2022',
      focus: 'Machine Learning, Data Science, Software Engineering',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: "Bachelors's in Information Technology",
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Aug. 2020 – May 2022',
      focus: 'Software Engineering, OOPS Concepts, DBMS',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const projects = [
    {
      title: 'EchoVerse – Real-Time Speech Intelligence',
      description: 'Developed a production-grade Speech-to-Text web application that converts spoken audio into accurate text in real time using OpenAI Whisper and FastAPI. Deployed a fully containerized backend with Docker and Google Cloud Run, integrated CI/CD with Cloud Build, and built a modern responsive UI for audio recording, upload, and live transcription.',
      period: '2025',
      tech: ["Python", "FastAPI", "OpenAI Whisper", "Docker", "Google Cloud Run", "HTML", "CSS", "JavaScript"],
      highlights: ['Real-time Transcription', 'Cloud-deployed (CI/CD)', 'Whisper model integration'],
      links: {
        demo: 'https://echoverse-593998396101.us-central1.run.app/',
        github: 'https://github.com/JanmeshJ/EchoVerse'
      },

      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      
      // background_image: 'echoversePhoto'
    },
    {
      title: 'Customer Intent Classification in AI Chatbot',
      description: 'Built a Flask REST API serving an NLP intent classification model with 92% accuracy across 500+ real-world queries. Implemented continuous learning pipeline with automated retraining and model versioning.',
      period: '2024',
      tech: ['Python', 'Flask', 'Scikit-learn', 'NLTK', 'REST APIs', 'SQLite'],
      highlights: ['92% accuracy', '500+ queries handled', 'Real-time inference'],
      link: null,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    {
      title: 'Digital Notice Board System',
      description: 'Interactive desktop application featuring real-time UI updates and automated content rendering. Designed with object-oriented principles ensuring modularity and future extensibility.',
      period: '2025',
      tech: ['Python', 'Tkinter', 'SQLite', 'OOP', 'Event-driven architecture'],
      highlights: ['Real-time updates', 'Modular design', 'User-friendly interface'],
      link: null,
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    }
    
  ];

  const certifications = [
    { name: 'Deep Learning Specialization', issuer: 'Coursera', icon: '🎓' },
    { name: 'Natural Language Processing with Python', issuer: 'Udemy', icon: '🧠' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', icon: '🏆' }
  ];

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Projects Completed', value: '10+', icon: Rocket },
    { label: 'Technologies', value: '20+', icon: Zap },
    { label: 'Certifications', value: '3', icon: Award }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'} relative overflow-hidden transition-colors duration-500`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 ${darkMode ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30' : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'} rounded-full blur-3xl transition-colors duration-500`}
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className={`absolute w-96 h-96 ${darkMode ? 'bg-gradient-to-r from-pink-600/30 to-orange-600/30' : 'bg-gradient-to-r from-pink-400/20 to-orange-400/20'} rounded-full blur-3xl transition-colors duration-500`}
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
        <div 
          className={`absolute w-72 h-72 ${darkMode ? 'bg-gradient-to-r from-green-600/30 to-cyan-600/30' : 'bg-gradient-to-r from-green-400/20 to-cyan-400/20'} rounded-full blur-3xl transition-colors duration-500`}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className={`fixed top-0 left-0 w-full h-1 ${darkMode ? 'bg-slate-800/50' : 'bg-white/30'} backdrop-blur-sm z-50 transition-colors duration-500`}>
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-slate-900/70 border-slate-700/50' : 'bg-white/70 border-gray-200/50'} backdrop-blur-xl border-b z-40 mt-1 shadow-sm transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <button onClick={() => scrollToSection('about')} className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg">JJ</span>
                </div>
              </div>
              <span className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block`}>
                Janmesh Joshi
              </span>
            </button>
            
            <div className="flex items-center space-x-4">
              {/* Desktop Menu */}
              <div className={`hidden md:flex items-center space-x-1 ${darkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-full px-2 py-2 shadow-sm`}>
                {[
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'Education' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                        : darkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-slate-700/50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle - Desktop (far right) */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`hidden md:flex w-10 h-10 rounded-lg ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-gray-200/50'} backdrop-blur-sm border items-center justify-center hover:scale-110 transition-all duration-300`}
              >
                {darkMode ? (
                  <Sun className="text-yellow-400" size={20} />
                ) : (
                  <Moon className="text-indigo-600" size={20} />
                )}
              </button>

              {/* Mobile: Dark Mode Toggle + Hamburger */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-gray-200/50'} backdrop-blur-sm border flex items-center justify-center hover:scale-110 transition-all duration-300`}
                >
                  {darkMode ? (
                    <Sun className="text-yellow-400" size={20} />
                  ) : (
                    <Moon className="text-indigo-600" size={20} />
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm`}
                >
                  {mobileMenuOpen ? <X size={24} className={darkMode ? 'text-white' : 'text-gray-900'} /> : <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />}
                </button>
              </div>
            </div>
          </nav>
        </div>

        
      </header>
      {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] flex items-center justify-center px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Mobile Menu */}
            <div 
              className={`${darkMode ? 'bg-slate-800/98 border-slate-700/50' : 'bg-white/98 border-gray-200/50'} backdrop-blur-xl border rounded-3xl shadow-2xl w-full max-w-sm relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} transition-colors`}
              >
                <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>

              {/* Title */}
              <div className={`px-6 py-5 ${darkMode ? 'border-slate-700' : 'border-gray-200'} border-b`}>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-white'}`}>My Life</h3>
              </div>

              {/* Menu Items */}
              <div className="px-4 py-5 space-y-2">
                {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all ${
                      activeSection === section
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : darkMode
                          ? 'text-white hover:bg-slate-700/70'
                          : 'text-white hover:bg-gray-100'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Hero/About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            {/* Top section with photo and name side by side */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-36">
              {/* Photo */}
              <div className="relative group flex-shrink-0">
                {/* Glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Rotating border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm animate-spin-slow"></div>
                
                {/* Main container */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={profilePhoto} 
                    alt="Janmesh Joshi" 
                    className="w-full h-full object-cover object-[50%_78%]"
                  />
                </div>
              </div>

              {/* Name and title section */}
              <div className="space-y-8 text-center md:text-left flex-1 max-w-3xl">
                {/* Badge */}
                {/* <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-5 py-2.5 rounded-full border shadow-sm`}>
                  <Sparkles className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={20} />
                  <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-base`}>Learning Everyday</span>
                </div> */}

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Janmesh Joshi
                    </span>
                  </h1>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    {/* <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div> */}
                    <p className={`text-2xl md:text-4xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-light`}>AI/ML Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description and content */}
            <div className="space-y-12 text-center md:text-left">
              <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-5xl mx-auto md:start-center`}>
                Crafting intelligent systems with <span className="font-semibold text-blue-600">over 3 years</span> of experience in scalable ML solutions and distributed systems. Pursuing MSc in <span className="font-semibold text-purple-600">Human-Centered AI</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto md:start-center pt-3">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`text-center ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-2 border hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group`}>
                    <stat.icon className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} mb-0 group-hover:scale-110 transition-transform`} size={28} />
                    <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{stat.value}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Projects</span>
                    <ChevronRight className="group-hover:translate-x-3 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`${darkMode ? 'bg-slate-800/60 border-slate-700 text-gray-300' : 'bg-white/60 border-gray-300 text-gray-700'} backdrop-blur-sm border-2 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300`}
                >
                  Get in Touch
                </button>

                {[
                  { icon: Mail, href: 'mailto:janmesh5900@gmail.com', label: 'Email' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/janmeshjoshi/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/janmeshj', label: 'GitHub' },
                  { icon: Video, href: 'https://www.tiktok.com/@actually.indian.ai', label: 'TikTok' }, 
                  { icon: Youtube, href: 'https://www.youtube.com/@ActuallyIndian_AI/', label: 'YouTube' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-xl flex items-center justify-center border hover:border-indigo-300 hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className={`${darkMode ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-indigo-600'} transition-colors`} size={22} />
                  </a>
                ))}
              </div>

              {/* <div className="flex items-center space-x-5 justify-center md:justify-start pt-4">
                
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'} rounded-full flex items-start justify-center p-2`}>
            <div className={`w-1.5 h-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full animate-scroll`}></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-4 py-2 rounded-full border`}>
              <Zap className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={18} />
              <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-sm`}>Technical Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              A comprehensive toolkit for building intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Machine Learning & AI */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Machine Learning & AI</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700'} hover:bg-purple-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-purple-400' : 'bg-purple-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Programming</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript',  'SQL', 'Git', 'REST APIs'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-blue-500/20 border-blue-500/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'} hover:bg-blue-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Cloud className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Cloud & DevOps</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'Docker', 'EC2', 'S3', 'SageMaker', 'CI/CD'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-orange-500/20 border-orange-500/50 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700'} hover:bg-orange-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Engineering */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Data Engineering</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'ETL Pipelines', 'PostgreSQL', 'MySQL'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'bg-green-50 border-green-200 text-green-700'} hover:bg-green-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Terminal className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tools & Technologies</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Jupyter', 'VS Code', 'Linux', 'Postman', 'Git'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-pink-500/20 border-pink-500/50 text-pink-300' : 'bg-pink-50 border-pink-200 text-pink-700'} hover:bg-pink-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-pink-400' : 'bg-pink-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Distributed Systems */}
            <div className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Distributed Systems</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['HPC Workloads', 'Fault Tolerance', 'Scalability', 'Monitoring'].map((skill, i) => (
                    <span key={i} className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'} hover:bg-cyan-100 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'} rounded-full`}></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-indigo-300 hover:shadow-xl transition-all duration-300 text-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{cert.icon}</div>
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{cert.name}</h4>
                    <p className={`text-sm ${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-medium`}>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-32 px-6 relative ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-4 py-2 rounded-full border`}>
              <Briefcase className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={18} />
              <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-sm`}>Career Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className={`${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 md:p-10 border hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 overflow-hidden group`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    {/* Header section */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                      <div className="space-y-4">
                        {/* Job type badge */}
                        <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-purple-500/20' : 'bg-indigo-50'} px-4 py-1.5 rounded-full`}>
                          <div className={`w-2 h-2 ${darkMode ? 'bg-purple-400' : 'bg-indigo-600'} rounded-full animate-pulse`}></div>
                          <span className={`${darkMode ? 'text-purple-300' : 'text-indigo-700'} font-semibold text-sm`}>{exp.type}</span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors`}>
                          {exp.title}
                        </h3>

                        {/* Company */}
                        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>

                        {/* Location */}
                        <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <MapPin size={20} className={darkMode ? 'text-purple-400' : 'text-indigo-600'} />
                          <span className="text-lg">{exp.location}</span>
                        </div>
                      </div>

                      {/* Date */}
                      <div className={`flex items-center space-x-2 ${darkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'} px-6 py-3 rounded-xl border`}>
                        <Calendar size={20} className={darkMode ? 'text-purple-400' : 'text-indigo-600'} />
                        <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <div className="space-y-4">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 group/item">
                          <div className={`mt-1 w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-sm`}>
                            <ChevronRight className="text-white" size={18} />
                          </div>
                          <p className={`text-lg ${darkMode ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'} leading-relaxed transition-colors flex-1`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting line between experiences (not on last item) */}
                {idx < experience.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className={`w-0.5 h-12 bg-gradient-to-b ${darkMode ? 'from-purple-500' : 'from-indigo-300'} to-transparent`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-4 py-2 rounded-full border`}>
              <GraduationCap className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={18} />
              <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-sm`}>Academic Background</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <GraduationCap className="text-white" size={32} />
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors`}>
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {edu.institution}
                    </p>
                    <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className={`flex items-center space-x-2 ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} px-4 py-2 rounded-lg w-fit`}>
                    <Calendar size={16} className={darkMode ? 'text-purple-400' : 'text-indigo-600'} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-sm`}>{edu.period}</span>
                  </div>

                  <div className={`pt-4 ${darkMode ? 'border-slate-700' : 'border-gray-200'} border-t`}>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Focus Areas:</p>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{edu.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 px-6 relative ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-4 py-2 rounded-full border`}>
              <Rocket className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={18} />
              <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-sm`}>Passion</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Real-world applications showcasing ML engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Actual Projects */}
            {projects.map((project, idx) => (
              <div key={idx} className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-8 border hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden `}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <Folder className="text-white" size={28} />
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`w-10 h-10 ${darkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors`}
                      >
                        <ExternalLink className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={20} />
                      </a>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-indigo-600'} transition-colors`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} font-medium`}>{project.period}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{project.description}</p>
                  </div>

                  {project.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'} px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder Projects */}
            {[1, 2].map((num) => (
              <div key={`placeholder-${num}`} className={`group relative ${darkMode ? 'bg-slate-800/40 border-purple-500/40' : 'bg-gradient-to-br from-white/40 to-indigo-50/40 border-indigo-300'} backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed hover:border-indigo-400 hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'} group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500`}></div>
                
                <div className="relative text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className={`relative w-20 h-20 ${darkMode ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Sparkles className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={36} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Exciting Project Coming Soon</h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      Working on something amazing! This project will showcase cutting-edge ML solutions. Check back this week for updates.
                    </p>
                  </div>

                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                    <Target size={18} />
                    <span>In Development</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white/60 border-indigo-200'} backdrop-blur-sm px-4 py-2 rounded-full border`}>
              <Send className={darkMode ? 'text-purple-400' : 'text-indigo-600'} size={18} />
              <span className={`${darkMode ? 'text-purple-400' : 'text-indigo-600'} font-semibold text-sm`}>Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className={`pt-4 text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              I'm actively seeking ML/AI engineering opportunities. Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'janmesh5900@gmail.com', href: 'mailto:janmesh5900@gmail.com', color: 'from-blue-500 to-cyan-500' },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/janmeshjoshi/', href: 'https://linkedin.com/in/janmeshjoshi/', color: 'from-blue-600 to-indigo-600' },
              { icon: MapPin, label: 'Location', value: 'Dublin, Ireland', href: 'https://www.google.com/maps/place/Dublin', color: 'from-purple-500 to-pink-500' }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href || '#'}
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative ${darkMode ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white/60 border-gray-200/50'} backdrop-blur-sm rounded-2xl p-6 border hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden ${!contact.href && 'pointer-events-none'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{contact.label}</p>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm break-all`}>{contact.value}</p>
                  </div>
                  {contact.href && <ChevronRight className={`${darkMode ? 'text-gray-600 group-hover:text-purple-400' : 'text-gray-400 group-hover:text-indigo-600'} group-hover:translate-x-1 transition-all`} size={20} />}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => window.open('/Janmesh Resume.pdf', '_blank')}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                        text-white px-10 py-5 rounded-2xl font-bold text-lg 
                        hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Download size={24} />
                <span>View Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-slate-900/80 border-slate-800/50' : 'bg-white/30 border-gray-200/50'} backdrop-blur-lg border-t py-12 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">JJ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Janmesh Joshi
              </span>
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>© 2025 Janmesh Joshi. Crafted with passion for AI innovation.</p>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Available for full-time ML/AI engineering opportunities</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(12px); }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}