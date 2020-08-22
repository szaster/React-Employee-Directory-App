import React, { Component } from "react";
import { EmployeeApi } from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    EmployeeApi.getBaseBreedsList()
      .then((res) => this.setState({ breeds: res.data.message }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };
  handleFormSubmit = (event) => {
    //The preventDefault() method will prevent the link from following the URL.
    event.preventDefault();
    EmployeeApi.getDogsOfBreed(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
