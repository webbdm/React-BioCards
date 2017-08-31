import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import axios from 'axios';
import './Camp.css';
import Profile from './Profile.js';
// import './Camp.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div className="hompage-wrapper">
                    <nav>
                        <ul>
                            <li className="sides"><Link to='/'>Home</Link></li>
                            <li className="sides"><Link to='/resume'>Resume</Link></li>
                            <li><img alt="Logo" src="https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/mylogo3.png" /></li>
                            <li className="sides"><a href="#">About</a></li>
                            <li className="sides"><a href="#">Work</a></li>
                        </ul>
                    </nav>

                    <div className="">
                        <Route exact path="/resume" component={() => (<Profile jobs={this.props.j} bio={this.props.b} />)} />
                        {/* <Profile jobs={this.props.j} bio={this.props.b} /> */}
                    </div>


                    <footer>
                        <div className="f-links">
                            {/* <a href="https://www.facebook.com"><img alt="Facebook" src="https://simplesharebuttons.com/images/somacro/facebook.png" /></a> */}
                            <a href="https://twitter.com/GWebb762"><img alt="Twitter" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                            <a href="https://www.linkedin.com/in/geoff-webb-85637586/"><img alt="LinkedIn" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a>
                            {/* <a href="https://github.com/webbdm">GitHub</a>
                                <a href="mailto:gwebb762@gmail.com">Email</a>  */}
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default HomePage;