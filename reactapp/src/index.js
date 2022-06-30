import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Card from "./componets/Card";

// import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        title="Petar Vucinic"
        job="Programer "
        url="https://www.w3schools.com/w3css/img_avatar3.png"
      ></Card>
      <Card
        title="Jana Jolovic"
        job="React dev "
        url="https://www.w3schools.com/w3css/img_avatar3.png"
      ></Card>
      <Card
        title="Ajsa Besirovic"
        job="Devloper "
        url="https://www.w3schools.com/w3css/img_avatar3.png"
      ></Card>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
