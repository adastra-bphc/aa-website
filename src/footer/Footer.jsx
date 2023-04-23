import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

function Footer() {
    const [phone, setPhone] = useState([]);
    const [email, setEmail] = useState([]);
    const [facebook, setFacebook] = useState([]);
    const [instagram, setInstagram] = useState([]);

    const contactDataRef = doc(db, 'Footer', 'contact-us');
    const followDataRef = doc(db, 'Footer', 'follow-us');

    useEffect(() => {
        const getInformation = async () => {
            try {
                const contact_data = (await getDoc(contactDataRef)).data();
                const follow_data = (await getDoc(followDataRef)).data();
                setPhone(contact_data.phone);
                setEmail(contact_data.email);
                setFacebook(follow_data.facebook);
                setInstagram(follow_data.instagram);
            }
            catch (err) {
                console.error(err);
            }
        };

        getInformation();

    }, []);

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
                    <a href={facebook} className="link facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={instagram} className="link instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;