import React, { Component } from 'react';
import './Landing.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Landing extends Component {
    render() {
        return(
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Landing;

