import React, { useState } from 'react';

const App = (props) => {
  // これでもいい
  // const initialStates = {
  //   name: '金額',
  //   price: 1000,
  // };
  // const [name, setName] = useState(initialStates.name);
  // const [name, setName] = useState(initialStates.name);
  const [state, setState] = useState(props);
  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState(props.price);
  const reset = () => {
    // setPrice(props.price);
    // setName(props.name);
    setState(props);
  };
  const { name, price } = state;
  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={reset}>Reset</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: 'sample',
  price: 1000,
};

export default App;
