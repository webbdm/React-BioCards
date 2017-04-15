import React from 'react';
//import logo from './logo.svg';
import './Camp.css';
// import './Camp.js';

const Profile = (props) =>

      <div className="Wrapper">
        <Resume jobs={props.jobs}/>
      </div>;

class Resume extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };
    }

    currentJob() {
      console.log('test');
      this.setState({
        index: 0
      })
    }

    jobTwo() {
      this.setState({
        index: 1
      })
    }

    jobThree() {
      this.setState({
        index: 2
      })
    }

    jobFour() {
      this.setState({
        index: 3
      })
    }

    render(){
      return(
        <div className="resume">
           <div className="nav">{/*GEOFF <span>WEB</span>B*/}</div>
           <div className="my-info">
              <MyInfo/>
           </div>
           <div className="experience">
              <MyXP func={this.currentJob}/>
           </div>
              <Camp jobs={this.props.jobs}/>
        </div>
      );
   }
}

const Camp = (props) =>
      <div className="Center">
        <div className="Card">
          <h2></h2>
          <img src={props.jobs[0].mlogo} className="Card-image" alt="logo" />
          <h2>{props.jobs[0].name}</h2>
          <div className="Info-card">
            <h3>{props.jobs[0].title}</h3>
            <div className="Info">
              <p>{props.jobs[0].date}</p>
              <p>{props.jobs[0].info}</p>
            </div>
          </div>
        </div>
      </div>;

const MyInfo = (props) =>
      <div className="myInfo">
        <h2></h2>
        <img src="https://media.licdn.com/media/p/2/005/02a/1c1/0e167c8.jpg" alt="Geoff"/>
        <h3></h3>
        <div className="logoDiv">
          <img src="https://angular.io/resources/images/logos/angular/angular.png" alt="Angular"/>
          <img src="http://tomwayson.github.io/mwd-jsapi/img/react-logo.png" alt="React"/>
          <img src="https://dt-cdn.net/assets/images/gfx/icons/tech/dotnetmicrosoft-536938fee2.svg" alt=".NET"/>
        </div>

        <div className="infoDiv">
          <h4>Education</h4>
          <p>Nashville Software School    <span>  2017</span></p>
            <p className="degree">Front End & C# / .NET</p>
          <p>Belmont University   <span> 2014</span></p>
            <p className="degree">Music Business & Marketing</p>
          <p className="bio">Apprentice software developer at Nashville Software School and marketing professional.</p>
        </div>
      </div>;

const MyXP = (props) =>
      <div className="myXP">
        <h1>Experience</h1>
        <div className="jobDiv">

          <div className="jobLine" onClick={props.func}>
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
      </div>;

export default Profile;
