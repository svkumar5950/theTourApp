import React from "react";

export default function Gallery(props) {
  return (
    <div className="app-gallery">
      <div className="gallery-section">
        {props.data.map(data => {
          const { id, image } = data;
          return (
            <div key={id} className="gallery-section-img">
              <img src={image} alt="pic from trips" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
