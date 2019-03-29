import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="app-brand">
          <a href="/home">The Tour App</a>
        </h1>
        <nav className="app-nav">
          <ul className="app-navitems">
            <li>
              <a href="/trips">Trips</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
