import React from "react";
import "./style.css";
import PageHeader from "../PageHeader";

class SearchForm extends React.Component {
  onUserTyped(event) {
    // text that user have entered in the search field
    const text = event.target.value;
    // call a function that will set new value for the "searchWord" in the parent component.
    this.props.onNewSearchWord(text);
  }

  render() {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Employee Name:</label>
          <input
            onChange={(e) => this.onUserTyped(e)}
            name="searchWord"
            type="text"
            className="form-control"
            placeholder="Type employee name to search"
            id="search"
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
