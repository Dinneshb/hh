import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionImage from './images/d5.jpg'; // Make sure to add the image in your images folder

const Mission3 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <h1 className="mission-p">Mission: No Child Orphaned</h1>
            <div className="mission-card">
                <img src={missionImage} alt="No Child Abandoned" className="mission-image" />
                <p>In India, countless children are abandoned and left without care or support. Our mission is to ensure that no child is left behind. Through our rescue and rehabilitation programs, we provide shelter, education, and emotional support to abandoned children. Join us in our efforts to give these children a chance at a better future, filled with hope and opportunities.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission3;
