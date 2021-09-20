import * as React from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

export default function CML() {
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

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
        <tbody>
          <tr>
            <td>Germany</td>
            <td>1232131</td>
            <td>germany_flag.png</td>
            <td>
              <Button onClick={handleOpenEdit}>edit</Button>
              <Button>delete</Button>
            </td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>1232131</td>
            <td>mexico_flag.png</td>
            <td>
              <Button onClick={handleOpenEdit}>edit</Button>
              <Button>delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
