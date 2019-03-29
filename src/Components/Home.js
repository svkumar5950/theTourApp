import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="app-home-sections">
        <a href="/">
          <div className="home-img">
            <img src="http://placeimg.com/400/250/any" alt="Unsplash" />
            <h3>The Heading For the Image</h3>
            <p>
              Nothing's gonna make your husband or wife madder than coming home
              and having a snow-covered dinner. All you have to do is let your
              imagination go wild. Nature is so fantastic, enjoy it. Let it make
              you happy.
            </p>
          </div>
        </a>
      </div>
    </Fragment>
  );
}
