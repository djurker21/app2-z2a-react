import * as React from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";

export default function CML() {
  return (
    <div className="content">
      <h1>Country Management List</h1>
      <AddModal />
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
              <Button>edit</Button>
              <Button>delete</Button>
            </td>
          </tr>
          <tr>
            <td>Mexico</td>
            <td>1232131</td>
            <td>mexico_flag.png</td>
            <td>
              <Button>edit</Button>
              <Button>delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
