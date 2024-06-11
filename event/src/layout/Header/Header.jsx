import React from "react";
import "./Header.css";


const Header = () => {
    return (
        <>
           {/* */}
           <div className= "navbarMain">
                <a href="#" className="navbar-brand">
                    Easy
                    </a>
                <div>
                    <h6>Give us a Chance</h6>
                </div>
            </div>

            <nav className="navbar navbar-expand">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link"> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"> Upcoming Events
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#" className="nav-link"> Events
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="#" className="nav-link"> Speakers
                            </a>
                            </li>
                    </ul>
                </div>
            </nav>
            {/* */}
        </>

    );
};

export default Header;