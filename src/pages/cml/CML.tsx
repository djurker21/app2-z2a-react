import * as React from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import API from "../../api";

export type Country = {
  name: string;
  code: string;
  flag: string;
};

const countries: Country[] = [
  { name: "Germany", code: "123", flag: "german_flag.png" },
  { name: "Mexico", code: "456", flag: "mexican_flag.png" },
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

  function createData(name: string, code: string, flag: string) {
    return { name, code, flag };
  }

  const rows = [
    createData("Germany", "159", "german_flag.png"),
    createData("Mexico", "237", "mexican_flag.png"),
    createData("Ukraine", "262", "ukrainian_flag.png"),
    createData("Russia", "305", "russian_flag.png"),
    createData("Poland", "356", "polish_flag.png"),
  ];

  return (
    <div className="content">
      <h1>Country Management List</h1>
      <AddModal />
      <EditModal
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
            {rows.map((row, i) => (
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
