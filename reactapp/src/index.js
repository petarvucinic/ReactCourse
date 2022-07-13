import React from "react";
import ReactDOM from "react-dom/client";
// import Badge1 from "./componets/functional/Badge1";
import Conditional from "./componets/functional/Conditional";

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// // import Card from "./componets/Card";
// import Ping from "./componets/class/Ping";
// import PingF from "./componets/functional/PingF";
// import CounterDown from "./componets/class/CounterDown";
// // import FromDate from "./componets/class/FromDate";
// import Counter2 from "./componets/class/Counter2";
// import Counter2F from "./componets/functional/Counter2F";
// import RandomColor from "./componets/functional/RandomColor";

// import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Ping></Ping>
    <PingF></PingF>
    <CounterDown></CounterDown>
    <Counter2></Counter2>
    <Counter2F></Counter2F>
    <RandomColor></RandomColor> */}
    {/* <Badge1 type="tip1" />
    <Badge1 type="tip2" />
    <Badge1 type="tip3" />
    <Badge1 type="tip4" />
    <Badge1 type="tip5" /> */}
    <Conditional></Conditional>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
