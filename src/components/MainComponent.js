import React from "react";
import lawguyIcon from "../img/house-lawn-icon.svg";
import { Typography } from "@mui/material";

function MainComponent() {
  return (
    <section className="full__width">
      <div className="center__text__block" style={{ maxWidth: "1200px" }}>
        <div className="iconContainer">
          <img src={lawguyIcon} alt="best in KC" className="lawnIcon" />
        </div>

        <Typography variant="body1">
          Innovating landscaping in Kansas City with unmatched service and
          expertise. We at KC Landscape value punctuality, transparency, and
          expertise. Together, we create your outdoor vision. As a local,
          family-owned business, we prioritize hands-on service. Our mission:
          exceptional results at a fair price, tailored for our community! Join
          us for extraordinary landscape transformations. Delivering exceptional
          results at a fair price.
        </Typography>
        <Typography variant="body1" fontStyle="italic">
          Remarkable experience that will surpass your expectations.
        </Typography>
      </div>
    </section>
  );
}
export default MainComponent;
