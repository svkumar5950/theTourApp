import React, { Component } from "react";
import Header from "./Layouts/Header";
import Home from "./Components/Home";
import "./App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
