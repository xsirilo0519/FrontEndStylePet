import React from 'react';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import '../Style/Footer.css'
function Footer() {
    return (
        <div id="footer">
        <div id="socialMedia">
            <img id="media-icon" src={facebook} alt="FbIcon"></img>
            <img id="media-icon" src={twitter} alt="TwttIcon"></img>
            <img id="media-icon" src={instagram} alt="InstIcon"></img>
        </div>
        <p> &copy; 2021 Style Pet</p>
    </div>
    );
}

export default Footer;