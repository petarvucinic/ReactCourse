import React from "react";
import ReactDOM from "react-dom/client";
import SearchMock from "./componets/functional/SearchMock/SearchMock";
// import TemperatureConverter from "./componets/functional/TemperatureConverter/TemperatureConverter";
// import SimpleForm from "./componets/functional/SimpleForm/simpleForm";
// import TextInput from "./componets/InputForm/TextInput";



// import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SimpleForm></SimpleForm> */}
    {/* <TextInput></TextInput> */}
    {/* <TemperatureConverter></TemperatureConverter> */}
    <SearchMock></SearchMock>
  </React.StrictMode>
);
