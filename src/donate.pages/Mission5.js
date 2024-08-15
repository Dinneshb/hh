import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionImage from './images/d6.jpg'; // Make sure to add the image in your images folder

const Mission5 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <h1 className="mission-p">Mission: Stop Period Poverty</h1>
            <div className="mission-card">
                <img src={missionImage} alt="Stop Period Poverty" className="mission-image" />
                <p>Period poverty is a widespread issue affecting millions of women and girls in India. Lack of access to sanitary products, education, and facilities leads to significant health and social consequences. Our mission is to eradicate period poverty by providing sanitary products, educating communities, and advocating for better menstrual hygiene management. Join us in our efforts to ensure that no girl or woman has to suffer due to lack of menstrual resources.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission5;
