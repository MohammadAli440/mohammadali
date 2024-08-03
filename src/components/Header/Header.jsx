import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import menuBar from "../../assets/ham-burgur.png";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <>
      <header className="Sidebar">
        <div className="menubarHeader">
          <div
            onClick={toggleVisibility}
            style={{ cursor: "pointer" }}
            className="menu"
          >
            {isVisible ? (
              <IoMdClose size={40} className="cross" />
            ) : (
              <img src={menuBar} alt="menu bar" />
            )}
          </div>

          {isVisible && (
            <div className="Sidebar-Content">
              <div className="logo ">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="100px"
                  viewBox="0 0 4000.000000 4000.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,4000.000000) scale(0.100000,-0.100000)"
                    fill="#ffffff"
                    stroke="none"
                  >
                    <path
                      d="M10150 20000 l0 -7720 1295 0 1295 0 0 5582 0 5583 2070 -2070 2070
                  -2070 2904 2904 2904 2904 158 -22 c862 -119 1656 -442 2349 -956 499 -370
                  962 -870 1291 -1395 1054 -1686 1030 -3815 -63 -5477 -191 -291 -380 -520
                  -658 -799 -417 -419 -822 -713 -1335 -968 -629 -313 -1271 -483 -1985 -526
                  -232 -14 -4625 -14 -4625 0 0 6 1008 1705 2241 3776 1232 2071 2239 3767 2237
                  3769 -1 2 -1809 -1696 -4015 -3773 l-4013 -3775 0 -1294 0 -1293 4213 3 c4567
                  3 4234 -1 4657 53 2550 323 4773 1908 5915 4219 717 1449 955 3082 684 4682
                  -314 1858 -1299 3525 -2783 4713 -1053 843 -2346 1404 -3676 1594 -416 60
                  -678 76 -1225 76 l-430 0 -2372 -2372 -2373 -2373 -2373 2373 -2372 2372 -993
                  0 -992 0 0 -7720z"
                    />
                  </g>
                </svg>
              </div>
              <nav>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  to="/services"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  SERVICES
                </NavLink>
                <NavLink
                  to="/works"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  WORKS
                </NavLink>
                <NavLink
                  to="/blogs"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  BLOGS
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  CONTACT
                </NavLink>
              </nav>
              <div className="social-media">
                <div className="social-icon">
                  <div className="icon">
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <FaGithubSquare />
                    </a>
                  </div>
                </div>
              </div>
              <div className="copyright">
                Copyright ©2024 Mohammad Ali. All rights reserved.
              </div>
            </div>
          )}
        </div>
      </header>

      <header className="sidebar">
        <div className="fixed">
          <div className="logo">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="100px"
              viewBox="0 0 4000.000000 4000.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,4000.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M10150 20000 l0 -7720 1295 0 1295 0 0 5582 0 5583 2070 -2070 2070
-2070 2904 2904 2904 2904 158 -22 c862 -119 1656 -442 2349 -956 499 -370
962 -870 1291 -1395 1054 -1686 1030 -3815 -63 -5477 -191 -291 -380 -520
-658 -799 -417 -419 -822 -713 -1335 -968 -629 -313 -1271 -483 -1985 -526
-232 -14 -4625 -14 -4625 0 0 6 1008 1705 2241 3776 1232 2071 2239 3767 2237
3769 -1 2 -1809 -1696 -4015 -3773 l-4013 -3775 0 -1294 0 -1293 4213 3 c4567
3 4234 -1 4657 53 2550 323 4773 1908 5915 4219 717 1449 955 3082 684 4682
-314 1858 -1299 3525 -2783 4713 -1053 843 -2346 1404 -3676 1594 -416 60
-678 76 -1225 76 l-430 0 -2372 -2372 -2373 -2373 -2373 2373 -2372 2372 -993
0 -992 0 0 -7720z"
                />
              </g>
            </svg>
          </div>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
            <NavLink to="/services" activeClassName="active">
              SERVICES
            </NavLink>
            <NavLink to="/works" activeClassName="active">
              WORKS
            </NavLink>
            <NavLink to="/blogs" activeClassName="active">
              BLOGS
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </nav>
          <div className="social-media">
            <div className="social-icon">
              <div className="icon">
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>

              <div className="icon">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>

              <div className="icon">
                <a href="#">
                  <FaTwitterSquare />
                </a>
              </div>

              <div className="icon">
                <a href="#">
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            Copyright ©2024 Mohammad Ali. All rights reserved.
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
