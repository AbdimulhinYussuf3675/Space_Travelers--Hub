import { PropTypes } from 'prop-types';
import styles from 'styles/Rocket.module.css';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { reserveRocket } from 'features/Rockets/Rockets';

const Rocket = ({ data }) => {
  const {
    id, image, name, description, reserved,
  } = data;
  const dispatch = useDispatch();

  return (
    <li className={styles.rocket}>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        {reserved && <Badge bg="secondary">reserved</Badge>}
        <p>{description}</p>
        <button type="button" className={`btn reserved-${reserved}`} onClick={() => dispatch(reserveRocket(id))}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
