# react-choices

React Choices!

## Usage

```js
const App = () => {
const choices = ['hello', 'hi', '你好'];
const answer = 0;
const handleSubmit = (choices, answer) => {
    console.log(`chocies: ${choices}; answer:${answer}`);
}
return <Choices choices={choices} answer={answer} handleSubmit={handleSubmit}
}
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

Open http://localhost:8080
```

## License

MIT ©️ Li Kexin
