import './RocketsComponent.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRocket } from '../../redux/rockets/rocketsSlice';
import RocketList from './RocketList';
import Navbar from '../Navbar/Navbar';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);
  useEffect(() => {
    if (rockets.length > 0) {
      dispatch(selectRocket(rockets[0]));
    }
  }, [dispatch, rockets]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load rocket data</div>;
  }

  return (
    <>
      <Navbar />
      <section className="rocket-container">
        <ul className="rocket-list flex">
          {rockets.map((rocket) => (
            <RocketList
              key={rocket.id}
              id={rocket.id}
              img={rocket.img}
              name={rocket.name}
              description={rocket.description}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Rockets;
