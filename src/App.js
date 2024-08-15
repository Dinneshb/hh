import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Donate from './pages/Donate';
import Payment from './pages/Payment';
import Mission1 from './donate.pages/Mission1';
import Mission2 from './donate.pages/Mission2';
import Mission3 from './donate.pages/Mission3';
import Mission4 from './donate.pages/Mission4';
import Mission5 from './donate.pages/Mission5';
import Mission6 from './donate.pages/Mission6';
import Signup from './pages/Signup';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/mission1" element={<Mission1 />} />
                    <Route path="/mission2" element={<Mission2 />} />
                    <Route path="/mission3" element={<Mission3 />} />
                    <Route path="/mission4" element={<Mission4 />} />
                    <Route path="/mission5" element={<Mission5 />} />
                    <Route path="/mission6" element={<Mission6 />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
