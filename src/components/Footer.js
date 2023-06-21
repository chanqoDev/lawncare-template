import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../img/logo-trans.svg";
import { Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import yelp_logo from "../img/yelp_logo.svg";
import homeAdvisorImg from "../img/HomeAdvisor.png";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { FaYelp } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

import LawnCareForm from "./LawnCareForm";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  socialLink: {
    marginRight: theme.spacing(2),
  },
}));

const StyledFooterBox = styled(Box)`
  /* Custom styles for the footer box */
`;

const Footer = () => {
  const classes = useStyles();

  return (
    <footer id="contact">
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontSize: "36px", mb: 2, fontWeight: "600", color: "#164801" }}
        >
          CONTACT
        </Typography>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        py={2}
      >
        <Map />
      </Grid>

      <Box bgcolor="#f5f5f5">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <LawnCareForm />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "36px",
                  mb: 0,
                  fontWeight: "600",
                  color: "#164801",
                }}
              >
                Get In Touch
              </Typography>
              <Typography variant="body1" py={2}>
                {[
                  "Servicing Cities in:",
                  "Kansas City, Independence",
                  "Missouri, Kansas",
                  "Phone: ",
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "600", color: "#164801" }}
                  >
                    <Link key="phone" href="tel:+19493759321" color="inherit">
                      (949) 375-9321
                    </Link>
                  </Typography>,
                  "Email: ",
                  <Link
                    key="email"
                    href="mailto:Lawncare@company.com"
                    style={{ fontWeight: "600", color: "#164801" }}
                  >
                    Lawncare@company.com
                  </Link>,
                ].map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>

              <div
                className={classes.social}
                aria-label="social media"
                role="group"
              >
                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FacebookIcon style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>
                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <InstagramIcon style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>
                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  <YouTubeIcon style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>
                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://Google.com/"
                >
                  <IoLogoGoogle style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>

                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://www.yelp.com/"
                >
                  <FaYelp style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={homeAdvisorImg}
                  alt="HomeAdvisor 5-star Ratings"
                  width={90}
                  height="auto"
                />
                <img
                  src={yelp_logo}
                  alt="Yelp 5-star Ratings"
                  width={80}
                  height="auto"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <StyledFooterBox py={2} textAlign="center">
        <img src={logo} alt="Logo" width={150} height="auto" />
        <Typography className="logoText" variant="subtitle2" sm={{ ml: 2 }}>
          Innovating landscaping in Kansas City with unmatched service and
          expertise.
        </Typography>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} LawnCare LLC. All rights reserved.
        </Typography>
      </StyledFooterBox>
    </footer>
  );
};

export default Footer;
