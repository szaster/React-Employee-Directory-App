import React, { Component } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import EmployeeTable from "./components/EmployeeTable";
import { SortingCategory, sortByName, sortByDob } from "./components/Sorting";

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

  filteredEmployees() {
    if (this.state.searchWord === "") {
      return this.state.employees;
    } else {
      return this.state.employees.filter((employee) =>
        this.nameContainsString(employee, this.state.searchWord)
      );
    }
  }

  nameContainsString(employee, stringToSearch) {
    const name = employee.name.first + " " + employee.name.last;
    return name.toLowerCase().includes(stringToSearch.toLowerCase());
  }

  onNewSearchWord(word) {
    this.setState({
      employees: this.state.employees,
      searchWord: word,
      isLoaded: this.state.isLoaded,
    });
  }

  sortBy(category) {
    switch (category) {
      case SortingCategory.ByName:
        {
          const sorted = sortByName(this.state.employees);
          this.setState({
            employees: sorted,
            searchWord: this.state.searchWord,
            isLoaded: this.state.isLoaded,
          });
        }
        break;
      case SortingCategory.ByDOB:
        {
          const sorted = sortByDob(this.state.employees);
          this.setState({
            employees: sorted,
            searchWord: this.state.searchWord,
            isLoaded: this.state.isLoaded,
          });
        }
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <PageHeader />
        <Container>
          <SearchForm onNewSearchWord={(word) => this.onNewSearchWord(word)} />
          <EmployeeTable
            employees={this.filteredEmployees()}
            sortBy={(cat) => this.sortBy(cat)}
          />
        </Container>
      </div>
    );
  }
}

export default App;
