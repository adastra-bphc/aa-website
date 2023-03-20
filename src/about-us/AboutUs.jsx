import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './request';
// import './AboutUs.css'

function AboutUs() {
    const [members, setMembers] = useState([]);
    const [teamPhoto, setTeamPhoto] = useState('');
    const [teamText, setTeamText] = useState('');

    useEffect(() => {
        axios.get(requests.fetchMembers)
            .then(response => setMembers(response.data))
            .catch(error => console.error(error));
        axios.get(requests.fetchTeamPhoto)
            .then(response => setTeamPhoto(response.data))
            .catch(error => console.error(error));
        axios.get(requests.fetchAboutUsTeamText)
            .then(response => setTeamText(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="about-us">
            <h1 className="about-us__heading">ABOUT US</h1>
            <div className="about-us__content">
                <div className="about-us__members">
                    <div className="about-us__pors">
                        {members.slice(0, 3).map(member => (
                            <div className="about-us__member" key={member.id}>
                                <img className="about-us__member__photo" src={member.photo} alt={member.name} />
                                <p className="about-us__member__name">{member.name}</p>
                                <p className="about-us__member__position">{member.position}</p>
                            </div>
                        ))}
                    </div>
                    <div className="about-us__leads">
                        {members.slice(3, 8).map(member => (
                            <div key={member.id}>
                                <img src={member.photo} alt={member.name} />
                                <p>{member.name}</p>
                                <p>{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-us__team">
                    <h2 className="about-us__team__heading">The Team</h2>
                    <div className="about-us__team__content">
                        <img className="about-us__team-photo" src={teamPhoto} alt="Team Photo" />
                        <p className="about-us__team-text">{teamText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;