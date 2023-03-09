import ProfileItem from 'components/ProfileItem';
import { useSelector } from 'react-redux';
import styles from '../styles/Profilemiss.module.css';

const Profile = () => {
  const { missionReducer, rocket } = useSelector((state) => state);

  const newProf = missionReducer.filter((mission) => mission.joined === true);
  const reservedRockets = rocket.rockets.filter((rocket) => rocket.reserved === true);

  const myMission = () => (newProf.length > 0
    ? newProf.map((mission) => (
      <ProfileItem
        key={mission.mission_id}
        name={mission.mission_name}
      />
    ))
    : <div className={styles.noMission}>No Mission Available</div>);

  const myRockets = () => (reservedRockets.length > 0
    ? newProf.map((rocket) => (
      <ProfileItem
        key={rocket.id}
        name={rocket.name}
      />
    ))
    : <div className={styles.noMission}>No Reserved Rocket Available</div>);

  return (
    <div className={styles.myProfile}>
      <div className={styles.missionContainer}>
        <h2>My Missions</h2>
        <div className={styles.items}>
          <ul>{myMission()}</ul>
          <ul>{myRockets()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
