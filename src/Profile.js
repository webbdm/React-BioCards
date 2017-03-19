import React, { Component } from 'react';
//import logo from './logo.svg';
import './Camp.css';
// import './Camp.js';


class Camp extends Component {
   render(){
    return(
      <div className="Center">
        <div className="Card">
          <h1>React</h1>
          <img src={"this.props.jobs[0].mlogo"} className="Card-image" alt="logo" />
          <h2>{this.jobs.name}</h2>
          <div className="Info-card">
            <h3>{this.jobs.title}</h3>
            <div className="Info">
              <p>{this.jobs.date}</p>
              <p>{this.jobs.info}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
   render(props){
    return(
      <div className="wrapper">
        <h1>Hello Test</h1>
        <Camp jobs={this.props}/>
      </div>

    );
  }
}

export default Profile;
