import React from 'react';
import ReactDOM from 'react-dom';
//import Profile from './Profile.js';
import HomePage from './HomePage.js';
import './index.css';
//import bioData from './data/bio.json';

const JOBS = [
  {
    name: "Gilbert McLaughlin Casella Architects",
    title: "Marketing & Office Coordinator",
    date: "January 2015 - present",
    info:"I handle marketing for the firm, which includes graphic design, social media, and management/development of the website. The site utilizes jQuery & jQuery Animations, and the Google Maps API",
    mlogo: "https://pbs.twimg.com/profile_images/675375907058659328/f06dENlG.jpg"
  },
  {
    name: "Crowd Surf",
    title: "Intern",
    date: "August - December 2014",
    info:"Managed websites, social media, content, and various marketing campaigns for artists & their record labels, agents, and management representatives.",
    mlogo: "https://pbs.twimg.com/profile_images/542382356191916032/a8xiW2r1.jpeg"
  },
  {
    name: "MCN Interactive",
    title: "Intern",
    date: "May - August 2014",
    info: "Assisted with website management, graphic design, and marketing operations of MCN Interactive’s brands & subsidiaries which included Bombplates.com, MerchMo, FutureShirts, and their various eCommerce assets.",
    mlogo: "http://www.bombplates.com/sites/www.bombplates.com/files/mcn_logo_0.png"
  },
  {
    name: "Rockhouse Partners",
    title: "Intern",
    date: "January - May 2014",
    info: "Assisted with the management, development, and content of client WordPress websites. Also tasked with client & agency marketing operations which included social media & email marketing.",
    mlogo: "https://pbs.twimg.com/profile_images/492696167029805056/zDzX2quM.jpeg"
  }
];

const MYBIO = {
    name: "Geoff Webb",
    education: [{
        school_name: "Belmont University",
        major: "Music Business",
        minor: "Marketing",
        grad_date: 2014
    }, {
        school_name: "Nashville Software School",
        major: "Front End & C# / .NET",
        minor: "",
        grad_date: 2017
    }],
    bio: "Visually-minded software developer with a passion for solving puzzles"
};

ReactDOM.render(
    <HomePage j={JOBS} b={MYBIO}/>, document.getElementById('root')
  );
