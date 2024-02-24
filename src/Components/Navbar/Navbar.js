import React, { Component } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logos/LOGO DR.PRO.jpg';




class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={Logo} alt="Dr.pro logo" />
        
      
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/Home">Home</Link>
          </li>

          <li>
            <Link to="/Service">Service</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Test">Testimonal</Link>
          </li>

          <div className="bbtn">
            <Link to="/btn">
              <button> Booking</button>
            </Link>
          </div>

          <div className="cbtn">
            <Link to="/cbtn">
              <button>Contact</button>
            </Link>
          </div>
        </ul>
      </nav>

    );
  }
}
export default Navbar;
