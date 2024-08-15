import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling
import logo from './images/hope.jpeg'; // Import the logo image

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Hopeful Hands Logo" className="navbar-logo" /> {/* Logo image */}
                    Hopeful Hands
                </Link>
                <nav className="navbar-nav">
                    <Link to="/payment" className="nav-item">Payment</Link>
                    <div className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Link to="/about" className="nav-item">About</Link>

                    </div>
                    <Link to="/donate" className="nav-item">Donate</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
