import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logo from "../img/deharts_logo_round.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="De Hart's Auke Bay Store" style={{ width: "256px", height: "100px", maxHeight: "500px"}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-container">
              <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="#visit">
                Visit
              </Link>
              <Link className="navbar-item" to="#pizza">
                Pizza
              </Link>
              <Link className="navbar-item" to="#hot-bar">
                Hot Bar
              </Link>
              </div>
              <p className="navbar-item">
                <p className="footer-social"><a title="facebook" href="https://www.facebook.com/deharts.store" target="_blank">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "2em", height: "2em" }}
                      className="social-facebook"
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/dehartsaukebaystore/" target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "2em", height: "2em" }}
                    />
                  </a>
                  </p>
                  </p>
              {/*<Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
              {/*
              <p className="navbar-item">
                Gas Price: $3.99 - last updated September 16, 2022
              </p>*/}
            </div>
            {/*<div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>*/}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
