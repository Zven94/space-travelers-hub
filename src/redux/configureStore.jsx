import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './Missions/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducers,
    rockets: rocketsReducer,
  },
});
