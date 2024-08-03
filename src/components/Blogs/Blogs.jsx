import React from "react";
import "../Blogs/Blogs.css";
import blog1 from "../../assets/blog_1.jpg";
import blog2 from "../../assets/blog_2.jpg";
import blog3 from "../../assets/blog_3.jpg";

function Blogs() {
  return (
    <div className="Blogs">
      <div className="Blog-Title">
        <span>Blog</span>
        <h1>READ MY BLOGS</h1>
      </div>

      <div className="Blog-Container">
        <div className="blog-content">
          <img src={blog1} alt="" />
          <p>10 July, 2022</p>
          <h4>12 unique example of portfolio websites</h4>
          <div className="blog-hr-line"></div>
        </div>

        <div className="blog-content">
          <img src={blog2} alt="" />
          <p>10 July, 2022</p>
          <h4>12 unique example of portfolio websites</h4>
          <div className="blog-hr-line"></div>
        </div>

        <div className="blog-content">
          <img src={blog3} alt="" />
          <p>10 July, 2022</p>
          <h4>12 unique example of portfolio websites</h4>
          <div className="blog-hr-line"></div>
        </div>
      </div>

      <div className="blog-button">
        <button className="contact-button">
          Let's talk with me{" "}
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
                  <stop stop-color="#FFB147" />
                  <stop offset="0.520264" stop-color="#FF6C63" />
                  <stop offset="1" stop-color="#B86ADF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
