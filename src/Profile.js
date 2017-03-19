import React, { Component } from 'react';
//import logo from './logo.svg';
import './Camp.css';
// import './Camp.js';

class Profile extends Component {
   render(props){
    return(
      <div className="Wrapper">
        <Resume jobs={this.props.jobs}/>
      </div>
    );
  }
}

class Resume extends Component {
  render(){
    return(
      <div className="resume">
         <div className="my-info">
         <MyInfo/>
         </div>
         <div className="experience">
         <MyXP/>
         </div>
         <Camp jobs={this.props.jobs}/>
      </div>
    );
  }
}

class Camp extends Component {
   render(){
    return(
      <div className="Center">
        <div className="Card">
          <h2></h2>
          <img src={this.props.jobs[0].mlogo} className="Card-image" alt="logo" />
          <h2>{this.props.jobs[0].name}</h2>
          <div className="Info-card">
            <h3>{this.props.jobs[0].title}</h3>
            <div className="Info">
              <p>{this.props.jobs[0].date}</p>
              <p>{this.props.jobs[0].info}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MyInfo extends Component {
   render(){
    return(
      <div className="myInfo">
        <h2>Geoff Webb</h2>
        <img src="https://media.licdn.com/media/p/2/005/02a/1c1/0e167c8.jpg" alt="Geoff"/>
        <h3>Web Developer</h3>
        <p>Belmont University</p>
        <p>Bio</p>
      </div>
    );
  }
}

class MyXP extends Component {
   render(){
    return(
      <div className="myXP">
        <h1>Experience</h1>
        <div className="jobDiv">

          <div className="jobLine">
            <h3>Gilbert McLaughlin Casella Architects</h3>
            <p>Marketing Coordinator</p>
            <p>Feb. 2015 - Present</p>
          </div>

          <div className="jobLine">
            <h3>Crowd Surf</h3>
            <p>Marketing Intern</p>
            <p>Fall 2014</p>
          </div>

          <div className="jobLine">
            <h3>MCN Interactive</h3>
            <p>Marketing Intern</p>
            <p>Summer 2014</p>
          </div>

          <div className="jobLine">
            <h3>Rockhouse Partners</h3>
            <p>Marketing Intern</p>
            <p>Spring 2014</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
