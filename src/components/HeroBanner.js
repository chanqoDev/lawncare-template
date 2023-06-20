import { Box, Button, Typography } from "@mui/material";
import homeAdvisorImg from "../img/HomeAdvisor.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        py: 4,
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Your Trusted Partner for Lawncare Excellence
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Transforming Your Outdoor Space Professional Landscaping Services
      </Typography>
      <Box sx={{ mb: 2 }}>
        <img src={homeAdvisorImg} alt="HomeAdvisor 5-star Ratings" />
      </Box>
      <Button variant="contained">Get a Free Quote</Button>
    </Box>
  );
};

export default HeroBanner;
