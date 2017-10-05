import React from 'react';
import './Camp.css';

const ProjectView = ({ name, description, imgUrl, prjUrl }) =>
    <div className="project-view-wrapper">
        <div className="project-view-image">
            <a href=""><img src={imgUrl} alt="name" /></a>
        </div>

        <div className="project-view-info">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    </div>;

export default ProjectView;