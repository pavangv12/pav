import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helperes/ProjectList';
import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="project-list">
                {ProjectList.map((project, idx) => (
                    <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
