import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import bungalo from "../images/rooms/bungalo/bungalo.png";
import suite from "../images/rooms/suite/suite.jpg";
import suite2 from "../images/rooms/suite/suite2.jpg";
import suite4 from "../images/rooms/suite/suite4.jpg";
import HotelIcon from "@material-ui/icons/Hotel";
import SuiteModal from "../components/modals/SuiteModal";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import BungaloModal from "../components/modals/BungaloModal";

import Card from "../components/Card";
export class Rooms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      modals: {
        bungaloModalOpened: false,
        suiteModalOpened: false,
      },

      suiteImages: [
        {
          original: suite,
          thumbnail: suite,
        },
        {
          original: suite2,
          thumbnail: suite2,
        },
        {
          original: suite4,
          thumbnail: suite4,
        },
      ],
      bungaloImages: [
        {
          original: bungalo,
          thumbnail: bungalo,
        },
      ],
    };
  }
  render() {
    const handleOpen = (key, bol) => {
      this.setState({
        modals: {
          ...this.state.modals,
          [`${key}ModalOpened`]: bol,
        },
      });
    };
    const cardComponents = [
      {
        header: "Bungalos",
        cardImage: bungalo,
        cardContent:
          "This is a shared accommodation and sleeps up to 5 people.",
        cardButton: {
          action: "modal",
          desc: "View Bungalos",
          clickFunc: () => {
            handleOpen("bungalo", true);
          },
        },
      },
      {
        header: "Suites",
        cardImage: suite,
        cardContent:
          " Our most luxurious room offers two Queen Beds, and a lounge corner to relax and hang out.",
        cardButton: {
          action: "modal",
          desc: "View Suites",
          clickFunc: () => {
            handleOpen("suite", true);
          },
        },
      },
    ];
    return (
      <div className="pageContainer">
        <Grid container>
          <Grid className="centerText" item xs={12}>
            <HotelIcon htmlColor="lightBlue" fontSize="large" />
            <Typography variant="h3" className="pageTitle">
              Accomodation
            </Typography>
            <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />

            <div className="cardsHome">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {cardComponents.map((card) => {
                  return (
                    <Grid item xs={12} sm={6} key={card.header}>
                      <Card
                        cardButton={card.cardButton}
                        header={card.header}
                        cardImage={card.cardImage}
                        cardContent={card.cardContent}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Grid>
        </Grid>

        <SuiteModal
          images={this.state.suiteImages}
          isOpen={this.state.modals.suiteModalOpened}
          handleClose={() => handleOpen("suite", false)}
        />
        <BungaloModal
          images={this.state.bungaloImages}
          isOpen={this.state.modals.bungaloModalOpened}
          handleClose={() => handleOpen("bungalo", false)}
        />
      </div>
    );
  }
}

export default Rooms;
