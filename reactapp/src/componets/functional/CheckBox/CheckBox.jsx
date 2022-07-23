import React from "react";
import style from "./CheckBox.module.css";

const CheckBox = ({ size, radius, color }) => {
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
        return;
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
        return;
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
        return;
    }
  };
  return (
    <div className={style.main}>
      <input
        type="checkbox"
        className={`${getColor()} ${getSize()} ${sizeRadius()}`}
      />
    </div>
  );
};

export default CheckBox;
