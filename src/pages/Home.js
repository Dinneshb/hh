import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Marquee from 'react-fast-marquee';
import './Home.css'; // Import your custom CSS for additional styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import educationImage from './images/h1.jpg';
import oldImage from './images/h2.jpg';
import periodImage from './images/h3.jpg';
import povImage from './images/h4.jpg';
import saveWaterImage from './images/h5.jpg';


const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
    </div>
);

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const slides = [
        {
            image: educationImage,
            link: '/payment'
        },
        {
            image: oldImage,
            link: '/payment'
        },
        {
            image: periodImage,
            link: '/payment'
        },
        {
            image: povImage,
            link: '/payment'
        },
        {
            image: saveWaterImage,
            link: '/payment'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        "What does hopeful hands do?",
        "How can I donate online?",
        "Is there a minimum donation amount?",
        "How do I claim tax exemption against my donation?",
        "What are the causes I can support through hopeful hands?",
        "How do I know if my donation has reached the beneficiary?"
    ];

    const answers = [
        "Hopeful Hands is dedicated to empowering marginalized communities through education, healthcare, and livelihood support. We implement programs designed to create sustainable change and improve the quality of life for those in need. Our initiatives focus on providing access to essential resources and opportunities. By addressing fundamental issues, we aim to uplift individuals and communities. Join us in our mission to bring hope and support to those who need it most.",
        "You can easily donate online through our secure payment gateway. Visit the donation page on our website, select the cause you wish to support, and enter your details. The process is straightforward and takes only a few minutes to complete. You will receive an instant confirmation and receipt via email. Your contribution, no matter the size, makes a significant impact.",
        "No, there is no minimum donation amount required to contribute to Hopeful Hands. Every donation, regardless of size, helps us support those in need and drive our mission forward. We appreciate any amount you can give, as it collectively makes a big difference. Your generosity fuels our programs and initiatives. Thank you for helping us make a positive change.",
        "After making your donation, you will receive a receipt via email which can be used to claim tax exemption. Donations to Hopeful Hands are eligible for tax benefits under Section 80G of the Income Tax Act. Simply submit the receipt when filing your tax returns to avail the exemption. Our team is available to assist with any queries regarding the process. Ensuring you benefit from your generosity is important to us.",
        "Through Hopeful Hands, you can support a variety of causes including education for underprivileged children, healthcare for those in need, women's empowerment, and disaster relief. We also focus on providing safe water, ending period poverty, and protecting abandoned elders. Each cause addresses critical needs within our communities. Your support enables us to implement impactful programs and initiatives.",
        "You will receive regular updates on the impact of your donation through our newsletters and reports. Additionally, we provide detailed stories and testimonials from beneficiaries to show how your contribution is making a difference. You can also contact us for specific details about your donation. Transparency is important to us, and we strive to keep you informed. Your support is creating real, positive change in the lives of many."
    ];

    const donors = [
        "|| Gowtham just donated ₹5000 ||",
        "|| Rohith just donated ₹3500 ||",
        "|| Roshan just donated ₹4000 ||",
        "|| Harish just donated ₹8000 ||",
        "|| Dinesh just donated ₹3500 ||",
        "|| Hazel just donated ₹10000 ||",
        "|| Dylan just donated ₹12000 ||",
        "|| Grace just donated ₹11000 ||",
        "|| Johan just donated ₹10500 ||",
        "|| Ahmed just donated ₹9000 ||"
    ];

    

    return (
        <div className="body">
            <div className="home-container">
                <h1>Be the Change: Support Our Mission</h1>
                <p>Your generosity transforms lives and brings hope to those in need.</p>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <Link key={index} to={slide.link} className="slide">
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
                        </Link>
                    ))}
                </Slider>
                <div className="marquee-container">
                    <Marquee gradient={false} speed={50}>
                        {donors.map((donor, index) => (
                            <span key={index} className="donor-name">{donor}</span>
                        ))}
                    </Marquee>
                </div>
                <div className="accordion-container">
                    {questions.map((question, index) => (
                        <div key={index}>
                            <div 
                                className={`accordion ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {question}
                            </div>
                            <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                {answers[index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
