import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.js';
import './index.css';

const JOBS = [
  {
    name: "Gilbert McLaughlin Casella Architects",
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
    mlogo: "http://www.bombplates.com/sites/www.bombplates.com/files/mcn_logo_0.png"
  },
  {
    name: "Rockhouse Partners",
    title: "Marketing Intern",
    date: "Jan - May 2014",
    info: "Assisted the marketing team with content, social media, and email marketing.",
    mlogo: "https://pbs.twimg.com/profile_images/492696167029805056/zDzX2quM.jpeg"
  }
];

ReactDOM.render(
    <Profile jobs={JOBS}/>, document.getElementById('root'));
