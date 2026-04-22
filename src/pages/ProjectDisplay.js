import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectList } from '../helperes/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = ProjectList[id];

    if (!project) {
        return (
            <div className="project-display-page">
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', paddingTop: '120px' }}>
                    Project not found.
                </p>
            </div>
        );
    }

    return (
        <div className="project-display-page">
            <button className="back-btn" onClick={() => navigate('/projects')}>
                <ArrowBackIcon fontSize="small" />
                All Projects
            </button>

            <div className="project-display-card glass-card">
                <div className="pd-image-wrap">
                    <img src={project.image} alt={project.name} className="pd-image" />
                </div>
                <div className="pd-content">
                    <h1 className="pd-title gradient-text">{project.name}</h1>
                    <div className="pd-skills-wrap">
                        <p className="pd-skills-label">Technologies used</p>
                        <div className="pd-skill-pills">
                            {project.skills.split(',').map(s => (
                                <span key={s.trim()} className="skill-pill">{s.trim()}</span>
                            ))}
                        </div>
                    </div>
                    <div className="pd-links">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <GitHubIcon style={{ fontSize: 18, marginRight: 8 }} />
                            View on GitHub
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                <LaunchIcon style={{ fontSize: 16, marginRight: 8 }} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDisplay;
