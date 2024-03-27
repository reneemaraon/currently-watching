import React, { useEffect, useState } from 'react';

const ImageWithOpacityTransition = ({ src, styleAttach }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    const img = new Image();
    img.onload = handleLoad;
    img.src = src;

    return () => {
      img.onload = null; // Clean up the event listener
    };
  }, [src]);

  return (
    <img
      className={`${styleAttach} ease-in transition-opacity duration-150 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      src={src}
      alt="Your image alt text"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default ImageWithOpacityTransition;
