import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Home(props) {
  const { data } = props;
  return (
    <Fragment>
      <div className="app-home">
        {data.map(data => {
          const { id, title, description, image, place } = data;
          return (
            <div key={id} className="app-home-section">
              <div className="home-section">
                <img src={image} alt="Trip show off" />
                <h1>{title}</h1>
                <h3>{place}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
Home.protoType = {
  data: PropTypes.array.isRequired
};
