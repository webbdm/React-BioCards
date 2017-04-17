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

      this.currentJob = this.currentJob.bind(this);
      this.jobTwo = this.jobTwo.bind(this);
      this.jobThree = this.jobThree.bind(this);
      this.jobFour = this.jobFour.bind(this);
    }

    currentJob() {
      this.setState({
        index: 0
      })
    }

    jobTwo(jobIndex) {
      this.setState({
        index: jobIndex
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
              <MyXP jobs={this.props.jobs} func={this.jobTwo}/>
           </div>
              <Camp index={this.state.index} jobs={this.props.jobs}/>
        </div>
      );
   }
}

const Camp = (props) =>
      <div className="Center">
        <div className="Card">
          <h2></h2>
          <img src={props.jobs[props.index].mlogo} className="Card-image" alt="logo" />
          <h2>{props.jobs[props.index].name}</h2>
          <div className="Info-card">
            <h3>{props.jobs[props.index].title}</h3>
            <div className="Info">
              <p>{props.jobs[props.index].date}</p>
              <p>{props.jobs[props.index].info}</p>
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

const JobLine = (props) =>
      <div className="jobLine" onClick={props.click}>
        <h3>{props.jobz[props.I].name}</h3>
        <p>{props.jobz[props.I].title}</p>
        <p>{props.jobz[props.I].date}</p>
      </div>;

const MyXP = (props) =>
      <div className="myXP">
        <h1>Experience</h1>
        <div className="jobDiv">
          {props.jobs.map(function(currentJob,jobIndex){
             return(
              <JobLine
                jobz={props.jobs}
                I={jobIndex}
                key={jobIndex}
                click={function(){
                    props.func(jobIndex)
                  }
                }/>
             );
          })}
        </div>
      </div>;

export default Profile;
