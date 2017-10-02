import React from 'react';
import './Camp.css';

import { Link } from 'react-router-dom';

const Projects = ({ }) =>
    <div className="projects-wrapper">
        <div className="projects-box">

            {/* <h2>Trek</h2> */}
            <div className="project-item trek-img">
                <Link to="/Trek"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Trek%20Screenshot.png" alt="Macro" /></Link>
                {/* <a><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Trek%20Screenshot.png" alt="Trek" /></a> */}
            </div>

            {/* <h2>Macro Tracker</h2> */}
            <div className="project-item macro-img">
                <Link to="/MacroTracker"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Macro%20Screenshot.png" alt="Macro" /></Link>
                {/* <a href="https://island-hopper.firebaseapp.com/"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/Macro%20Screenshot.png" alt="Macro" /></a> */}
            </div>

            {/* <h1>Hackathons</h1> */}

            {/* <h2>TIL (1st Place Winner)</h2> */}
            <div className="project-item til-img">
                <Link to="/TIL"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/TIL%20Screenshot.png" alt="Macro" /></Link>
                {/* <a href="https://nss-alumni.github.io/hackathon1-team09/#!/list"><img src="https://raw.githubusercontent.com/webbdm/React-BioCards/nav-routes/images/TIL%20Screenshot.png" alt="Macro" /></a> */}
            </div>
        </div>
    </div>;

export default Projects;