import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ProjectItem.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProjectItem({ image, name, id, skills, delay = 0 }) {
    const navigate = useNavigate();
    return (
        <div
            className="project-item glass-card"
            onClick={() => navigate("/project/" + id)}
            style={{ animationDelay: delay + 's' }}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate("/project/" + id)}
            aria-label={name}
        >
            <div
                className="project-image"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="project-overlay">
                    <span className="project-open"><ArrowForwardIcon /></span>
                </div>
            </div>
            <div className="project-info">
                <h2 className="project-name">{name}</h2>
                {skills && <p className="project-skills">{skills}</p>}
            </div>
        </div>
    );
}

export default ProjectItem;
