import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/SearchSort";

function App() {
  return (
    <div>
      <Route exact path="/" component={Search} />
    </div>
  );
}

export default App;
