import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Card from "./componets/Card";
import Ping from "./componets/class/Ping";
import PingF from "./componets/functional/PingF";
import CounterDown from "./componets/class/CounterDown";
// import FromDate from "./componets/class/FromDate";
import Counter2 from "./componets/class/Counter2";

// import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ping></Ping>
    <PingF></PingF>
    <CounterDown></CounterDown>
    {/* <FromDate></FromDate> */}
    <Counter2></Counter2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
