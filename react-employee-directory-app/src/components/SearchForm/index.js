import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array

// const breeds = ["a", "b", "c"];
// const options = breeds.map((breed) => <option value={breed} key={breed} />);

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          // value={props.}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Type employee name to search"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
