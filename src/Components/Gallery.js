import React from "react";
import { Link } from "react-router-dom";
import GalleryContent from "./GalleryContent";

export default class Gallery extends React.Component {
  state = {};
  render() {
    const { england, france, india, italy, japan, usa } = this.props.data;
    return (
      <div className="app-gallery">
        <div className="gallery-section">
          <ul>
            <li>
              <Link to="">England</Link>
            </li>
            <li>
              <Link to="">France</Link>
            </li>
            <li>
              <Link to="">India</Link>
            </li>
            <li>
              <Link to="">Italy</Link>
            </li>
            <li>
              <Link to="">Japan</Link>
            </li>
            <li>
              <Link to="usa">U.S.A</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
