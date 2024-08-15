import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionVideo from './videos/d1.mp4'; // Make sure to add the video in your videos folder

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <div className="mission-video-container">
                <video width="100%" controls className="mission-video">
                    <source src={missionVideo} type="video/mp4" />
                </video>
                <div className="video-overlay">
                    <h1>Mission</h1>
                    <p>Feed the hungry with a million meals</p>
                    <p>Fill the plates of young & old to prevent malnourishment</p>
                </div>
            </div>
            <h1 className="mission-p">Mission: Feed the Hunger</h1>
            <div className="mission-card">
                <p>In India, millions of people struggle with hunger every day. Our mission is to ensure that no one goes to bed hungry. Through our food distribution programs, we provide nutritious meals to underprivileged communities, street children, and the homeless. Join us in our fight against hunger and help us make a difference, one meal at a time.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission1;
