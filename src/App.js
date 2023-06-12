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
    </div>
  );
}

function MediumScreenContent() {
  return (
    <div className="MediumScreenContent">
      <HeroBanner />
      <MainComponent />
    </div>
  );
}

function SmallScreenContent() {
  return (
    <div className="SmallScreenContent">
      <HeroBanner />
      <MainComponent />
    </div>
  );
}
