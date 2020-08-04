import React from 'react';
import "./Top-nav.css"

const TopNav = () => {
    return ( 
        <div className="top-nav nav-sticky">
            <a className="logo" href="#">REACT</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
     );
}
 
export default TopNav;