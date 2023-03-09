import { getMissions } from 'features/Mission/mission';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Profilemiss.module.css';

let render = true;
const Profile = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

  const newProf = missions.filter((mission) => mission.joined === true);

  const profile = (prof) => {
    let output = '';
    if (prof.length === 0) {
      output = <div className={styles.noMission}>No Mission Available</div>;
    } else {
      output = prof.map((mission) => (
        <li key={mission.mission_id} className={styles.missionItems}>
          {mission.mission_name}
        </li>
      ));
    }
    return output;
  };

  return (
    <div className={styles.myProfile}>
      <div className={styles.missionContainer}>
        <h2>My Missions</h2>
        <ul>{profile(newProf)}</ul>
      </div>
    </div>
  );
};

export default Profile;
