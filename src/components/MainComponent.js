import React from "react";
import lawguyIcon from "../img/house-lawn-icon.svg";

function MainComponent() {
  return (
    <section className="full__width">
      <div className="center__text__block">
        <div className="iconContainer">
          <img src={lawguyIcon} alt="best in KC" className="lawnIcon" />
        </div>
        <p>
          Innovating Landscaping in Kansas City: Unmatched Service and
          Expertise. Experience landscaping like never before with Kansas City
          Landscape. We pride ourselves on punctuality, transparency, and
          extensive knowledge. Collaborating with you, we bring your outdoor
          vision to reality. As a local, family-owned business, we prioritize
          hands-on involvement and dedicated service. Our mission: exceptional
          results at a fair price, tailored to our community!
        </p>
        <p>
          Experience the extraordinary transformation of landscapes with us. Our
          mission is to deliver exceptional results at a fair price. Remarkable
          experience that will surpass your expectations.
        </p>
      </div>
      <div className="featured__projects__block"></div>
      <div className="who_we_are__block"></div>
      <div className="testimonials"></div>
    </section>
  );
}
export default MainComponent;
