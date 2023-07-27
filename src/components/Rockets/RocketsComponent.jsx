import Navbar from '../Navbar/Navbar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRocket } from '';
import '../assests/RocketsComponent.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

function RocketsComponent() {
  return (
    <Navbar />
  );
}
}
export default RocketsComponent;
