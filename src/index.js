import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.js';
import './index.css';

var JOBS = [

    {
        name: "Rockhouse Partners",
        title: "Marketing Intern",
        date: "Jan - May 2014",
        info: "Assisted the marketing team with content, social media, and email marketing.",
        mlogo: "http://rockhouse.wpengine.com/wp-content/uploads/2015/01/RHP_logo_three-colorr.png"
    }, {
        name: "MCN Interactive",
        title: "Marketing Intern",
        date: "May - August 2014",
        info: "Web & Content",
        mlogo: "images/RHP.png"
    }, {
        name: "Crowd Surf",
        title: "Social Media Marketing Intern",
        date: "August - Dec. 2014",
        info: "Social Media",
        mlogo: "images/RHP.png"
    }

];

ReactDOM.render(
    <Profile jobs={JOBS}/>, document.getElementById('root'));
