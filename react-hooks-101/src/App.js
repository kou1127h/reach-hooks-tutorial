import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;
  // レンダリングの後で呼ばれる
  // Mountedに似てる
  // updateの際も呼ばれる
  useEffect(() => {
    console.log('this is like componentDidMount or updated');
  });
  // こっちは一回だけ
  useEffect(() => {
    console.log('this is like componentDidMount');
  }, []);
  useEffect(() => {
    console.log('nameが更新された時だけ出る');
  }, [name]);
  const reset = () => {
    setState(props);
  };

  return (
    <>
      <p>
        現在の{name}は{price}円です.
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
