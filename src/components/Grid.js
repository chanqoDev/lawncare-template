import React from "react";
import { Grid, Typography } from "@mui/material";
import GridItem from "./GridItem";
import img1 from "../img/1A.png";
import img2 from "../img/tree_care.png";
import img3 from "../img/Bush_Shrub.png";
import img4 from "../img/Grass_roll.png";
import img5 from "../img/landscape_design.png";
import img6 from "../img/Leafblower_guy.png";

const GridComponent = () => {
  const items = [
    {
      image: img1,
      title: "Lawn Mowing Services and maintenance",
      content:
        "Our team of skilled and knowledgeable professionals is equipped with state-of-the-art tools and equipment to ensure precise and efficient lawn mowing services. We carefully cut the grass to the optimal height, promoting healthy growth and a clean, uniform appearance.",
    },
    {
      image: img4,
      title: "Aeration, Seeding & Sod installation",
      content:
        "Combat soil compaction and promote optimal growth, we offer aeration services that facilitate the flow of air, water, and nutrients to the grassroots. We also provide overseeding, which helps fill in bare spots and thin areas, resulting in a denser and more resilient lawn.",
    },
    {
      image: img5,
      title: "Custom Landscape design",
      content:
        "Our talented landscape designers work closely with you to understand your vision and preferences. We create customized design plans that incorporate elements such as walkways, flower beds, water features, lighting, and more, transforming your outdoor space into a beautiful and functional landscape.",
    },

    {
      image: img3,
      title: "Edging and Trimming",
      content:
        "Give your lawn a polished and manicured look, we pay close attention to detail by edging the borders and trimming around trees, flower beds, and other landscape features. This meticulous approach adds definition to your lawn and enhances its overall aesthetic appeal.",
    },
    {
      image: img2,
      title: "Tree & Shrub Care",
      content:
        "Our certified arborists employ industry-leading techniques to carefully prune and trim your trees and shrubs. By removing dead or diseased branches and shaping them properly, we enhance their overall health, appearance, and longevity.",
    },
    {
      image: img6,
      title: "Seasonal clean-up leaf removal and Snow removal",
      content:
        "As the seasons change, so do the needs of your lawn. Our comprehensive seasonal cleanup services include leaf removal, debris clearing, and winterizing your lawn. We prepare your lawn for the upcoming season, ensuring a smooth transition and minimizing any potential damage.",
    },
  ];

  return (
    <>
      <Typography variant="h3" component="div" className="grid__title">
        Our Services
      </Typography>

      <Grid
        container
        spacing={1}
        textAlign="center"
        style={{ padding: "0 20px 0 20px" }}
      >
        {items.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default GridComponent;
