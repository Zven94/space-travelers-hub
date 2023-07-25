import './MissionComponent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { missionsData } from '../../redux/Missions/missionSlice';

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
              <td>{mission.status ? 'Active' : 'Inactive'}</td>
              <td><button type="submit">submit</button></td>
            </tr>
          ))}
        </table>
        {/* {missions.map((missions) => (
          <li key={missions.id}>
            <p>{missions.name}</p>
          </li>
        ))} */}
      </div>
    </>
  );
}

export default MissionComponent;
