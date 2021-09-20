import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Country } from "./CML";
import { Button, TextField } from "@mui/material";

export default function EditModal(props: {
  openEdit: boolean;
  handleClose: any;
  edit: Country;
}) {
  const [open, setOpen] = useState(props.openEdit);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [flag, setFlag] = useState("");

  function handleSave() {
    console.log({ name, code, flag });
    props.handleClose();
  }

  React.useEffect(() => {
    setOpen(props.openEdit);
    setName(props.edit.name);
    setCode(props.edit.code);
    setFlag(props.edit.flag);
  }, [props.openEdit, props.edit.name, props.edit.code, props.edit.flag]);

  return (
    <div>
      <Modal
        open={open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Country
          </Typography>
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
          <Button onClick={handleSave}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
