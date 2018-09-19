import React, { Component } from 'react';
import './Landing.css';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';

class Landing extends Component {
    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default Landing;

