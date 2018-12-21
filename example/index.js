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
