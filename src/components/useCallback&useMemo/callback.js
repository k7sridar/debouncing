import React, { useCallback, useState } from 'react';
import List from './list';

const Callback = () => {
  const [state, setState] = useState(0);
  const [theme, setTheme] = useState(false);
  const [bol, setBol] = useState(false);

  const increment = useCallback(() => {
    return [state, state + 1, state + 2];
  }, [state]);
  const themeToggle = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Usecallback</h1>
      <input type="number" onChange={(e) => setState(+e.target.value)}></input>
      <button onClick={() => themeToggle()}>toggle theme</button>

      <div
        style={{
          transition: 'ease-out',
          backgroundColor: theme ? 'black' : 'white',
          color: theme ? 'white' : 'black',
        }}
      >
        <List props={increment} bol={bol} setBol={setBol} />
      </div>
    </div>
  );
};

export default Callback;
