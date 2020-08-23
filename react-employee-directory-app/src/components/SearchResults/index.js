import React from "react";
import "./style.css";

function SearchResults(props) {
  if (props.employees.length > 0) {
    const employee = props.employees[0];
    console.log(employee);
    return (
      <div className="overflow-x:auto">
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
          <td>{employee.dob.date}</td>
        </tr>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchResults;
