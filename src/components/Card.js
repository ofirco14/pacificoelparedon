import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card as Cardi } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    height: 340,
  },
});

export default function Card(props) {
  const classes = useStyles();

  return (
    <div className="cardPadd">
      <Cardi className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.cardImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.header}
            </Typography>
            <Typography variant="body2" component="p">
              {props.cardContent}
            </Typography>
          </CardContent>
        </CardActionArea>
        {props.cardButton && (
          <CardActions>
            {props.cardButton.action === "modal" && (
              <Button
                size="small"
                color="primary"
                onClick={props.cardButton.clickFunc}
              >
                {props.cardButton.desc}
              </Button>
            )}
            {props.cardButton.action === "nav" && (
              <Button
                size="small"
                color="primary"
                to={props.cardButton.path}
                component={Link}
              >
                {props.cardButton.desc}
              </Button>
            )}
          </CardActions>
        )}
      </Cardi>
    </div>
  );
}
