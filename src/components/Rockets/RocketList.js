import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservationRocket } from '../../redux/rockets/rocketsSlice';

const RocketList = ({
  img, id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <img src={img} className="rocket-img" alt={name} />
      <div className="rocket-textBox flex">
        <h3 className="rocket-name">{name}</h3>
        {reserved ? (
          <>
            <p className="rocket-description">
              <span className="rocket-badge">Reserved</span>
              {description}
            </p>
            <button
              type="button"
              className="cancelBttn"
              onClick={() => dispatch(cancelReservationRocket(id))}
            >
              Cancel Reservation
            </button>
          </>
        ) : (
          <>
            <p className="rocket-description">{description}</p>
            <button
              type="button"
              className="reserveBttn"
              onClick={() => dispatch(reserveRocket(id))}
            >
              Reserve Rocket
            </button>
          </>
        )}
      </div>
    </li>
  );
};

RocketList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketList;
