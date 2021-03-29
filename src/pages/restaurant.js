import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Card from "../components/Card";
import vinos from "../images/restaurant/vinos.jpg";
import alcohol from "../images/restaurant/alcohol.jpg";
import nonAlcohol from "../images/restaurant/non-alcohol.jpg";
import breakfast from "../images/restaurant/breakfast.jpg";
import plates from "../images/restaurant/plates.jpeg";
import pizzas from "../images/restaurant/pizzas.png";
import deserts from "../images/restaurant/deserts.jpg";
import beers from "../images/restaurant/beers.jpg";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
export class Restaurant extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const foodComponents = [
      {
        header: "Breakfast",
        cardContent:
          "We have a tipical breakfast served with free coffee and home-made bread.",
        cardImage: breakfast,
      },

      {
        header: "Pizzas",
        cardContent:
          "We have the best pizzas in town,baked in our wooden oven. You can also create your own pizza!",
        cardImage: pizzas,
      },
      {
        header: "Plates",
        cardContent:
          "Our plates goes from pastas,sandwiches,salads and more! these plates are not going to leave you hungry, trust us.",
        cardImage: plates,
      },

      {
        header: "Deserts",
        cardContent:
          "Finished your meal and still hungry ? ask the waiter about the special dessert - we have pies,chocolate balls and more!",
        cardImage: deserts,
      },
    ];
    const drinkComponents = [
      {
        header: "Non alcohol",
        cardContent:
          "For the non alcoholic clientes , we offer a large varity of non-alcohol drinks and smoothies made with love by the pacifico staff. ",
        cardImage: nonAlcohol,
      },
      {
        header: "Alcohol",
        cardContent:
          "A various varaity of cocktails are waiting for you in our new bar designed especially for your comfort.",
        cardImage: alcohol,
      },
      {
        header: "Vinos",
        cardContent:
          "Enjoy the best vines in town, from white wines to red wines.",
        cardImage: vinos,
      },
      {
        header: "Beers",
        cardContent:
          "Tap beers are in town ! special beers straight from Cerveceria 14, Antigua are waiting just for you",
        cardImage: beers,
      },
    ];
    return (
      <div className="pageContainer">
        <Grid container>
          <Grid className="centerText" item xs={12}>
            <FastfoodIcon htmlColor="lightBlue" fontSize="large" />
            <Typography variant="h3" className="pageTitle">
              Our food
            </Typography>
            <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />
            <div className="cardsHome">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {foodComponents.map((card) => {
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
            <LocalBarIcon htmlColor="lightBlue" fontSize="large" />
            <Typography variant="h3" className="pageTitle">
              Our Drinks
            </Typography>
            <LinearScaleIcon htmlColor="lightBlue" fontSize="large" />
            <div className="cardsHome">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {drinkComponents.map((card) => {
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

export default Restaurant;
