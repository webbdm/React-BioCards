import React, { Component } from 'react';
import logo from './logo.svg';
import './Camp.css';

class Camp extends Component {
   render(){
    return(
      <div className="Card">
        <h1>React</h1>
        <img src={logo} className="Card-image" alt="logo" />
        <h2>State</h2>
        <div className="Info-card">
          <span>June</span>
          <div className="Info">
            <p>Info goes here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Camp;
