import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "./data";
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Cpu, 
  Layers, 
  Terminal,
  X, 
  ChevronRight, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Gamepad2, 
  Lightbulb, 
  TreeDeciduous, 
  CircleDot 
} from "lucide-react";

const Github = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [transitioning, setTransitioning] = useState(false);
  const [targetTab, setTargetTab] = useState("home");
  const [curtainPercent, setCurtainPercent] = useState(0);
  const [curtainExpanded, setCurtainExpanded] = useState(false);
  
  // Selected project modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom cursor
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth cinematic curtain transition matching Dribbble video
  const navigateTo = (tab) => {
    if (tab === activeTab || transitioning) return;
    setTargetTab(tab);
    setTransitioning(true);
    setCurtainExpanded(true);
    setCurtainPercent(0);

    // Fast counter animation (Loading - 0% to 100%)
    let current = 0;
    const interval = setInterval(() => {
      current += 7;
      if (current >= 100) {
        current = 100;
        setCurtainPercent(100);
        clearInterval(interval);

        // Switch tab when curtain is totally solid black
        setTimeout(() => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "instant" });
          
          // Curtain opens / collapses smoothly
          setTimeout(() => {
            setCurtainExpanded(false);
            setTimeout(() => {
              setTransitioning(false);
            }, 650);
          }, 250);
        }, 150);
      } else {
        setCurtainPercent(current);
      }
    }, 28);
  };

  const navItems = [
    { id: "works", num: "01", label: "Works" },
    { id: "about", num: "02", label: "About" },
    { id: "playground", num: "03", label: "Playground" },
    { id: "contact", num: "04", label: "Contact" },
  ];

  return (
    <div className="portfolio-app">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor-dot" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} 
      />
      <div 
        className={`custom-cursor-follower ${isHovering ? "hovering" : ""}`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} 
      />

      {/* Cinematic Wipe Curtain Overlay */}
      <div className="transition-curtain">
        <div className={`curtain-bar ${curtainExpanded ? "expanded" : ""}`}>
          <div className="curtain-content">
            <h1 className="curtain-title">
              {targetTab === "works" && "Works"}
              {targetTab === "about" && "About"}
              {targetTab === "playground" && "Playground"}
              {targetTab === "contact" && "Contact"}
              {targetTab === "home" && "Jitwar Jha"}
            </h1>
            <div className="curtain-counter">Loading - {curtainPercent}%</div>
          </div>
        </div>
      </div>

      {/* Top Header */}
      <header className="site-header">
        <div className="header-left">
          <span className="asterisk-icon">✱</span>
          <span className="header-left-text">
            Open for software engineering<br />& backend internships
          </span>
        </div>

        <div 
          className="header-brand" 
          onClick={() => navigateTo("home")}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          JITWAR JHA<sup>©</sup>
        </div>

        <div className="header-right">
          <span>Folio</span>
          <span style={{ fontWeight: 600 }}>Vol.01 / 2026</span>
        </div>
      </header>

      {/* Navigation Strip */}
      <nav className="nav-menu">
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => navigateTo(item.id)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="nav-idx">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="nav-copyright">
          © {new Date().getFullYear()} JITWAR JHA
        </div>
      </nav>

      {/* Main Views */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* VIEW 0: HOME HERO (Exact 1:1 match to Video frame 00:00) */}
        {activeTab === "home" && (
          <div className="hero-container">
            {/* Huge Editorial Name Heading */}
            <div className="hero-main-title">
              <h1 className="hero-name-heading">
                <span className="hero-first-name">Jitwar</span>
                <span className="hero-last-name">Jha</span>
                <span className="hero-role-tag">(BE)</span>
              </h1>
            </div>

            {/* Middle Bio Columns (Exact matching typography and placement) */}
            <div className="hero-middle-row">
              <div className="hero-col left">
                <span className="sparkle-icon">✦</span>
                <p>
                  JITWAR JHA IS A COMPUTER SCIENCE UNDERGRADUATE AT PIET JAIPUR FOCUSING ON BACKEND & CLOUD SYSTEMS.
                </p>
              </div>

              <div className="hero-col right">
                <span className="sparkle-icon">✦</span>
                <p>
                  PASSIONATE ABOUT BUILDING RESILIENT APIS, SCALABLE ARCHITECTURES AND MEASURABLE DIGITAL SYSTEMS.
                </p>
              </div>
            </div>

            {/* Animated Hero Video Showcase */}
            <div 
              className="hero-illustration-stage" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="interactive-pill">
                <span className="pulse-dot"></span>
                <span>Motion Reel • Systems in Action</span>
              </div>

              <div className="hero-ill-wrapper">
                <video 
                  src="/hero-animation.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="hero-ill-video"
                />
              </div>

              <p className="ill-caption">
                Just an ordinary engineer. Built from Jaipur with discipline & precision.
              </p>
            </div>

            {/* Quick Explore Buttons */}
            <div className="hero-floating-dock">
              <button 
                className="dock-btn"
                onClick={() => navigateTo("works")}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span>Explore Works</span>
                <ChevronRight size={14} />
              </button>
              <button 
                className="dock-btn ghost"
                onClick={() => navigateTo("about")}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span>Read Background</span>
              </button>
              <a 
                href={portfolioData.profile.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="dock-btn ghost"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}

        {/* VIEW 1: WORKS (Exact Horizontal Gallery match to 19.8s frame) */}
        {activeTab === "works" && (
          <section className="works-section">
            <div className="works-header-row">
              <div className="works-header-left">
                SELECTED WORKS I<br />HAVE ARCHITECTED & DEPLOYED
              </div>

              <div className="works-center-title">
                <span className="serif-lead">My</span>
                <span>Works</span>
              </div>

              <div className="works-header-right">
                SCROLL OR DRAG<br />TO DISCOVER PROJECTS
              </div>
            </div>

            {/* Horizontal Slider Area */}
            <div className="works-slider-wrapper">
              <div className="works-slider-track">
                {/* 2026 Batch */}
                <div className="works-year-group">
                  <div className="year-sidebar">
                    <span className="year-label">2026</span>
                    <span className="year-count">1 Project</span>
                  </div>

                  <div className="projects-card-row">
                    {portfolioData.projects.filter(p => p.year === "2026").map((proj) => (
                      <div 
                        key={proj.id} 
                        className="project-card"
                        onClick={() => setSelectedProject(proj)}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="project-thumb-box">
                          {proj.video ? (
                            <video 
                              src={proj.video} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              poster={proj.image}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <img src={proj.image} alt={proj.title} />
                          )}
                          <span className="project-tag-badge">{proj.category}</span>
                        </div>
                        <div className="project-info">
                          <h3 className="project-title">{proj.title}</h3>
                          <p className="project-desc">{proj.subtitle}</p>
                          <div className="project-metrics">{proj.metrics}</div>
                          <div className="project-tech-tags">
                            {proj.techStack.slice(0, 4).map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                          <div className="project-actions">
                            <span className="project-link-btn">
                              View Architecture Details <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2025 Batch */}
                <div className="works-year-group">
                  <div className="year-sidebar">
                    <span className="year-label">2025</span>
                    <span className="year-count">2 Projects</span>
                  </div>

                  <div className="projects-card-row">
                    {portfolioData.projects.filter(p => p.year === "2025").map((proj) => (
                      <div 
                        key={proj.id} 
                        className="project-card"
                        onClick={() => setSelectedProject(proj)}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="project-thumb-box">
                          {proj.video ? (
                            <video 
                              src={proj.video} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              poster={proj.image}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <img src={proj.image} alt={proj.title} />
                          )}
                          <span className="project-tag-badge">{proj.category}</span>
                        </div>
                        <div className="project-info">
                          <h3 className="project-title">{proj.title}</h3>
                          <p className="project-desc">{proj.subtitle}</p>
                          <div className="project-metrics">{proj.metrics}</div>
                          <div className="project-tech-tags">
                            {proj.techStack.slice(0, 4).map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                          <div className="project-actions">
                            <span className="project-link-btn">
                              View System Details <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2024 Batch */}
                <div className="works-year-group">
                  <div className="year-sidebar">
                    <span className="year-label">2024</span>
                    <span className="year-count">1 Problem Set</span>
                  </div>

                  <div className="projects-card-row">
                    {portfolioData.projects.filter(p => p.year === "2024").map((proj) => (
                      <div 
                        key={proj.id} 
                        className="project-card"
                        onClick={() => setSelectedProject(proj)}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="project-thumb-box">
                          {proj.video ? (
                            <video 
                              src={proj.video} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              poster={proj.image}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <img src={proj.image} alt={proj.title} />
                          )}
                          <span className="project-tag-badge">{proj.category}</span>
                        </div>
                        <div className="project-info">
                          <h3 className="project-title">{proj.title}</h3>
                          <p className="project-desc">{proj.subtitle}</p>
                          <div className="project-metrics">{proj.metrics}</div>
                          <div className="project-tech-tags">
                            {proj.techStack.map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                          <div className="project-actions">
                            <span className="project-link-btn">
                              View LeetCode Metrics <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 2: ABOUT SECTION */}
        {activeTab === "about" && (
          <section className="about-view">
            <div className="about-header-grid">
              <h2 className="about-big-quote">
                Engineering reliable <em>typed backends</em>, robust APIs, and cloud services.
              </h2>
              <div className="about-subtext">
                <p>{portfolioData.profile.shortBio}</p>
                <p>
                  Ranked <strong>21st out of 160+ competing teams</strong> in the Smart India Hackathon qualifier for the KisanSetu architecture, writing over 245 passing automated tests with zero TypeScript compilation errors across 2,200+ modules.
                </p>
                <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                  <a 
                    href={portfolioData.profile.socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="dock-btn"
                  >
                    <Linkedin size={14} /> Connect on LinkedIn
                  </a>
                  <a 
                    href={portfolioData.profile.socials.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="dock-btn ghost"
                  >
                    <Github size={14} /> GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div className="about-skills-section">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                Technical Competencies
              </h3>
              <div className="skills-category-grid">
                <div className="skill-card">
                  <h4>Programming Languages</h4>
                  <ul>
                    {portfolioData.skills.languages.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h4>Backend & Architecture</h4>
                  <ul>
                    {portfolioData.skills.backend.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h4>Databases & ORM</h4>
                  <ul>
                    {portfolioData.skills.databases.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h4>Cloud & DevOps</h4>
                  <ul>
                    {portfolioData.skills.cloudDevops.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-card">
                  <h4>Developer Tools</h4>
                  <ul>
                    {portfolioData.skills.tools.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Achievements Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div className="education-block">
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#888", marginBottom: "0.3rem" }}>
                    Education
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{portfolioData.education.institution}</h4>
                  <div style={{ fontSize: "0.85rem", color: "#444", marginTop: "0.2rem" }}>
                    {portfolioData.education.degree}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#666", marginTop: "0.2rem" }}>
                    {portfolioData.education.graduation} • {portfolioData.education.gpa}
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#888", marginBottom: "0.4rem" }}>
                      Relevant Coursework
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {portfolioData.education.coursework.map((c, i) => (
                        <span key={i} className="tech-tag">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <GraduationCap size={32} style={{ color: "#333" }} />
                </div>
              </div>

              <div className="education-block">
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "#888", marginBottom: "0.3rem" }}>
                    Certifications & Hackathons
                  </div>
                  {portfolioData.certifications.map((cert, i) => (
                    <div key={i} style={{ marginBottom: i < portfolioData.certifications.length - 1 ? "1rem" : 0 }}>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>{cert.title}</div>
                      <div style={{ fontSize: "0.76rem", color: "#111", fontWeight: 500 }}>{cert.rank}</div>
                      <div style={{ fontSize: "0.74rem", color: "#666", marginTop: "2px" }}>{cert.desc}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <CheckCircle2 size={32} style={{ color: "#333" }} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 3: PLAYGROUND / LAB */}
        {activeTab === "playground" && (
          <section className="playground-view">
            <h2 className="about-big-quote">
              Engineering <em>Lab</em> & Explorations
            </h2>
            <p style={{ color: "#555", fontSize: "0.88rem", maxWidth: "600px", marginTop: "0.5rem" }}>
              Interactive prototypes, algorithmic simulations, and architectural experiments.
            </p>

            <div className="playground-grid">
              <div className="lab-experiment-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="project-tag-badge" style={{ position: "static" }}>01 • Algorithm Engine</span>
                  <Code2 size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>KisanSetu Match Engine</h3>
                <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>
                  Explainable multi-parameter agricultural matching logic combining crop grade, distance matrices, quantity demands, and dynamic cost realization.
                </p>
                <div className="project-metrics">12 localized parameters • Zero-latency scoring</div>
                <a 
                  href="https://kisansetu-lake.vercel.app/login" 
                  target="_blank" 
                  rel="noreferrer"
                  className="dock-btn" 
                  style={{ alignSelf: "flex-start", marginTop: "auto" }}
                >
                  Inspect Live Deployment <ExternalLink size={13} />
                </a>
              </div>

              <div className="lab-experiment-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="project-tag-badge" style={{ position: "static" }}>02 • LeetCode DSA</span>
                  <Terminal size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Algorithm Solvers</h3>
                <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>
                  35+ solved Data Structures & Algorithms challenges with rigorous asymptotic complexity benchmarking in C++ and Java.
                </p>
                <div className="project-metrics">Array & String Sliding Windows • Binary Search</div>
                <a 
                  href={portfolioData.profile.socials.leetcode} 
                  target="_blank" 
                  rel="noreferrer"
                  className="dock-btn ghost" 
                  style={{ alignSelf: "flex-start", marginTop: "auto" }}
                >
                  View LeetCode Profile <ExternalLink size={13} />
                </a>
              </div>

              <div className="lab-experiment-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="project-tag-badge" style={{ position: "static" }}>03 • Motion Lab</span>
                  <Gamepad2 size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Animated Systems Reel</h3>
                <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6 }}>
                  Hardware-accelerated continuous video loop engine with cross-device inline playback, zero layout shift, and smooth responsive aspect containment.
                </p>
                <div className="project-metrics">Looping • Autoplay • playsInline • H.264</div>
                <button 
                  onClick={() => navigateTo("home")}
                  className="dock-btn" 
                  style={{ alignSelf: "flex-start", marginTop: "auto" }}
                >
                  View Hero Video ✦
                </button>
              </div>
            </div>
          </section>
        )}

        {/* VIEW 4: CONTACT VIEW */}
        {activeTab === "contact" && (
          <section className="contact-view">
            <h2 className="contact-hero-text">
              Let's create something <em>unforgettable</em> together.
            </h2>

            <div className="contact-details-grid">
              <div>
                <div className="contact-channel-item">
                  <span className="contact-label">Electronic Mail</span>
                  <a href={`mailto:${portfolioData.profile.email}`} className="contact-value">
                    {portfolioData.profile.email}
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-label">Direct Line / Phone</span>
                  <a href={`tel:${portfolioData.profile.phone}`} className="contact-value">
                    {portfolioData.profile.phone}
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-label">Location</span>
                  <div style={{ fontSize: "1.2rem", fontWeight: 500, color: "#222" }}>
                    {portfolioData.profile.location}
                  </div>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-label">Social & Engineering Profiles</span>
                  <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem" }}>
                    <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: "#111" }}>
                      <Linkedin size={22} />
                    </a>
                    <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" style={{ color: "#111" }}>
                      <Github size={22} />
                    </a>
                    <a href={portfolioData.profile.socials.leetcode} target="_blank" rel="noreferrer" style={{ color: "#111" }}>
                      <Code2 size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Message Form */}
              <div className="contact-form-box">
                <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem", fontWeight: 600 }}>
                  Send a Direct Message
                </h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been prepared for Jitwar Jha.");
                }}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Hi Jitwar, let's discuss an engineering opportunity..." required></textarea>
                  </div>
                  <button type="submit" className="dock-btn" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message ✉
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={18} />
            </button>

            <span className="project-tag-badge" style={{ position: "static", marginBottom: "0.8rem", display: "inline-block" }}>
              {selectedProject.category} • {selectedProject.year}
            </span>

            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              {selectedProject.title}
            </h2>
            <div style={{ fontSize: "0.95rem", color: "#555", marginTop: "0.3rem" }}>
              {selectedProject.subtitle}
            </div>

            <div style={{ margin: "1.5rem 0", borderRadius: "6px", overflow: "hidden", height: "240px", background: "#f0f0f0" }}>
              {selectedProject.video ? (
                <video 
                  src={selectedProject.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls
                  poster={selectedProject.image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              )}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#888", marginBottom: "0.6rem" }}>
                Key Technical Contributions
              </h4>
              <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.7, fontSize: "0.88rem", color: "#333" }}>
                {selectedProject.bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>{b}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#888", marginBottom: "0.6rem" }}>
                Tech Stack
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag" style={{ padding: "4px 10px", fontSize: "0.75rem" }}>{tech}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="dock-btn">
                  Launch Live Application <ExternalLink size={14} />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="dock-btn ghost">
                  <Github size={14} /> View GitHub Source
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Strip */}
      <footer className="site-footer">
        <div>
          DESIGNED AFTER HUY PHAN • ENGINEERED BY JITWAR JHA
        </div>
        <div className="footer-links">
          <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href={portfolioData.profile.socials.leetcode} target="_blank" rel="noreferrer" className="footer-link">LeetCode</a>
          <a href={`mailto:${portfolioData.profile.email}`} className="footer-link">Email</a>
        </div>
      </footer>
    </div>
  );
}
