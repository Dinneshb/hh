import React, { useState } from 'react';
import { FaPaypal, FaCreditCard, FaGoogleWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import backgroundImage from './images/pp.jpg'; // Import the background image

const Payment = () => {
    const [donorName, setDonorName] = useState(''); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [ngo, setNgo] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const ngos = [
        'Agaram Foundation',
        'Brothers Foundation',
        'Maatram Foundation',
        'Feeding Coimbatore',
        'Animals Rescue'
    ];

    const handleAmountClick = (amount) => {
        setDonationAmount(amount);
    };

    const handlePaymentMethodClick = (method) => {
        setPaymentMethod(method);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/payments', { // Updated API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    donorName,
                    email,
                    phone,
                    donationAmount,
                    ngo,
                    paymentMethod
                }),
            });

            if (response.ok) {
                alert('Donation submitted successfully!');
                navigate('/'); // Navigate to success page on successful donation
            } else {
                const errorText = await response.text();
                alert(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Network error. Please try again later.');
        }
    };

    return (
        <div className="payment-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="payment-form-container">
                <form className="payment-form" onSubmit={handleSubmit}>
                    <h1>Donate Now</h1>
                    <p className="para">
                        Every donation, no matter how big or small, makes a significant difference to our cause. Thank you for doing your part to help.
                    </p>
                    <div className="form-group">
                        <label htmlFor="donorName">Name</label>
                        <input 
                            type="text" 
                            id="donorName" 
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ngo">Select NGO</label>
                        <select 
                            id="ngo" 
                            value={ngo}
                            onChange={(e) => setNgo(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select an NGO</option>
                            {ngos.map((ngo, index) => (
                                <option key={index} value={ngo}>{ngo}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group donation-amount">
                        <div className="amount-options">
                            <button type="button" className="amount-btn" onClick={() => handleAmountClick(200)}>200/mo</button>
                            <button type="button" className="amount-btn" onClick={() => handleAmountClick(300)}>300/mo</button>
                            <button type="button" className="amount-btn" onClick={() => handleAmountClick(500)}>500/mo</button>
                        </div>
                        <input 
                            type="number" 
                            placeholder="₹ Amount" 
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group payment-method">
                        <label>Payment Method</label>
                        <div className="payment-options">
                            <button 
                                type="button" 
                                className={`payment-btn ${paymentMethod === 'paypal' ? 'selected' : ''}`} 
                                onClick={() => handlePaymentMethodClick('paypal')}
                            >
                                <FaPaypal /> Net banking
                            </button>
                            <button 
                                type="button" 
                                className={`payment-btn ${paymentMethod === 'creditCard' ? 'selected' : ''}`} 
                                onClick={() => handlePaymentMethodClick('creditCard')}
                            >
                                <FaCreditCard /> Credit card
                            </button>
                            <button 
                                type="button" 
                                className={`payment-btn ${paymentMethod === 'googleWallet' ? 'selected' : ''}`} 
                                onClick={() => handlePaymentMethodClick('googleWallet')}
                            >
                                <FaGoogleWallet /> UPI
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">Donate</button>
                </form>
            </div>
        </div>
    );
}

export default Payment;
