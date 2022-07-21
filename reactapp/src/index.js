import React from "react";
import ReactDOM from "react-dom/client";
import MainButton from "./componets/functional/MainButton/MainButton";
// import Composition from "./componets/functional/Composition/Composition";
// import SearchMock from "./componets/functional/SearchMock/SearchMock";
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
    {/* <SearchMock></SearchMock> */}
    {/* <Composition left={<SearchMock />} right={<SimpleForm />}>
      <p>text</p>
    </Composition> */}


    <MainButton size="xs"radius="xs" color="" text="Settings"/>
    <MainButton size="sm" radius="sm" color="white" text="Settings"/>
    <MainButton size="md" radius="md" color="red" text="Settings"/>
    <MainButton size="lg" radius="lg" color="yellow" text="Settings"/>
    <MainButton size="xl" radius="xl" color="blue" text="Settings"/>

  </React.StrictMode>
);
