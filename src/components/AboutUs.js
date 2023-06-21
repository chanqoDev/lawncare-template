import React from "react";
import styled from "styled-components";
import { Typography, Container, Grid } from "@mui/material";
import about from "../img/About.png";
import ColumnStats from "./ColumnStats";
import { Box } from "@mui/system";

const AboutUsContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 50px 0; /* Add vertical padding */
`;

const ContentContainer = styled(Grid)`
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Keep the height proportional */
  border-radius: 4px;
  object-fit: cover;
  max-width: 1000px; /* Increase the maximum width */
  max-height: 900px; /* Increase the maximum height */
`;
const AboutUs = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
        {" "}
        {/* Add mb (margin-bottom) */}
        <Typography variant="h4" sx={{ fontSize: "36px", color: "#333" }}>
          Who We are
        </Typography>
      </Box>
      <AboutUsContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image src={about} alt="About Us" />
          </Grid>
          <ContentContainer
            item
            xs={12}
            md={6}
            container
            direction="column"
            justifyContent="center"
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Top Rated Kansas City Area Landscape Company
            </Typography>
            <Typography variant="body1" paragraph>
              Our highly skilled team of professionals is dedicated and
              passionate about creating stunning landscapes that exceed our
              clients' expectations. We offer a wide range of services,
              including landscape design, installation, maintenance, and
              irrigation systems.
            </Typography>
            <Typography variant="body1" paragraph>
              We take pride in our attention to detail and use only the highest
              quality materials and plants to ensure long-lasting results.
              Customer satisfaction is our top priority, and we strive to
              deliver exceptional service on every project.
              <br />
            </Typography>
          </ContentContainer>
        </Grid>
      </AboutUsContainer>
      <ColumnStats />
    </>
  );
};

export default AboutUs;
