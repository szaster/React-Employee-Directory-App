import React, { Component } from "react";
import TableRow from "../TableRow";
import SortingCategory from "../Sorting";

function sortBy(category) {
  console.log("event", category);
}

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              Name&ensp;
              <span
                onClick={(e) => sortBy(SortingCategory.ByName)}
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa fa-sort"></i>
              </span>
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>
              DOB&ensp;
              <span
                onClick={(e) => sortBy(SortingCategory.ByDOB)}
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa fa-sort"></i>{" "}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map((employee, id) => (
            <TableRow key={id} employee={employee} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
