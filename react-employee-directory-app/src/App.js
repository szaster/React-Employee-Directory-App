import React, { Component } from "react";
// import axios from "axios";
import PageHeader from "./components/PageHeader";
import { render } from "@testing-library/react";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
// import Search from "./pages/SearchSort";

function App() {
  return (
    <div>
      <PageHeader />
      <Container>
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
