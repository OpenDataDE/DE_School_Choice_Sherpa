import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LearnAbout.css'

class LearnAbout extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="footer"><Footer /></div>
            </div>
        );
    }
}

export default LearnAbout;