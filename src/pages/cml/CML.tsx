import * as React from "react";
import Button from "@mui/material/Button";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import API from "../../api";

export type Country = {
  name: string;
  code: string;
  flag: string;
};

const countries: Country[] = [
  { name: "Germany", code: "123", flag: "german_flag.png" },
  { name: "Mexico", code: "456", flag: "mexican_flag.png" },
  { name: "Ukraine", code: "262", flag: "ukrainian_flag.png" },
  { name: "Russia", code: "305", flag: "russian_flag.png" },
  { name: "Poland", code: "356", flag: "polish_flag.png" },
];

const initValues = { name: "", code: "", flag: "" };

export default function CML() {
  const [openEdit, setOpenEdit] = useState(false);
  const [edit, setEdit] = useState(initValues);
  const handleOpenEdit = (i: any) => {
    setEdit(countries[i]);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  async function deleteCountry(i: any) {
    const result = await API.delete(`countries/${i}`);
    console.log(result);
  }

  return (
    <div className="content">
      <h1>Country Management List</h1>
      <AddDialog />
      <EditDialog
        openEdit={openEdit}
        handleClose={handleCloseEdit}
        edit={edit}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Code</TableCell>
              <TableCell align="right">Flag</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.flag}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenEdit(i)}
                  >
                    edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteCountry(i)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
