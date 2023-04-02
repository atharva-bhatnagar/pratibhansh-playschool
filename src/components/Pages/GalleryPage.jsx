import React from "react";

const GalleryPage = () => {
  const imgArr = [
    "images/about.jpg",
    "images/founder.jpg",
    "images/founder2.jpg",
    "images/logo.jpg",
    "images/why.jpg",
    "images/about.jpg",
    "images/founder.jpg",
    "images/founder2.jpg",
    "images/logo.jpg",
    "images/why.jpg",
  ];
  return (
    <div className="gallery-page">
      <h1>GALLERY</h1>
      <div className="gallery-grid">
        {imgArr.map((url) => {
          console.log(url);
          return (
            // <p>{url}</p>
            <img className="gallery-img" src={url} alt="img" />
          );
        })}
      </div>
    </div>
  );
};
export default GalleryPage;
