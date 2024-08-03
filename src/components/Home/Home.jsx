// src/components/HeroSection.jsx
import React from "react";
import "../Home/Home.css";
import heroImage from "../../assets/My-img.svg";
import vectorImage from "../../assets/bg-Vector.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <div className="vector">
            <img src={vectorImage} alt="hero" />
          </div>
          <div className="content">
            <h1>
              HEY, I'M
              <svg
                width="36"
                height="36"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="home__hand"
              ></svg>
              <br />
              <span>MOHAMMAD ALI.</span>
            </h1>
            <p>
              <span>Full Stack</span> Developer
            </p>
            <button className="contact-button" onClick={handleClick}>
              Let's talk with me
              <span role="img" aria-label="arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    fill="url(#paint0_linear_562_3246)"
                  />
                  <path
                    d="M8.99922 4.7998V6.7198H15.3256L4.19922 17.8462L5.55282 19.1998L16.6792 8.0734V14.3998H18.5992V4.7998H8.99922Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_562_3246"
                      x1="22.638"
                      y1="16.8886"
                      x2="1.86848"
                      y2="16.8323"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFB147" />
                      <stop offset="0.520264" stopColor="#FF6C63" />
                      <stop offset="1" stopColor="#B86ADF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Mohammad Ali" />
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Home;
