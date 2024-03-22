import React from "react";

const Card = () => {
  return (
    <div className="card relative w-full px-8">
      <h1 className="relative font-bold text-4xl my-4">Crossby</h1>
      <h3 className="relative font-semibold text-gray-600 text-lg">Subtitle</h3>
      <p className="w-[60%] font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </p>
      <p className="absolute text-gray-500 bottom-5 right-0 date">
        (June, 2022 - present)
      </p>
    </div>
  );
};

export default Card;
