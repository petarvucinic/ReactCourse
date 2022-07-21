import React from "react";
import style from "./MainButton.module.css";

const MainButton = (props) => {
  const { text, color = "dark", radius, size } = props;

  //   xs sm md xl
  const getColor = () => {
    switch (color) {
      case "dark":
        return style.main;
      case "red":
        return style.red;
      case "yellow":
        return style.yellow;
      case "white":
        return style.white;
      case "blue":
        return style.blue;
      default:
        return style.main;
    }
  };

  const sizeRadius = () => {
    switch (radius) {
      case "xs":
        return style.xs;
      case "sm":
        return style.sm;
      case "md":
        return style.md;
      case "lg":
        return style.lg;
      case "xl":
        return style.xl;
      default:
        return style.main;
    }
  };
  const getSize = () => {
    switch (size) {
        case "xs":
          return style.xs_;
        case "sm":
          return style.sm_;
        case "md":
          return style.md_;
        case "lg":
          return style.lg_;
        case "xl":
          return style.xl_;
        default:
          return style.main;
      }
  }
  return (
    <div style={{display: "flex", justifyContent : "center"}}>
      <button
        className={`${getColor()} ${style.main} ${
          style.normal
        } ${sizeRadius()} ${getSize()}`}
      >
        {text}
      </button>
    </div>
  );
};

export default MainButton;
