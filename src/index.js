import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.js';
import './index.css';

var JOBS = [
  {
    name: "GMCA",
    title: "Marketing Coordinator",
    date: "Jan. 2015 - present",
    info:"Marketing",
    mlogo: "https://pbs.twimg.com/profile_images/675375907058659328/f06dENlG.jpg"
  },
  {
    name: "Crowd Surf",
    title: "Social Media Marketing Intern",
    date: "August - Dec. 2014",
    info:"Social Media",
    mlogo: "https://pbs.twimg.com/profile_images/542382356191916032/a8xiW2r1.jpeg"
  },
  {
    name: "MCN Interactive",
    title: "Marketing Intern",
    date: "May - August 2014",
    info: "Web & Content",
    mlogo: "images/RHP.png"
  },
  {
    name: "Rockhouse Partners",
    title: "Marketing Intern",
    date: "Jan - May 2014",
    info: "Assisted the marketing team with content, social media, and email marketing.",
    mlogo: "http://rockhouse.wpengine.com/wp-content/uploads/2015/01/RHP_logo_three-colorr.png"
  }
];

ReactDOM.render(
    <Profile jobs={JOBS}/>, document.getElementById('root'));
