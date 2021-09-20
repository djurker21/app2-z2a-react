import * as React from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { useState } from "react";

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

export default function CML() {
  const [openEdit, setOpenEdit] = useState(false);
  const [edit, setEdit] = useState({ name: "", code: "", flag: "" });
  const handleOpenEdit = (i: any) => {
    setEdit(countries[i]);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  async function deleteCountry(i: any) {
    const result = await API.delete(`countries/${i}`);
    console.log(result);
  }

  const listCountries = countries.map((country, i) => (
    <tr key={i}>
      <td>{country.name}</td>
      <td>{country.code}</td>
      <td>{country.flag}</td>
      <td>
        <Button onClick={() => handleOpenEdit(i)}>edit</Button>
        <Button onClick={() => deleteCountry(i)}>delete</Button>
      </td>
    </tr>
  ));

  return (
    <div className="content">
      <h1>Country Management List</h1>
      <AddModal />
      <EditModal
        openEdit={openEdit}
        handleClose={handleCloseEdit}
        edit={edit}
      />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>code</th>
            <th>flag</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>{listCountries}</tbody>
      </table>
    </div>
  );
}
