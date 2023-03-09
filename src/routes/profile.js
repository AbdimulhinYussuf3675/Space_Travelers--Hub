import ProfileItem from 'components/ProfileItem';
import { useSelector } from 'react-redux';
import styles from '../styles/Profilemiss.module.css';

const Profile = () => {
  const { missionReducer, rocket } = useSelector((state) => state);
  const newProf = missionReducer.filter((mission) => mission.joined === true);
  const reservedRockets = rocket.rockets.filter((item) => item.reserved === true);

  const myMission = () => (newProf.length > 0
    ? newProf.map((mission) => (
      <ProfileItem
        key={mission.mission_id}
        name={mission.mission_name}
      />
    ))
    : <div className={styles.noMission}>No Mission Available</div>);

  const myRockets = () => (reservedRockets.length > 0
    ? reservedRockets.map((rocket) => (
      <ProfileItem
        key={rocket.id}
        name={rocket.name}
      />
    ))
    : <div className={styles.noMission}>No Reserved Rocket Available</div>);

  return (
    <div className={styles.myProfile}>
      <div className={styles.missionContainer}>
        <div>
          <h2>My Mission</h2>
          <ul>{myMission()}</ul>
        </div>
        <div>
          <h2>My Rockets</h2>
          <ul>{myRockets()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
