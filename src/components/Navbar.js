import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import logo from "../images/main/logo.png";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import MediaQuery from "react-responsive";
import BurgerMenu from "./BurgerMenu";

export class Navbar extends Component {
  componentDidMount() {
    this.setState({ isFade: true });
  }
  constructor(props) {
    super(props);
    this.state = {
      isFade: false,
    };
  }
  render() {
    const btnTheme = createMuiTheme({
      overrides: {
        MuiButton: {
          outlined: {
            borderColor: "transparent",
          },
          label: {
            color: "black",
          },
        },
      },
    });

    return (
      <div>
        <MediaQuery maxWidth={650}>
          <BurgerMenu />
        </MediaQuery>

        <MediaQuery minWidth={650}>
          <AppBar style={{ background: "#fff" }} position="fixed">
            <Toolbar>
              <img alt="logo" src={logo} width="50" height="auto"></img>
              <NavLink
                exact
                activeClassName="navbar-active"
                className="navbar-link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="navbar-active"
                className="navbar-link"
                to="/rooms"
              >
                Rooms
              </NavLink>
              <NavLink
                exact
                activeClassName="navbar-active"
                className="navbar-link"
                to="/place"
              >
                Our place
              </NavLink>
              <NavLink
                exact
                activeClassName="navbar-active"
                className="navbar-link"
                to="/restaurant"
              >
                Restaurant
              </NavLink>
              <NavLink
                exact
                activeClassName="navbar-active"
                className="navbar-link"
                to="/location"
              >
                Location
              </NavLink>
              <div className="booking-area">
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
                <div className="icons">
                  <a
                    className="padd-right-15"
                    href="https://www.instagram.com/pacificoelparedon/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.facebook.com/PACIFICOELPAREDON/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </MediaQuery>
      </div>
    );
  }
}

export default Navbar;
