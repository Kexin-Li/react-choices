# react-choices

React Choices!

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Choices from '../src';

const App = () => {
  const handleSubmit = (choices, answer) => e => {
    e.preventDefault();
    alert(`chocies: ${choices}; answer:${answer}`);
  };

  return <Choices choices={['hello', 'hi']} answer={0} handleSubmit={handleSubmit} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
```

## API

| 参数    | 说明 | 类型   | 可选值 | 默认值 |
| ------- | ---- | ------ | ------ | ------ |
| choices | 选项 | array  |        | 必填   |
| answer  | 答案 | number |        | 必填   |

## Development

```js
yarn

yarn start
```

Open http://localhost:8080

## License

MIT ©️ Li Kexin
