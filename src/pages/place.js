import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import place1 from "../images/location/place1.jpg";
import place2 from "../images/location/place2.jpg";
import place3 from "../images/location/place3.jpg";
import place4 from "../images/location/place4.jpg";
import place5 from "../images/location/place5.jpg";
import place6 from "../images/location/place6.png";
import place7 from "../images/location/place7.png";
import place8 from "../images/location/place8.jpg";
import place9 from "../images/location/place9.png";
import place10 from "../images/location/place10.jpg";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Gallery from "../components/Gallery";
import Amenities from "../components/Amenities";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

export class Place extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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

    const placeImages = [
      {
        original: place1,
        thumbnail: place1,
      },
      {
        original: place2,
        thumbnail: place2,
      },
      {
        original: place3,
        thumbnail: place3,
      },
      {
        original: place4,
        thumbnail: place4,
      },
      {
        original: place5,
        thumbnail: place5,
      },
      {
        original: place6,
        thumbnail: place6,
      },
      {
        original: place7,
        thumbnail: place7,
      },
      {
        original: place8,
        thumbnail: place8,
      },
      {
        original: place9,
        thumbnail: place9,
      },
      {
        original: place10,
        thumbnail: place10,
      },
    ];
    return (
      <div className="pageContainer">
        <Grid container>
          <Grid className="centerText" item xs={12}>
            <MenuBookIcon htmlColor="lightBlue" fontSize="large" />
            <Typography variant="h3" className="pageTitle">
              Our history
            </Typography>
            <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />
            <div className="pageContent">
              <Typography>
                6 Years ago we came to El paredon, and opened our first pizza
                place in town.
                <br /> While our pizzas had huge success, we started to think
                about growing <br />
                our place and opened a restaurant with breakfasts,lunchs and
                dinners,
                <br />
                ofcourse while still serving our amazing pizzas! After that, we
                started to build our suites and bungalos -<br />
                and now you can enjoy our amazing restaurant while staying at
                our place!
                <br />
                When you come to El paredon you’ll find it to be a place of life
                <br />
                abundant with the big mangroves, and of course, it’s nice waves.
                <br />
                While there are advanced surf spots in Guatemala, the hostel is
                located in the most consistant wave
                <br /> offering surfable waves every single day .
                <br />
                You can also enjoy our huge pool, and relax in our garden during
                the day.
              </Typography>
              <br />
              <Typography>
                In El paredon you can do many activities such as horse
                riding,surfing,kayak tours,turtles releasing and more.
                <br />
              </Typography>
            </div>
            <div className="padd-top-20 padd-bottom-20">
              <Amenities />
            </div>
            <PhotoCameraIcon htmlColor="lightBlue" fontSize="large" />
            <Typography variant="h3" className="pageTitle">
              Gallery
            </Typography>
            <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />
            <Gallery images={placeImages} />
            <br />
            <div className="submitContact">
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Place;
