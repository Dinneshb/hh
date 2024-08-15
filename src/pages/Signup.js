import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for styling
import k1 from './images/su.jpeg'; // Import the background image

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:8080/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        if (response.ok) {
            // Handle authentication logic here if needed
            navigate('/');
        } else {
            alert('Signup failed');
        }
    };

    return (
        <div 
            className="signup-container"
            style={{ 
                backgroundImage: `url(${k1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="signup-overlay">
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSignUp}> {/* Changed to handleSignUp */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                name="confirm-password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <button type="submit" className="button signup-btn">Sign Up</button>
                    </form>
                    <div className="login-redirect">
                        <p>If you already have an account, <Link to="/login" className="login-link">Log in here</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
