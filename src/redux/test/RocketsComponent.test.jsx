import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Rockets from '../../components/Rockets/RocketsComponent';

const mockStore = configureStore([]);

describe('Rockets', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            img: 'rocket1.jpg',
            id: '1',
            name: 'Falcon 1',
            description: 'Rocket 1 description',
            reserved: false,
          },
          {
            img: 'rocket2.jpg',
            id: '2',
            name: 'Falcon 9',
            description: 'Rocket 2 description',
            reserved: false,
          },
        ],
        status: 'succeeded',
      },
    });
  });

  test('renders rocket list correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1 description')).toBeInTheDocument();
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2 description')).toBeInTheDocument();
  });

  test('displays loading state', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        status: 'loading',
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error state', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        status: 'failed',
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Failed to load rocket data')).toBeInTheDocument();
  });
});
