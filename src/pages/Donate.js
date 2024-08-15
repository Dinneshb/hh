import React from 'react';
import { Link } from 'react-router-dom';
import './Donate.css'; // Import the CSS file for styling
import i1 from './images/child (1).jpg';
import i2 from './images/old.jpeg';
import i3 from './images/orphane.jpeg';
import i4 from './images/savewater.jpg';
import i5 from './images/period.jpg';
import i6 from './images/education.jpg';

const Donate = () => {
    return (
        <div className="donate-container">
            <h1 className="h1"> Kindness is a light that warms every heart</h1>
            <p>Together, we rise</p>
            
            <div className="card-container">
                <div className="card">
                    <img src={i1} alt="Mission 1" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">Feed the hunger</p>
                    <Link to="/mission1" className="card-btn">Pledge Monthly</Link>
                </div>
                <div className="card">
                    <img src={i2} alt="Mission 2" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">Protect Abandoned Elders</p>
                    <Link to="/mission2" className="card-btn">Pledge Monthly</Link>
                </div>
                <div className="card">
                    <img src={i3} alt="Mission 3" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">No Child Orphaned</p>
                    <Link to="/mission3" className="card-btn">Pledge Monthly</Link>
                </div>
                <div className="card">
                    <img src={i4} alt="Mission 4" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">Safe Water for All</p>
                    <Link to="/mission4" className="card-btn">Pledge Monthly</Link>
                </div>
                <div className="card">
                    <img src={i5} alt="Mission 5" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">Stop Period Poverty</p>
                    <Link to="/mission5" className="card-btn">Pledge Monthly</Link>
                </div>
                <div className="card">
                    <img src={i6} alt="Mission 6" className="card-image" />
                    <h2>Mission</h2>
                    <p className="mission-statement">Every girl in school</p>
                    <Link to="/mission6" className="card-btn">Pledge Monthly</Link>
                </div>
            </div>
        </div>
    );
}

export default Donate;
