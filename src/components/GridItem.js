import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const GridItem = ({ item }) => {
  const { image, title, content } = item;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card style={{ height: "100%" }}>
        <CardMedia
          component="img"
          className="gridItem__image"
          image={image}
          alt={title}
        />
        <CardContent className="gridItem__content">
          <Typography variant="h6" component="div" className="gridItem__title">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GridItem;
