import React from 'react';
//import axios from 'axios';
import './Camp.css';
// import './Camp.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "testPro"  
        };
      }
    
    render(){
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default HomePage;