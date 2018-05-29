import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/People">Home</Link>
            </nav>
        );
    }
}

export default NavBar;