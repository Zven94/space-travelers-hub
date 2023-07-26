import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

export const missionsData = createAsyncThunk('missions/missionsData', async () => {
  const response = await axios.get(`${missionUrl}`);
  return response.data;
});

const initialState = {
  missions: [],
  isLoading: false,
  error: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    join: (state, action) => {
      const mission = state.missions.find((mission) => mission.id === action.payload);
      mission.status = true;
    },
    leave: (state, action) => {
      const mission = state.missions.find((mission) => mission.id === action.payload);
      mission.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(missionsData.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload.map((mission) => ({
          name: mission.mission_name,
          id: mission.mission_id,
          description: mission.description,
          status: mission.status,
        })),
      }));
  },
});

export const { join, leave } = missionSlice.actions;
export default missionSlice.reducer;
