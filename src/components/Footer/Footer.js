import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './Footer.css'


function Footer() {
    return (
    <div className="footer">
        <div className="socialMedia"> 
            <InstagramIcon />
            <FacebookIcon />
            <EmailIcon />
            <CallIcon />
        </div>
        <p> &copy; 2023 Brandon Knight </p>
    </div>
    );
}

export default Footer;