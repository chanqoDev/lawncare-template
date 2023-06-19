import React from "react";
import lawguyIcon from "../img/house-lawn-icon.svg";

function MainComponent() {
  return (
    <section className="full__width">
      <div className="center__text__block" style={{ maxWidth: "1200px" }}>
        <div className="iconContainer">
          <img src={lawguyIcon} alt="best in KC" className="lawnIcon" />
        </div>
        <p>
          <b>
            Innovating landscaping in Kansas City with unmatched service and
            expertise.
          </b>{" "}
          <br /> Experience landscaping like never before with Kansas City
          Landscape. We pride ourselves on punctuality, transparency, and
          extensive knowledge. Collaborating with you, we bring your outdoor
          vision to reality. As a local, family-owned business, we prioritize
          hands-on involvement and dedicated service. Our mission: exceptional
          results at a fair price, tailored to our community! Experience the
          extraordinary transformation of landscapes with us. Our mission is to
          deliver exceptional results at a fair price.{" "}
        </p>
        <p>
          <em> Remarkable experience that will surpass your expectations. </em>
        </p>
      </div>
    </section>
  );
}
export default MainComponent;
