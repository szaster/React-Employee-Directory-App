import React, { Component } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/EmployeeList";
import Container from "./components/Container";
import EmployeeList from "./components/EmployeeList";
// import Search from "./pages/SearchSort";

class App extends Component {
  state = {
    employees: [],
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

  render() {
    return (
      <div>
        <PageHeader />
        <Container>
          <SearchForm />
          <EmployeeList employees={this.state.employees} />
        </Container>
      </div>
    );
  }
}

export default App;
