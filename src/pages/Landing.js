import React, { Component } from 'react';
import './Landing.css';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';

class Landing extends Component {
    
    render() {
        return(
            <div>
               <div><Header /></div> 
               <div>
                   <div className="title">
                        <h1>
                            Navigating School Choice in Delaware?
                        </h1>
                    </div>
                   <div className="icon-border">
                        <Link to="/learn"><div className="thought-bubble landing-icon">Learn about school Choice</div></Link> <Link to="/search"><div className="magnify-glass landing-icon">Search your Schools</div></Link> <Link to="/schoolprofile"><div classname="apple landing-icon">Apply to a School</div></Link>
                   </div>
                </div> 
               <div className='footer'><Footer /></div> 
            </div>
        );
    }
}

export default Landing;

