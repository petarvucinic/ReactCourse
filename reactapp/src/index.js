import React from "react";
import ReactDOM from "react-dom/client";
import SimpleForm from "./componets/functional/SimpleForm/simpleForm";
import TextInput from "./componets/InputForm/TextInput";

// import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleForm></SimpleForm>
    <TextInput></TextInput>
  </React.StrictMode>
);
