import { useSelector } from 'react-redux';

export default function MissionsList() {
  const { missions } = useSelector((store) => store.missions);
  const missionsList = missions.filter((mission) => mission.status);

  return (
    <>
      <div>
        <h2>My Missions</h2>
        <div>
          {
            missionsList.lenght === 0 ? (
              <h3>No missions yet</h3>
            ) : (
              <ul className="m-0 p-0">
                {missionsList.map((mission, index) => (
                  <li key={mission.id} className={`list-group-item border ${index % 2 === 0 ? 'bg-primary-subtle' : 'bg-white'}`}>
                    {mission.name}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
      <div>
        <h2>My Rockets</h2>
                    {reservedRocket.length ? (
              reservedRocket.map((rocket) => (
                <li key={rocket.id} className="list-group-item">
                  {rocket.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">No Reserved Rockets</li>
            )}
      </div>
    </>
  );
}
