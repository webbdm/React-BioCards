import React, { Component } from 'react';
//import logo from './logo.svg';
import './Camp.css';


class Camp extends Component {
   render(){
    return(
      <div className="Center">
        <div className="Card">
          <h1>React</h1>
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

export default Camp;
