import { useSelector } from 'react-redux';

export default function MissionsList() {
  const { missions } = useSelector((store) => store.missions);
  const missionsList = missions.filter((mission) => mission.status);
  const reservedRocket = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved === true));

  return (
    <>
      <div className="my-profile d-flex flex-row justify-content-around elemento-a-row w-5">
        <div>
          <h2>My Missions</h2>
          <div>

              <ul className="m-0 p-0">
            {missionsList.length ? (
              missionsList.map((mission, index) => (
                <li key={mission.id} className={`list-group-item border ${index % 2 === 0 ? 'bg-primary-subtle' : 'bg-white'}`}>
                  {mission.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">No Reserved Missions</li>
            )}
              </ul>
            
          
          </div>
        </div>
        <div>
          <h2>My Rockets</h2>
          <ul>
            {reservedRocket.length ? (
              reservedRocket.map((rocket, index) => (
                <li key={rocket.id} className={`list-group-item border ${index % 2 === 0 ? 'bg-primary-subtle' : 'bg-white'}`}>
                  {rocket.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">No Reserved Rockets</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
