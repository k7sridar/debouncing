import React, { useState } from 'react';

const Lexical = () => {
  const [display, setDisplay] = useState([]);
  const [bind, setBind] = useState(false);
  let person = {
    name: 'Sridhar',
    age: 28,
    defineAge: function () {
      setDisplay([this.age]);
      console.log('hai');
      function ageAfter5years() {
        console.log(display);
        setDisplay([this.age + 5]);
      }
      setDisplay([...display, this.age]);

      //ageAfter5years();

      bind ? ageAfter5years.call(person) : setDisplay([...display]);
    },
  };
  return (
    <div>
      <h1 style={{ color: 'red' }}>Lexical</h1>
      <button className="ui primary button" onClick={() => person.defineAge()}>
        NormalFunction
      </button>
      <button className="ui danger button" onClick={() => setBind(!bind)}>
        {bind ? 'Binded' : 'Not Binded'}
      </button>
      <ol>
        {display.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ol>
    </div>
  );
};

export default React.memo(Lexical);
