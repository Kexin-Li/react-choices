# React Choices Answer Component

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Kexin-Li/react-choices/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-choices-answer.svg?style=flat)](https://www.npmjs.com/package/react-choices-answer) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Kexin-Li/react-choices/pulls)

This is a React choices and answer component. Helping you build a bunch of dynamic inputs faster.

## Install

```shell
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

```shell
# install dependences
yarn

# bundle file
yarn build
```

Then, you can into `demo` directory to see how it looks:

```shell
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
