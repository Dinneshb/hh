import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import missionImage from './images/d7.png'; // Make sure to add the image in your images folder

const Mission5 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/payment');
    };

    return (
        <div className="mission-container">
            <h1 className="mission-p">Mission: All Girls in School</h1>
            <div className="mission-card">
                <img src={missionImage} alt="All Girls in School" className="mission-image" />
                <p>Education is a fundamental right, yet millions of girls in India are denied this opportunity due to poverty, cultural norms, and lack of resources. Our mission is to ensure that every girl has access to quality education. By providing scholarships, building schools, and advocating for gender equality in education, we aim to empower girls and create a brighter future. Join us in our mission to make education accessible for all girls, and help us break the cycle of poverty and inequality.</p>
                <button className="join-us-btn" onClick={handleJoinUsClick}>Join Us</button>
            </div>
        </div>
    );
}

export default Mission5;
