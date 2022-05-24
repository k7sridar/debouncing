import DeferedValue from './deferedValue';
import Transition from './transition';

const NewHooks = () => {
  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1 style={{ color: 'red' }}>UseDeferredValue,UseTransition</h1>
      <table>
        <thead>
          <tr>
            <th>
              <div style={{ margin: '20px', padding: '20px' }}>
                <DeferedValue />
              </div>
            </th>
            <th>
              <div style={{ margin: '20px', padding: '20px' }}>
                <Transition />
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default NewHooks;
