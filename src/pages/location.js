import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import MapIcon from "@material-ui/icons/Map";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { createMuiTheme } from "@material-ui/core/styles";
import NearMeIcon from "@material-ui/icons/NearMe";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ThemeProvider } from "@material-ui/styles";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_FzWjiSnmHkosJ8ZV2Ke02");

export class Location extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.isEmpty = this.isEmpty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForm = this.checkForm.bind(this);

    this.state = {
      sendError: { text: null },
      loadingRequest: false,
      isSubmitted: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  isEmpty = (text) => {
    if (text && text.trim().length > 0) {
      return false;
    } else {
      return true;
    }
  };
  checkForm = () => {
    let errors2 = {
      name: null,
      email: null,
      subject: null,
      message: null,
    };
    let mergeState = {
      errors: { name: "", email: "", subject: "", message: "" },
    };
    Object.keys(errors2).forEach((item) => {
      if (this.isEmpty(this.state[item])) {
        mergeState.errors[item] = "must not be empty";
        errors2[item] = "must not be empty";
      }
    });
    this.setState({
      ...mergeState,
    });
    if (
      this.isEmpty(errors2["name"]) &&
      this.isEmpty(errors2["email"]) &&
      this.isEmpty(errors2["email"]) &&
      this.isEmpty(errors2["subject"])
    ) {
      return true;
    } else {
      return false;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sendError: { text: null }, loadingRequest: true });
    const isOk = this.checkForm();
    if (isOk) {
      const data = {
        service_id: "service_2wvyzfh",
        template_id: "template_4td20jp",
        user_id: "user_FzWjiSnmHkosJ8ZV2Ke02",
        template_params: {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        },
      };
      emailjs
        .send(
          data.service_id,
          data.template_id,
          data.template_params,
          data.user_id
        )
        .then((res) => {
          this.setState({ loadingRequest: false, isSubmitted: true });
          return true;
        })
        .catch((err) => {
          this.setState({
            loadingRequest: false,
            sendError: { text: err.text },
          });
          console.error(
            "There has been an error.  Here some thoughts on the error that occured:",
            err
          );
          return false;
        });
    } else {
      this.setState({ loadingRequest: false });
    }
  };

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
    if (this.state.isSubmitted) {
      return <Redirect to="/submitted" />;
    } else {
      return (
        <div className="pageContainer">
          <Grid container>
            <Grid className="centerText" item xs={12}>
              <NearMeIcon fontSize="large" htmlColor="lightBlue" />
              <Typography variant="h3" className="pageTitle">
                Getting Here
              </Typography>
              <LinearScaleIcon fontSize="large" htmlColor="lightBlue" />
            </Grid>
            <Grid item xs={6}>
              <div className="locationData">
                <div>
                  <AirportShuttleIcon fontSize="large" />
                </div>
                <div>
                  <Typography variant="body1">SHUTTLE</Typography>
                </div>
                <div className="text-center width-60">
                  <Typography>
                    Daily shuttles from Antigua to El Paredon
                    <br /> and back or private shuttles. See below for more
                    information and booking.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="locationData">
                <div>
                  <MapIcon fontSize="large" />
                </div>
                <div>
                  <Typography variant="body1">MAP</Typography>
                </div>
                <div className="text-center width-60">
                  <Typography>
                    How to get to El Paredon?
                    <br />
                    It's a short drive from the City or Antigua. <br />
                    Check out our map below.
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} className="bg-tt">
              <div className="shuttleInfo">
                <div>
                  <Typography variant="h4">Shuttles</Typography>
                </div>
                <LinearScaleIcon />
                <div className="shuttle2">
                  <Typography>
                    We offer Shuttles to and from Antigua, <br />
                    Guatemala City and Lago Atitlan and private shuttles to any
                    destination.
                    <br />
                    <br />
                    COMING TO US:
                    <br />
                    Departure Guatemala City: 7 AM and 12 PM <br />
                    Departure Antigua: 9 AM and 2 PM <br />
                    Departure Lago Atitlan: 2 PM <br />
                    Contact us for Booking.
                    <br />
                    <br />
                    LEAVING US:
                    <br />
                    Departure El Paredon to Guatemala City and Antigua: 9 AM and
                    3 PM <br />
                    Departure El Paredon to Lago Atitlan: 8 AM <br />
                    Contact us for Booking.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="mapInfo">
                <div>
                  <Typography variant="h4">Map</Typography>
                </div>
                <LinearScaleIcon />
                <div className="googleMap">
                  <iframe
                    title="googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15490.203672008314!2d-91.0688256!3d13.925770100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588c81925555555%3A0xc42c1c76a2574b64!2sHotel%20Pacifico!5e0!3m2!1ses-419!2sgt!4v1616637078725!5m2!1ses-419!2sgt"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
                <div className="map2">
                  <Typography>
                    OUR LOCATION <br />
                    Pacifico Hostel <br />
                    El Paredon Buena Vista <br />
                    Sipacate, Escuintla
                    <br />
                    Guatemala
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className="centerText">
              <Typography variant="h3" className="pageTitle">
                Contact us
              </Typography>
              <LinearScaleIcon />
              <Typography>Send us a message via WhatsApp:</Typography>
              <div className="whatsapp">
                <WhatsAppIcon fontSize="small" htmlColor="black" />{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className=" padd-top-2"
                  href="https://wa.me/50257881220/?text=Hi%20I%20would%20like%20to%20have%20some%20information%20about%20the%20hotel"
                >
                  <span className="padd-left-5">+50257881220</span>
                </a>
              </div>
              <Typography>
                Or you can contact us with the form below:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {!this.state.isSubmitted ? (
                <div className="wrapForm">
                  <form
                    className="text-center"
                    onSubmit={this.handleSubmit}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      helperText={this.state.errors.name}
                      value={this.state.name}
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                      className="contactField"
                      id="standard-basic"
                      label="Name"
                    />
                    <TextField
                      helperText={this.state.errors.email}
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                      className="contactField"
                      id="standard-basic"
                      label="Email"
                    />
                    <TextField
                      helperText={this.state.errors.subject}
                      value={this.state.subject}
                      onChange={(event) => {
                        this.setState({ subject: event.target.value });
                      }}
                      className="contactField"
                      id="standard-basic"
                      label="Subject"
                    />
                    <TextField
                      helperText={this.state.errors.message}
                      value={this.state.message}
                      onChange={(event) => {
                        this.setState({ message: event.target.value });
                      }}
                      placeholder="Message"
                      multiline
                      className="messageField"
                      rows={10}
                      rowsMax={10}
                    />
                    <div className="submitContact">
                      <ThemeProvider theme={btnTheme}>
                        {this.state.loadingRequest && (
                          <CircularProgress color="secondary" />
                        )}
                        {!this.state.loadingRequest && (
                          <Button variant="outlined" type="submit">
                            SUBMIT
                          </Button>
                        )}
                      </ThemeProvider>
                      {this.state.sendError.text !== null ? (
                        <div className="centerText errorText">
                          <br />
                          Sorry... something went wrong , please try again
                          later.
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </div>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
export default Location;
