import React from 'react';
import DebouncingThrottling from './components/de&throt';
import NewHooks from './components/newhooks';
import UseCallBackanduseMemo from './components/useCallback&useMemo';
import lexicalScope from './components/lexicalScope';
import LexicalScope from './components/lexicalScope';
import Effects from './components/useEffectvsuseLayoutEffect';
const App = () => {
  return (
    <div>
      <div
        className="ui card"
        style={{ width: '1000px', margin: '20px', padding: '50px' }}
      >
        <DebouncingThrottling />
      </div>
      <div
        className="ui card"
        style={{ width: '1000px', margin: '20px', padding: '50px' }}
      >
        <UseCallBackanduseMemo />
      </div>
      <div
        className="ui card"
        style={{
          width: '1000px',
          margin: '20px',
          padding: '50px',
          height: '20cm',
        }}
      >
        <NewHooks />
      </div>
      <div
        className="ui card"
        style={{
          width: '1000px',
          margin: '20px',
          padding: '50px',
          height: '10cm',
        }}
      >
        <LexicalScope />
      </div>{' '}
      <div
        className="ui card"
        style={{
          width: '1000px',
          margin: '20px',
          padding: '50px',
          height: '10cm',
        }}
      >
        <Effects />
      </div>
    </div>
  );
};

export default App;
