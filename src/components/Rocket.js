import { PropTypes } from 'prop-types';
import styles from 'styles/Rocket.module.css';
import Button from 'react-bootstrap/Button';

const Rocket = ({ data }) => {
  const {
    id, image, name, description,
  } = data;
  return (
    <li className={styles.rocket} key={id}>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Button type="button" variant="primary">Reserve Rocket</Button>
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
  }).isRequired,
};

export default Rocket;
