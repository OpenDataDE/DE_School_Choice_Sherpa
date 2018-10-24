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
                        <Link to="/learn"><button>Learn about school Choice</button></Link> <Link to="/search"><button>Search your Schools</button></Link> <Link to="/schoolprofile"><button>Apply to a School</button></Link>
                   </div>
                </div> 
               <div className='footer'><Footer /></div> 
            </div>
        );
    }
}

export default Landing;

