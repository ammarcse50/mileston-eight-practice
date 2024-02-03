import React from "react";
import Feature from "../Features/Feature";

const PriceOption = ({ option }) => {
  const { id, name, features, price } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-center flex flex-col text-white">
      <h2>
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-4xl font-extrabold">/mon</span>
      </h2>
      <h2 className="text-3xl my-7 text-center">{name}</h2>

      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-12 hover:bg-yellow-400 hover:text-black hover:font-bold bg-green-600 w-full px-4 rounded-lg">
        Buy now
      </button>
    </div>
  );
};

export default PriceOption;
