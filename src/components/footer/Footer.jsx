import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Moviesflix | Movie & TV Stream is a platform offering free access to movies and TV shows, 
                    similar to popular services like Netflix, Disney+, HBO, Apple TV+, and Amazon Prime Video. 
                    Its goal is to provide free streaming to people worldwide who cannot afford premium subscriptions.
                    However, it’s important to clarify that Moviesflix | Movie & TV Stream does not host
                    or provide any actual films or TV series itself.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="footerBar">
                    Made by <strong>Rajat Kumar</strong>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
