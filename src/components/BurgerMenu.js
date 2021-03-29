import { slide as Menu } from "react-burger-menu";
import React from "react";
import { NavLink } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import HomeIcon from "@material-ui/icons/Home";
import HotelIcon from "@material-ui/icons/Hotel";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantIcon from "@material-ui/icons/Restaurant";

import { Button } from "@material-ui/core";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClosed: false,
    };
  }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const btnTheme = createMuiTheme({
      overrides: {
        MuiButton: {
          outlined: {
            borderColor: "#b8b7ad",
          },
          label: {
            color: "#b8b7ad",
          },
        },
      },
    });

    this.handleCloseMenu = () => {
      this.setState({ isMenuOpened: false });
    };

    this.handleStateChange = () => {
      this.setState({ isMenuOpened: this.state.isOpen });
    };

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <div id="burger-bar-scrolled" className="displayNone"></div>
        <Menu
          isOpen={this.state.isMenuOpened}
          onStateChange={this.handleStateChange}
        >
          <div className="sideBarMenu">
            <div className="menuCouple">
              <HomeIcon />
              <NavLink
                exact
                activeClassName="navbar-active-mob"
                className="navbar-link-mob menu-item"
                onClick={() => {
                  this.handleCloseMenu();
                }}
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div className="menuCouple">
              <MenuBookIcon />
              <NavLink
                exact
                activeClassName="navbar-active-mob"
                className="navbar-link-mob menu-item"
                onClick={() => {
                  this.handleCloseMenu();
                }}
                to="/place"
              >
                Our place
              </NavLink>
            </div>
            <div className="menuCouple">
              <HotelIcon />
              <NavLink
                exact
                activeClassName="navbar-active-mob"
                className="navbar-link-mob menu-item"
                onClick={() => {
                  this.handleCloseMenu();
                }}
                to="/rooms"
              >
                Rooms
              </NavLink>
            </div>
            <div className="menuCouple">
              <RestaurantIcon />
              <NavLink
                exact
                activeClassName="navbar-active-mob"
                className="navbar-link-mob menu-item"
                onClick={() => {
                  this.handleCloseMenu();
                }}
                to="/restaurant"
              >
                Restaurant
              </NavLink>
            </div>
            <div className="menuCouple">
              <LocationOnIcon />
              <NavLink
                exact
                activeClassName="navbar-active-mob"
                className="navbar-link-mob menu-item"
                onClick={() => {
                  this.handleCloseMenu();
                }}
                to="/location"
              >
                Location
              </NavLink>
            </div>
          </div>

          <div className="sideBarActions">
            <div>
              <ThemeProvider theme={btnTheme}>
                <Button variant="outlined" className="bookNowBtn">
                  <a
                    href="https://hotels.cloudbeds.com/reservation/w3byzE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    book now
                  </a>
                </Button>
              </ThemeProvider>
            </div>
            <div>
              <a
                href="https://www.instagram.com/pacificoelparedon/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/PACIFICOELPAREDON/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
