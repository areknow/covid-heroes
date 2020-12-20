import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import Hero from "./sections/hero";
import Cause from "./sections/cause";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Cause />
  </React.StrictMode>,
  document.getElementById("root")
);
