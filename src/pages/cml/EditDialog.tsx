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

  async function handleSave() {
    console.log({ name, code, flag });
    await API.patch(`countries/${id}`, { id, name, code, flag });
    handleClose();
  }

  React.useEffect(() => {
    setOpen(openEdit);
    setId(edit.id);
    setName(edit.name);
    setCode(edit.code);
    setFlag(edit.flag);
  }, [openEdit, edit.id, edit.name, edit.code, edit.flag]);

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
