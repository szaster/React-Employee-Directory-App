import React, { Component } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import EmployeeTable from "./components/EmployeeTable";

class App extends Component {
  state = {
    employees: [],
    searchWord: "",
    isLoaded: true,
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    const url =
      "https://randomuser.me/api/?inc=gender,name,email,phone,dob,picture&results=20";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          employees: res.data.results,
          isLoaded: true,
        });
      })
      .catch((err) => console.log("Error in getting employee data", err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
  };

  filteredEmployees() {
    if (this.state.searchWord === "") {
      return this.state.employees;
    } else {
      return [];
    }
  }

  onNewSearchWord(word) {
    this.setState({
      employees: this.state.employees,
      searchWord: word,
      isLoaded: this.state.isLoaded,
    });
  }

  render() {
    return (
      <div>
        <PageHeader />
        <Container>
          <SearchForm onNewSearchWord={(word) => this.onNewSearchWord(word)} />
          <EmployeeTable employees={this.filteredEmployees()} />
        </Container>
      </div>
    );
  }
}

export default App;
