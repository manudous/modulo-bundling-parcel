import React from "react";
const logoImg = require("./content/logo_2.png");
const classes = require("./styles.scss");

export const HelloWorld: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.redBackground}>
      <h1>Hello World from Component</h1>
    </div>
    <img src={logoImg} />
  </div>
);
