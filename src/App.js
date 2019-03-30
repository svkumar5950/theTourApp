import React, { Component } from "react";
import Header from "./Layouts/Header";
import About from "./Components/About";

import "./App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
