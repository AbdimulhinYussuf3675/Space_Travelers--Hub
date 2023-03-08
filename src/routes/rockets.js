import Rocket from 'components/Rocket';
import getRockets from 'features/Rockets/RocketsThunk';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <ul>
      <Rocket id="1" name="Rocket 1" descripton="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas non totam est beatae doloremque nemo, delectus nobis sapiente voluptate atque accusantium, at quis error dolore asperiores possimus ratione libero." image="https://media.istockphoto.com/id/1394951609/photo/space-shuttle-and-launch-rockets-leave-the-earths-atmosphere.jpg?s=612x612&w=0&k=20&c=KjH6bMGbIdeX_wZ5UI9dATzq0UsUxjM90MlJC-XPmnk=" />

      <Rocket id="2" name="Rocket 1" descripton="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas non totam est beatae doloremque nemo, delectus nobis sapiente voluptate atque accusantium, at quis error dolore asperiores possimus ratione libero." image="https://media.istockphoto.com/id/1394951609/photo/space-shuttle-and-launch-rockets-leave-the-earths-atmosphere.jpg?s=612x612&w=0&k=20&c=KjH6bMGbIdeX_wZ5UI9dATzq0UsUxjM90MlJC-XPmnk=" />
    </ul>
  );
};

export default Rockets;
