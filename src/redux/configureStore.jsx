import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './Missions/missionSlice';

export default configureStore({
  reducer: {
    missions: missionsReducers,
  },
});
