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
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/login" className="link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="link">
                        Sign Up
                    </Link>
                </li>
            </ul>
            <img src="vite.svg" alt="logo" height={40} className="vite" />
        </div>
    );
};

export default Navbar;
