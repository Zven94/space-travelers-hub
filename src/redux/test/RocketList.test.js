import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketList from '../../components/Rockets/RocketList';
import { reserveRocket, cancelReservationRocket } from '../rockets/rocketsSlice';

const mockStore = configureStore([]);

describe('RocketList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders rocket information correctly', () => {
    const rocket = {
      img: 'rocket1.jpg',
      id: '1',
      name: 'Falcon 1',
      description: 'Rocket 1 description',
      reserved: false,
    };

    render(
      <Provider store={store}>
        <RocketList
          img={rocket.img}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1 description')).toBeInTheDocument();
  });

  test('dispatches reserveRocket action when Reserve Rocket button is clicked', () => {
    const rocket = {
      img: 'rocket-image.jpg',
      id: '123',
      name: 'Falcon 9',
      description: 'Rocket description',
      reserved: false,
    };

    render(
      <Provider store={store}>
        <RocketList
          img={rocket.img}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Reserve Rocket'));

    const actions = store.getActions();
    expect(actions).toContainEqual(reserveRocket(rocket.id));
  });

  test('dispatches cancelReservationRocket action when Cancel Reservation button is clicked', () => {
    const rocket = {
      img: 'rocket-image.jpg',
      id: '123',
      name: 'Falcon 9',
      description: 'Rocket description',
      reserved: true,
    };

    render(
      <Provider store={store}>
        <RocketList
          img={rocket.img}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));

    const actions = store.getActions();
    expect(actions).toContainEqual(cancelReservationRocket(rocket.id));
  });
});