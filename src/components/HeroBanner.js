import { Box, Button, Typography } from "@mui/material";
import homeAdvisorImg from "../img/HomeAdvisor.png";

const HeroBanner = () => {
  return (
    <Box
      className="hero-banner"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        py: 4,
      }}
    >
      <Box
        sx={{ mb: 2 }}
        style={{
          zIndex: 1,
        }}
      >
        <img src={homeAdvisorImg} alt="HomeAdvisor 5-star Ratings" />
      </Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2 }}
        className="hero-title"
        style={{
          color: "white",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        Your Trusted Partner for Lawncare Excellence
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 2 }}
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        Transforming Your Outdoor Space Professional Landscaping Services
      </Typography>
      <Button
        variant="contained"
        style={{
          zIndex: 1,
        }}
      >
        Get a Free Quote
      </Button>
      <div className="hero-overlay"></div>
    </Box>
  );
};

export default HeroBanner;
