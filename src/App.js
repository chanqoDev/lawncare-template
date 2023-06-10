import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";

export default function App() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="App">
      {matchesMd ? (
        <div className="LargeScreenContent">
          <h1>Welcome to the Large Screen</h1>
          <p>This is content specifically for large screens.</p>
        </div>
      ) : matchesSm ? (
        <div className="MediumScreenContent">
          <h1>Welcome to the Medium Screen</h1>
          <p>This is content specifically for medium screens.</p>
        </div>
      ) : (
        <div className="SmallScreenContent">
          <h2>Welcome to the Small Screen</h2>
          <p>This is content specifically for small screens.</p>
          <button>Click Me</button>
        </div>
      )}
    </div>
  );
}
