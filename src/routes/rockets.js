import Rocket from 'components/Rocket';
import getRockets from 'features/Rockets/RocketsThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rocket);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <ul className="container">
      {
        rockets.map((rocket) => (<Rocket key={rocket.id} data={rocket} />))
      }
    </ul>
  );
};

export default Rockets;
