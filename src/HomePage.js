import React from 'react';
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
            <div className="hompage-wrapper">
                {console.log(this.props.j)}
                <nav>
                    <ul>
                        <li className="sides"><a href="#">Home</a></li>
                        <li className="sides"><a href="#">Work</a></li>
                        <li><img alt="Logo" src="https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/mylogo3.png" /></li>
                        <li className="sides"><a href="#">About</a></li>
                        <li className="sides"><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="profile-wrapper">
                    <Profile jobs={this.props.j} bio={this.props.b} />
                </div>


                <footer>
                    <div className="f-links">
                        <a href="https://www.facebook.com"><img alt="Facebook" src="https://simplesharebuttons.com/images/somacro/facebook.png" /></a>
                        <a href="https://twitter.com"><img alt="Twitter" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/"><img alt="LinkedIn" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a>
                        {/* <a href="https://github.com/webbdm">GitHub</a>
                                <a href="mailto:gwebb762@gmail.com">Email</a>  */}
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;