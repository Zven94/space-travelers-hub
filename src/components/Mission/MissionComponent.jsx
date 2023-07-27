import './MissionComponent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Col, Table, Badge,
} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { missionsData, join, leave } from '../../redux/Missions/missionSlice';

function MissionComponent() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    // ask for length in case the elements were already load

    if (!missions.length) {
      dispatch(missionsData());
    }
  }, [dispatch, missions.length]);

  return (
    <>
      <Navbar />
      <Container>
        <Col className="justify-content-center align-items-center">
          <h2>Missons</h2>
          <Table bordered striped>
            <thead>
              <tr>
                <th>Missions</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {missions?.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.name}</td>
                  <td>{mission.description}</td>

                  <td>
                    {mission.status ? (
                      <Badge>Active member</Badge>
                    ) : (
                      <Badge bg="danger">Not a member</Badge>
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
            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
}

export default (MissionComponent);
