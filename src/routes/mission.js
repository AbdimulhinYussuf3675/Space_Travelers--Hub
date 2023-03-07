import React from 'react';
import MissionList from 'components/missionList';
import styles from 'styles/Mission.module.css';

function Missions() {
  return (
    <div className={styles.missionsContainer}>
      <div className={styles.missionsHeader}>
        <div>
          <p>Missions</p>
        </div>
        <div>
          <p>Descriptions</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div />
      </div>
      <MissionList />
    </div>
  );
}

export default Missions;
