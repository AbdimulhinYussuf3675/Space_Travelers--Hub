import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from 'features/Rockets/rockets';
import missionReducer from '../features/Mission/mission';

export default configureStore({
  reducer: {
    books: missionReducer,
    rocket: rocketReducer,
  },
});
