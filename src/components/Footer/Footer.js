import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a target="_blank" rel="nonreferrer noreferrer" href="https://www.instagram.com/lavendercovefarm/">
                    <InstagramIcon />
                </a>
                <a  target="_blank" rel="nonreferrer noreferrer" href="https://www.facebook.com/lavendercovefarm">
                <FacebookIcon />
                </a>
                <a  target="_blank" rel="nonreferrer noreferrer" href="mailto: contact@lavendercovefarm.com">
                <EmailIcon />
                </a>
                <a  target="_blank" rel="nonreferrer noreferrer" href="tel:2546130264">
                <CallIcon />
                </a>
            </div>
            <a className="copyRight" target="_blank" rel="nonreferrer noreferrer" href="https://blksmk8483.github.io/React-Portfolio/" > &copy; 2023 Brandon Knight </a>
        </div>
    );
}

export default Footer;