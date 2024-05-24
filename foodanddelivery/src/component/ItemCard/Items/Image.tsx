import React from "react";

interface ImageProps {
  imgSrc: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ imgSrc, className }) => {
  return (
    <img
      src={imgSrc}
      alt="Banner"
      className={`w-768 aspect-w-768 aspect-h-238 ${className}`}
    />
  );
};

export default Image;
