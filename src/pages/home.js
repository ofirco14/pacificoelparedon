import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import stay from "../images/home/stay.jpg";
import work from "../images/home/work.jpg";
import play from "../images/home/play.jpg";
import eat from "../images/home/eat.jpg";
import Card from "../components/Card";
export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const cardComponents = [
      {
        header: "Stay",
        cardImage: stay,
        cardContent:
          "Solo or group travellers are welcome here at Pacifico. Find your little slice of paradise just a walk away from surf, and cultural experiences. ",
        cardButton: {
          action: "nav",
          desc: "View rooms",
          path: "/rooms",
        },
      },
      {
        header: "Eat",
        cardImage: eat,
        cardContent:
          "Fuel your body for the day with our variety of meal selections with vegan, vegetarian, meat options, and more.             ",
        cardButton: {
          action: "nav",
          desc: "Explore food",
          path: "/restaurant",
        },
      },
      {
        header: "Our Place",
        cardImage: work,
        cardContent:
          "Located one minute away from the beach, beautiful sunsets, next to all the famous bars and hostels",
        cardButton: {
          action: "nav",
          desc: "Explore place",
          path: "/place",
        },
      },
      {
        header: "Location",
        cardImage: play,
        cardContent:
          "Surf, swim... the options in the ocean are plentiful! Day trips, and more land activities... all can be booked through Pacifico. ",
        cardButton: {
          action: "nav",
          desc: "Getting Here",
          path: "/location",
        },
      },
    ];
    return (
      <div className="pageContainer">
        <Grid container>
          <Grid className="centerText" item xs={12}>
            <Typography variant="h3" className="pageTitle">
              Welcome to Hotel Pacifico
            </Typography>
            <div className="cardsHome">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {cardComponents.map((card) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={card.header}>
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
      </div>
    );
  }
}

export default Home;
