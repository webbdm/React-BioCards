import React from 'react';
import './Camp.css';

const Projects = ({ }) =>
    <div className="projects-wrapper">
        <div className="projects-box">

            <h2>Trek</h2>
            <div className="project-item">
                <a><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Trek%20Screenshot.png" alt="Trek" /></a>
                <p>This is the description for Trek</p>
            </div>

            <h2>Macro Tracker</h2>
            <div className="project-item">
                <a href="https://island-hopper.firebaseapp.com/"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Macro%20Screenshot.png" alt="Macro" /></a>
                <p>This is the description for Macro</p>
            </div>

            <h1>Hackathons</h1>

            <h2>TIL (1st Place Winner)</h2>
            <div className="project-item">
                <a href="https://nss-alumni.github.io/hackathon1-team09/#!/list"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/TIL%20Screenshot.png" alt="Macro" /></a>
                <p>For our project in the 1st Annual Nashville Software School Skill++ 24-Hour Hackathon, we created TIL (Today I Learned) which is an app to post anything new you've learned about tech. It was built with an Angular 1.6 Front-End, Elixir Back-End, and also features a Slack app that allows you to post, search, and control the app through your Slack team. My role on the team was Front-End developer, designing the UI & styles with Materialize as our framework. </p>
            </div>
        </div>
    </div>;

export default Projects;