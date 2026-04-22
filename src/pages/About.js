import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useScrollReveal from '../hooks/useScrollReveal';
import "../styles/About.css";

const certifications = [
  {
    title: 'Executive Post Graduate Degree',
    issuer: 'Indian Institute of Technology, Roorkee',
    field: 'Data Science & Artificial Intelligence',
    year: '2024 - 2025',
  },
  {
    title: 'Master of Technology',
    issuer: 'MS Ramaiah Institute of Technology',
    field: 'Computer Science and Engineering',
    year: '2021 - 2023',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Udemy | Instructor: Andrew Ng',
    field: 'ML, Deep Learning, NLP',
    year: '2021',
  },
  {
    title: 'Microsoft SQL Server Certification',
    issuer: 'Microsoft Learn',
    field: 'Database Administration & Querying',
    year: '2020',
  },
];

const values = [
  {
    title: 'Data-Driven Decision Making',
    description: 'Every insight must be backed by rigorous analysis. I believe in asking the right questions before jumping to conclusions.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Building systems that not only solve today\'s problems but are architected to scale. Performance and efficiency matter.',
  },
  {
    title: 'Continuous Learning',
    description: 'The field of AI/ML evolves daily. I stay ahead through research, experimentation, and collaborative learning.',
  },
  {
    title: 'Impact Over Complexity',
    description: 'Simple, effective solutions beat complex ones. I optimize for business impact, not code elegance.',
  },
];

function About() {
  const [bioRef, bioVisible] = useScrollReveal();
  const [certRef, certVisible] = useScrollReveal();
  const [valueRef, valueVisible] = useScrollReveal();

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1 className="section-title">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="section-subtitle">My journey in Data Science, AI, and problem-solving</p>
      </div>

      {/* Biography */}
      <section className={`bio-section glass-card ${bioVisible ? 'revealed' : ''}`} ref={bioRef}>
        <h2 className="section-title">Professional Background</h2>
        <div className="bio-content">
          <p>
            I'm a Senior Software Engineer and AI practitioner with a passion for transforming raw data into actionable intelligence. My career spans healthcare, quality engineering, and automation domains where data-driven decisions literally impact lives and livelihoods.
          </p>
          <p>
            Currently at Radiometer as Senior Software Engineer 1, I architect RPA automation solutions and lead AI-driven quality engineering initiatives for a global medical device company. This role has sharpened my ability to translate complex technical requirements into scalable systems that work at enterprise scale.
          </p>
          <p>
            My technical foundation is rooted in rigorous coursework and hands-on experience. I have completed an Executive Post Graduate Degree in Data Science & AI from IIT Roorkee, one of India's premier institutes. This blend of academic rigor and industry experience has equipped me with both theoretical depth and practical pragmatism.
          </p>
          <p>
            Beyond traditional ML, I'm deeply invested in Generative AI and LLMs. I've built RAG pipelines, prompt engineering solutions, and agentic AI systems using LangChain, Azure OpenAI, and GPT-4. I believe the next era of software will be AI-augmented, and I'm actively shaping that future.
          </p>
          <p>
            What drives me is the intersection of problem-solving and impact. Whether it's building a kidney disease classification model, automating document processing, or creating a chatbot that understands medical literature, I'm focused on solutions that create real value. I've contributed to academic research in network security, reflecting my commitment to both innovation and rigor.
          </p>
          <p>
            Outside of work, I'm an avid learner, badminton enthusiast, and someone who appreciates thought-provoking films. I believe in work-life balance and the importance of continuous growth, both professionally and personally.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Certifications */}
      <section className={`certs-section ${certVisible ? 'revealed' : ''}`} ref={certRef}>
        <h2 className="section-title">
          Certifications &amp; <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">Formal credentials and recognized achievements</p>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="cert-icon">
                <SchoolIcon />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-field">{cert.field}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* Work Philosophy */}
      <section className={`values-section ${valueVisible ? 'revealed' : ''}`} ref={valueRef}>
        <h2 className="section-title">
          Philosophy &amp; <span className="gradient-text">Values</span>
        </h2>
        <p className="section-subtitle">Principles that guide my work</p>
        <div className="values-grid">
          {values.map((val, i) => (
            <div key={i} className="value-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="value-icon">
                <CheckCircleIcon />
              </div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
