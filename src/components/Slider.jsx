import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
  // const interval = setInterval(() => {
  //   increment();
  // }, 2000);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const imgArr = [
    {
      url: "images/about.jpg",
      text: "sample text1",
    },
    {
      url: "images/founder.jpg",
      text: "sample text2",
    },
    {
      url: "images/founder2.jpg",
      text: "sample text3",
    },
    {
      url: "images/logo.jpg",
      text: "sample text4",
    },
    {
      url: "images/why.jpg",
      text: "sample text5",
    },
  ];

  const [image, setImage] = useState(0);

  const increment = () => {
    if (image < imgArr.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };
  const decrement = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(imgArr.length - 1);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setImage((prevIndex) =>
          prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
        ),

      2000
    );

    return () => {
      resetTimeout();
    };
  }, [image]);

  useEffect(() => {
    const banner = document.getElementById("banner");
    banner.style.background = `url(${imgArr[image].url})`;
    console.log(imgArr[image].url);
  }, [image]);
  return (
    <div className="slider">
      <button
        onClick={() => {
          decrement();
        }}
      >
        previous
      </button>
      <div id="banner">
        <p className="banner-text">{imgArr[image].text}</p>
      </div>
      <button
        onClick={() => {
          increment();
        }}
      >
        next
      </button>
    </div>
  );
};
export default Slider;
