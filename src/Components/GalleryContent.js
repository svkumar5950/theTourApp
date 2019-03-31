import React from "react";

export default function GalleryContent(props) {
  return (
    <div>
      <img src={props.data} alt="pic during the tour" />
    </div>
  );
}
