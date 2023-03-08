import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from 'features/Rockets/Rockets';
import missionReducer from '../features/Mission/mission';

export default configureStore({
  reducer: {
    missionReducer,
    rocket: rocketReducer,
  },
});
