import React from "react";
import { render } from "react-dom";

import BoilerplateComponent from "react-choices-answer";
// import BoilerplateComponent from "../../lib";

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <BoilerplateComponent
      label="My React boilerplate component label: "
      onChange={val => console.log(val)}
    />
  </div>,
  document.getElementById("app")
);
