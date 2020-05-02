import React from 'react';
import { add, subtract, multiply, divide } from 'nsp-math';
import './App.css';

function App() {
  const addExample = add(1, 2, 3);
  const subtractExample = subtract(10, 5);
  const multiplyExample = multiply(1, 2, 3);
  const divideExample = divide(10, 5);

  // eslint-disable-next-line no-console
  console.log({
    addExample,
    subtractExample,
    multiplyExample,
    divideExample,
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Example - math.js - ES Module</h1>
      </header>
    </div>
  );
}

export default App;
