import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import "./components/smallScreenContent.css";
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
    <div className="LargeScreenContent">
      <h1>Welcome to the Large Screen</h1>
      <p>This is content specifically for large screens.</p>
    </div>
  );
}

function MediumScreenContent() {
  return (
    <div className="MediumScreenContent">
      <h1>Welcome to the Medium Screen</h1>
      <p>This is content specifically for medium screens.</p>
    </div>
  );
}

function SmallScreenContent() {
  return (
    <div className="SmallScreenContent">
      <HeroBanner />
    </div>
  );
}
