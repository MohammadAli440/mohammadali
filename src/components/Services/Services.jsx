import React, { useState } from "react";
import "../Services/Services.css";
import webDesignImg from "../../assets/Web-Design.jpg";
import uiUxDesignImg from "../../assets/UI-UX-Design.jpg";
import mobileAppImg from "../../assets/Mobile-Application.jpg";
import graphicsDesignImg from "../../assets/Graphics-Design.jpg";


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set initial active index to 0

  const services = [
    {
      title: "• WEB DESIGN",
      description:
        "You can insert here a text of your choice. You can customize a template.",
      imageUrl: webDesignImg, // Imported image from assets
    },
    {
      title: "• UI/UX DESIGN",
      description:
        "You can insert here a text of your choice. You can customize a template.",
      imageUrl: uiUxDesignImg, // Imported image from assets
    },
    {
      title: "• MOBILE APPLICATION",
      description:
        "You can insert here a text of your choice. You can customize a template.",
      imageUrl: mobileAppImg, // Imported image from assets
    },
    {
      title: "• GRAPHICS DESIGN",
      description:
        "You can insert here a text of your choice. You can customize a template.",
      imageUrl: graphicsDesignImg, // Imported image from assets
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
   
      <div className="Services">
        <div className="services-top">
          <span>Service</span>
          <h1>MY SPECIALTIES</h1>
        </div>
        <div className="services-content">
          {services.map((service, index) => (
            <div className="service-content" key={index}>
              <div
                className={`service-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleDescription(index)}
              >
                {service.title}
                <span className="plus-sign">
                  {activeIndex === index ? (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66602 20H33.3327"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66602 20H33.3327"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 6.66699V33.3337"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {activeIndex === index && (
                <>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="service-image"
                  />
                  <p className="service-description">{service.description}</p>
                </>
              )}
              <div className="hr-line"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
