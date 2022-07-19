import React from "react";
import { useState } from "react";

const TemperatureConverter = (props) => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenneit] = useState(0);
  function toCelsius() {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenHeit() {
    return (celsius * 9) / 5 + 32;
  }
  return (
    <div>
      <TemperatureInput type="Celsius" value={celsius} setValue={setCelsius} />
      <button
        onClick={() => {
          const fahrenheitValue = toFahrenHeit(celsius);
          setFahrenneit(fahrenheitValue);
        }}
      >
        Convert to fahrenheit
      </button>
      <br></br>
      <br></br>
      <TemperatureInput
        type="Fahrenheit"
        value={fahrenheit}
        setValue={setFahrenneit}
      />
      <button
        onClick={() => {
          const celsiusValue = toCelsius(fahrenheit);
          setCelsius(celsiusValue);
        }}
      >
        Convert to Celsius
      </button>
    </div>
  );

  function TemperatureInput(props) {
    const { type = "Celsius", value, setValue } = props;

    return (
      <div>
        <label>{type}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }
};

export default TemperatureConverter;
