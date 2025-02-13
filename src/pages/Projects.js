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
            <div className="publication-table-container">
                <h2 className="publication-title">Publications</h2>
                <table className="publication-table">
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Paper Name</th>
                            <th>Publisher</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Non-Collusive Interest Flooding Attacks (NCIFA) in Named Data Networks using Rocketfuel ISP topology</td>
                            <td>IEEE</td>
                            <td><a href="https://ieeexplore.ieee.org/abstract/document/10469359" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Survey on Security Risks in 5G Private Industrial Networks</td>
                            <td>IEEE</td>
                            <td><a href="https://ieeexplore.ieee.org/abstract/document/10057943" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Web Application of Attendance and Result System</td>
                            <td>IJISRT</td>
                            <td><a href="https://www.ijisrt.com/assets/upload/files/IJISRT20APR188.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;
