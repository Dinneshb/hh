import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionImage from './images/d4.jpg'; // Make sure to add the image in your images folder

const Mission4 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <h1 className="mission-p">Mission: Safe Water for All</h1>
            <div className="mission-card">
                <img src={missionImage} alt="Safe Water for All" className="mission-image" />
                <p>Access to clean and safe water is a fundamental human right, yet millions of people in India still lack this essential resource. Our mission is to provide safe drinking water to every community. Through our water purification and distribution initiatives, we aim to prevent waterborne diseases and improve the overall health of those in need. Join us in ensuring that everyone has access to clean water and help us create a healthier future for all.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission4;
