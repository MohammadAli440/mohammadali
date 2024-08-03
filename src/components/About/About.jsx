import React from "react";
import "../About/About.css";
import profilePic from "../../assets/about-img.svg";
import htmlImg from "../../../public/html.png";
import cssImg from "../../../public/css.png";
import javascriptImg from "../../../public/javascript.png";
import tailwindImg from "../../../public/tailwind.png";
import reactImg from "../../../public/react.png";
import vscodImg from "../../../public/vscode.png";
import figmaImg from "../../../public/figma.png";
import gitImg from "../../../public/git.png";
import wordpressImg from "../../../public/wordpress.png";
import photoshopImg from "../../../public/photoshop.png";
import illustatorImg from "../../../public/illustator.png";

function About() {
  return (
    <>
      <div className="About-container">
        <div className="top-content">
          <span>Nice to meet you!</span>
          <h1>Welcome to...</h1>
        </div>

        <div className="About-content">
          <div className="About-right">
            <img src={profilePic} alt="Fawzi Sayed" className="profile-pic" />
            <h2>
              MOHAMMAD
              <br /> ALI
            </h2>
            <p>
              <span>Full-Stack </span> Developer
            </p>
            <button className="contact-button">
              Download CV{" "}
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

          <div className="About-left">
            <div className="top-icon">
              <div className="top-icon-content">
                <div className="about-icon">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.10812 3.69071C5.57258 2.22625 7.94695 2.22625 9.41142 3.69071C10.8759 5.15518 10.8759 7.52955 9.41142 8.99401C8.86631 9.53912 8.19514 9.88132 7.49175 10.0206L9.56331 12.0922C9.70262 11.3888 10.0448 10.7176 10.5899 10.1725C12.0544 8.70806 14.4288 8.70806 15.8932 10.1725C17.3577 11.637 17.3577 14.0114 15.8932 15.4758C14.5283 16.8407 12.3731 16.9335 10.9007 15.7543L10.8846 15.7705L10.5899 15.4758L4.10812 8.99401L3.81349 8.69939L3.82967 8.6832C2.65042 7.21083 2.74324 5.05559 4.10812 3.69071ZM11.7684 14.2973C12.582 15.1109 13.9011 15.1109 14.7147 14.2973C15.5283 13.4837 15.5283 12.1646 14.7147 11.351C13.9011 10.5374 12.582 10.5374 11.7684 11.351C10.9548 12.1646 10.9548 13.4837 11.7684 14.2973ZM8.2329 7.8155C7.41931 8.62909 6.10022 8.62909 5.28663 7.8155C4.47303 7.00191 4.47303 5.68282 5.28663 4.86922C6.10022 4.05563 7.41931 4.05563 8.2329 4.86922C9.0465 5.68282 9.0465 7.00191 8.2329 7.8155Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>+91 90169 99984</p>
                </div>
                <div className="about-icon">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.33268 4.16699C3.33268 3.70675 3.70578 3.33366 4.16602 3.33366H15.8327C16.2929 3.33366 16.666 3.70675 16.666 4.16699V15.8337C16.666 16.2939 16.2929 16.667 15.8327 16.667L14.9993 16.667C14.9993 14.3658 13.1339 12.5003 10.8327 12.5003H9.16602C6.86483 12.5003 4.99935 14.3658 4.99935 16.667L4.16602 16.667C3.70578 16.667 3.33268 16.2939 3.33268 15.8337V4.16699ZM6.66602 16.667H13.3327C13.3327 15.2863 12.2134 14.167 10.8327 14.167H9.16602C7.7853 14.167 6.66602 15.2863 6.66602 16.667ZM4.16602 1.66699C2.7853 1.66699 1.66602 2.78628 1.66602 4.16699V15.8337C1.66602 17.2144 2.7853 18.3337 4.16602 18.3337H15.8327C17.2134 18.3337 18.3327 17.2144 18.3327 15.8337V4.16699C18.3327 2.78628 17.2134 1.66699 15.8327 1.66699H4.16602ZM8.33268 8.33366C8.33268 9.25413 9.07887 10.0003 9.99935 10.0003C10.9198 10.0003 11.666 9.25413 11.666 8.33366C11.666 7.41318 10.9198 6.66699 9.99935 6.66699C9.07887 6.66699 8.33268 7.41318 8.33268 8.33366ZM9.99935 5.00033C8.1584 5.00033 6.66602 6.49271 6.66602 8.33366C6.66602 10.1746 8.1584 11.667 9.99935 11.667C11.8403 11.667 13.3327 10.1746 13.3327 8.33366C13.3327 6.49271 11.8403 5.00033 9.99935 5.00033Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>21 yrs</p>
                </div>
              </div>
              <div className="bottom-icon-content">
                <div className="about-icon">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.16602 3.33301C2.7853 3.33301 1.66602 4.4523 1.66602 5.83301V14.1663C1.66602 15.5471 2.7853 16.6663 4.16602 16.6663H15.8327C17.2134 16.6663 18.3327 15.5471 18.3327 14.1663V5.83301C18.3327 4.4523 17.2134 3.33301 15.8327 3.33301H4.16602ZM3.40878 5.48462C3.54069 5.19837 3.83015 4.99967 4.16602 4.99967H15.8327C16.1685 4.99967 16.458 5.19837 16.5899 5.48462L10.511 10.2127C10.21 10.4468 9.78866 10.4468 9.48773 10.2127L3.40878 5.48462ZM3.33268 7.53687V12.3871L6.34319 9.87838L3.33268 7.53687ZM3.40176 14.4991C3.53022 14.7937 3.82407 14.9997 4.16602 14.9997H15.8327C16.1746 14.9997 16.4685 14.7937 16.5969 14.4991L12.3089 10.9257L11.5342 11.5283C10.6314 12.2304 9.36727 12.2304 8.4645 11.5283L7.68979 10.9257L3.40176 14.4991ZM16.666 12.3871V7.53687L13.6555 9.87838L16.666 12.3871Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>malidhanga@gmail.com</p>
                </div>
                <div className="about-icon">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.4177 10.2127L9.83333 16.1251L6.24894 10.2127C4.51041 7.34506 6.53036 3.64242 9.83333 3.64242C13.1363 3.64242 15.1563 7.34506 13.4177 10.2127ZM4.88131 11.0772C2.47943 7.11538 5.2701 2 9.83333 2C14.3966 2 17.1872 7.11538 14.7854 11.0772L10.3689 18.362C10.1227 18.7682 9.54401 18.7682 9.29776 18.362L4.88131 11.0772ZM9.83349 6.10606C8.94516 6.10606 8.22501 6.84139 8.22501 7.74848C8.22501 8.65556 8.94516 9.3909 9.83349 9.3909C10.7218 9.3909 11.442 8.65556 11.442 7.74848C11.442 6.84139 10.7218 6.10606 9.83349 6.10606Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>Gujarata, India -383220</p>
                </div>
              </div>
            </div>
            <div className="hr-line"></div>

            <div className="experience">
              <div className="left-ex">
                <strong>1+</strong>
                <p>Years experience...</p>
              </div>
              <div className="right-ex">
                <strong>4</strong>
                <p>Clients Worldwide...</p>
              </div>
            </div>
            <div className="details">
              <div className="left-content">
                <p>
                  Hello there! My name is Mohammad Ali. I am a web designer &
                  developer, and I'm very passionate and dedicated to my work.
                </p>
              </div>
              <div className="right-content">
                <p>
                  With 1+ years experience as a professional a UI/UX Designing,
                  I have acquired the skills and knowledge necessary to make
                  your project a success.
                </p>
              </div>
            </div>

            <div className="bottom-content">
              <div className="side-icon">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M12.2215 46.189C9.47487 43.2717 8.00021 39.9997 8.00021 34.6957C8.00021 25.3623 14.5522 16.997 24.0802 12.861L26.4615 16.5357C17.5682 21.3463 15.8295 27.589 15.1362 31.525C16.5682 30.7837 18.4429 30.525 20.2802 30.6957C25.0909 31.141 28.8829 35.0903 28.8829 39.9997C28.8829 42.475 27.8995 44.849 26.1492 46.5993C24.3989 48.3497 22.0249 49.333 19.5495 49.333C16.6882 49.333 13.9522 48.0263 12.2215 46.189ZM38.8882 46.189C36.1415 43.2717 34.6669 39.9997 34.6669 34.6957C34.6669 25.3623 41.2189 16.997 50.7469 12.861L53.1282 16.5357C44.2349 21.3463 42.4962 27.589 41.8029 31.525C43.2349 30.7837 45.1095 30.525 46.9469 30.6957C51.7575 31.141 55.5469 35.0903 55.5469 39.9997C55.5469 42.475 54.5635 44.849 52.8132 46.5993C51.0629 48.3497 48.6889 49.333 46.2135 49.333C43.3522 49.333 40.6162 48.0263 38.8855 46.189L38.8882 46.189Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <p>
                “A full-stack developer is a bit like a Swiss Army knife in the
                world of software development. They are skilled professionals
                who can handle both front-end and back-end tasks.”
              </p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="skills-icons">
            <div className="skill-img">
              <img src={htmlImg} alt="HTML" />
              <p>HTML5</p>
            </div>
            <div className="skill-img">
              <img src={cssImg} alt="HTML" />
              <p>CSS3</p>
            </div>
            <div className="skill-img">
              <img src={javascriptImg} alt="HTML" />
              <p>JAVA SCRIPT</p>
            </div>
            <div className="skill-img">
              <img src={tailwindImg} alt="HTML" />
              <p>TAILWIND</p>
            </div>
            <div className="skill-img">
              <img src={reactImg} alt="HTML" />
              <p>REACT</p>
            </div>
            <div className="skill-img">
              <img src={vscodImg} alt="HTML" />
              <p>VS CODE</p>
            </div>
          </div>
          <div className="skills-icons">
            <div className="skill-img">
              <img src={wordpressImg} alt="HTML" />
              <p>WORDPRESS</p>
            </div>
            <div className="skill-img">
              <img src={gitImg} alt="HTML" />
              <p>GIT</p>
            </div>
            <div className="skill-img">
              <img src={figmaImg} alt="HTML" />
              <p>FIGMA</p>
            </div>
            <div className="skill-img">
              <img src={photoshopImg} alt="HTML" />
              <p>PHOTOSHOP</p>
            </div>
            <div className="skill-img">
              <img src={illustatorImg} alt="HTML" />
              <p>ILLUSTRATOR</p>
            </div>
          </div>
        </div>

        <div className="hr-line"></div>

        <div className="about-bottom-section">
          <div className="left-experience-list">
            <span>Experience</span>
            <h2>MY EXPERIENCE</h2>
            <p>
              Hello there! My name is Mohammad Ali. I am a web designer &
              developer, and I'm very passionate and dedicated to my work.
            </p>
            <button className="experience-button">
              Download CV
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
          <div className="right-works-list">
            <div className="experience-item">
              <div className="top-itme">
                <p>-2022 - Present</p>
                <p>-Up Work</p>
              </div>
              <h3>Lead UI/UX Designer</h3>
            </div>
            <div className="hr-line"></div>
            <div className="experience-item">
              <div className="top-itme">
                <p>-2022 - Present</p>
                <p>-Matiyas Solution</p>
              </div>
              <h3> Full-Satck Developer </h3>
            </div>
            <div className="hr-line"></div>
            <div className="experience-item">
              <div className="top-itme">
                <p>-2022 - Present</p>
                <p>-Fivver</p>
              </div>
              <h3>Graphics Designer</h3>
            </div>
            <div className="hr-line"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
