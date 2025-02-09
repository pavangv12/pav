import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helperes/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project-container">
            <div className="project-card">
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} />
                <p>
                    <b>Skills:</b> {project.skills}
                </p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}

export default ProjectDisplay;
