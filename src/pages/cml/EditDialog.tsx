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
import { Country } from "./CML";
import API from "../../api";

type PropsType = {
  openEdit: boolean;
  handleClose: any;
  edit: Country;
};

export default function EditDialog(props: PropsType) {
  const { openEdit, handleClose, edit } = props;
  const [open, setOpen] = useState(openEdit);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [flag, setFlag] = useState("");
  const [lat_long, setLatLong] = useState("");

  async function handleSave() {
    await API.patch(`countries/${id}`, { id, name, code, flag, lat_long });
    handleClose();
  }

  React.useEffect(() => {
    setOpen(openEdit);
    setId(edit.id);
    setName(edit.name);
    setCode(edit.code);
    setFlag(edit.flag);
    setLatLong(edit.lat_long);
  }, [openEdit, edit.id, edit.name, edit.code, edit.flag, edit.lat_long]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>Edit Country</DialogTitle>
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
          <TextField
            id="lat_long"
            label="LatLong"
            variant="standard"
            value={lat_long}
            onChange={(e) => setLatLong(e.target.value)}
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
