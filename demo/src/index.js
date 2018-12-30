import React from "react";
import { render } from "react-dom";

import Choices from "react-choices-answer";

render(
  <div>
    <h2>React choices answer demo</h2>
    <Choices
      choices={["c1", "c2", "c3"]}
      answer={0}
      handleSubmit={(choices, answer) => e => {
        e.preventDefault();
        console.log(answer);
      }}
    />
  </div>,
  document.getElementById("app")
);
