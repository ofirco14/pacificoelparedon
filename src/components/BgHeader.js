import React from "react";

import Paper from "@material-ui/core/Paper";
import homeBg from "../images/main/homeBg.jpeg";
import locationBg from "../images/main/locationBg.png";
import placeBg from "../images/main/placeBg.jpg";
import resBg from "../images/main/resBg.jpg";
import roomsBg from "../images/main/roomsBg.png";
import { Typography, Button, Box, Fade } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

class BgHeader extends React.Component {
  componentDidMount(props) {
    this.setState({ isFade: true });
    this.getBg(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isFade: false,
      bgObj: null,
      bgHeader: "",
      bgContent: "",
    };

    this.onRouteChanged = this.onRouteChanged.bind(this);
    this.getBg = this.getBg.bind(this);
  }

  getBg = (path) => {
    const withoutSlash = path === "/" ? "home" : path.substring(1);
    switch (withoutSlash) {
      case "home":
        this.setState({
          bgObj: homeBg,
          bgHeader: "Stay with us",
          bgContent: "Eat, surf and relax",
        });

        break;
      case "rooms":
        this.setState({
          bgObj: roomsBg,
          bgHeader: "Our rooms",
          bgContent: "Stay at our luxurious bungalos and suites",
        });
        break;
      case "restaurant":
        this.setState({
          bgObj: resBg,
          bgHeader: "Our Menu",
          bgContent: "The best food in town, in your plate",
        });
        break;
      case "place":
        this.setState({
          bgObj: placeBg,
          bgHeader: "The beggining",
          bgContent: "How it all started",
        });
        break;
      case "submitted":
        this.setState({
          bgObj: locationBg,
          bgHeader: "Thank you",
          bgContent: "Your form has been successfully submitted!",
        });
        break;

      case "location":
        this.setState({
          bgObj: locationBg,
          bgHeader: "The area",
          bgContent: "located in the best spot",
        });
        break;

      default:
        this.setState({
          bgObj: homeBg,
          bgHeader: "Stay with us",
          bgContent: "Eat, surf and relax",
        });
    }
  };
  onRouteChanged = () => {
    this.getBg(this.props.location.pathname);
  };
  render() {
    const btnTheme = createMuiTheme({
      overrides: {
        MuiButton: {
          outlined: {
            borderColor: "white",
          },
          label: {
            color: "#fff",
          },
        },
      },
    });
    let styles = {
      paperContainer: {
        backgroundImage: `url(${this.state.bgObj})`,
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    };

    return (
      <div>
        {this.state.bgObj && (
          <Paper className="bg-blur" style={styles.paperContainer}></Paper>
        )}
        <div className="bgHeaderContent">
          <Fade timeout={2000} in={this.state.isFade}>
            <div className="text-center">
              <div>
                <Typography variant="h3">
                  <Box fontWeight="fontWeightBold">{this.state.bgHeader}</Box>
                </Typography>
              </div>
              <div>
                <Typography variant="body1">{this.state.bgContent}</Typography>
              </div>
              {this.props.location.pathname !== "/submitted" && (
                <div>
                  <ThemeProvider theme={btnTheme}>
                    <Box m={1}>
                      <Button variant="outlined" className="bookNowBtnHeader">
                        <a
                          href="https://hotels.cloudbeds.com/reservation/w3byzE"
                          target="_blank"
                          rel="noreferrer"
                        >
                          book now
                        </a>
                      </Button>
                    </Box>
                  </ThemeProvider>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
export default withRouter(BgHeader);
