import React from 'react';

const Title = ({ content }) => {
  return (
    <h1 className="text-3xl ml-4 md:text-5xl my-10 border-l-4 border-sky-700 py-2 pl-5 text-gray-700">
      <strong>{content}</strong>
    </h1>
  );
};

export default Title;
