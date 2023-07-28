import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRocket } from '../../redux/rockets/rocketsSlice';
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
            <li key={rocket.id}>
              <img
                src={rocket.flickr_images[0]}
                className="rocket-img"
                alt={rocket.name}
              />
              <div className="rocket-textBox flex">
                <h3 className="rocket-name">{rocket.name}</h3>
                <p className="rocket-description">{rocket.description}</p>
                <button type="button" className="reserveBttn">
                  Reserve Rocket
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Rockets;
