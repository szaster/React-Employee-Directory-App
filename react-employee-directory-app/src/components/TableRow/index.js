import React from "react";
import "./style.css";

function TableRow(props) {
  const d = new Date(props.employee.dob.date);
  const formattedDate =
    d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

  return (
    <tr>
      <td>
        <img
          alt="employee"
          src={props.employee.picture.thumbnail}
          className="img-fluid"
        />
      </td>
      <td>
        {props.employee.name.first}&ensp;
        {props.employee.name.last}
      </td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.email}</td>
      <td>{formattedDate}</td>
    </tr>
  );
}

export default TableRow;
