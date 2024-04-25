import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-conatainer">
            <p className="logo">LOGO</p>

            <ul className="navbar-ul">
                <li>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/students" className="link">
                        Students
                    </Link>
                </li>

                <li>
                    <Link to="/playground" className="link">
                        Playground
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard" className="link">
                        DashBoard
                    </Link>
                </li>

                <li>
                    <Link to="/login" className="link">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
