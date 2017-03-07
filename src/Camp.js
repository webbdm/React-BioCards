import React, { Component } from 'react';
import logo from './logo.svg';
import './Camp.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

///// New card

class Camp extends Component {
   render(){
    return(
      <div className="Card">
        <h1>Card</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>State</h2>
        <div className="Info-card">
          <p>Date</p>
          <div className="Info">
            <p>Trip Info goes here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Camp;
