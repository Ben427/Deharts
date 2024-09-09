import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/deharts_logo_round.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{borderTop:"4px solid #9A3324"}}>
        <div className="content has-text-centered columns" style={{alignItems: "center"}}>
          
          <div className="column is-12 columns has-text-left footer-mods" style={{}}>
            <img
                src={logo}
                alt="De Hart's Auke Bay Store"
                style={{ maxWidth: "250px", height: "auto",backgroundColor:"#ffffff", margin: "0px 40px"  }}
              />
            <p className="footer-address" style={{}}><strong>Address</strong><br/><a href="https://www.google.com/maps/dir//De+Hart's+Auke+Bay+Store+11735+Glacier+Hwy+Juneau,+AK+99801/@58.3862172,-134.6448333,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x54011df160e66eb5:0x897de458f5971ab1">11735 Glacier Hwy, Juneau, AK 99801</a></p>
            <p className="footer-phone" style={{}}><strong>Phone</strong><br/> (907) 789-7342</p>
            <p className="footer-hours" style={{}}><strong>Hours</strong><br/> 
            Sunday-Saturday 6am-8pm<br/>
                          Liquor 8am-8pm<br/>
                          Deli 6am-730pm<br/>
            </p>
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
                {/*<a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>*/}
              </div>
            </div>
        <div className="content has-text-centered  has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              {/*<div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>*/}
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
