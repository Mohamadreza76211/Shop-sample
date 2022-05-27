import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../utility/images/Digikala.png';

const Gif = () => {
  return (
    <div>
        <div className="gif">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1a7a3e12f2b7466a865770af7d97204886ac3c0a_1646816761.jpg?x-oss-process=image/quality,q_95"
          alt=""
          style={{
            height: "60",
            objectFit: "cover",
            dataSrc: "false",
            width: "100%",
            overFlow: "hidden",
            position: "relative",
          }}
        />
      </div>
      <nav className="navbar navbar-style navbar-expand-lg navbar-light bg-light">
     
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: "150px", float: "right" }} />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/dashboard"
                activeClassName="active"
              >
                <i className="fa fa-dashboard"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
                exact={true}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact={true}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div style={{ marginRight: 100 }}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user circle" />
                  کاربر
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Gif