import React, { Component } from "react";
import Header from "./Layouts/Header";
import "./App.scss";
import Home from "./Components/Home";

class App extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const data = await await fetch("./data/tourdata.json").then(res =>
      res.json()
    );
    this.setState({ data: data.details });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Home data={this.state.data} />
      </div>
    );
  }
}

export default App;
