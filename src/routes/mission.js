import React, { useEffect } from 'react';
import MissionList from 'components/missionList';
import styles from 'styles/MissionList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from 'features/Mission/mission';

let render = true;

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="container">
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>.</th>
            <td />
          </tr>
          {missions.map((mission) => (
            <MissionList
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              joined={mission.joined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
