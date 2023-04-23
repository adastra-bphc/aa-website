import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import requests from './request';
import './AboutUs.css'

import teamPhoto from './team-photo.jpg';
import defaultPhoto from './default-image.jpg';

function AboutUs() {
    // const [members, setMembers] = useState([]);
    // const [teamPhoto, setTeamPhoto] = useState('');
    // const [teamText, setTeamText] = useState('');

    // useEffect(() => {
    //     axios.get(requests.fetchMembers)
    //         .then(response => setMembers(response.data))
    //         .catch(error => console.error(error));
    //     axios.get(requests.fetchTeamPhoto)
    //         .then(response => setTeamPhoto(response.data))
    //         .catch(error => console.error(error));
    //     axios.get(requests.fetchAboutUsTeamText)
    //         .then(response => setTeamText(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    class Member {
        constructor(id, photo, name, position) {
            this.id = id;
            this.photo = photo;
            this.name = name;
            this.position = position;
        }
    }

    const m1 = new Member(1, "", "Name", "Secretary");
    const m2 = new Member(2, "", "Name", "President");
    const m3 = new Member(3, "", "Name", "Treasurer");
    const m4 = new Member(4, "", "Name", "Tech Lead");
    const m5 = new Member(5, "", "Name", "Publicity Lead");
    const m6 = new Member(6, "", "Name", "Research Lead");
    const m7 = new Member(7, "", "Name", "Design Lead");
    const m8 = new Member(8, "", "Name", "Editorial Lead");

    const members = [m1, m2, m3, m4, m5, m6, m7, m8];

    const teamText = "Lorem ipsum dolor sit amet. Et molestiae adipisci qui dicta quidem sed ratione. Lorem ipsum dolor sit amet.Et molestiae adipisci qui dicta quidem sed ratione. Lorem ipsum dolor sit amet.Et molestiae adipisci qui dicta quidem sed ratione.";

    return (
        <div className="about-us">
            <h1 className="about-us__heading">ABOUT US</h1>
            <div className="about-us__content">
                <div className="about-us__members">
                    <div className="about-us__pors">
                        {members.slice(0, 3).map(member => (
                            <div className="about-us__member" key={member.id}>
                                <img className="about-us__member__photo" src={defaultPhoto} alt={member.name} />
                                <p className="about-us__member__name">{member.name}</p>
                                <p className="about-us__member__position">{member.position}</p>
                            </div>
                        ))}
                    </div>
                    <div className="about-us__leads">
                        {members.slice(3, 8).map(member => (
                            <div key={member.id}>
                                <img className="about-us__member__photo" src={defaultPhoto} alt={member.name} />
                                <p className="about-us__member__name">{member.name}</p>
                                <p className="about-us__member__position">{member.position}</p>
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