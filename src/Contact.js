import React from 'react';
import './Camp.css';
import { Timeline } from 'react-twitter-widgets';

const Contact = ({ }) =>
    <div className="contact-wrapper">
        <div className="contact-box">
            
            <div className="contact-left">
                <h2>Geoff Webb</h2>
                <p>gwebb762@gmail.com</p>
                <p className="resume-download">Download My Resume</p>
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