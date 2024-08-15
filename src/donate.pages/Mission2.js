import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionImage from './images/d3.jpeg'; // Make sure to add the image in your images folder

const Mission2 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <h1 className="mission-p">Mission: Protect Abandoned Elders</h1>
            <div className="mission-card">
                <img src={missionImage} alt="Protect Abandoned Elders" className="mission-image" />
                <p>In India, many elderly people are abandoned and left to fend for themselves without any support or care. Our mission is to provide shelter, medical care, and emotional support to these vulnerable elders. Through our programs, we aim to create a safe and nurturing environment where they can live with dignity and respect. Join us in our mission to protect abandoned elders and ensure they receive the care they deserve.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission2;
