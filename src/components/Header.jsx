import React from 'react';
import logo from "../Assets/images/LOGO.png";
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="navbar">
          <div className="logonavbar">
          <img src={logo} alt="logo" />
          </div>
          <div className="nav">
          <Link className="accueil" to="/">Accueil</Link>
          <Link className="a-propos" to="/About">A propos</Link>
          </div>
                
        </div>
      );
    };

export default Header;