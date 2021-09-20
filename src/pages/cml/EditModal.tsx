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

  React.useEffect(() => {
    setOpen(props.openEdit);
  }, [props.openEdit]);

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
            value={props.edit.name}
          />
          <TextField
            id="code"
            label="Code"
            variant="standard"
            value={props.edit.code}
          />
          <TextField
            id="flag"
            label="Flag"
            variant="standard"
            value={props.edit.flag}
          />
          <Button onClick={props.handleClose}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
