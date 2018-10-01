import React, { Component } from 'react';
import './Landing.css';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';

class Landing extends Component {
    render() {
        return(
            <div>
               <div><Header /></div> 
               <div><h1>
                        Navigating School Choice in Delaware?
                   </h1>
                   <div className='icon-border'>
                   
                   </div>
                </div> 
               <div className='footer'><Footer /></div> 
            </div>
        );
    }
}

export default Landing;

