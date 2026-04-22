import React, { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import useScrollReveal from '../hooks/useScrollReveal';
import "../styles/Home.css";

const ROLES = ['Data Scientist', 'AI Engineer', 'RPA Automation Expert', 'ML Practitioner'];

const SKILLS = {
  'Languages & Data': ['Python', 'SQL', 'Pandas', 'NumPy'],
  'ML / AI': ['Scikit-learn', 'TensorFlow', 'Deep Learning', 'OpenAI GPT', 'Azure OpenAI', 'LangChain', 'RAG Pipelines', 'Prompt Engineering', 'Agentic AI', 'FAISS', 'Hugging Face'],
  'Automation & RPA': ['UiPath RPA', 'UiPath IXP', 'REST API Integration', 'CI/CD (Azure DevOps)', 'Jenkins'],
  'MLOps & Tools': ['MLflow', 'DVC', 'Docker', 'Power BI', 'Matplotlib', 'Seaborn'],
  'Techniques': ['Feature Engineering', 'EDA', 'Regression', 'Classification', 'Clustering', 'Dimensionality Reduction'],
};

const FEATURED_IDS = [0, 1, 2];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Home() {
  const navigate = useNavigate();
  const typedRole = useTypingEffect(ROLES);
  const [skillsRef, skillsVisible] = useScrollReveal();
  const [featuredRef, featuredVisible] = useScrollReveal();

  const featuredProjects = FEATURED_IDS.map(i => ({ ...ProjectList[i], id: i }));

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-greeting">Hello, I am</p>
          <h1 className="hero-name gradient-text">Pavan G V</h1>
          <div className="hero-role-wrap">
            <span className="hero-role">{typedRole}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>
          <p className="hero-bio">
            Passionate about turning raw data into real-world solutions. Specialising in
            Machine Learning, Generative AI, RPA Automation and cloud-native AI systems
            across healthcare and quality engineering domains.
          </p>
          <div className="hero-actions">
            <a href="#featured" className="btn-primary">View Projects</a>
            <a href="mailto:pavangv12@gmail.com" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/pavangv12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://github.com/pavangv12" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="mailto:pavangv12@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><EmailIcon /></a>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="scroll-dot" />
        </div>
      </section>

      <hr className="section-divider" />

      <section id="featured" className={"featured-section " + (featuredVisible ? "revealed" : "")} ref={featuredRef}>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">A selection of my recent AI and ML work</p>
        <div className="featured-grid">
          {featuredProjects.map((proj, i) => (
            <div
              key={proj.id}
              className="featured-card glass-card"
              style={{ animationDelay: (i * 0.12) + "s" }}
              onClick={() => navigate("/project/" + proj.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && navigate("/project/" + proj.id)}
            >
              <div className="featured-img" style={{ backgroundImage: "url(" + proj.image + ")" }} />
              <div className="featured-info">
                <h3>{proj.name}</h3>
                <p className="featured-skills">{proj.skills}</p>
                <span className="featured-cta">View Project</span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-outline mt-8" onClick={() => navigate("/projects")}>
          See All Projects
        </button>
      </section>

      <hr className="section-divider" />

      <section className={"skills-section " + (skillsVisible ? "revealed" : "")} ref={skillsRef}>
        <h2 className="section-title">Skills and <span className="gradient-text">Expertise</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items], ci) => (
            <div key={category} className="skill-group glass-card" style={{ animationDelay: (ci * 0.1) + "s" }}>
              <h3 className="skill-category">{category}</h3>
              <div className="skill-pills">
                {items.map(skill => (
                  <span key={skill} className="skill-pill" title={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
