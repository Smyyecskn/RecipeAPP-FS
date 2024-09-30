import React from "react";
import meal2 from "../assets/meal2.svg";
import Form from "./Form";

const Header = () => {
  return (
    <div>
      <div className="mx-auto head  border border-dark">
        <img width="50px" src={meal2} alt="meal" />
        <h2>🍽️SMYYE FOOD APP </h2>
                <Form />

      </div>
      <div>
      </div>
    </div>
  );
};

export default Header;
