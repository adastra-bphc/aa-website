import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import requests from './request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

function Footer() {
    const phone = "+91 9494000841";
    const email = "adastra@hyderabad.bits-pilani.ac.in";
    // const [phone, setPhone] = useState([]);
    // const [email, setEmail] = useState([]);

    // useEffect(() => {
    //     axios.get(requests.fetchPhone)
    //         .then(response => setPhone(response.data))
    //         .catch(error => console.error(error))
    //     axios.get(requests.fetchEmail)
    //         .then(response => setEmail(response.data))
    //         .catch(error => console.error(error))
    // })

    return (
        <div className="footer">
            <div className="contact-us">
                <p className="footer__sub-heading contact-us__heading">Contact Us</p>
                <div className="contact-us__body">
                    <p className="contact phone">Phone: {phone}</p>
                    <p className="contact email">Email: {email}</p>
                </div>
            </div>
            <div className="sitelinks">
                <p className="footer__sub-heading sitelinks__heading">Site Links</p>
                <div className="sitelinks__body">
                    <Link to="/" className="link home_link">Home</Link>|
                    <Link to="/about-us" className="link about-us_link">About Us</Link>|
                    <Link to="/blogs" className="link blogs_link">Blogs</Link>
                </div>
            </div>
            <div className="follow-us">
                <p className="footer__sub-heading follow-us__heading">Follow Us</p>
                <div className="follow-us__body">
                    <a href="#" className="link facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="link instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;