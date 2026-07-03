import React from "react";

const Initiates = ({ name }) => {
  const initiates = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return <span> {initiates} </span>;
};

export default Initiates;
