import React, { useEffect, useRef, useState } from "react";

const Gallery = ({ nav }) => {
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const [image, setImage] = useState(0);
  const imgArr = [
    "images/about.jpg",
    "images/founder.jpg",
    "images/founder2.jpg",
    "images/logo.jpg",
    "images/why.jpg",
  ];
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setImage((prevIndex) =>
          prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
        ),

      4000
    );

    return () => {
      resetTimeout();
    };
  }, [image]);
  return (
    <div className="gallery" id="gallery">
      <h1>GALLERY</h1>
      {/* <ul className="gallery-head">
        <li>Photos</li>
        <li>Videos</li>
      </ul> */}
      <div className="img-container">
        <img className="enlarged-img" alt="enlarged" src={imgArr[image]} />
        <div className="img-grid">
          {imgArr.map((url) => {
            console.log(url);
            return (
              // <p>{url}</p>
              <img className="gallery-img" src={url} alt="img" />
            );
          })}
        </div>
      </div>
      <h4 style={{ cursor: "pointer" }} onClick={() => nav("/Gallery")}>
        View All +
      </h4>
    </div>
  );
};
export default Gallery;
