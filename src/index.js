import React from 'react';
import ReactDOM from 'react-dom';
import Camp from './Camp';
import './index.css';

var JOBS = [

  {
    name: "Rockhouse Partners",
    title: "Marketing Intern",
    date: "Jan - May 2014",
    info: "Assisted the marketing team with content, social media, and email marketing.",
    mlogo: "images/RHP.png"
  },

  {
    name: "MCN Interactive",
    title: "Marketing Intern",
    date: "May - August 2014",
    info: "Web & Content",
    mlogo: "images/RHP.png"
  },

  {
    name: "Crowd Surf",
    title: "Social Media Marketing Intern",
    date: "August - Dec. 2014",
    info:"Social Media",
    mogo: "images/RHP.png"
  }

];


ReactDOM.render(
  <Camp jobs={JOBS}/>,
document.getElementById('root')
);
