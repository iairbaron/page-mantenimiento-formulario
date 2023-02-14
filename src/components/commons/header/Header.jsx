import React from "react";
import logo from "../../../images/ca822f_2200d6424a8c407d889ab01ed17b5eb5_mv2.png";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav
        style={{
          justifyContent:"center",
          minWidth:"100%",
          padding: "15px 30px",
          gap: "30px",
        }}
        class="navbar navbar-expand-lg navbar-light bg-light"
      >
        <img class="imgHeader" src={logo} />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul
            class="navbar-nav"
            style={{
              gap: "10px",
              fontFamily: "Lato, sans-serif",
              fontSize: "1.3rem",
            }}
          >
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div class="menuHamburger">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="#contacto"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contacto
              </a>{" "}
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Header;
