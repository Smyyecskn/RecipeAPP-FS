import React from "react";
import meal2 from "../assets/meal2.svg";

const Header = () => {
  return (
    <div className="mx-auto head bg-light border border-dark">
      <img width="50px" src={meal2} alt="meal" />
      <h2>🍽️SMYYE RECIPE APP </h2>
    </div>
  );
};

export default Header;
