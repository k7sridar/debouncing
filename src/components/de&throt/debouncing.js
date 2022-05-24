import React, { useState } from 'react';

const Debouncing = () => {
  const [time, settime] = useState(0);

  const fnDebounce = () => {
    settime(time + 1);
  };
  let timeout;

  return (
    <>
      <button
        className="ui primary button"
        onClick={(e) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => fnDebounce(), 250);
        }}
      >
        debounce
      </button>
      <label>function called for {time}</label>
    </>
  );
};

export default Debouncing;
