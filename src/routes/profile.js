import ProfileItem from 'components/ProfileItem';
import { useSelector } from 'react-redux';
import styles from '../styles/Profilemiss.module.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer);

  const newProf = missions.filter((mission) => mission.joined === true);

  const myMission = () => (newProf.length > 0
    ? newProf.map((mission) => (
      <ProfileItem
        key={mission.mission_id}
        name={mission.mission_name}
      />
    ))
    : <div className={styles.noMission}>No Mission Available</div>);

  return (
    <div className={styles.myProfile}>
      <div className={styles.missionContainer}>
        <h2>My Missions</h2>
        <div className={styles.items}>
          <ul>{myMission()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
