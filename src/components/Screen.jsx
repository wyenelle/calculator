import React from "react";
import "./Screen.css";
import { Textfit } from "react-textfit";

const Screen = () => {
  return (
    <div className="screen">
      <Textfit mode="single" max={90} className="textfit-screen">
        1234555557645748
      </Textfit>
    </div>
  );
};

export default Screen;
