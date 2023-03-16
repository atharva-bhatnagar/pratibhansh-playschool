import React from "react";

const Gallery = () => {
  const imgArr = [
    "images/about.jpg",
    "images/founder.jpg",
    "images/founder2.jpg",
    "images/logo.jpg",
    "images/why.jpg",
  ];
  return (
    <div className="gallery">
      <h2>GALLERY</h2>
      <ul className="gallery-head">
        <li>Photos</li>
        <li>Videos</li>
      </ul>
      <div>
        {imgArr.map((url) => {
          console.log(url);
          return (
            // <p>{url}</p>
            <img className="gallery-img" src={url} alt="img" />
          );
        })}
      </div>
      <h4>View All +</h4>
    </div>
  );
};
export default Gallery;
