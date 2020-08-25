import React from "react";
import "./style.css";

function PageHeader() {
  return (
    <div className="jumbotron jumbotron-fluid text-white">
      <div className="container">
        <h1>Employee Directory</h1>
        <h4>Click on the arrows to sort the employee list</h4>
      </div>
    </div>
  );
}

export default PageHeader;
