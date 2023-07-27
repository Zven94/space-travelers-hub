import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import Mission from '../router/Missions';
import MissionComponent from '../components/Mission/MissionComponent';
import MissionsList from '../components/Mission/ProfileMission';

describe('test for missions components', () => {
  const mission = (
    <Provider store={configureStore}>
      <Router>
        <Mission />
      </Router>
    </Provider>
  );

  test('Take snapshot from the element', () => {
    const missionComponent = render(mission);
    expect(missionComponent).toMatchSnapshot();
  });

  const table = (
    <Provider store={configureStore}>
      <Router>
        <MissionComponent />
      </Router>
    </Provider>
  );

  test('Take snapshot from the element', () => {
    const tableComponent = render(table);
    expect(tableComponent).toMatchSnapshot();
  });

  const list = (
    <Provider store={configureStore}>
      <Router>
        <MissionsList />
      </Router>
    </Provider>
  );

  test('Take snapshot from the element', () => {
    const listComponent = render(list);
    expect(listComponent).toMatchSnapshot();
  });
});
