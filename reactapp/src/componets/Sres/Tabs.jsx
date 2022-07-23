import React from "react";
import { useState } from "react";
import style from "./Tabs.module.css";

const Tabs = (props) => {
  const { onChange, tabsList } = props;
  const [selected, setSelected] = useState(0);
  const localHandleChange = (index) => {
    setSelected(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className={style.tabsContainer}>
      {tabsList.length > 0 &&
        tabsList.map((title, index) => {
          return (
            <div
              onClick={() => localHandleChange(title)}
              key={index}
              className={`${style.tabItem} ${
                selected === index ? style.active : ""
              }`}
            >
              <p>{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tabs;
