import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import useScrollReveal from '../hooks/useScrollReveal';
import "../styles/Projects.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const publications = [
  {
    title: 'Non-Collusive Interest Flooding Attacks (NCIFA) in Named Data Networks using Rocketfuel ISP topology',
    publisher: 'IEEE',
    link: 'https://ieeexplore.ieee.org/abstract/document/10469359',
  },
  {
    title: 'Survey on Security Risks in 5G Private Industrial Networks',
    publisher: 'IEEE',
    link: 'https://ieeexplore.ieee.org/abstract/document/10057943',
  },
  {
    title: 'Web Application of Attendance and Result System',
    publisher: 'IJISRT',
    link: 'https://www.ijisrt.com/assets/upload/files/IJISRT20APR188.pdf',
  },
];

function Projects() {
  const [projRef, projVisible] = useScrollReveal();
  const [pubRef, pubVisible] = useScrollReveal();

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <h1 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="section-subtitle">
          {ProjectList.length} projects spanning AI, ML, RPA, and full-stack development
        </p>
      </div>

      {/* Bento Grid */}
      <div
        className={"bento-grid " + (projVisible ? "revealed" : "")}
        ref={projRef}
      >
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            id={idx}
            name={project.name}
            image={project.image}
            skills={project.skills}
            delay={idx * 0.05}
          />
        ))}
      </div>

      <hr className="section-divider" />

      {/* Publications */}
      <div
        className={"publications-section " + (pubVisible ? "revealed" : "")}
        ref={pubRef}
      >
        <h2 className="section-title">
          Research <span className="gradient-text">Publications</span>
        </h2>
        <p className="section-subtitle">Peer-reviewed academic contributions</p>
        <div className="pub-list">
          {publications.map((pub, i) => (
            <div key={i} className="pub-card glass-card">
              <div className="pub-num gradient-text">0{i + 1}</div>
              <div className="pub-body">
                <p className="pub-title">{pub.title}</p>
                <span className={"pub-badge " + (pub.publisher === 'IEEE' ? 'ieee' : 'other')}>
                  {pub.publisher}
                </span>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
                aria-label="Open publication"
              >
                <OpenInNewIcon fontSize="small" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
