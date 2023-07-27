import { useSelector } from 'react-redux';

export default function MissionsList() {
  const { missions } = useSelector((store) => store.missions);
  const missionsList = missions.filter((mission) => mission.status);
  return (
    <>
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
    </>
  );
}
