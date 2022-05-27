import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../utility/images/Digikala.png";
import logo2 from "../../utility/images/search.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="under-top">
            <p className="p-text">جایی برای بهترین ها</p>
          </div>
        </div>
        <div>
          <div className="headerBox">
            <img className="logo" src={logo} />

            <div className="title">
              <div className="collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      خانه
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      دسته بندی کالا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      درباره ما
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div id="myDropdown" class="dropdown-content">
            {/* <img className="logo2" src={logo2} /> */}
              <form>
                <input
                  name="search"
                  className="search"
                  type="text"
                  placeholder=" .....جستجو در دیجی کالا"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="topBorder"></div>
      </div>
    );
  }
}

export default Header;
