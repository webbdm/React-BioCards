import React from 'react';
import axios from 'axios';
import './Camp.css';

class TestGround extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };
  
    }
  

  
    // componentDidMount () {
    //   axios.get(``)
    //     .then((response) => {
    //       console.log('response', response.data)
    //     })
    //     .catch((error) => {
    //       console.error('axios error', error)
    //     })
    // }
  
    render() {
      return (
        <div className="">
          <h1>Test</h1>
        </div>
      );
    }
  }
  
  
  export default TestGround;