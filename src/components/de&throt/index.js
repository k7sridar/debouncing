import Debouncing from './debouncing';
import Throttling from './throttling';

const DebouncingThrottling = () => {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <h1 style={{ color: 'red' }}> Debouncing and Throttling</h1>
      <br />

      <div>
        <Debouncing />
      </div>
      <br />
      <br />
      <div>
        <Throttling />
      </div>
    </div>
  );
};

export default DebouncingThrottling;
