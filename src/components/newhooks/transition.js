import React, { useEffect, useState, useTransition } from 'react';
import dummydata from './dummydata';

const Transition = () => {
  const [data, setData] = useState([]);
  const [ispending, startTransition] = useTransition();
  const [active, setActive] = useState(false);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    setData(dummydata());
  }, []);
  //console.log(data);
  const search = (e) => {
    let temp = e.target.value;
    //  setTempData(data.filter((v) => v.includes(temp)));
    startTransition(() => setTempData(data.filter((v) => v.includes(temp))));
    // console.log(tempData);
    e.target.value.length > 0 ? setActive(true) : setActive(false);
  };

  return (
    <div className="ui disabled icon input">
      <i className="search icon"></i>

      <div className="ui fluid multiple search selection dropdown">
        <input type="hidden" name="country" />
        <i className="dropdown icon"></i>
        <input type="text" placeholder="search" onChange={(e) => search(e)} />

        <div className={`ui modal ${active ? 'active' : ''}`}>
          <div className="header">people data</div>
          <div className="content">
            {tempData.map((v, i) => {
              if (active) {
                return <p key={i}>{v}</p>;
              }
            })}
          </div>
        </div>

        <div className="menu"></div>
      </div>
      <a className="ui red tag label">useTransition</a>
      <label>{ispending ? 'loading....' : ''}</label>
    </div>
  );
};

export default Transition;
