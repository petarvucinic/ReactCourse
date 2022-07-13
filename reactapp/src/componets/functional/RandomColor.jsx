import React, { useState, useEffect } from "react";

function RandomColor() {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [blue, setBlue] = useState(0);
  let [size, setSize] = useState(100);

  const random = () => {
    const redLocal = Math.round(Math.random() * 255);
    const greenLocal = Math.round(Math.random() * 255);
    const blueLocal = Math.round(Math.random() * 255);

    setRed(redLocal);
    setGreen(greenLocal);
    setBlue(blueLocal);

    setSize(Math.round(Math.random() * 500 + 100));
  };

  useEffect(() => {
    setInterval(random, 2500);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
}

export default RandomColor;
