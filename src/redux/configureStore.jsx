import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './Missions/missionSlice';
import RocketsComponent from './Rockets/RocketsComponent.jsx'

export default configureStore({
  reducer: {
    missions: missionsReducers,
  },
});
