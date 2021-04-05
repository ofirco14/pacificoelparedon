import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import bungalo from "../images/rooms/bungalo/bungalo.png";
import bungalo4 from "../images/rooms/bungalo/bungalo4.jpg";

import suite from "../images/rooms/suite/fan/suite.jpg";
import suite2 from "../images/rooms/suite/fan/suite2.jpg";
import suite4 from "../images/rooms/suite/fan/suite4.jpg";
import suite5 from "../images/rooms/suite/ac/suite5.png";
import suite6 from "../images/rooms/suite/ac/suite6.jpg";
import suite7 from "../images/rooms/suite/ac/suite7.jpg";
import suite8 from "../images/rooms/suite/ac/suite8.jpg";

import HotelIcon from "@material-ui/icons/Hotel";
import SuiteAcModal from "../components/modals/SuiteAcModal";
import SuiteFanModal from "../components/modals/SuiteFanModal";
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
        suiteAcModalOpened: false,
        suiteFanModalOpened: false,
      },

      suiteAcImages: [
        {
          original: suite5,
          thumbnail: suite5,
        },
        {
          original: suite6,
          thumbnail: suite6,
        },
        {
          original: suite7,
          thumbnail: suite7,
        },
        {
          original: suite8,
          thumbnail: suite8,
        },
      ],
      suiteFanImages: [
        {
          original: suite,
          thumbnail: suite,
        },
        {
          original: suite4,
          thumbnail: suite4,
        },
        {
          original: suite2,
          thumbnail: suite2,
        },
      ],
      bungaloImages: [
        {
          original: bungalo4,
          thumbnail: bungalo4,
        },

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
        cardImage: bungalo4,
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
        header: "A/C Suites",
        cardImage: suite5,
        cardContent:
          " Our most luxurious air-conditioned room offers two Queen Beds, and a lounge corner to relax and hang out.",
        cardButton: {
          action: "modal",
          desc: "View A/C Suites",
          clickFunc: () => {
            handleOpen("suiteAc", true);
          },
        },
      },
      {
        header: "Fan Suites",
        cardImage: suite,
        cardContent:
          " Our most luxurious rooms with fans offers two Queen Beds, and a lounge corner to relax and hang out.",
        cardButton: {
          action: "modal",
          desc: "View fan Suites",
          clickFunc: () => {
            handleOpen("suiteFan", true);
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
                    <Grid item xs={12} sm={6} md={4} lg={4} key={card.header}>
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

        <SuiteAcModal
          images={this.state.suiteAcImages}
          isOpen={this.state.modals.suiteAcModalOpened}
          handleClose={() => handleOpen("suiteAc", false)}
        />
        <SuiteFanModal
          images={this.state.suiteFanImages}
          isOpen={this.state.modals.suiteFanModalOpened}
          handleClose={() => handleOpen("suiteFan", false)}
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
