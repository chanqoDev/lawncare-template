import React from "react";
import { Grid, Typography } from "@mui/material";
import GridItem from "./GridItem";
import img1 from "../img/1A.png";
import img2 from "../img/tree_care.png";
import img3 from "../img/Bush_Shrub.png";
import img4 from "../img/Grass_roll.png";
import img5 from "../img/landscape_design.png";
import img6 from "../img/Leafblower_guy.png";
import { Box } from "@mui/system";

const GridComponent = () => {
  const items = [
    {
      image: img1,
      title: "Lawn Mowing Services",
      content:
        "Skilled professionals with state-of-the-art tools and equipment for precise and efficient lawn mowing services. Promoting healthy growth and a clean, uniform appearance.",
    },
    {
      image: img4,
      title: "Aeration, Seeding & Sod",
      content:
        "Combat soil compaction and promote optimal growth. Aeration services facilitate air, water, and nutrient flow. Overseeding fills in bare spots for a denser and more resilient lawn.",
    },
    {
      image: img5,
      title: "Custom Landscape Design",
      content:
        "Talented landscape designers working closely with you to create customized plans. Incorporating walkways, flower beds, water features, lighting, and more for a beautiful and functional landscape.",
    },
    {
      image: img3,
      title: "Edging and Trimming",
      content:
        "Paying close attention to detail by edging borders and trimming around trees, flower beds, and landscape features. Adding definition and enhancing the aesthetic appeal of your lawn.",
    },
    {
      image: img2,
      title: "Tree & Shrub Care",
      content:
        "Certified arborists using industry-leading techniques to prune and trim trees and shrubs. Enhancing their health, appearance, and longevity by removing dead or diseased branches and shaping them properly.",
    },
    {
      image: img6,
      title: "Seasonal Cleanup",
      content:
        "Comprehensive services including leaf removal, debris clearing, and winterizing your lawn. Preparing your lawn for the upcoming season and minimizing potential damage.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 4px",
      }}
    >
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography
          variant="h4"
          sx={{ fontSize: "36px", mb: 4, color: "#333" }}
        >
          OUR SERVICES
        </Typography>
      </Box>

      <Grid container spacing={1} justifyContent="center">
        {items.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default GridComponent;
