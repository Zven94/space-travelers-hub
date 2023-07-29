import { useSelector } from 'react-redux';

export default function MissionsList() {
  const { missions } = useSelector((store) => store.missions);
  const missionsList = missions.filter((mission) => mission.status);
  const reservedRocket = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved === true));

  return (
    <>
      {
        missionsList.lenght === 0 ? (
          <h3>No missions yet</h3>
        ) : (
          <ul>
            {missionsList.map((mission) => (
              <li key={mission.id} className="list-group-item">
                {mission.name}
              </li>
            ))}
            {reservedRocket.length ? (
              reservedRocket.map((rocket) => (
                <li key={rocket.id} className="list-group-item">
                  {rocket.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">No Reserved Rockets</li>
            )}
          </ul>
        )

      }
    </>
  );
}
