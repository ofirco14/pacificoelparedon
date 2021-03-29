import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
import Gallery from "../Gallery";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    Width: "80",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BungaloModal(props) {
  const classes = useStyles();
  const classesModal = `${classes.paper} otherModalStyle`;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.isOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <div className={classesModal}>
            <div className="modalContent">
              <div className="modalInfo1">
                <div className="modalHeader">
                  <div>
                    <CloseIcon
                      className="closeIcon"
                      onClick={() => {
                        props.handleClose();
                      }}
                    />
                  </div>
                  <div>
                    <Typography variant="h3">Our Bungalos</Typography>
                  </div>
                </div>
                <div className="padd-right-10">
                  <Typography variant="body1">
                    This is a shared accommodation and sleeps up to 5 people.
                    <br />
                    Experience a night under a traditional Guatemalan palm roof
                    with an amazing
                    <br />
                    view from the second floor into our huge pool and garden.
                    <br />
                    The room is equipped with four comfy beds (2 queens, 2
                    singles).
                    <br /> This studio offers maximum airflow due to wide open
                    windows and fans
                    <br />
                  </Typography>
                </div>
              </div>
              <div className="modalInfo2">
                <Gallery images={props.images} />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
