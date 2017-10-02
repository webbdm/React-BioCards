import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import axios from 'axios';
import './Camp.css';
import Profile from './Profile.js';
// import './Camp.js';

// Components
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import ProjectView from './ProjectView';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props
        };
    }

    render() {
        return (
            <HashRouter>
                <div className="hompage-wrapper">
                    <nav>
                        <ul>
                            <li className="sides"><Link to='/projects'>Projects</Link></li>
                            <li className="sides"><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/'><img alt="Logo" src="https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/mylogo3.png" /></Link></li>
                            <li className="sides"><Link to='/about'>About</Link></li>
                            <li className="sides"><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="">
                        <Route exact path="/resume" component={() => (<Profile jobs={this.props.j} bio={this.props.b} />)} />
                        <Route exact path="/projects" component={() => (<Projects />)} />
                        <Route exact path="/about" component={() => (<About />)} />
                        <Route exact path="/contact" component={() => (<Contact />)} />
                        <Route exact path="/Trek" component={() => (<ProjectView />)} />
                        <Route exact path="/MacroTracker" component={() => (<ProjectView />)} />
                        <Route exact path="/TIL" component={() => (<ProjectView />)} />
                        {/* <Profile jobs={this.props.j} bio={this.props.b} /> */}
                    </div>


                    <footer>
                        <div className="f-links">
                            {/* <a href="https://www.facebook.com"><img alt="Facebook" src="https://simplesharebuttons.com/images/somacro/facebook.png" /></a> */}
                            <a href="https://twitter.com/GWebb762"><img alt="Twitter" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                            <a href="https://www.linkedin.com/in/geoff-webb-85637586/"><img alt="LinkedIn" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a>
                            <a href="https://github.com/webbdm"><img alt="GitHub" src="http://static.wixstatic.com/media/00a2c0_25e4011be9c24da78970d53033b0b16a~mv2.png" alt="GitHub" /></a>
                            <span className="footer-right">Built with<img src="http://tomwayson.github.io/mwd-jsapi/img/react-logo.png"/></span>
                            {/* <a href="mailto:gwebb762@gmail.com">Email</a> */}
                        </div>
                    </footer>
                </div>
            </HashRouter>
        );
    }
}

export default HomePage;