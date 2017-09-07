import React from 'react';
import './Camp.css';

const Projects = ({ }) =>
    <div className="projects-wrapper">
        <div className="projects-box">
            <div className="project-item">
                <img alt="Trek" />
                <p>This is the description for Trek</p>
            </div>

            <div className="project-item">
                <img alt="Macro" />
                <p>This is the description for Macro</p>
            </div>
        </div>
    </div>;

export default Projects;