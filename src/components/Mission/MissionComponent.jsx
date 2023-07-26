import './MissionComponent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { missionsData, join, leave } from '../../redux/Missions/missionSlice';

function MissionComponent() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(missionsData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <h2>Missons</h2>
        <table>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {missions?.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>

              <td>
                {mission.status ? (
                  <span className="badge text-bg-primary">Active member</span>
                ) : (
                  <span className="badge text-bg-secondary">Not a member</span>
                )}
              </td>
              <td className="text-center col-2">
                {mission.status ? (
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(leave(mission.id))}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(join(mission.id))}
                  >
                    Join Mission
                  </button>
                )}
              </td>

            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default (MissionComponent);
