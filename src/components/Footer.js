import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../img/logo-trans.svg";
import { Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
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

const Footer = () => {
  const classes = useStyles(); // Define the 'classes' variable here

  return (
    <footer>
      <Grid xs={12} sm={4} py={4}>
        <Map />
      </Grid>
      <Box bgcolor="#f5f5f5" py={4}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <LawnCareForm />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Get in Touch</Typography>
              <Typography variant="body2">
                Kansas City, Independence
                <br />
                Missouri, Kansas
                <br />
                Phone:{" "}
                <Link href="tel:+19493759322" color="inherit">
                  (949) 375-9322
                </Link>
                <br />
                Email:{" "}
                <Link href="mailto:Lawncare@company.com" color="inherit">
                  Lawncare@company.com
                </Link>
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
                  href="https://twitter.com/"
                >
                  <TwitterIcon style={{ color: "rgb(22, 72, 1)" }} />
                  <Typography variant="srOnly"></Typography>
                </Link>
                <Link
                  className={classes.socialLink}
                  rel="noopener"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <LinkedInIcon style={{ color: "rgb(22, 72, 1)" }} />
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
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <StyledFooterBox bgcolor="#e0e0e0" py={2} textAlign="center">
        <img src={logo} alt="Logo" width={150} height="auto" />
        <Typography className="logoText" variant="subtitle2" sm={{ ml: 2 }}>
          "Innovating landscaping in Kansas City with unmatched service and
          expertise."
        </Typography>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} LawnCare LLC. All rights reserved.
        </Typography>
      </StyledFooterBox>
    </footer>
  );
};

const StyledFooterBox = styled(Box)`
  /* Custom styles for the footer box */
`;

export default Footer;
