import React, { useState, useEffect } from 'react';
// import {Phone, ArrowDown}
// import React, {useRef} from 'react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Calendar, Award, ChevronRight, Code2, Database, Cloud, Brain, Terminal, Briefcase, GraduationCap, Folder, Send, Download, Sparkles, Rocket, Zap, Target, Menu, X } from 'lucide-react';
import profilePhoto from './profile.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      const offset = 80;
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
        'Designed and deployed predictive ML models on AWS, achieving 30% efficiency improvement',
        'Built scalable ETL pipelines using Python and Pandas for high-throughput data processing',
        'Implemented distributed training workflows with monitoring and error-handling mechanisms',
        'Collaborated with cross-functional teams to ensure production-readiness of ML systems'
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
        'Teaching database optimization and distributed querying (PostgreSQL/MySQL)',
        'Conducting hands-on sessions on algorithms and scalable backend design',
        'Mentoring students in concurrency patterns and resource allocation'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const education = [
    {
      degree: "Master's in Human Centered Artificial Intelligence",
      institution: 'Technological University of Dublin',
      location: 'Dublin, Ireland',
      period: 'Sept. 2024 – Expected Sept. 2025',
      focus: 'Explainable AI, Conversational AI, Human-AI Interaction',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      degree: "Master's in Information Technology",
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Aug. 2020 – May 2022',
      focus: 'Machine Learning, Data Science, Software Engineering',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const projects = [
    {
      title: 'Customer Intent Classification in AI Chatbot',
      description: 'Built a Flask REST API serving an NLP intent classification model with 92% accuracy across 500+ real-world queries. Implemented continuous learning pipeline with automated retraining and model versioning.',
      period: 'Dec. 2021 – April 2022',
      tech: ['Python', 'Flask', 'Scikit-learn', 'NLTK', 'REST APIs', 'SQLite'],
      highlights: ['92% accuracy', '500+ queries handled', 'Real-time inference'],
      link: null,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    {
      title: 'Digital Notice Board System',
      description: 'Interactive desktop application featuring real-time UI updates and automated content rendering. Designed with object-oriented principles ensuring modularity and future extensibility.',
      period: 'Jan. 2018 – July 2020',
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
    { label: 'Years Experience', value: '2+', icon: Briefcase },
    { label: 'Projects Completed', value: '10+', icon: Rocket },
    { label: 'Technologies', value: '20+', icon: Zap },
    { label: 'Certifications', value: '3', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/30 backdrop-blur-sm z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-40 mt-1 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <button onClick={() => scrollToSection('about')} className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg">JJ</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                Janmesh Joshi
              </span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm">
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
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
                      </nav>
                      

                    </div>
                  </header>
      {/* Backdrop */}
{mobileMenuOpen && (
  <div
    onClick={() => setMobileMenuOpen(false)}
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
  />
)}

{/* Compact Sliding Drawer */}
<div
  className={`fixed top-0 right-0 h-auto mt-20 mr-4 w-[280px] rounded-2xl border border-white/20
              bg-white/80 backdrop-blur-2xl shadow-2xl shadow-purple-500/20
              transform transition-transform duration-500 ease-in-out md:hidden z-50
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-[120%]'}`}
>
  <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
    <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      My Life
    </span>
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="p-1.5 rounded-lg bg-white/60 hover:bg-white/80 transition"
    >
      <X size={20} className="text-gray-700" />
    </button>
  </div>

  <div className="flex flex-col p-3 space-y-1">
    {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((section) => (
      <button
        key={section}
        onClick={() => {
          scrollToSection(section);
          setMobileMenuOpen(false);
        }}
        className={`text-left px-4 py-2 rounded-xl font-medium text-sm capitalize 
                    transition-all duration-200 ${
          activeSection === section
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm'
            : 'text-gray-700 hover:bg-white/70 hover:text-purple-600'
        }`}
      >
        {section}
      </button>
    ))}
  </div>
</div>


      {/* Hero/About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-12">
            {/* Top section with photo and name */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-100 md:gap-40">
              {/* Photo */}
              <div className="relative group flex-shrink-0">
                {/* Glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Rotating border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm animate-spin-slow"></div>
                
                {/* Main container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img src={profilePhoto} alt="Janmesh Joshi" className="w-full h-full object-cover" style={{ objectPosition: 'center 80%' }}/>
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                </div>
              </div>

              {/* Name and title */}
              <div className="space-y-6 text-center pt-6">
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 shadow-sm">
                  <Sparkles className="text-indigo-600" size={18} />
                  <span className="text-indigo-600 font-semibold text-sm">Learning Everyday</span>
                </div>

                <div className="space-y-4 text-center">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-gray-900">Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Janmesh Joshi
                    </span>
                  </h1>
                  <div className="flex items-center space-x-3 justify-center md:justify-center">
                    {/* <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div> */}
                    <p className="text-3xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> AI/ML Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description and content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                Crafting intelligent systems with <span className="font-semibold text-blue-600">2+ years</span> of experience in scalable ML solutions and distributed systems. Currently pursuing MSc in <span className="font-semibold text-purple-600">Human-Centered AI</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                    <stat.icon className="text-indigo-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Projects</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/60 backdrop-blur-sm border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex items-center space-x-5">
                {[
                  { icon: Mail, href: 'mailto:janmesh5900@gmail.com', label: 'Email' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/janmeshjoshi/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/janmesh', label: 'GitHub' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200/50 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                  >
                    <social.icon className="text-gray-600 group-hover:text-indigo-600 transition-colors" size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-gray-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-6 pb-24 md:pt-24 md:pb-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
              <Zap className="text-indigo-600" size={18} />
              <span className="text-indigo-600 font-semibold text-sm">Technical Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {/* Machine Learning & AI */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Machine Learning & AI</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-400 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Programming</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'C++', 'SQL', 'Git', 'REST APIs'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-400 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Cloud className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cloud & DevOps</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'Docker', 'EC2', 'S3', 'SageMaker', 'CI/CD'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 hover:border-orange-400 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Engineering */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Data Engineering</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'ETL Pipelines', 'PostgreSQL', 'MySQL'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-400 text-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Terminal className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tools & Technologies</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Jupyter', 'VS Code', 'Linux', 'Postman', 'Git'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-pink-50 hover:bg-pink-100 border border-pink-200 hover:border-pink-400 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Distributed Systems */}
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Distributed Systems</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['HPC Workloads', 'Fault Tolerance', 'Scalability', 'Monitoring'].map((skill, i) => (
                    <span key={i} className="inline-flex items-center space-x-2 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 hover:border-cyan-400 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
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
                  className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{cert.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-sm text-indigo-600 font-medium">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-6 px-6 relative bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
              <Briefcase className="text-indigo-600" size={18} />
              <span className="text-indigo-600 font-semibold text-sm">Career Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200/50 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    {/* Header section */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                      <div className="space-y-4">
                        {/* Job type badge */}
                        <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-1.5 rounded-full">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                          <span className="text-indigo-700 font-semibold text-sm">{exp.type}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {exp.title}
                        </h3>

                        {/* Company */}
                        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>

                        {/* Location */}
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin size={20} className="text-indigo-600" />
                          <span className="text-lg">{exp.location}</span>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-xl border border-gray-200">
                        <Calendar size={20} className="text-indigo-600" />
                        <span className="font-semibold text-gray-700">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <div className="space-y-4">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 group/item">
                          <div className={`mt-1 w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-sm`}>
                            <ChevronRight className="text-white" size={18} />
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors flex-1">
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
                    <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-10 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
              <GraduationCap className="text-indigo-600" size={18} />
              <span className="text-indigo-600 font-semibold text-sm">Academic Background</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <GraduationCap className="text-white" size={32} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg w-fit">
                    <Calendar size={16} className="text-indigo-600" />
                    <span className="text-gray-700 font-medium text-sm">{edu.period}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Focus Areas:</p>
                    <p className="text-gray-600 leading-relaxed">{edu.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-6 relative bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
              <Rocket className="text-indigo-600" size={18} />
              <span className="text-indigo-600 font-semibold text-sm">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="pt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications showcasing ML engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Actual Projects */}
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
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
                        className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="text-gray-600" size={20} />
                      </a>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{project.period}</p>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
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
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder Projects */}
            {[1, 2].map((num) => (
              <div key={`placeholder-${num}`} className="group relative bg-gradient-to-br from-white/40 to-indigo-50/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed border-indigo-300 hover:border-indigo-400 hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="text-indigo-600" size={36} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800">Exciting Project Coming Soon</h3>
                    <p className="text-gray-600 leading-relaxed">
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
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200">
              <Send className="text-indigo-600" size={18} />
              <span className="text-indigo-600 font-semibold text-sm">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="pt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              I'm actively seeking ML engineering opportunities. Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'janmesh5900@gmail.com', href: 'mailto:janmesh5900@gmail.com', color: 'from-blue-500 to-cyan-500' },
              // { icon: Phone, label: 'Phone', value: '+353 89 229 9380', href: 'tel:+353892299380', color: 'from-green-500 to-emerald-500' },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/janmeshjoshi/', href: 'https://linkedin.com/in/janmeshjoshi/', color: 'from-blue-600 to-indigo-600' },
              { icon: MapPin, label: 'Location', value: 'Dublin, Ireland', href: null, color: 'from-purple-500 to-pink-500' }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href || '#'}
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden ${!contact.href && 'pointer-events-none'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-900 mb-1">{contact.label}</p>
                    <p className="text-gray-600 text-sm break-all">{contact.value}</p>
                  </div>
                  {contact.href && <ChevronRight className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" size={20} />}
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
      <footer className="bg-white/30 backdrop-blur-sm border-t border-gray-200/50 py-12 px-6">
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
            <p className="text-gray-600">© 2025 Janmesh Joshi. Crafted with passion for AI innovation.</p>
            <p className="text-sm text-gray-500">Available for full-time ML engineering opportunities</p>
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