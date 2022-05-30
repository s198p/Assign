import React from 'react';
import '../navbar.css';


const Navbar = () => {
    return (
        <div className="flexdiv">
        <div>
            <h2>LOGOBAKERY</h2>
        </div>
        <div className="flexsubdiv">
            <p>Services</p>
            <p>Projects</p>
            <p>About</p>
        </div>
        <div>
            <button className="btn">Contact</button>
        </div>
    </div>
    )

};

export default Navbar;