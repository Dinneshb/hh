import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import k1 from './images/pov.jpg'; // Import the background image

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:8080/api/login/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Handle successful authentication
                const message = await response.text();
                console.log(message); // Optionally log the success message
                navigate('/'); // Navigate to the home page
            } else {
                const errorText = await response.text();
                setError(`Login failed: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Network error. Please try again later.');
        }
    };

    return (
        <div 
            className="login-container"
            style={{ 
                backgroundImage: `url(${k1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="login-overlay">
                <div className="login-form">
                    <h1>Login</h1>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="button login-btn">Login</button>
                    </form>
                    <div className="signup-redirect">
                        <p>If you don't have an account, <Link to="/signup" className="signup-link">Sign up here</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
