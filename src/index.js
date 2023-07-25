import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rockets from './router/Rockets';
import Missions from './router/Missions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rockets />,
  },
  {
    path: "/missions",
    element: <Missions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
