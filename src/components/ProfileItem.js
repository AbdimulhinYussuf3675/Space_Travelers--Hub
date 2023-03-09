import { PropTypes } from 'prop-types';
import styles from 'styles/Profilemiss.module.css';

const ProfileItem = ({ name }) => {
    return (
        <li className={styles.missionItems}>{name}</li>
    )
}

ProfileItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ProfileItem;