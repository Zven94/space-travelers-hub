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
  extraReducers: (builder) => {
    builder
      .addCase(missionsData.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload.map((mission) => ({
          id: mission.missions_id,
          name: mission.mission_name,
          description: mission.description,
          status: false,
        })),
      }));
  },
});

export default missionSlice.reducer;
