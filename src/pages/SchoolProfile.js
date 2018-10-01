import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class SchoolProfile extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="footer"><Footer /></div>
            </div>
        );
    }
}

export default SchoolProfile;