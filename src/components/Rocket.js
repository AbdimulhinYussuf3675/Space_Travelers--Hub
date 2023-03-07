import { PropTypes } from 'prop-types';

const Rocket = ({
  id, image, name, descripton,
}) => (
  <li key={id}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{descripton}</p>
    <button type="button">Reserve Rocket</button>
  </li>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descripton: PropTypes.string.isRequired,
};

export default Rocket;
