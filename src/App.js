import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Publications data
  const publications = [
    {
      id: 1,
      title: "Unlocking Deva Nagri: OCR with CNN",
      venue: "IEEE AIC 2024",
      description: "Explores OCR using CNNs to enhance Devanagari script recognition."
    },
    {
      id: 2,
      title: "Automated Detection of Autism Spectrum Disorder in Children",
      venue: "Paper ID: 526, Under Review",
      description: "Leverages deep learning to improve early ASD detection."
    },
    {
      id: 3,
      title: "Comprehensive Study of Predictive Maintenance in Industries using LSTM",
      venue: "arXiv",
      description: "Implements LSTM for industrial predictive maintenance."
    },
    {
      id: 4,
      title: "Bridging Ancient Wisdom and Modern Tech: AI-Enhanced Smart Yoga Mat",
      venue: "Multimodal AI & CNN-Based",
      description: "Smart yoga tracking for posture correction and health monitoring."
    },
    {
      id: 5,
      title: "Refined Horizons: Optimized Image Classification via Transfer Learning",
      venue: "COCO Dataset, Transfer Learning Study",
      description: "Compares deep learning models for image classification."
    },
    {
      id: 6,
      title: "Harnessing AutoCAD Designs with ML for Smart Building Optimization",
      venue: "International Journal of Science and Research Archive",
      description: "Uses AI to optimize smart infrastructure design."
    },
    {
      id: 7,
      title: "Advancements in Architectural Design and BIM Modeling",
      venue: "IEEE ICoICC 2025",
      description: "Reviews ML applications in architectural design."
    },
    {
      id: 8,
      title: "From BERT to GPT: A Review of Transformer-Based Approaches in NLP",
      venue: "IEEE ICoICC 2025",
      description: "Explores transformer architectures in NLP."
    },
    {
      id: 9,
      title: "Enhancing Network Security Through Real-Time Anomaly Detection",
      venue: "IEEE ICoICC 2025",
      description: "Uses AI for network threat detection."
    },
    {
      id: 10,
      title: "Improved Diabetes Prediction Through Multimodeling",
      venue: "IEEE Conference on Emerging Trends in Industry 4.0 Technologies 2025",
      description: "Combines ML models for superior diabetes prediction accuracy."
    }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Autism Detection using Multimodal AI",
      description: "SCI Paper in Progress",
      tech: ["TensorFlow", "PyTorch", "Multimodal Learning"]
    },
    {
      id: 2,
      title: "Satellite Image-Based Urban Infrastructure Prediction",
      description: "Google Earth Dataset, ML/AI-Based Analysis",
      tech: ["Computer Vision", "Satellite Imagery", "Deep Learning"]
    },
    {
      id: 3,
      title: "AI-Powered Smart Yoga Mat",
      description: "CNN & Smartwatch Integration for Posture & Performance Analysis",
      tech: ["CNN", "IoT", "Wearable Integration"]
    },
    {
      id: 4,
      title: "Satellite Image Classification for Object Detection",
      description: "Mask R-CNN & ML Techniques for Buildings, Roads, Land detection",
      tech: ["Mask R-CNN", "Object Detection", "Satellite Imagery"]
    },
    {
      id: 5,
      title: "Freelancing Website Development",
      description: "Recommendation System, Performance Analysis, and Chatbot Integration",
      tech: ["React", "ML", "NLP", "Chatbot"]
    }
  ];

  // Skills data
  const skills = [
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "OpenCV"] },
    { category: "Deep Learning", items: ["CNNs", "Transformers (BERT, GPT)", "LSTMs"] },
    { category: "Computer Vision", items: ["Image Processing", "OCR", "Object Detection"] },
    { category: "Web & App Dev", items: ["React", "React Native", "Firebase"] },
    { category: "Cloud & Deployment", items: ["Google Colab", "Kaggle", "API Integration"] },
    { category: "Blockchain & AI", items: ["AI-Powered Blockchain Applications"] }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="neural-network">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="neuron" style={{
              '--delay': `${i * 0.1}s`,
              '--x': `${Math.sin(i * 0.5) * 30}px`,
              '--y': `${Math.cos(i * 0.5) * 30}px`
            }}></div>
          ))}
        </div>
        <h2 className="loading-text">Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <nav className="navbar">
        <div className="logo">SM</div>
        <ul className="nav-links">
          {['home', 'about', 'publications', 'projects', 'skills', 'contact'].map(section => (
            <li key={section} className={activeSection === section ? 'active' : ''}>
              <button onClick={() => setActiveSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {activeSection === 'home' && (
          <motion.section 
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-content">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              >
                Saket Maheshwari
              </motion.h1>
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
              >
                AI Researcher & Innovator
              </motion.h2>
              <motion.div 
                className="animated-underline"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Specializing in Deep Learning, Computer Vision, Multimodal AI, and NLP
              </motion.p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setActiveSection('about')}
              >
                Explore My Work
              </motion.button>
            </div>
            <div className="hero-background">
              {Array.from({ length: 15 }).map((_, index) => (
                <div 
                  key={index} 
                  className="floating-icon"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                >
                  {['⚛️', '🧠', '🔍', '💻', '🤖', '📊', '🧩'][Math.floor(Math.random() * 7)]}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'about' && (
          <motion.section 
            className="about-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            <motion.div className="about-content" variants={itemVariants}>
              <div className="about-image">
                <div className="image-placeholder">
                  {/* <span>SM</span> */}
                </div>
              </div>
              <div className="about-text">
                <p>I am a passionate AI/ML researcher, mentor, and innovator, actively contributing to cutting-edge advancements in deep learning, computer vision, and natural language processing (NLP).</p>
                <p>With a strong portfolio of IEEE and international journal publications, I have worked on autism detection, OCR, smart infrastructure, multimodal AI, and security applications.</p>
                <p>My expertise spans machine learning, deep learning, blockchain, and AI-powered automation, making significant contributions to academia and industry.</p>
              </div>
            </motion.div>
            <motion.div className="achievements" variants={itemVariants}>
              <h3>Achievements</h3>
              <ul>
                <li>Selected for IEEE AIC 2024 Conference (OCR Research on Devanagari Script Recognition)</li>
                <li>Published in Multiple IEEE Conferences & International Journals</li>
                <li>Collaborated with Dr. Sayantan Sinha on Multiple Research Papers</li>
                <li>Developed Smart Yoga Mat with AI-Powered Analytics (CNN & Multimodal Learning)</li>
                <li>Smart India Hackathon 2024 Participant (Govt. of India Initiative)</li>
              </ul>
            </motion.div>
          </motion.section>
        )}

        {activeSection === 'publications' && (
          <motion.section 
            className="publications-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>Research Publications</motion.h2>
            <motion.p variants={itemVariants} className="section-intro">
              I have authored and co-authored multiple research papers, five of which are IEEE conference publications.
              My work integrates machine learning with practical applications in healthcare, NLP, security, and architectural optimization.
            </motion.p>
            <motion.div className="publications-grid" variants={containerVariants}>
              {publications.map((pub, index) => (
                <motion.div 
                  key={pub.id} 
                  className="publication-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                  }}
                >
                  <div className="pub-number">{index + 1}</div>
                  <h3>{pub.title}</h3>
                  <div className="pub-venue">{pub.venue}</div>
                  <p>{pub.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section 
            className="projects-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>Research Projects</motion.h2>
            <motion.p variants={itemVariants} className="section-intro">
              My research focuses on applying AI/ML techniques to solve complex real-world problems
              across various domains including healthcare, urban planning, and security.
            </motion.p>
            <motion.div className="projects-showcase" variants={containerVariants}>
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {activeSection === 'skills' && (
          <motion.section 
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>Technical Expertise</motion.h2>
            <motion.div className="skills-container" variants={containerVariants}>
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, i) => (
                      <motion.div 
                        key={i} 
                        className="skill-item"
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)' }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {activeSection === 'contact' && (
          <motion.section 
            className="contact-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
            <motion.div className="contact-container" variants={itemVariants}>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail">
                    <h3>Email</h3>
                    <p>saketmaheshwariml@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-detail">
                    <h3>Portfolio</h3>
                    <p>Under Development (React-based)</p>
                  </div>
                </div>
                <div className="social-links">
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="social-btn"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="social-btn"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  <motion.button 
                    type="submit" 
                    className="submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.section>
        )}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Saket Maheshwari. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;