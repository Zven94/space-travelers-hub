import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Rockets from './router/Rockets';
import Missions from './router/Missions';
import configureStore from './redux/configureStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rockets />,
  },
  {
    path: '/missions',
    element: <Missions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
