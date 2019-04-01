import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.scss";

class App extends Component {
  state = {
    data: [],
    img: []
  };
  async componentDidMount() {
    const data = await await fetch("./assets/tourdata.json").then(res =>
      res.json()
    );
    this.setState({ data: data.details });
    const dataimg = await await fetch("./assets/img.json").then(res =>
      res.json()
    );
    this.setState({
      img: dataimg.image
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={() => <Home data={this.state.data} />}
          />
          <Route
            path="/gallery"
            render={() => <Gallery data={this.state.img} />}
          />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
        </div>
      </Router>
    );
  }
}

export default App;
