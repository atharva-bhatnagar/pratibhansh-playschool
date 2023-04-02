import React from "react";
import Marquee from "react-fast-marquee";

const HeroSec = () => {
  return (
    <div className="hero-sec">
      <div className="logo-container">
        <img src="images/logo.jpg" alt="School Logo" />
        <div className="school-info">
          <h3>Pratibhansh Play School</h3>
          <p>Basic Address like c-7007 sector 13 Rajajipuram Lucknow</p>
          <strong>SampleEmail.com@gmail.com</strong>
        </div>
      </div>
      <div className="marquee-cont">
        <Marquee>
          <h1>Admisions Open</h1>
        </Marquee>
        <Marquee>
          <p>Admissions are open for classes 1 to 5</p>
        </Marquee>
      </div>
    </div>
  );
};
export default HeroSec;
