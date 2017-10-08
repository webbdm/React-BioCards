import React from 'react';
//import axios from 'axios';
import './Camp.css';
// import './Camp.js';

const Profile = (props) =>
  <div className="profile-wrapper">
    <div className="Wrapper">
      <Resume jobs={props.jobs} bio={props.bio} />
    </div>
  </div>;

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.jobClick = this.jobClick.bind(this);
  }

  jobClick(jobIndex) {
    this.setState({
      index: jobIndex
    })
  }

  // componentDidMount () {
  //   axios.get(`https://teamtreehouse.com/geoffwebb.json`)
  //     .then((response) => {
  //       console.log('response', response.data)
  //     })
  //     .catch((error) => {
  //       console.error('axios error', error)
  //     })
  // }

  render() {
    return (
      <div className="resume">
        <div className="nav">{/*GEOFF <span>WEB</span>B*/}</div>
        <div className="my-info">

          <MyInfo bio={this.props.bio} />
        </div>
        <div className="experience">
          <MyXP jobs={this.props.jobs} func={this.jobClick} />
        </div>
        <Camp index={this.state.index} jobs={this.props.jobs} />
      </div>
    );
  }
}

const Camp = (props) =>
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
  </div>;

const MyInfo = (props) =>
  <div className="myInfo">
    <h2>Geoff Webb</h2>
    <img src="https://media.licdn.com/media/p/2/005/02a/1c1/0e167c8.jpg" alt="Geoff" />
    <h3></h3>
    <div className="logoDiv">
      <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" />
      <img src="http://tomwayson.github.io/mwd-jsapi/img/react-logo.png" alt="React" />
      <img src="https://dt-cdn.net/assets/images/gfx/icons/tech/dotnetmicrosoft-536938fee2.svg" alt=".NET" />
    </div>

    <div className="infoDiv">
      <h4>Education</h4>
      <p>{props.bio.education[1].school_name}    <span>  {props.bio.education[1].grad_date}</span></p>
      <p className="degree">{props.bio.education[1].major}</p>
      <p>{props.bio.education[0].school_name}   <span> {props.bio.education[0].grad_date}</span></p>
      <p className="degree">{props.bio.education[0].major} & {props.bio.education[0].minor}</p>
      <p className="bio">Visually-minded software developer with a passion for solving puzzles</p>
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
    <h1 className="experience-header">Experience</h1>
    <div className="jobDiv">
      {props.jobs.map(function (currentJob, jobIndex) {
        return (
          <JobLine
            jobz={props.jobs}
            I={jobIndex}
            key={jobIndex}
            click={function () { props.func(jobIndex) }} />
        );
      })}
    </div>
  </div>;

export default Profile;
