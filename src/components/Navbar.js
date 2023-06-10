import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo-trans.svg";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" className="logo" />

        {isMobile ? (
          // Render hamburger menu on mobile
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="mobile-menu"
              anchorEl={mobileMenuAnchorEl}
              keepMounted
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Services</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
            </Menu>
          </>
        ) : (
          // Render app bar with responsive menu on medium and large screens
          <>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
