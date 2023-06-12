import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../img/logo-trans.svg";
import "./Navbar.css";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Added state variable

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
    setIsMenuOpen(true); // Update menu state
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
    setIsMenuOpen(false); // Update menu state
  };

  const ContactBanner = styled(Typography)`
    padding: 8px;
    background-color: #164801;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
  `;

  const PhoneNumber = styled("span")`
    margin: 0 5px;
    font-weight: 600;
  `;
  const PhoneNumberLink = styled("a")`
    text-decoration: none;
    color: white;
  `;

  return (
    <AppBar position="static" color="transparent">
      <ContactBanner>
        CALL US TODAY!
        <PhoneIcon />
        <PhoneNumber>
          <PhoneNumberLink href="tel:9493759322">(949)375-9322</PhoneNumberLink>
        </PhoneNumber>
      </ContactBanner>
      <Toolbar
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: isMobile ? "center" : "space-between",
        }}
      >
        <div
          style={{
            alignSelf: isMobile ? "center" : "flex-start",
            display: "flex",
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {isMobile ? (
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                borderRadius: 1,
                backgroundColor: "",
                color: "#164801",
                border: "solid #164801 0.1px",
                "& svg": {
                  fontSize: "1.5rem",
                },
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Menu
              id="mobile-menu"
              anchorEl={mobileMenuAnchorEl}
              keepMounted
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleMobileMenuClose}
              classes={{ paper: "mobile-menu-paper" }}
            >
              <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Services</MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="MenutItems">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <Button variant="contained" style={{ backgroundColor: "#164801" }}>
              Contact
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
