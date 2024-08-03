import "../Contact/Contact.css";
import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-content">
          <span>Contact</span>
          <h1>REACH OUT ME</h1>
          <p>
            Himatnagar, Gujarat, India, 383220
          </p>
          <h2>+91 90169 99984</h2>
          <h2>malidhanga@gmail.com</h2>
          <div className="social-text">
            <ul>
              <li>
                <a href="">FACEBOOK</a>
              </li>
              <li>
                <a href="">TWITTER</a>
              </li>
              <li>
                <a href="">INSTAGRAM</a>
              </li>
              <li>
                <a href="">LINKEDIN</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-right-content">
          <div className="form-heading">
            <h1>ANY PROJECT?</h1>
          </div>
          <form
            method="POST"
            id="contactForm"
            name="contactForm"
            className="contactForm"
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-12 flex-group">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <button className="experience-button" type="submit">
                    Send message
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

                  <div className="file">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.52724 10.8772C8.86891 11.2022 8.86891 11.7356 8.52724 12.0606C8.20224 12.3856 7.66891 12.3856 7.34391 12.0606C6.56339 11.2789 6.125 10.2194 6.125 9.11474C6.125 8.01009 6.56339 6.9506 7.34391 6.16891L10.2939 3.21891C11.0756 2.43839 12.1351 2 13.2397 2C14.3444 2 15.4039 2.43839 16.1856 3.21891C16.9661 4.0006 17.4045 5.0601 17.4045 6.16474C17.4045 7.26939 16.9661 8.32889 16.1856 9.11058L14.9439 10.3522C14.9522 9.66891 14.8439 8.98558 14.6106 8.33558L15.0022 7.93558C15.2359 7.70448 15.4213 7.42935 15.5479 7.1261C15.6745 6.82285 15.7396 6.49751 15.7396 6.16891C15.7396 5.84031 15.6745 5.51497 15.5479 5.21172C15.4213 4.90847 15.2359 4.63334 15.0022 4.40224C14.7711 4.16863 14.496 3.98317 14.1928 3.85659C13.8895 3.73002 13.5642 3.66485 13.2356 3.66485C12.907 3.66485 12.5816 3.73002 12.2784 3.85659C11.9751 3.98317 11.7 4.16863 11.4689 4.40224L8.52724 7.34391C8.29363 7.575 8.10817 7.85014 7.98159 8.15338C7.85502 8.45663 7.78985 8.78197 7.78985 9.11058C7.78985 9.43918 7.85502 9.76452 7.98159 10.0678C8.10817 10.371 8.29363 10.6461 8.52724 10.8772ZM10.8772 7.34391C11.2022 7.01891 11.7356 7.01891 12.0606 7.34391C12.8411 8.1256 13.2795 9.18509 13.2795 10.2897C13.2795 11.3944 12.8411 12.4539 12.0606 13.2356L9.11058 16.1856C8.32889 16.9661 7.26939 17.4045 6.16474 17.4045C5.0601 17.4045 4.0006 16.9661 3.21891 16.1856C2.43839 15.4039 2 14.3444 2 13.2397C2 12.1351 2.43839 11.0756 3.21891 10.2939L4.46058 9.05224C4.45224 9.73558 4.56058 10.4189 4.79391 11.0772L4.40224 11.4689C4.16863 11.7 3.98317 11.9751 3.85659 12.2784C3.73002 12.5816 3.66485 12.907 3.66485 13.2356C3.66485 13.5642 3.73002 13.8895 3.85659 14.1928C3.98317 14.496 4.16863 14.7711 4.40224 15.0022C4.63334 15.2359 4.90847 15.4213 5.21172 15.5479C5.51497 15.6745 5.84031 15.7396 6.16891 15.7396C6.49751 15.7396 6.82285 15.6745 7.1261 15.5479C7.42935 15.4213 7.70448 15.2359 7.93558 15.0022L10.8772 12.0606C11.1109 11.8295 11.2963 11.5543 11.4229 11.2511C11.5495 10.9479 11.6146 10.6225 11.6146 10.2939C11.6146 9.96531 11.5495 9.63997 11.4229 9.33672C11.2963 9.03347 11.1109 8.75834 10.8772 8.52724C10.7963 8.4514 10.7318 8.35977 10.6877 8.258C10.6436 8.15623 10.6208 8.04649 10.6208 7.93558C10.6208 7.82466 10.6436 7.71493 10.6877 7.61316C10.7318 7.51139 10.7963 7.41975 10.8772 7.34391Z"
                            fill="white"
                          />
                        </svg>
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
