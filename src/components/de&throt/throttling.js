import React, { useLayoutEffect, useState } from 'react';

const Throttling = () => {
  const [time, settime] = useState(0);
  let pause;
  const throttling = () => {
    if (pause) return;
    pause = true;

    setTimeout(() => {
      settime((s) => s + 1);
      pause = false;
    }, 500);
  };
  return (
    <>
      <button className="ui primary button" onClick={() => throttling()}>
        Throttle
      </button>
      <label>function called for {time}</label>
    </>
  );
};

export default Throttling;
