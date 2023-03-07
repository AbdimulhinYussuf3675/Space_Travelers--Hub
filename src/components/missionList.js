import React from 'react';
import styles from '../styles/MissionList.module.css';

const MissionList = () => (
  <div className={styles.missionItems}>
    <div className={styles.missionHead}>
      <h3>Elon Musk</h3>
    </div>
    <div className={styles.missionInfo}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        aliquet diam. Cras ullamcorper est quis odio efficitur suscipit. Quisque
        vitae cursus dolor. Cras vitae justo velit. Phasellus venenatis iaculis
        ornare. Etiam egestas egestas vulputate. Pellentesque nibh lorem, cursus
        eget dolor ut, finibus fermentum est. Vivamus eu consequat elit,
        tincidunt egestas diam. Donec tincidun
      </p>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.memberBtn}>
        NOT A MEMBER
      </button>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.joinMissionBtn}>
        Join Mission
      </button>
    </div>
  </div>
);

export default MissionList;
