import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import {
  ShoppingCart,
  Search,
  ListRounded,
  Person,
  Assistant,
  Category,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logooo.jpeg";
import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(false);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const openMenu = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const renderMobileMenu = (
    <div>
      <ListRounded className={classes.menuButton} onClick={openMenu} />

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem component={Link} to="/">
          <IconButton aria-label="Show cart items" color="secondary">
            <Badge>
              <Person />
            </Badge>
          </IconButton>
          <p>Profile</p>
        </MenuItem>

        <MenuItem component={Link} to="/">
          <IconButton aria-label="Show cart items" color="secondary">
            <Badge>
              <Assistant />
            </Badge>
          </IconButton>
          <p>Featured products</p>
        </MenuItem>

        <MenuItem component={Link} to="/">
          <IconButton aria-label="Show cart items" color="secondary">
            <Badge>
              <Category />
            </Badge>
          </IconButton>
          <p>Categories</p>
        </MenuItem>

        <MenuItem component={Link} to="/search">
          <IconButton aria-label="Show cart items" color="secondary">
            <Badge color="secondary">
              <Search />
            </Badge>
          </IconButton>
          <p>Search</p>
        </MenuItem>
        <MenuItem component={Link} to="/cart">
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge
              badgeContent={totalItems}
              color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Menu>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="45px"
              className={classes.image}
            />{" "}
            Wind-style.
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/Search"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge className={classes.searchIcon} color="secondary">
                  <Search />
                </Badge>
              </IconButton>
              <IconButton
                component={Link}
                to="/profile"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge className={classes.searchIcon}>
                  <Person />
                </Badge>
              </IconButton>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge
                  className={classes.searchIcon}
                  badgeContent={totalItems}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
              {/* <IconButton
          
          aria-label="Show cart items"
          color="secondary"
        >
          <Badge>
            <Assistant />
          </Badge>
        </IconButton>

         <IconButton
          
          aria-label="Show cart items"
           color="secondary"
        >
          <Badge>
            <Category />
          </Badge>
        </IconButton> */}
            </div>
          )}
          {renderMobileMenu}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
