import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../features/Mission/mission';

export default configureStore({
  reducer: {
    missions: missionReducer,
  },
});
