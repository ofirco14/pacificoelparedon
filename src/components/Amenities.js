import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import PoolIcon from "@material-ui/icons/Pool";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import PetsIcon from "@material-ui/icons/Pets";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import InfoIcon from "@material-ui/icons/Info";
import LinearScaleIcon from "@material-ui/icons/LinearScale";

export class Amenities extends Component {
  render() {
    const items = [
      {
        name: "Pool",
        hel: <PoolIcon fontSize="large" />,
      },
      {
        name: "Wifi",
        hel: <WifiIcon fontSize="large" />,
      },
      {
        name: "Parking",
        hel: <LocalParkingIcon fontSize="large" />,
      },
      {
        name: "Restaurant",
        hel: <RestaurantIcon fontSize="large" />,
      },
      {
        name: "Transportation",
        hel: <FlightTakeoffIcon fontSize="large" />,
      },
      {
        name: "Beach access",
        hel: <BeachAccessIcon fontSize="large" />,
      },
      {
        name: "Pets",
        hel: <PetsIcon fontSize="large" />,
      },
      {
        name: "Children are welcomed",
        hel: <ChildCareIcon fontSize="large" />,
      },
    ];
    return (
      <div className="benefitsWrap bg-tt">
        <div className="centerText padd-top-20">
          <InfoIcon htmlColor="lightBlue" fontSize="large" />
          <Typography variant="h3" className="pageTitle">
            Amenities
          </Typography>
          <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />
        </div>

        <div className="benefits">
          <Grid container>
            {items.map((itemOf) => {
              return (
                <Grid
                  key={itemOf.name}
                  item
                  xs={6}
                  sm={3}
                  md={3}
                  lg={3}
                  className="benefitsItem"
                >
                  {itemOf.hel}

                  {itemOf.name}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Amenities;
