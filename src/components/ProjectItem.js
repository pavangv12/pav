import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ProjectItem.css";

function ProjectItem({ image, name, id }) {
    const navigate = useNavigate();
    return (
        <div
            className="project-item"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <div
                className="project-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <h1 className="project-name">{name}</h1>
        </div>
    );
}

export default ProjectItem;
