import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './Missions/missionSlice';
import RocketsComponent from './rockets/RocketsComponent.jsx'

export default configureStore({
  reducer: {
    missions: missionsReducers,
    rockets: rocketsReducer,
  },
});
