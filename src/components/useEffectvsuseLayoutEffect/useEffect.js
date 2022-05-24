import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
const UseEffect = () => {
  const [state, setState] = useState('');
  const [trigger, setTrigger] = useState(0);
  const [sample, setSample] = useState('');
  const label = useRef();
  useEffect(() => {
    if (state > 0) {
      label.current.style = { color: 'goldenrod', flex: 'centre' };
    }
  }, [state]);
  const stateFn = () => {
    setState((state) => state + 1);
  };

  return (
    <div>
      <h1 style={{ color: 'yellow' }}>UseEffect</h1>
      <button onClick={() => stateFn()} className="ui primary button">
        ClickME
      </button>
      <label style={{ fontFamily: 'fantasy', color: 'goldenrod' }}>{}</label>
      <h1>Button clicked for</h1>
      <label ref={label} style={{ fontFamily: 'monospace', color: 'violet' }}>
        {trigger}
      </label>
    </div>
  );
};

export default UseEffect;
