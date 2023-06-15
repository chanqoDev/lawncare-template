import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../img/logo-trans.svg";

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="#f5f5f5" py={4}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* First Section */}
            <Grid item xs={12} sm={4}>
              <Box
                className="footerLogo"
                display="flex"
                alignItems="flex-start"
                mb={2}
                justifyContent="center"
              >
                <img src={logo} alt="Logo" width={150} height="auto" />
                <Typography className="logoText" variant="subtitle1" ml={2}>
                  Lawncare & landscaping LLC
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                "Innovating landscaping in Kansas City with unmatched service
                and expertise."
              </Typography>
            </Grid>

            {/* Second Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Lawn Services</Typography>
              <Typography
                variant="body2"
                component="ul"
                sx={{ listStyleType: "none", p: 0 }}
              >
                <li>Lawn Mowing Services and maintenance</li>
                <li>Edging and Trimming</li>
                <li>Custom Landscape Design</li>
                <li>Seasonal clean-up leaf removal and Snow removal</li>
                <li>Tree & Shrub Care</li>
                <li>Aeration, Seeding & Sod installation</li>
              </Typography>
            </Grid>

            {/* Third Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Get in Touch</Typography>
              <Typography variant="body2">
                Kansas City, Independence
                <br />
                Missouri, Kansas
                <br />
                Phone: (949) 375-9322
                <br />
                Email: Lawncare@company.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box bgcolor="#e0e0e0" py={2} textAlign="center">
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} LawnCare LLC. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
