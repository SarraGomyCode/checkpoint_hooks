import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const AddModal = ({ handleAdd }) => {
  const [open, setOpen] = React.useState(false);
  const newMovie = {};

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add Movie
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Movie"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={(event) => {
                newMovie.name = event.target.value;
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="image"
              label="Image"
              fullWidth
              onChange={(event) => {
                newMovie.name = event.target.value;
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="rating"
              label="Rating"
              fullWidth
              onChange={(event) => {
                newMovie.rating = event.target.value;
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="type"
              label="Type"
              fullWidth
              onChange={(event) => {
                newMovie.name = event.target.value;
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              onChange={(event) => {
                newMovie.name = event.target.value;
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="date"
              label="Date"
              fullWidth
              onChange={(event) => {
                newMovie.name = event.target.value;
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              handleAdd(newMovie);
            }}
            color="primary"
            autoFocus
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddModal;
