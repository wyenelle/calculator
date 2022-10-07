import React, {useContext} from "react";
import "./Screen.css";
import { Textfit } from "react-textfit";
import calc_context from "./context";


const Screen = () => {
  const {initialState} = useContext(calc_context)
  return (
    <div className="screen">
      <Textfit mode="single" max={90} className="textfit-screen">
        {initialState}
      </Textfit>
    </div>
  );
};

export default Screen
