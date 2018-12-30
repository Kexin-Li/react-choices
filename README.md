# React Choices Answer Component

This is a React choices and answer component. Helping you build a bunch of dynamic inputs faster.

## Install

```bash
# npm
npm install react-choices-answer

# yarn
yarn add react-choices-answer
```

## Usage

```js
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
```

And here is an example in `demo` directory, you can download this project and run it.

## API

| Property     | Description       | type   | default |
| ------------ | ----------------- | ------ | ------- |
| choices      | choices inputs    | array  | -       |
| answer       | answer checkbox   | number | -       |
| handleSubmit | callback function | func   | -       |

## Development

```bash
# install dependences
yarn

# bundle file
yarn build
```

Then, you can into `demo` directory to see how it looks:

```bash
# install dependences again
yarn

# change import in `src/index.js`
import Choices from "../../lib";

# run it
yarn start
```

Now, open your browser and type `localhost:8080`. Mostly webpack will open your browser automaticlly, never mind.

## License

MIT
