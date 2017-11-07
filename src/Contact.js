import React from 'react';
import './Camp.css';
import { Timeline } from 'react-twitter-widgets';

const Contact = ({ }) =>
    <div className="contact-wrapper">
        <div className="contact-box">

            <div className="contact-left">
                <h2>Geoff Webb</h2>
                <p>gwebb762@gmail.com</p>
                <p className="resume-download"><a href="https://raw.githubusercontent.com/webbdm/React-BioCards/a61481fe1eada405b8ab80f8b56d06a036af38dd/images/GWebb%20Resume%202017.pdf">Download Resume PDF</a></p>
                {/* <div className="social-links">
                    <a href="https://twitter.com/GWebb762"><img alt="Twitter" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/in/geoff-webb-85637586/"><img alt="LinkedIn" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a>
                    <a href="https://github.com/webbdm"><img alt="GitHub" src="http://static.wixstatic.com/media/00a2c0_25e4011be9c24da78970d53033b0b16a~mv2.png" alt="GitHub" /></a>
                </div> */}
            </div>

            <div className="contact-item">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'gwebb762'
                    }}
                    options={{
                        username: 'gwebb762',
                        height: '350'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>

        </div>


    </div>;

export default Contact;