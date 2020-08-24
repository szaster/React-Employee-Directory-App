import React from "react";
import "./style.css";

function TableRow(props) {
  const d = new Date(props.employee.dob.date);
  const formatted_date =
    d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  const employee = props.employee;
  return (
    <div className="overflow-x:auto">
      <table className="table table-striped">
        <tr>
          <td>
            <img
              alt="Employee"
              src={employee.picture.thumbnail}
              className="img-fluid"
            />
          </td>
          <td>
            {employee.name.first}
            {employee.name.last}
          </td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{formatted_date}</td>
        </tr>
      </table>
    </div>
  );
}

function EmployeeList(props) {
  return props.employees.map((employee) => (
    <TableRow key={employee.id} employee={employee} />
  ));
}

export default EmployeeList;
