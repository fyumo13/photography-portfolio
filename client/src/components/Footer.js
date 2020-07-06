import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div id="footer">
        <div className="links">
            <a href="https://github.com/fyumo13">
                <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a href="https://www.linkedin.com/in/fredrikyumo/">
                <FontAwesomeIcon icon={ faLinkedin } />
            </a>
        </div>
    </div>
);

export default Footer;