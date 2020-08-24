import React from "react";
import TableRow from "../TableRow";

function EmployeeTable(props) {
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Name&ensp;
            <span style={{ cursor: "pointer" }}>
              <i className="fa fa fa-sort"></i>
            </span>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>
            DOB&ensp;
            <span style={{ cursor: "pointer" }}>
              <i className="fa fa fa-sort"></i>{" "}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee, id) => (
          <TableRow key={id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
