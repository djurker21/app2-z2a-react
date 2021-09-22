import * as React from "react";
import {
  Dialog,
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import API from '../../api';

export default function AddDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [flag, setFlag] = useState("");

  async function handleSave() {
    console.log({name, code, flag});
    setName("");
    setCode("");
    setFlag("");
    await API.post('countries', {name, code, flag});
    handleClose();
  }

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Add Country
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>Add Country</DialogTitle>
        <DialogContent>
          <TextField
            id="country"
            label="Country"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="code"
            label="Code"
            variant="standard"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            id="flag"
            label="Flag"
            variant="standard"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
