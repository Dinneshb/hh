import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1 className="h">About Us</h1>
            <p className="p">We are committed to making the world a better place by addressing critical issues related to poverty and supporting those in need through our innovative donation platform.</p>
            
            <section id="our-story" className="about-section">
                <h2>Our Story</h2>
                <p>Our journey began with a simple idea: to connect those who want to help with those who need it the most. Over the years, we have grown into a platform that supports numerous causes and makes a tangible difference in people's lives.</p>
            </section>

            <section id="blog" className="about-section">
                <h2>Blog</h2>
                <p>Stay updated with our latest news, stories, and insights from the field. Our blog provides valuable information on our projects and the impact they have on communities around the world.</p>
            </section>

            <section id="start-fundraiser" className="about-section">
                <h2>Start a Fundraiser</h2>
                <p>Empower yourself to make a change by starting your own fundraiser. Our platform provides all the tools and support you need to create a successful campaign and reach your goals.</p>
            </section>

            <section id="join-us" className="about-section">
                <h2>Join Us</h2>
                <p>Become a part of our mission by joining our community of volunteers, donors, and advocates. Together, we can achieve more and make a lasting impact.</p>
            </section>

            <section id="contact-us" className="about-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, suggestions, or would like to learn more about our work, please don't hesitate to get in touch with us. We are here to help and collaborate.</p>
            </section>

            <section className="about-section">
                <h2>The Problem of Poverty</h2>
                <p>Poverty is a global issue affecting millions of people worldwide. It manifests in various forms, including lack of access to basic necessities like food, clean water, and healthcare. The effects of poverty are severe and multifaceted, leading to a cycle of hardship that is challenging to break without external support.</p>

            </section>

            <section className="about-section">
                <h2>How Donations Make a Difference</h2>
                <p>Donations play a crucial role in combating poverty by providing essential resources and support to those in need. Every contribution, no matter the size, helps fund programs that provide food, education, healthcare, and economic opportunities to vulnerable populations.</p>
                <p>Charitable organizations use donations to implement projects such as building schools, distributing food and clean water, and providing medical care. These efforts directly improve the quality of life for those in need and contribute to long-term development goals.</p>
            </section>

            <section className="about-section">
                <h2>Our App</h2>
                <p>Our app is designed to streamline the donation process and make it easier for individuals and organizations to contribute to causes they care about. Here’s how our app helps:</p>
                <ul>
                    <li><strong>Easy Access:</strong> Users can browse various causes and projects that need support, all from the comfort of their homes.</li>
                    <li><strong>Transparency:</strong> Our app provides detailed information about each project, including how funds are used and the impact achieved.</li>
                    <li><strong>Recurring Donations:</strong> Users can set up recurring donations to ensure continuous support for their chosen causes.</li>
                    <li><strong>Community Impact:</strong> By connecting donors with impactful projects, we facilitate meaningful contributions that drive real change.</li>
                </ul>
                <p>Join us in our mission to create a better world. Your support can help lift individuals out of poverty and contribute to a more equitable and sustainable future.</p>
            </section>
        </div>
    );
}

export default About;
