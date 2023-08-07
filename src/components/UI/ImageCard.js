import React from 'react';

const ImageCard = ({ tag, index, name, url }) => {
  return (
    <img
      className="h-96 w-full object-cover shadow-md rounded"
      tags={tag}
      key={index}
      alt={name}
      src={url}
    />
  );
};

export default ImageCard;
