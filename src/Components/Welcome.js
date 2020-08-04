import React from 'react';
import "./Welcome.css";

const Welcome = () => {
    return ( 
        <section className="welcome">
            <nav>
                <ul>
                    <li><a href="#">F</a></li>
                    <li><a href="#">I</a></li>
                    <li><a href="#">T</a></li>
                </ul>
            </nav>
            <h1>Welcome to REACT!</h1>
            <a className="btn" href="#">Learn more</a>
    </section>
     );
}
 
export default Welcome;