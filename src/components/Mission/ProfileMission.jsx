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
          <ul>
            {missionsList.map((mission) => (
              <li key={mission.id} className="list-group-item">
                {mission.name}
              </li>
            ))}
          </ul>
        )

      }
    </>
  );
}
