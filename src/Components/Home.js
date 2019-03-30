import React, { Fragment } from "react";
export default function Home(props) {
  const { data } = props;
  return (
    <Fragment>
      <div className="app-home-sections">
        {data.map(data => {
          const { id, title, description, image, place } = data;
          return (
            <div className="app-home">
              <div key={id} className="home-section">
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
