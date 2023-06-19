import React from "react";
import styled from "styled-components";
import { Typography, Container, Grid } from "@mui/material";
import about from "../img/About.png";

const AboutUsContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 50px;
  margin: 50px 0;
`;

const ContentContainer = styled(Grid)`
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
  object-fit: cover;
`;
const AboutUs = () => {
  return (
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
            About Our Company
          </Typography>
          <Typography variant="body1" paragraph>
            Our highly skilled team of professionals are dedicated and
            passionate about creating stunning landscapes that exceed our
            clients' expectations. We offer a wide range of services, including
            landscape design, installation, maintenance, and irrigation systems.
          </Typography>
          <Typography variant="body1" paragraph>
            We take pride in our attention to detail and use only the highest
            quality materials and plants to ensure long-lasting results.
            Customer satisfaction is our top priority, and we strive to deliver
            exceptional service on every project.
          </Typography>
        </ContentContainer>
      </Grid>
    </AboutUsContainer>
  );
};

export default AboutUs;
