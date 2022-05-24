import React, { useEffect, useState } from 'react';

const List = ({ props, bol, setBol }) => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    setTemp(props);
    setBol(!bol);
    console.log('entered');
  }, [props]);

  return (
    <>
      <label style={bol ? { color: 'red' } : { color: 'green' }}>
        triggered
      </label>
      <ol>
        {temp.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ol>
    </>
  );
};

export default List;
