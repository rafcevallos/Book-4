import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/People">Home</Link>
                <Link to="/ProjectList">Projects</Link>
                <Link to="/AboutMe">About Me</Link>
            </nav>
        );
    }
}

export default NavBar;