import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import "./components/smallScreenContent.css";
import "./components/mediumScreenContent.css";
import "./components/largeScreenContent.css";
import MainComponent from "./components/MainComponent";
import GridComponent from "./components/Grid";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function App() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="App">
      <Navbar />

      {matchesMd ? (
        <LargeScreenContent />
      ) : matchesSm ? (
        <MediumScreenContent />
      ) : (
        <SmallScreenContent />
      )}
    </div>
  );
}

function LargeScreenContent() {
  return (
    <div className="largeScreenContent">
      <HeroBanner />
      <MainComponent />
      <AboutUs />
      <GridComponent />
      <Footer />
    </div>
  );
}

function MediumScreenContent() {
  return (
    <div className="MediumScreenContent">
      <HeroBanner />
      <MainComponent />
      <AboutUs />
      <GridComponent />
      <Footer />
    </div>
  );
}

function SmallScreenContent() {
  return (
    <div className="SmallScreenContent">
      <HeroBanner />
      <MainComponent />
      <AboutUs />
      <GridComponent />
      <Footer />
    </div>
  );
}
