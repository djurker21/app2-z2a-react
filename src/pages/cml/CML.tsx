import * as React from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

const countries = [
  { name: "Germany", code: "123", flag: "german_flag.png" },
  { name: "Mexico", code: "456", flag: "mexican_flag.png" },
];

export default function CML() {
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const listCountries = countries.map((country, i) => (
    <tr key={i}>
      <td>{country.name}</td>
      <td>{country.code}</td>
      <td>{country.flag}</td>
      <td>
        <Button onClick={handleOpenEdit}>edit</Button>
        <Button>delete</Button>
      </td>
    </tr>
  ));

  return (
    <div className="content">
      <h1>Country Management List</h1>
      <AddModal />
      <EditModal openEdit={openEdit} handleClose={handleCloseEdit} />
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
